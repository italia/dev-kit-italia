/* eslint-disable lit-a11y/list */
import { html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';

import { type ToolbarSizes, type ToolbarOrientations } from './types.js';
import styles from './toolbar.scss';
import { ItToolbarItem } from './it-toolbar-item.js';

/**
 * Toolbar component following repository conventions.
 * - Renders a navigation menu with icon-based items
 * - Supports multiple sizes: lg (large/default), md (medium), sm (small)
 * - Supports orientations: horizontal (default), vertical
 * - Can contain links, buttons, dropdowns, and dividers
 *
 * @element it-toolbar
 */
@customElement('it-toolbar')
export class ItToolbar extends BaseComponent {
  static styles = styles;

  @queryAssignedElements({ selector: 'it-toolbar-item' })
  private toolbarItems!: ItToolbarItem[];

  /**
   * Size variant of the toolbar.
   * - lg: Large (default) - shows labels and icons
   * - md: Medium - hides labels, uses visually-hidden spans for a11y
   * - sm: Small - hides labels, uses visually-hidden spans for a11y
   */
  @property({ type: String, reflect: true })
  size: ToolbarSizes = 'lg';

  /**
   * Orientation of the toolbar.
   * - horizontal: (default) items arranged horizontally
   * - vertical: items arranged vertically
   */
  @property({ type: String, reflect: true })
  orientation: ToolbarOrientations = 'horizontal';

  /**
   * Aria label for the toolbar navigation.
   */
  @property({ type: String, reflect: true, attribute: 'it-aria-label' })
  itAriaLabel = 'Toolbar';

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    // Propaga le proprietà ai figli quando cambiano
    if (changedProperties.has('size') || changedProperties.has('orientation')) {
      this.updateChildrenProperties();
    }
  }

  override firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated?.(changedProperties);
    // Inizializza le proprietà sui figli
    this.updateChildrenProperties();
  }

  private updateChildrenProperties() {
    this.toolbarItems.forEach((item) => {
      if (this.size === 'md' || this.size === 'sm') {
        item.setAttribute('hide-label', '');
        item.setAttribute('hide-badge', '');
      } else {
        item.removeAttribute('hide-label');
        item.removeAttribute('hide-badge');
      }

      if (item.divider) {
        if (this.orientation === 'vertical') {
          item.setAttribute('it-aria-orientation', 'horizontal');
        } else {
          item.setAttribute('it-aria-orientation', 'vertical');
        }
        return; // I divisori non devono ricevere altre modifiche
      }
      if (this.orientation === 'vertical') {
        item.setAttribute('it-aria-orientation', 'vertical');
      } else {
        item.removeAttribute('it-aria-orientation');
      }
    });
  }

  private _onSlotChange = () => {
    // Quando cambiano i children, aggiorna tutte le proprietà
    this.updateChildrenProperties();
  };

  override render() {
    const navClasses = this.composeClass(
      'toolbar',
      {
        'toolbar-medium': this.size === 'md',
        'toolbar-small': this.size === 'sm',
        'toolbar-vertical': this.orientation === 'vertical',
      },
      this.className,
    );

    return html`
      <nav aria-label="${this.itAriaLabel}" part="toolbar-container" class="${navClasses}">
        <ul part="toolbar-list">
          <slot @slotchange="${this._onSlotChange}"></slot>
        </ul>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-toolbar': ItToolbar;
  }
}
