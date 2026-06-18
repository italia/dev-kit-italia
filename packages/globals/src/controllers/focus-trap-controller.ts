/* eslint-disable no-continue */
import { ReactiveController, ReactiveControllerHost } from 'lit';

export interface FocusTrapConfig {
  /** Funzione che ritorna l'elemento contenitore del trap */
  getContainer: () => HTMLElement | ShadowRoot | null;
  /** Funzione che ritorna l'elemento trigger che ha attivato il focus trap */
  getTrigger: () => HTMLElement | ShadowRoot | null;
  /** Opzionale: funzione che ritorna l'elemento da mettere a fuoco all'apertura (può essere tabindex -1) */
  initialFocus?: () => HTMLElement | null;
  /** Callback quando viene premuto Escape */
  onEscape?: () => void;
  /** Se true, non chiude con Escape */
  disableEscape?: boolean;
}

/**
 * Safari/VoiceOver iOS workarounds catalogue — why timers exist here:
 *
 * 1. `activate()` rAF + setTimeout(50): Safari does not reliably update the VoiceOver
 *    accessibility tree synchronously. rAF ensures the element is painted before we
 *    attempt to focus it. setTimeout(50) yields 50ms so VoiceOver can settle its
 *    accessibility tree before announcing the newly focused element.
 *    Empirically, VoiceOver iOS needs 100–300ms; the animated path in it-modal already
 *    provides ~316ms naturally via animation.finished, so the 50ms here only truly
 *    matters for the no-animation / prefers-reduced-motion path.
 *
 * 2. `_restoreFocus()` setTimeout(0): Same settle reason on close. The caller
 *    (it-modal finishHide) adds a belt-and-suspenders 20ms setTimeout; _restoreFocus
 *    is skipped via { skipFocusRestore: true } in that case to avoid double-focus.
 *
 * 3. `activate()` iOS body-focus fallback: On iOS Safari, tapping a button does not
 *    reliably move document.activeElement away from body. We fall back to getTrigger()
 *    so _previousActiveElement is always a real DOM element to restore focus to on close.
 *
 * There is no WebKit/Safari API to detect when VoiceOver has settled its accessibility
 * tree. setTimeout-based workarounds are the same pattern used by Bootstrap 5, the
 * focus-trap npm package, and a11y-dialog.
 */
export class FocusTrapController implements ReactiveController {
  private host: ReactiveControllerHost & HTMLElement;

  private config: FocusTrapConfig;

  private observer: MutationObserver | null = null;

  private _isActive = false;

  private _previousActiveElement: HTMLElement | null = null;

  private _focusableElements: HTMLElement[] = [];

  private _first?: HTMLElement;

  private _last?: HTMLElement;

  /** Last known index resolved from real focusin events inside the trap.
   *  Used as a fallback when assistive tech retargeting makes activeElement
   *  temporarily unmappable during Tab navigation. */
  private _lastKnownFocusIndex = -1;

  /** Timer ID for the focus call scheduled inside activate(). Cancelled by deactivate()
   *  to prevent focus firing after the trap has been torn down (fast open/close, unmount). */
  private _pendingFocusTimer: ReturnType<typeof setTimeout> | null = null;

  private static readonly FOCUSABLE_SELECTORS = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    '[tabindex]',
    'it-button:not([disabled])',
    'it-dropdown:not([disabled])',
    'it-megamenu:not([disabled])',
  ].join(',');

  private static readonly NATIVE_FOCUSABLE_SELECTORS = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',');

  private static readonly MANAGED_HOST_SELECTORS = [
    'it-button:not([disabled])',
    'it-dropdown:not([disabled])',
    'it-megamenu:not([disabled])',
  ].join(',');

  private static readonly MANAGED_MENU_HOST_SELECTORS = [
    'it-dropdown:not([disabled])',
    'it-megamenu:not([disabled])',
  ].join(',');

  private static getManagedHostAncestor(element: HTMLElement): HTMLElement | null {
    let current: Node | null = element;

    while (current) {
      const parentEl: HTMLElement | null = current instanceof HTMLElement ? current.parentElement : null;
      if (parentEl && parentEl.matches(FocusTrapController.MANAGED_HOST_SELECTORS)) return parentEl;

      if (parentEl) {
        current = parentEl;
        continue;
      }

      const rootNode: Node = current.getRootNode();
      if (rootNode instanceof ShadowRoot) {
        const hostElement: Element = rootNode.host;
        if (hostElement instanceof HTMLElement) {
          if (hostElement.matches(FocusTrapController.MANAGED_HOST_SELECTORS)) return hostElement;
          current = hostElement;
          continue;
        }
      }

      break;
    }

    return null;
  }

  private static isInsideManagedHost(element: HTMLElement): boolean {
    return FocusTrapController.getManagedHostAncestor(element) !== null;
  }

  private static getManagedMenuHostAncestor(element: HTMLElement): HTMLElement | null {
    let current: Node | null = element;

    while (current) {
      const parentEl: HTMLElement | null = current instanceof HTMLElement ? current.parentElement : null;
      if (parentEl && parentEl.matches(FocusTrapController.MANAGED_MENU_HOST_SELECTORS)) return parentEl;

      if (parentEl) {
        current = parentEl;
        continue;
      }

      const rootNode: Node = current.getRootNode();
      if (rootNode instanceof ShadowRoot) {
        const hostElement: Element = rootNode.host;
        if (hostElement instanceof HTMLElement) {
          if (hostElement.matches(FocusTrapController.MANAGED_MENU_HOST_SELECTORS)) return hostElement;
          current = hostElement;
          continue;
        }
      }

      break;
    }

    return null;
  }

  private static collectFocusableCandidates(
    root: ParentNode,
    candidates: HTMLElement[],
    trigger: HTMLElement | ShadowRoot | null,
    visited: Set<Node>,
  ): void {
    const rootAsNode = root as Node;
    if (visited.has(rootAsNode)) return;
    visited.add(rootAsNode);

    const elements = Array.from(root.querySelectorAll<HTMLElement>('*'));
    elements.forEach((el) => {
      if (el === trigger) return;

      // Keep custom host components as single tab stops: their internal light/shadow
      // descendants must not appear as separate trap candidates.
      if (FocusTrapController.isInsideManagedHost(el)) return;

      if (el.matches(FocusTrapController.FOCUSABLE_SELECTORS)) {
        candidates.push(el);
        // Stop here: focusCandidate() handles delegation to the inner focusable.
        // Prevent recursion into this element's shadow DOM so inner buttons/triggers
        // are not added as separate tab stops.
        if (el.shadowRoot) visited.add(el.shadowRoot);
        return;
      }

      if (el instanceof HTMLSlotElement) {
        el.assignedElements({ flatten: true }).forEach((assigned) => {
          if (!(assigned instanceof HTMLElement) || assigned === trigger) return;

          if (assigned.matches(FocusTrapController.FOCUSABLE_SELECTORS)) {
            candidates.push(assigned);
            // Same rule: don't recurse into a focusable element.
            if (assigned.shadowRoot) visited.add(assigned.shadowRoot);
            return;
          }

          FocusTrapController.collectFocusableCandidates(assigned, candidates, trigger, visited);

          if (assigned.shadowRoot) {
            FocusTrapController.collectFocusableCandidates(assigned.shadowRoot, candidates, trigger, visited);
          }
        });
        return;
      }

      if (el.shadowRoot) {
        FocusTrapController.collectFocusableCandidates(el.shadowRoot, candidates, trigger, visited);
      }
    });
  }

  private static getFirstFocusableInShadow(host: HTMLElement): HTMLElement | null {
    const visited = new Set<Node>();

    const walk = (root: ParentNode): HTMLElement | null => {
      const rootAsNode = root as Node;
      if (visited.has(rootAsNode)) return null;
      visited.add(rootAsNode);

      const direct = Array.from(root.querySelectorAll<HTMLElement>(FocusTrapController.NATIVE_FOCUSABLE_SELECTORS));
      const firstDirect = direct.find((el) => FocusTrapController.isFocusable(el));
      if (firstDirect) return firstDirect;

      const all = Array.from(root.querySelectorAll<HTMLElement>('*'));
      for (const el of all) {
        if (el instanceof HTMLSlotElement) {
          const assigned = el.assignedElements({ flatten: true });
          for (const assignedEl of assigned) {
            if (!(assignedEl instanceof HTMLElement)) continue;
            if (assignedEl.matches(FocusTrapController.NATIVE_FOCUSABLE_SELECTORS)) {
              if (FocusTrapController.isFocusable(assignedEl)) return assignedEl;
            }
            const nestedAssigned = walk(assignedEl);
            if (nestedAssigned) return nestedAssigned;
            if (assignedEl.shadowRoot) {
              const nestedAssignedShadow = walk(assignedEl.shadowRoot);
              if (nestedAssignedShadow) return nestedAssignedShadow;
            }
          }
        }

        if (el.shadowRoot) {
          const nested = walk(el.shadowRoot);
          if (nested) return nested;
        }
      }

      return null;
    };

    if (!host.shadowRoot) return null;
    return walk(host.shadowRoot);
  }

  private static focusCandidate(target: HTMLElement | undefined): void {
    if (!target) return;

    if (target.tagName.toLowerCase().startsWith('it-')) {
      const innerFocusable = FocusTrapController.getFirstFocusableInShadow(target);
      if (innerFocusable) {
        innerFocusable.focus({ preventScroll: true });
        return;
      }
    }

    target.focus({ preventScroll: true });
  }

  /**
   * Verifica se un elemento è effettivamente focusabile e tabbabile.
   * Elementi con tabindex="-1" sono focusabili programmaticamente ma non tabbabili.
   */
  private static isFocusable(el: HTMLElement): boolean {
    if (typeof el.focus !== 'function') return false;
    if (el.hasAttribute('disabled') || el.hasAttribute('inert') || el.hasAttribute('it-inert')) return false;
    const tabindex = el.getAttribute('tabindex');
    if (tabindex && parseInt(tabindex, 10) < 0) return false;

    if (el.tagName.toLowerCase().startsWith('it-')) {
      if (tabindex && parseInt(tabindex, 10) < 0) return false;
      return true;
    }

    // Fix Race Condition Safari: durante l'apertura non fidarti di getClientRects o opacità
    try {
      const style = window.getComputedStyle(el);
      return style && style.display !== 'none' && style.visibility !== 'hidden';
    } catch {
      return false;
    }
  }

  constructor(host: ReactiveControllerHost & HTMLElement, config: FocusTrapConfig) {
    this.host = host;
    this.config = config;
    this.host.addController(this);
  }

  hostConnected() {
    const observerOptions = { childList: true, attributes: true, subtree: true };
    this.observer = new MutationObserver(this.updateFocusableElements.bind(this));
    this.observer.observe(this.host, observerOptions);
  }

  hostDisconnected() {
    this.deactivate();
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  get isActive(): boolean {
    return this._isActive;
  }

  activate(): void {
    if (this._isActive) return;
    this._isActive = true;

    // FIX iOS: Safari non dà focus al tap. Se activeElement è body, salviamo il trigger della config.
    const currentActive = FocusTrapController.getActiveElement();
    this._previousActiveElement =
      !currentActive || currentActive === document.body ? (this.config.getTrigger() as HTMLElement) : currentActive;

    // Usa document capture: cattura Tab/Escape prima di qualsiasi handler,
    // indipendentemente da shadow DOM, delegatesFocus e slot retargeting.
    document.addEventListener('keydown', this._handleKeyDown, true);
    document.addEventListener('focusin', this._handleFocusIn, true);
    this.updateFocusableElements();
    this._lastKnownFocusIndex = -1;
    // FIX Safari: trick engine
    // Diamo al browser un istante per processare il ricalcolo del layout
    requestAnimationFrame(() => {
      if (this.config.initialFocus) {
        const el = this.config.initialFocus();
        if (el) {
          // 50ms gives VoiceOver iOS time to settle its accessibility tree before
          // announcing the focused element. See class-level comment for details.
          this._pendingFocusTimer = setTimeout(() => {
            this._pendingFocusTimer = null;
            el.focus({ preventScroll: true });
          }, 50);
        }
      } else {
        // eslint-disable-next-line no-console
        console.warn("FocusTrap: missing 'initialFocus' callback, provide one");
      }
    });
  }

  deactivate(options?: { skipFocusRestore?: boolean }): void {
    if (!this._isActive) return;
    // Cancel any in-flight focus timer so it cannot fire after the trap is torn down
    // (e.g. fast open/close cycle, component unmounted while opening).
    if (this._pendingFocusTimer !== null) {
      clearTimeout(this._pendingFocusTimer);
      this._pendingFocusTimer = null;
    }
    this._isActive = false;
    document.removeEventListener('keydown', this._handleKeyDown, true);
    document.removeEventListener('focusin', this._handleFocusIn, true);
    this._lastKnownFocusIndex = -1;
    if (!options?.skipFocusRestore) {
      this._restoreFocus();
    } else {
      this._previousActiveElement = null;
    }
  }

  /**
   * Aggiorna la lista degli elementi focusabili.
   * Chiamare dopo modifiche al DOM.
   */
  updateFocusableElements(): void {
    const container = this.config.getContainer();
    const trigger = this.config.getTrigger();
    if (!container) {
      this._focusableElements = [];
      this._first = undefined;
      this._last = undefined;
      return;
    }

    const candidates: HTMLElement[] = [];
    FocusTrapController.collectFocusableCandidates(container, candidates, trigger, new Set<Node>());

    // Include anche i figli light DOM dell'host (es. contenuti slottati della modale)
    Array.from(this.host.children).forEach((child) => {
      if (!(child instanceof HTMLElement) || child === trigger) return;

      if (child.matches(FocusTrapController.FOCUSABLE_SELECTORS)) {
        candidates.push(child);
        // Don't recurse: same stop-on-focusable rule.
        return;
      }

      const childVisited = new Set<Node>();
      FocusTrapController.collectFocusableCandidates(child, candidates, trigger, childVisited);

      if (child.shadowRoot) {
        FocusTrapController.collectFocusableCandidates(child.shadowRoot, candidates, trigger, childVisited);
      }
    });

    // Filtra solo elementi veramente focusabili e rimuovi duplicati
    this._focusableElements = Array.from(new Set(candidates)).filter((el) => {
      // Escludi esplicitamente il container/dialog stesso
      if (el === this.config.getContainer()) return false;
      return FocusTrapController.isFocusable(el);
    });

    // Aggiorna primo/ultimo
    this._first = this._focusableElements?.[0];
    this._last = this._focusableElements[this._focusableElements.length - 1];
  }

  /** Sposta il focus sul primo elemento focusabile */
  focusFirst(): void {
    if (this._first) this._first.focus();
  }

  /** Sposta il focus sull'ultimo elemento focusabile */
  focusLast(): void {
    if (this._last) {
      this._last.focus();
    }
  }

  /** Ritorna l'elemento attivo corrente, attraversando shadow DOM e slot */
  static getActiveElement(): HTMLElement | null {
    let active = document.activeElement;
    while (active && active.shadowRoot && active.shadowRoot.activeElement) {
      active = active.shadowRoot.activeElement;
    }
    return active as HTMLElement | null;
  }

  private _handleKeyDown = (event: KeyboardEvent): void => {
    if (!this._isActive) return;
    switch (event.key) {
      case 'Escape':
        if (!this.config.disableEscape && this.config.onEscape) {
          event.preventDefault();
          this.config.onEscape();
        }
        break;
      case 'Tab':
        this._handleTab(event);
        break;
      default:
        break;
    }
  };

  private _handleFocusIn = (event: FocusEvent): void => {
    if (!this._isActive) return;

    if (this._focusableElements.length === 0) {
      this.updateFocusableElements();
      if (this._focusableElements.length === 0) return;
    }

    const path = event.composedPath();
    let index = this._focusableElements.findIndex((candidate) => path.includes(candidate));

    if (index === -1) {
      const target = path[0];
      if (target instanceof HTMLElement) {
        index = this._focusableElements.indexOf(target);
      }
    }

    if (index === -1) {
      const active = FocusTrapController.getActiveElement();
      if (active) {
        index = this._focusableElements.findIndex((candidate) => candidate.contains(active));
      }
    }

    if (index !== -1) {
      this._lastKnownFocusIndex = index;
    }
  };

  private _handleTab(event: KeyboardEvent): void {
    const activeElement = FocusTrapController.getActiveElement();

    // Let native Tab behavior handle navigation inside open dropdown/megamenu.
    // This allows entering and traversing internal menu items correctly.
    if (activeElement) {
      const managedHost = FocusTrapController.getManagedMenuHostAncestor(activeElement);
      if (managedHost && managedHost.getAttribute('data-it-aria-expanded') === 'true') {
        return;
      }
    }

    // Ricalcola sempre al Tab: gli elementi slottati possono completare il render
    // del proprio shadow DOM dopo l'attivazione iniziale del trap.
    this.updateFocusableElements();
    if (this._focusableElements.length === 0) return; // Se è ancora vuoto, non bloccare il Tab

    event.preventDefault();
    let currentIndex = this._focusableElements.indexOf(activeElement as HTMLElement);

    if (currentIndex === -1 && activeElement) {
      // 1. Walk shadow host chain (covers delegatesFocus custom elements)
      let parent = (activeElement.getRootNode() as ShadowRoot)?.host;
      while (parent && currentIndex === -1) {
        currentIndex = this._focusableElements.indexOf(parent as HTMLElement);
        if (currentIndex === -1) parent = (parent.getRootNode() as ShadowRoot)?.host;
      }
    }

    if (currentIndex === -1) {
      // 2. Composed path fallback: handles focus inside nested shadow/slotted
      //    content (e.g. anchors inside it-dropdown-item) by mapping the active
      //    target to the first focusable host found in the event path.
      const composedPath = event.composedPath();
      currentIndex = this._focusableElements.findIndex((candidate) => composedPath.includes(candidate));
    }

    if (currentIndex === -1 && activeElement) {
      // 3. contains() fallback: handles focus inside an open dropdown/megamenu whose
      //    items live in light DOM (not shadow DOM), so the parent-walk above doesn't
      //    reach the host.  Map to the host's index so Tab/Shift+Tab move to the
      //    correct adjacent element.
      currentIndex = this._focusableElements.findIndex((candidate) => candidate.contains(activeElement));
    }

    if (currentIndex === -1) {
      // 4. AT fallback: with some screen readers, document.activeElement and/or
      //    event target can be unreliable while navigating inside composite widgets.
      //    If a dropdown/megamenu is currently open, use its host index as anchor
      //    so forward/backward Tab continue from that position instead of wrapping.
      currentIndex = this._focusableElements.findIndex(
        (candidate) =>
          candidate.matches('it-dropdown, it-megamenu') && candidate.getAttribute('data-it-aria-expanded') === 'true',
      );
    }

    if (currentIndex === -1 && this._lastKnownFocusIndex >= 0) {
      // 5. Last-known fallback: if assistive tech retargeting hides the active
      //    element for this key event, continue from the most recent resolved
      //    focus index captured via focusin.
      currentIndex = Math.min(this._lastKnownFocusIndex, this._focusableElements.length - 1);
    }

    if (event.shiftKey) {
      if (currentIndex <= 0) FocusTrapController.focusCandidate(this._last);
      else FocusTrapController.focusCandidate(this._focusableElements[currentIndex - 1]);
    } else if (currentIndex === -1 || currentIndex >= this._focusableElements.length - 1)
      FocusTrapController.focusCandidate(this._first);
    else FocusTrapController.focusCandidate(this._focusableElements[currentIndex + 1]);
  }

  private _restoreFocus(): void {
    const target = this._previousActiveElement;
    this._previousActiveElement = null;
    if (target && typeof target.focus === 'function' && document.contains(target)) {
      // FIX Safari: blur the current element first so VoiceOver doesn't stay on the
      // modal element while the accessibility tree processes the focus change.
      FocusTrapController.getActiveElement()?.blur();
      // FIX Safari/VoiceOver iOS: defer to the next macrotask so the accessibility
      // tree has time to process the DOM mutation before announcing the restored element.
      setTimeout(() => {
        target.focus({ preventScroll: true });
      }, 0);
    }
  }
}
