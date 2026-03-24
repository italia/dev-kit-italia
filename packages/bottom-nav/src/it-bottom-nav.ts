import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ItBottomNavItem } from './it-bottom-nav-item.js';
import styles from './bottom-nav.scss';

/**
 * BottomNav component for mobile navigation.
 * - Renders a fixed bottom navigation bar with slotted `it-bottom-nav-item` elements
 * - Items fill the full width automatically
 * - Supports progressive enhancement: links work even without JavaScript
 */
@customElement('it-bottom-nav')
export class ItBottomNav extends BaseComponent {
  static styles = styles;

  @property({ type: String, reflect: true, attribute: 'it-aria-label' }) itAriaLabel = 'Navigazione principale';

  private _setChildrenProperties() {
    const slot = this.shadowRoot?.querySelector('slot');
    const assignedElements = slot?.assignedElements({ flatten: true }) || [];
    assignedElements.forEach((el) => {
      if (el instanceof ItBottomNavItem) {
        // Ensure aria-current is in sync after slot changes
        el.syncAriaOnLink();
      }
    });
  }

  override render() {
    return html`
      <nav aria-label="${this.itAriaLabel}" part="bottom-nav" class="bottom-nav">
        <ul>
          <slot @slotchange=${this._setChildrenProperties}></slot>
        </ul>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-bottom-nav': ItBottomNav;
  }
}
