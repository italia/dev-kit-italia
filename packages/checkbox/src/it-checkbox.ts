import { ItCheckboxBase } from './it-checkbox-base.js';

/**
 * @element it-checkbox
 */
export class ItCheckbox extends ItCheckboxBase {
  // All functionality is inherited from ItCheckboxBase
}

if (!customElements.get('it-checkbox')) {
  customElements.define('it-checkbox', ItCheckbox);
}

declare global {
  interface HTMLElementTagNameMap {
    'it-checkbox': ItCheckbox;
  }
}
