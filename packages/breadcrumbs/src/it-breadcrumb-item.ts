import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import styles from './breadcrumb-item.scss';

/**
 * Breadcrumb item component representing a single item in the breadcrumb trail.
 * - Wraps slotted content (typically an anchor or text)
 * - Adds a separator after the item
 * - Supports progressive enhancement: links work even without JavaScript
 *
 */
@customElement('it-breadcrumb-item')
export class ItBreadcrumbItem extends BaseComponent {
  static styles = styles;

  @state() private current = false;

  public setCurrent(value: boolean) {
    this.current = value;
  }

  @state() private separator = '/';

  public setSeparator(value: string) {
    this.separator = value;
  }

  private _getSeparatorClasses() {
    const slot = this.shadowRoot?.querySelector('slot[name="separator"]') as HTMLSlotElement;
    const assignedNodes = slot?.assignedNodes({ flatten: true });
    // if not default or text content we have a slotted separator
    if (!assignedNodes || assignedNodes.length === 0) {
      return false;
    }

    // Check if we have actual content (not just text nodes with default separator)
    const hasCustomContent = assignedNodes.some((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        return true; // Element nodes are custom content
      }

      return false;
    });

    return hasCustomContent;
  }

  override render() {
    if (!this.current)
      return html`
        <li class="breadcrumb-item" part="breadcrumb-item">
          <slot></slot>
          <span class="${this._getSeparatorClasses() ? '' : 'separator'}" aria-hidden="true"
            ><slot name="separator" part="separator">${this.separator}</slot></span
          >
        </li>
      `;
    return html`
      <li class="breadcrumb-item active" aria-current="page" part="breadcrumb-item">
        <slot></slot>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-breadcrumb-item': ItBreadcrumbItem;
  }
}
