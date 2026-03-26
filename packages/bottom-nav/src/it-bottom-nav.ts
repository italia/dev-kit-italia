/* eslint-disable lit-a11y/list */
import { BaseComponent } from '@italia/globals';
import { StickyController, type StickyConfig } from '@italia/sticky';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ItBottomNavItem } from './it-bottom-nav-item.js';
import styles from './bottom-nav.scss';

/**
 * BottomNav component for mobile navigation.
 * - Renders a fixed bottom navigation bar with slotted `it-bottom-nav-item` elements
 * - Items fill the full width automatically
 * - Supports progressive enhancement: links work even without JavaScript
 * - Uses StickyController internally for fixed-bottom positioning and stacking
 */
@customElement('it-bottom-nav')
export class ItBottomNav extends BaseComponent implements StickyConfig {
  static styles = styles;

  @property({ type: String, reflect: true, attribute: 'it-aria-label' }) itAriaLabel = 'Navigazione principale';

  // ─── StickyConfig implementation ─────────────────────────────────────────
  // These are read by StickyController to determine positioning behaviour.
  // Not exposed as attributes — bottom-nav is always fixed to the bottom.

  readonly position = 'bottom' as const;

  readonly positionType = 'fixed' as const;

  readonly stackable = true;

  readonly paddingTop = 0;

  readonly stickyClassName = undefined;

  public _stickyController: StickyController = new StickyController(this, this);

  // ─────────────────────────────────────────────────────────────────────────

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
