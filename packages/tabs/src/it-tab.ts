import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';

import styles from './it-tab.scss';

/**
 * `it-tab` rappresenta il singolo tab (trigger) all'interno di un componente `it-tabs`.
 *
 * L'host stesso è l'elemento interattivo: porta `role="tab"`, `tabIndex` e tutti
 * gli attributi ARIA direttamente nel light DOM. Lo shadow DOM contiene solo
 * `<slot>` per il contenuto — nessun elemento interattivo annidato (no nested-interactive).
 *
 * @slot - Etichetta del tab: testo, icona o icona+testo
 *
 * @fires it-tab-select - Emesso al click (non disabilitato). `detail.panel` contiene
 *   il nome del pannello associato.
 */
@customElement('it-tab')
export class ItTab extends BaseComponent {
  static styles = styles;

  /**
   * Nome del pannello `it-tab-panel` associato.
   * Deve corrispondere all'attributo `name` dell'`it-tab-panel` collegato.
   */
  @property({ type: String, reflect: true })
  panel = '';

  /** Se `true`, il tab è disabilitato e non interagibile. */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Stato attivo. Gestito dall'`it-tabs` padre.
   * Quando `true` il tab è selezionato e `tabIndex` dell'host è `0`.
   */
  @property({ type: Boolean, reflect: true })
  active = false;

  /**
   * In variante card: impostato automaticamente dall'`it-tabs` padre quando `cards` è attivo.
   * Porta gli stili card direttamente su :host([cards]) in it-tab.scss.
   */
  @property({ type: Boolean, reflect: true })
  cards = false;

  /**
   * Mostra il pulsante × per chiudere il tab.
   * Impostato automaticamente dall'`it-tabs` padre (da `dismissible` sul container);
   * non richiede manipolazione del light DOM (il bottone vive nello shadow DOM di `it-tab`).
   * Al click emette `it-tab-close-request` (bubbles + composed) verso `it-tabs`.
   */
  @property({ type: Boolean, reflect: true })
  dismissible = false;

  /**
   * Restituisce l'`id` dell'host, usato dall'`it-tabs` padre per
   * impostare `aria-labelledby` sul pannello associato (tutto in light DOM,
   * nessun cross-shadow ARIA necessario).
   */
  get tabId(): string {
    return this.id || this._id || '';
  }

  /** Porta il focus sull'host. Chiamato dal `RovingTabindexController`. */
  focusTab(): void {
    this.focus();
  }

  override connectedCallback(): void {
    super.connectedCallback?.();

    if (!this.hasAttribute('role')) this.setAttribute('role', 'tab');
    if (!this.id) this.id = this._id ?? '';
    this.setAttribute('aria-selected', String(this.active));
    this.setAttribute('aria-disabled', String(this.disabled));
    this.setAttribute('aria-controls', this.panel);
    // L'host è l'elemento interattivo: porta lui il tabindex del roving pattern.
    this.tabIndex = this.active ? 0 : -1;
    this.addEventListener('click', this._handleClick);
    this.addEventListener('keydown', this._handleKeydown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback?.();
    this.removeEventListener('click', this._handleClick);
    this.removeEventListener('keydown', this._handleKeydown);
  }

  override updated(changed: Map<string | number | symbol, unknown>): void {
    super.updated?.(changed);
    if (changed.has('active')) {
      this.setAttribute('aria-selected', String(this.active));
      this.tabIndex = this.active ? 0 : -1;
    }
    if (changed.has('disabled')) this.setAttribute('aria-disabled', String(this.disabled));
    if (changed.has('panel')) this.setAttribute('aria-controls', this.panel);
  }

  private _handleClick = (): void => {
    if (this.disabled) return;
    this.dispatchEvent(
      new CustomEvent('it-tab-select', {
        bubbles: true,
        composed: true,
        detail: { panel: this.panel },
      }),
    );
  };

  private _handleKeydown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._handleClick();
    }
  };

  private _handleCloseClick = (e: Event): void => {
    e.stopPropagation(); // non triggerare selezione del tab
    this.dispatchEvent(
      new CustomEvent('it-tab-close-request', {
        bubbles: true,
        composed: true,
        detail: { panel: this.panel, type: e.type },
      }),
    );
  };

  render() {
    return html`
      <slot></slot>
      ${this.dismissible
        ? html`<span class="it-tab-close" aria-hidden="true" @click=${this._handleCloseClick}>
            <it-icon name="it-close"></it-icon>
          </span>`
        : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-tab': ItTab;
  }
}
