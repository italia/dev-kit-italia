import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './thumbnav-item.scss';

/**
 * Singolo elemento della Thumbnav.
 * Inserisce il contenuto (tipicamente un anchor con immagine) in un elemento `<li>`.
 * Lo stato attivo si gestisce aggiungendo la classe `active` all'anchor nello slot:
 * `<a href="#" class="ratio ratio-3x2 active"><img …></a>`
 */
@customElement('it-thumbnav-item')
export class ItThumbnavItem extends BaseComponent {
  static styles = styles;

  override render() {
    return html`<li><slot></slot></li>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-thumbnav-item': ItThumbnavItem;
  }
}
