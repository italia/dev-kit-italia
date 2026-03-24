import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './bottom-nav-item.scss';

/**
 * BottomNav item component representing a single navigation entry.
 * - Wraps slotted content (typically an anchor `<a>` with an icon and a label)
 * - Active state can be set via the `active` attribute/property
 * - Sets `aria-current="page"` on the slotted link when active
 * - Supports progressive enhancement: links work even without JavaScript
 */
@customElement('it-bottom-nav-item')
export class ItBottomNavItem extends BaseComponent {
  static styles = styles;

  @property({ type: Boolean, reflect: true }) active = false;

  /** Syncs `aria-current` on the slotted link based on current active state. */
  public syncAriaOnLink() {
    const slot = this.shadowRoot?.querySelector('slot') as HTMLSlotElement | null;
    const els = slot?.assignedElements({ flatten: true }) ?? [];
    for (const el of els) {
      if (el.tagName === 'A') {
        if (this.active) {
          el.setAttribute('aria-current', 'page');
        } else {
          el.removeAttribute('aria-current');
        }
      }
    }
  }

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('active')) {
      this.syncAriaOnLink();
    }
  }

  override render() {
    return html`
      <li part="bottom-nav-item">
        <slot @slotchange=${() => this.syncAriaOnLink()}></slot>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-bottom-nav-item': ItBottomNavItem;
  }
}
