import { customElement, property } from 'lit/decorators.js';
import { BaseComponent, dispatchCancelable } from '@italia/globals';
import { ALERT_VARIANTS, type AlertVariant, type AlertCloseEventDetail } from './types.js';

/** Durata (ms) dell'animazione di dissolvenza `.fade` di Bootstrap Italia. */
const FADE_DURATION = 150;

/**
 * Componente Alert.
 *
 * Web component _light DOM_ (senza shadow DOM) che avvolge il markup HTML
 * dell'alert di Bootstrap Italia e ne implementa il comportamento di chiusura
 * di default, mantenendo intatti markup, classi e stili esistenti.
 *
 * Si occupa inoltre di due automatismi che prima richiedevano markup manuale:
 * - imposta `role="alert"` sull'elemento `.alert` interno;
 * - se valorizzato l'attributo `variant`, applica la classe `.alert-{variant}` corretta.
 *
 * @element it-alert
 *
 * @attr {string} variant - Colore dell'alert (`primary`, `secondary`, `success`, `warning`, `danger`)
 *
 * @fires it-alert-close - Al click sul pulsante di chiusura (cancelable: `preventDefault()` impedisce la rimozione)
 */
@customElement('it-alert')
export class ItAlert extends BaseComponent {
  /** Colore dell'alert: applica automaticamente la classe `.alert-{variant}` all'elemento interno. */
  @property({ type: String, reflect: true }) variant?: AlertVariant;

  private _closeTimer: number | null = null;

  // Light DOM: l'alert usa le classi CSS globali di Bootstrap Italia e non deve
  // essere isolato in uno shadow root. Non si sovrascrive `render()` così il
  // markup figlio (l'alert) viene preservato (LitElement ritorna `noChange`).
  createRenderRoot() {
    return this;
  }

  override connectedCallback(): void {
    super.connectedCallback?.();
    this.addEventListener('click', this._onClick);
  }

  override disconnectedCallback(): void {
    this.removeEventListener('click', this._onClick);
    if (this._closeTimer !== null) {
      clearTimeout(this._closeTimer);
      this._closeTimer = null;
    }
    super.disconnectedCallback?.();
  }

  override updated(): void {
    this._applyMarkup();
  }

  /**
   * Applica gli automatismi sul markup interno: `role="alert"` (sempre) e la classe
   * `.alert-{variant}` quando l'attributo `variant` è valorizzato. Mantiene intatte
   * le altre classi e non sovrascrive un eventuale colore già presente se `variant`
   * non è specificato.
   */
  private _applyMarkup(): void {
    const alert = this._alert;
    if (!alert) return;

    if (!alert.hasAttribute('role')) {
      alert.setAttribute('role', 'alert');
    }

    if (this.variant) {
      ALERT_VARIANTS.forEach((v) => alert.classList.toggle(`alert-${v}`, v === this.variant));
    }
  }

  private get _alert(): HTMLElement | null {
    return this.querySelector<HTMLElement>('.alert');
  }

  private get _closeButton(): HTMLElement | null {
    return this.querySelector<HTMLElement>('.btn-close, [data-bs-dismiss="alert"]');
  }

  private _onClick = (event: MouseEvent): void => {
    const button = this._closeButton;
    if (!button) return;
    // Il click sul pulsante di chiusura (it-button o button) risale fino all'host
    // tramite il light DOM: `composedPath` include il pulsante stesso.
    if (event.composedPath().includes(button)) {
      this._requestClose();
    }
  };

  private _requestClose(): void {
    dispatchCancelable<AlertCloseEventDetail>(this, 'it-alert-close', { alert: this }, () => this.close());
  }

  /**
   * Chiude l'alert applicando l'animazione di dissolvenza e rimuovendolo dal DOM.
   * Se presente, sposta il focus sul pulsante di chiusura di un alert adiacente.
   */
  public close(): void {
    const alert = this._alert;
    const adjacent = this._adjacentAlert();

    if (!alert) {
      this.remove();
      if (adjacent) ItAlert._focusCloseButton(adjacent);
      return;
    }

    alert.classList.remove('show');
    const duration = this.prefersReducedMotion ? 0 : FADE_DURATION;
    this._closeTimer = window.setTimeout(() => {
      this._closeTimer = null;
      this.remove();
      if (adjacent) ItAlert._focusCloseButton(adjacent);
    }, duration);
  }

  private _adjacentAlert(): ItAlert | null {
    const isAlert = (el: Element | null): el is ItAlert => !!el && el.tagName.toLowerCase() === 'it-alert';
    let el = this.nextElementSibling;
    while (el && !isAlert(el)) el = el.nextElementSibling;
    if (isAlert(el)) return el;
    el = this.previousElementSibling;
    while (el && !isAlert(el)) el = el.previousElementSibling;
    return isAlert(el) ? el : null;
  }

  private static _focusCloseButton(alert: ItAlert): void {
    alert._closeButton?.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-alert': ItAlert;
  }
}
