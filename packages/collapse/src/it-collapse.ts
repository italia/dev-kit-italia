import { customElement } from 'lit/decorators.js';
import { ItCollapseBase } from './it-collapse-base.js';

// TODO: quando si sviluppa collapse come componente standalone, decoupling dalle classi di accordion, e aggiornare il part name
@customElement('it-collapse')
export class ItCollapse extends ItCollapseBase {
  // All functionality is inherited from ItCollapseBase
}

declare global {
  interface HTMLElementTagNameMap {
    'it-collapse': ItCollapse;
  }
}
