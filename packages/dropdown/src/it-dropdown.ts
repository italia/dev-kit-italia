import { ItDropdownBase } from './it-dropdown-base.js';

/**
 * @element it-dropdown
 */
export class ItDropdown extends ItDropdownBase {
  // All functionality is inherited from ItDropdownBase
}

if (!customElements.get('it-dropdown')) {
  customElements.define('it-dropdown', ItDropdown);
}

declare global {
  interface HTMLElementTagNameMap {
    'it-dropdown': ItDropdown;
  }
}
