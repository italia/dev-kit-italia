import { ItCollapseBase } from './it-collapse-base.js';

// TODO: quando si sviluppa collapse come componente standalone, decoupling dalle classi di accordion, e aggiornare il part name
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
