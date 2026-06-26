import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './dropdown-item.scss';

@customElement('it-dropdown-item')
export class ItDropdownItem extends BaseComponent {
  static styles = styles;

  @property({ type: String }) label = '';

  @property({ type: String }) value = '';

  @property({ type: String }) href?: string;

  @property({ type: Boolean, reflect: true }) active = false;

  @property({ type: Boolean, reflect: true }) large = false;

  @property({ type: Boolean, reflect: true }) separator = false;

  @property({ type: Boolean, reflect: true }) dark = false;

  @property({ type: Boolean, attribute: 'full-width', reflect: true }) fullWidth = false;

  @property({ type: String, attribute: 'it-role' }) itRole?: 'menuitem' | 'option' | 'treeitem';

  @property({ type: Boolean, reflect: true }) disabled?: boolean;

  public getFocusableElement(): HTMLElement | null {
    if (this.separator) return null;
    const selector = this.href ? 'a, button' : 'li';
    return this.shadowRoot?.querySelector(selector) ?? null;
  }

  handlePress(event: KeyboardEvent | MouseEvent) {
    if (this.disabled) event.preventDefault();
  }

  override render() {
    if (this.separator) {
      return html`<li part="li"><span class="divider" role="separator"></span></li>`;
    }

    const itemClasses = this.composeClass({
      dark: this.dark,
      fw: this.fullWidth,
      'list-item dropdown-item': !this.href,
    });

    const itemRole = this.href && this.itRole ? 'none' : this.itRole;

    const statusClasses = this.composeClass({
      disabled: this.disabled,
      active: this.active,
      large: this.large,
    });

    const isText = !this.itRole && !this.href;

    const linkClasses = this.composeClass('list-item', 'dropdown-item', statusClasses);
    const nonLinkClasses = this.composeClass(statusClasses, {
      'dropdown-item-text': isText,
    });

    const content = html`
      <slot name="prefix"></slot>
      <slot>${this.label}${this.active ? html`<span class="visually-hidden"> attivo</span>` : null}</slot>
      <slot name="suffix"></slot>
    `;

    return html`
      <li
        role="${ifDefined(itemRole)}"
        class=${ifDefined(itemClasses || undefined)}
        tabindex=${ifDefined(this.href ? undefined : '-1')}
        part=${ifDefined(this.href ? 'li' : 'focusable li')}
        @keydown=${this.href ? undefined : this.handlePress}
        @click=${this.href ? undefined : this.handlePress}
        aria-disabled=${ifDefined((this.disabled && !this.href) || undefined)}
      >
        ${this.href
          ? html`<a
              class=${linkClasses}
              part="focusable list-item"
              href=${this.href}
              role=${ifDefined(this.itRole)}
              aria-disabled=${ifDefined(this.disabled || undefined)}
              @keydown=${this.handlePress}
              @click=${this.handlePress}
              ><span class="dropdown-item-link" part="dropdown-item-text">${content}</span></a
            >`
          : html`<span class=${nonLinkClasses} part="dropdown-item-text">${content}</span>`}
      </li>
    `;
  }
}
