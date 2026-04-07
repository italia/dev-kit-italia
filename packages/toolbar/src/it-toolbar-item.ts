import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseComponent, setAttributes } from '@italia/globals';

import styles from './toolbar-item.scss';

/**
 * Toolbar Item component for individual toolbar elements.
 * - Can be a link (with href) or a button (without href)
 * - Supports icons via SVG sprites
 * - Supports optional badge indicators
 * - Supports active and disabled states
 * - Emits click events
 *
 * @element it-toolbar-item
 */
@customElement('it-toolbar-item')
export class ItToolbarItem extends BaseComponent {
  static styles = styles;

  /**
   * Whether the item is a divider
   */
  @property({ type: Boolean, reflect: true })
  divider = false;

  /**
   * Label text for the toolbar item
   */
  @property({ type: String, reflect: true })
  label = '';

  /**
   * Icon name to display (referenced from sprite)
   * Example: 'it-comment', 'it-camera', 'it-file'
   */
  @property({ type: String, reflect: true })
  icon = '';

  /**
   * URL for the link. If not provided, renders as a button
   */
  @property({ type: String, reflect: true })
  href: string | null = null;

  /**
   * Badge text or number to display (optional)
   * Example: '5', '42'
   */
  @property({ type: String, reflect: true })
  badge: string | null = null;

  /**
   * To hide the badge number visually but keep it accessible for screen readers
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-badge' })
  hideBadge = false;

  /**
   * Whether the item is active
   */
  @property({ type: Boolean, reflect: true })
  active = false;

  /**
   * Whether the item is disabled
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * To hide the label visually but keep it accessible for screen readers
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-label' })
  hideLabel = false;

  /**
   * Aria label for accessibility when label is hidden
   */
  @property({ type: String, reflect: true, attribute: 'it-aria-label' })
  itAriaLabel: string | null = null;

  /**
   * Aria label with additional information (for badge context)
   * Example: "5 new messages"
   */
  @property({ type: String, reflect: true, attribute: 'label-extended' })
  labelExtended: string | null = null;

  /**
   * Whether the item has a dropdown
   */
  @property({ type: Boolean, reflect: true })
  dropdown = false;

  /**
   * Orientation
   */
  @property({ type: String, reflect: true, attribute: 'it-aria-orientation' })
  itAriaOrientation: 'horizontal' | 'vertical' = 'horizontal';

  connectedCallback() {
    super.connectedCallback?.();

    if (!this.divider) {
      this.setAttribute('role', 'listitem');
    }
  }

  private handleClick = (event: MouseEvent) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.dispatchEvent(
      new CustomEvent('it-toolbar-item-click', { detail: { label: this.label }, bubbles: true, composed: true }),
    );
  };

  private renderIcon() {
    if (!this.icon) return null;
    return html`<it-icon name="${this.icon}" exportparts="icon" aria-hidden="true"></it-icon>`;
  }

  private renderLabel() {
    if (!this.label) return null;
    return !this.hideLabel ? html` <span class="toolbar-label" aria-hidden="true"> ${this.label} </span> ` : html``;
  }

  private renderBadge() {
    if (!this.badge) return null;
    return html`<div class="badge-wrapper" part="badge-wrapper" aria-hidden="true">
      <span class="toolbar-badge ${this.hideBadge ? 'no-text' : ''}" part="badge">
        ${!this.hideBadge ? this.badge : ''}
      </span>
    </div>`;
  }

  private renderItemContent() {
    const ariaText = [this.badge ?? '', this.label ?? '', this.labelExtended ?? ''].filter(Boolean).join(' ');

    return html`
      <span aria-hidden="true"> ${this.renderBadge()} ${this.renderIcon()} ${this.renderLabel()}</span>
      <span class="visually-hidden">${ariaText}</span>
      <slot></slot>
    `;
  }

  private renderTag() {
    // Button variant
    const classes = this.composeClass({
      active: this.active,
      disabled: this.disabled,
    });

    // Use link if href is provided, otherwise button
    if (this.href) {
      return html`
        <a
          href="${this.href}"
          class="${classes}"
          ?disabled="${this.disabled}"
          ?aria-label="${this.itAriaLabel}"
          aria-disabled="${ifDefined(this.disabled ? this.disabled : undefined)}"
          @click="${this.handleClick}"
          part="focusable toolbar-item-element"
        >
          ${this.renderItemContent()}
        </a>
      `;
    }

    if (this.dropdown) {
      return html`<it-dropdown
        class="${classes}"
        ?disabled="${this.disabled}"
        ?aria-label="${this.itAriaLabel}"
        @click="${this.handleClick}"
        part="toolbar-item-element dropdown"
        exportparts="focusable, button, icon, icon:expand-icon, it-icon, it-button, popover"
        variant=""
        alignment=${this.itAriaOrientation === 'vertical' ? 'right-start' : 'bottom-start'}
      >
        <div slot="label">${this.renderItemContent()}</div>
        <slot name="items"></slot>
      </it-dropdown>`;
    }

    return html`
      <it-button
        class="${classes}"
        ?disabled="${this.disabled}"
        ?aria-label="${this.itAriaLabel}"
        @click="${this.handleClick}"
        part="toolbar-item-element"
        exportparts="focusable, button"
      >
        ${this.renderItemContent()}
      </it-button>
    `;
  }

  override render() {
    const ariaAttributes: Record<string, string> = { ...this._ariaAttributes };
    delete ariaAttributes['aria-disabled']; // Rimuove aria-disabled se presente, gestito a livello di focusable element
    delete ariaAttributes['aria-label']; // Rimuove aria-label se presente, gestito a livello di focusable element

    return this.divider
      ? html`<li
          part="toolbar-item toolbar-divider"
          class="toolbar-divider"
          role="separator"
          ${setAttributes(ariaAttributes)}
        ></li>`
      : html` <li role="none" part="toolbar-item" ${setAttributes(ariaAttributes)}>${this.renderTag()}</li>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-toolbar-item': ItToolbarItem;
  }
}
