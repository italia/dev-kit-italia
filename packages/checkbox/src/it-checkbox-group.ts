import { ItCheckboxGroupBase } from './it-checkbox-group-base.js';

/**
 * @element it-checkbox-group
 */
export class ItCheckboxGroup extends ItCheckboxGroupBase {
  // All functionality is inherited from ItCheckboxGroupBase
}

if (!customElements.get('it-checkbox-group')) {
  customElements.define('it-checkbox-group', ItCheckboxGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'it-checkbox-group': ItCheckboxGroup;
  }
}
