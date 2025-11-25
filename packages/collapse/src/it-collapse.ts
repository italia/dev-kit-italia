import { ItCollapseBase } from './it-collapse-base.js';

/**
 * @element it-collapse
 */
export class ItCollapse extends ItCollapseBase {
  // All functionality is inherited from ItCollapseBase
}

if (!customElements.get('it-collapse')) {
  customElements.define('it-collapse', ItCollapse);
}

declare global {
  interface HTMLElementTagNameMap {
    'it-collapse': ItCollapse;
  }
}
