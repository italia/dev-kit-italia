import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './thumbnav-item.scss';

/**
 * Singolo elemento della Thumbnav.
 * Inserisce il contenuto (tipicamente un anchor con immagine) in un elemento `<li>`.
 * Usa l'attributo `active` per indicare l'elemento corrente:
 * `<it-thumbnav-item active><a href="#" class="ratio ratio-3x2"><img …></a></it-thumbnav-item>`
 */
@customElement('it-thumbnav-item')
export class ItThumbnavItem extends BaseComponent {
  static styles = styles;

  /** Indica l'elemento attivo/corrente nella navigazione. */
  @property({ type: Boolean, reflect: true })
  active = false;

  override render() {
    return html`<li role="presentation"><slot></slot></li>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-thumbnav-item': ItThumbnavItem;
  }
}
