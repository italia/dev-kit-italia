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

  private _focusableElements: any[] = [];

  private _first: any;

  private _last: any;

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
  ].join(',');

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
    this.updateFocusableElements();
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
    const direct = Array.from(container.querySelectorAll<HTMLElement>(FocusTrapController.FOCUSABLE_SELECTORS));
    candidates.push(...direct);

    // Tutti gli elementi slottati
    const slots = Array.from(container.querySelectorAll('slot'));
    slots.forEach((slot) => {
      slot.assignedElements({ flatten: true }).forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        if (el === trigger) return;
        if (el.matches(FocusTrapController.FOCUSABLE_SELECTORS)) candidates.push(el);
        Array.from(el.querySelectorAll<HTMLElement>(FocusTrapController.FOCUSABLE_SELECTORS)).forEach((nested) =>
          candidates.push(nested),
        );
      });
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

  private _handleTab(event: KeyboardEvent): void {
    // ANTI RACE CONDITION: se l'utente è troppo veloce, forza un ricalcolo immediato
    if (this._focusableElements.length === 0) this.updateFocusableElements();
    if (this._focusableElements.length === 0) return; // Se è ancora vuoto, non bloccare il Tab

    event.preventDefault();

    const activeElement = FocusTrapController.getActiveElement();
    let currentIndex = this._focusableElements.indexOf(activeElement as HTMLElement);

    if (currentIndex === -1 && activeElement) {
      let parent = (activeElement.getRootNode() as ShadowRoot)?.host;
      while (parent && currentIndex === -1) {
        currentIndex = this._focusableElements.indexOf(parent as HTMLElement);
        if (currentIndex === -1) parent = (parent.getRootNode() as ShadowRoot)?.host;
      }
    }

    if (event.shiftKey) {
      if (currentIndex <= 0) this._last?.focus();
      else this._focusableElements[currentIndex - 1]?.focus();
    } else if (currentIndex === -1 || currentIndex >= this._focusableElements.length - 1) this._first?.focus();
    else this._focusableElements[currentIndex + 1]?.focus();
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
