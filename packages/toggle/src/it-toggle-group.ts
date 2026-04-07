import { customElement, queryAssignedElements } from 'lit/decorators.js';
import { ItCheckboxGroupBase } from '@italia/checkbox/it-checkbox-group-base.js';
import { ItToggle } from '@italia/toggle';

// import styles from './toggle.scss';

/**
 * @element it-toggle
 */
@customElement('it-toggle-group')
export class ItToggleGroup extends ItCheckboxGroupBase {
  // static override styles = [ItCheckboxGroupBase.styles, styles];

  // Query per le checkbox assegnate nello slot
  @queryAssignedElements({ selector: 'it-toggle' })
  checkboxes!: ItToggle[];
}

declare global {
  interface HTMLElementTagNameMap {
    'it-toggle-group': ItToggleGroup;
  }
}
