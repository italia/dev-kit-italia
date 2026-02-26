import { ReactiveController, ReactiveControllerHost } from 'lit';

export interface FocusTrapConfig {
  getContainer: () => HTMLElement | ShadowRoot | null;
  getTrigger: () => HTMLElement | ShadowRoot | null;
  initialFocus?: () => HTMLElement | null;
  onEscape?: () => void;
  disableEscape?: boolean;
}

export class FocusTrapController implements ReactiveController {
  private host: ReactiveControllerHost & HTMLElement;

  private config: FocusTrapConfig;

  private observer: MutationObserver | null = null;

  private _isActive = false;

  private _previousActiveElement: HTMLElement | null = null;

  private _focusableElements: any[] = [];

  private _first: any;

  private _last: any;

  private static readonly FOCUSABLE_SELECTORS = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    '[tabindex]',
    'it-button:not([disabled])',
  ].join(',');

  private static isFocusable(el: HTMLElement): boolean {
    if (typeof el.focus !== 'function') return false;
    if (el.hasAttribute('disabled') || el.hasAttribute('inert')) return false;
    const tabindex = el.getAttribute('tabindex');
    if (tabindex && parseInt(tabindex, 10) < 0) return false;

    if (el.tagName.toLowerCase().startsWith('it-')) {
      if (tabindex && parseInt(tabindex, 10) < 0) return false;
      return true;
    }

    // try {
    //   if (el.getClientRects()?.length === 0) return false;
    //   const style = window.getComputedStyle(el);
    //   if (!style) return false;
    //   if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
    //   return true;
    // } catch (e) {
    //   return false;
    // }
    // Fix Race Condition: durante l'apertura non fidarti di getClientRects o opacità
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
    console.log('FocusTrap: attivazione richiesta');
    if (this._isActive) return;
    this._isActive = true;
    console.log('FocusTrap: attivo, calcolo elementi focusabili');
    // FIX iOS: Safari non dà focus al tap. Se activeElement è body, salviamo il trigger della config.
    const currentActive = FocusTrapController.getActiveElement();
    this._previousActiveElement =
      !currentActive || currentActive === document.body ? (this.config.getTrigger() as HTMLElement) : currentActive;

    // Usa document capture: cattura Tab/Escape prima di qualsiasi handler,
    // indipendentemente da shadow DOM, delegatesFocus e slot retargeting.
    document.addEventListener('keydown', this._handleKeyDown, true);
    this.updateFocusableElements();
    // FIX Safari: micro-delay per l'apertura
    // setTimeout(() => {
    // Diamo al browser un istante per processare il ricalcolo del layout
    requestAnimationFrame(() => {
      console.log('FocusTrap: attivo, focus su', this._first);
      if (this.config.initialFocus) {
        const el = this.config.initialFocus();
        if (el) {
          el.focus();
        }
      } else this.focusFirst();
    });
  }

  deactivate(options?: { skipFocusRestore?: boolean }): void {
    if (!this._isActive) return;
    this._isActive = false;
    document.removeEventListener('keydown', this._handleKeyDown, true);
    if (!options?.skipFocusRestore) {
      this._restoreFocus();
    } else {
      this._previousActiveElement = null;
    }
  }

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

    this._focusableElements = Array.from(new Set(candidates)).filter((el) => {
      if (el === this.config.getContainer()) return false;
      return FocusTrapController.isFocusable(el);
    });

    this._first = this._focusableElements?.[0];
    this._last = this._focusableElements[this._focusableElements.length - 1];
  }

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
    if (this._focusableElements.length === 0) return;

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
    if (this._previousActiveElement && typeof this._previousActiveElement.focus === 'function') {
      // FIX Safari: micro-delay per il restore
      const el = this._previousActiveElement;
      setTimeout(() => el.focus(), 10);
    }
    this._previousActiveElement = null;
  }
}
