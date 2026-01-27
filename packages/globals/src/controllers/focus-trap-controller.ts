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
 * Controller per gestire il focus trap all'interno di un elemento.
 * Implementa le linee guida WAI-ARIA per i dialog modali.
 *

 * ```
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

  private static readonly FOCUSABLE_SELECTORS = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    '[tabindex]',
    // '[role="dialog"]',
    // Custom elements focusabili
    'it-button:not([disabled])',
  ].join(',');

  /**
   * Verifica se un elemento è effettivamente focusabile e tabbabile.
   * Elementi con tabindex="-1" sono focusabili programmaticamente ma non tabbabili.
   */
  private static isFocusable(el: HTMLElement): boolean {
    if (typeof el.focus !== 'function') return false;

    // Escludi elementi disabilitati
    if (el.hasAttribute('disabled')) return false;

    // Escludi elementi con tabindex negativo (focusabili programmaticamente ma non tabbabili)
    const tabindex = el.getAttribute('tabindex');
    if (tabindex && parseInt(tabindex, 10) < 0) {
      return false;
    }

    // Per custom elements (it-*), controlla anche il loro tabindex
    if (el.tagName.toLowerCase().startsWith('it-')) {
      // Se ha tabindex esplicito negativo, non è tabbabile
      if (tabindex && parseInt(tabindex, 10) < 0) {
        return false;
      }
      return true;
    }

    // Per elementi standard, controlliamo anche visibilità in modo robusto.
    // Alcuni elementi (es. inline anchors, elementi dentro container positionati) possono
    // avere offsetParent === null pur essendo visibili/focusabili. Usiamo quindi getClientRects
    // e computedStyle come controllo più affidabile.
    try {
      // Se non ci sono bounding rects, probabilmente non è visibile
      if (el.getClientRects()?.length === 0) return false;

      const style = window.getComputedStyle(el);
      if (!style) return false;
      if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;

      // Altrimenti consideriamo l'elemento focusabile
      return true;
    } catch (e) {
      return false;
    }
  }

  constructor(host: ReactiveControllerHost & HTMLElement, config: FocusTrapConfig) {
    this.host = host;
    this.config = config;
    this.host.addController(this);
  }

  // eslint-disable-next-line class-methods-use-this
  hostConnected() {
    // Controller ready
    // Set up our MutationObserver
    const observerOptions = {
      childList: true,
      attributes: true,
      subtree: true,
    };
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

  /** Indica se il focus trap è attivo */
  get isActive(): boolean {
    return this._isActive;
  }

  /**
   * Attiva il focus trap.
   * Salva l'elemento attivo corrente e attiva i listener.
   * NOTA: chiamare updateFocusableElements() e focusFirst() separatamente quando necessario.
   */
  activate(): void {
    if (this._isActive) return;

    this._isActive = true;
    this._previousActiveElement = FocusTrapController.getActiveElement();

    this.host.addEventListener('keydown', this._handleKeyDown);
    this.updateFocusableElements();
    if (typeof this.focusInitial === 'function') this.focusInitial();
    else this.focusFirst();
  }

  /**
   * Disattiva il focus trap.
   * Ripristina il focus all'elemento precedentemente attivo.
   */
  deactivate(): void {
    if (!this._isActive) return;

    this._isActive = false;
    this.host.removeEventListener('keydown', this._handleKeyDown);
    this._restoreFocus();
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

    // Tutti gli elementi focusable direttamente nel container
    const direct = Array.from(container.querySelectorAll<HTMLElement>(FocusTrapController.FOCUSABLE_SELECTORS));
    candidates.push(...direct);

    // Tutti gli elementi slottati
    const slots = Array.from(container.querySelectorAll('slot'));
    slots.forEach((slot) => {
      slot.assignedElements({ flatten: true }).forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        if (el === trigger) {
          return;
        }
        // focusable diretto
        if (el.matches(FocusTrapController.FOCUSABLE_SELECTORS)) {
          candidates.push(el);
        }

        // nested focusable dentro l'elemento assegnato
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
    if (this._first) {
      this._first.focus();
    }
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

  /**
   * Metti a fuoco l'elemento iniziale specificato nella config, se presente.
   * Se non è fornito, fallback sul primo elemento tabbabile.
   */
  focusInitial(): void {
    if (this.config.initialFocus) {
      const el = this.config.initialFocus();
      if (el && typeof el.focus === 'function') {
        el.focus();
        return;
      }
    }

    this.focusFirst();
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
    if (this._focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    // SEMPRE previeni il default - gestiamo noi la navigazione
    event.preventDefault();

    const firstElement = this._first;
    const lastElement = this._last;
    const activeElement = FocusTrapController.getActiveElement();

    // Trova l'indice dell'elemento attivo
    // Se activeElement è dentro uno shadow DOM di un custom element,
    // cerca il custom element host nella lista
    let currentIndex = this._focusableElements.indexOf(activeElement as HTMLElement);

    // Se non trovato, potrebbe essere un elemento interno ad un custom element
    if (currentIndex === -1 && activeElement) {
      // Risali attraverso gli shadow host
      let parent = (activeElement.getRootNode() as ShadowRoot)?.host;
      while (parent && currentIndex === -1) {
        currentIndex = this._focusableElements.indexOf(parent as HTMLElement);
        if (currentIndex === -1) {
          parent = (parent.getRootNode() as ShadowRoot)?.host;
        }
      }
    }

    if (event.shiftKey) {
      // Shift + Tab: vai al precedente
      if (currentIndex <= 0) {
        // Se sei sul primo o non sei nella lista, vai all'ultimo
        lastElement?.focus();
      } else {
        // Vai al precedente
        this._focusableElements[currentIndex - 1]?.focus();
      }
    } else if (currentIndex === -1 || currentIndex >= this._focusableElements.length - 1) {
      // Tab: se non sei nella lista o sei sull'ultimo, vai al primo
      firstElement?.focus();
    } else {
      // Vai al successivo
      this._focusableElements[currentIndex + 1]?.focus();
    }
  }

  private _restoreFocus(): void {
    if (this._previousActiveElement && typeof this._previousActiveElement.focus === 'function') {
      this._previousActiveElement.focus();
    }
    this._previousActiveElement = null;
  }
}
