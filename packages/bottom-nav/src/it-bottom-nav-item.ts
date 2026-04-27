import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './bottom-nav-item.scss';

/**
 * BottomNav item component representing a single navigation entry.
 * - Wraps slotted content (typically an anchor `<a>` with an icon and a label)
 * - Active state can be set via the `active` attribute/property
 * - Sets `aria-current="page"` on the first slotted link when active
 * - Supports progressive enhancement: links work even without JavaScript
 * - Framework-agnostic: works with any JS framework link component (Next.js, Nuxt, Vue Router, etc.)
 */
@customElement('it-bottom-nav-item')
export class ItBottomNavItem extends BaseComponent {
  static styles = styles;

  @property({ type: Boolean, reflect: true }) active = false;

  /** 
   * Syncs `aria-current` on the slotted link based on current active state.
   * Queries light DOM directly to support any framework-specific link components
   * (Next.js <Link>, Nuxt <NuxtLink>, Vue <RouterLink>, etc.)
   */
  public syncAriaOnLink() {
    // Query light DOM directly for all anchor elements
    // This is more reliable than slot.assignedElements() and works with all frameworks
    const anchors = Array.from(this.querySelectorAll<HTMLElement>('a'));
    
    // Remove aria-current from all anchors
    anchors.forEach((anchor) => {
      anchor.removeAttribute('aria-current');
    });
    
    // Set aria-current only on the first anchor if active
    if (this.active && anchors.length > 0) {
      anchors[0].setAttribute('aria-current', 'page');
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
