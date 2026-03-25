import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
    return html`<it-icon name="${this.icon}" exportparts="icon"></it-icon>`;
  }

  private renderLabel() {
    if (!this.label) return null;
    return this.hideLabel
      ? html`<span class="visually-hidden">${this.label} ${this.labelExtended ?? ''}</span>`
      : html`
          <span class="toolbar-label">
            ${this.label}
            ${this.labelExtended ? html`<span class="visually-hidden">${this.labelExtended}</span>` : null}
          </span>
        `;
  }

  private renderBadge() {
    if (!this.badge) return null;
    return html`<span class="badge">${this.badge}</span>`;
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
          aria-label="${this.itAriaLabel || this.label}"
          @click="${this.handleClick}"
          part="focusable toolbar-item-element"
        >
          ${this.renderIcon()} ${this.renderLabel()} ${this.renderBadge()}
        </a>
      `;
    }

    return html`
      <it-button
        class="${classes}"
        ?disabled="${this.disabled}"
        aria-label="${this.itAriaLabel || this.label}"
        @click="${this.handleClick}"
        part="toolbar-item-element"
        exportparts="focusable, button"
      >
        ${this.renderIcon()} ${this.renderLabel()} ${this.renderBadge()}
      </it-button>
    `;
  }

  override render() {
    const ariaAttributes: Record<string, string> = { ...this._ariaAttributes };
    delete ariaAttributes['aria-disabled']; // Rimuove aria-disabled se presente, gestito a livello di focusable element
    delete ariaAttributes['aria-label']; // Rimuove aria-label se presente, gestito a livello di focusable element
    console.log(ariaAttributes, this._ariaAttributes);
    return html` <li part="toolbar-item" ${setAttributes(ariaAttributes)}>${this.renderTag()}</li> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-toolbar-item': ItToolbarItem;
  }
}
