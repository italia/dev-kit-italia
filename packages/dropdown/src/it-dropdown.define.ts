import { ItDropdown } from './it-dropdown.js';

export function defineItDropdown() {
  if (!customElements.get('it-dropdown')) {
    customElements.define('it-dropdown', ItDropdown);
  }
}
