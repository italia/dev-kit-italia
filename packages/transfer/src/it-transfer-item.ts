import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A single transferable item. Place as a direct child of `<it-transfer>`.
 * The element's text content is used as the item label.
 *
 * @slot - The label text for this item.
 */
@customElement('it-transfer-item')
export class ItTransferItem extends LitElement {
  /** The value submitted as part of the transfer's form value when in the target list. */
  @property({ type: String, reflect: true })
  value = '';

  /** If set, the item cannot be transferred. */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** If set, the item starts in the target (right) list on initialisation. */
  @property({ type: Boolean, reflect: true })
  target = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'it-transfer-item': ItTransferItem;
  }
}
