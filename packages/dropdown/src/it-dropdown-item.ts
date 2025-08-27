import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './dropdown-item.scss';

@customElement('it-dropdown-item')
export class ItDropdownItem extends BaseComponent {
  static styles = styles;

  // static override shadowRootOptions = {
  //   ...LitElement.shadowRootOptions,
  //   delegatesFocus: true,
  // };

  @property({ type: String }) label = '';

  @property({ type: String }) value = '';

  @property({ type: String }) href?: string;

  @property({ type: Boolean, reflect: true }) active = false;

  @property({ type: Boolean, reflect: true }) large = false;

  @property({ type: Boolean, reflect: true }) separator = false;

  @property({ type: Boolean, reflect: true }) dark = false;

  @property({ type: Boolean, attribute: 'full-width', reflect: true }) fullWidth = false;

  @property({ type: String, attribute: 'it-role' }) itRole?: string;

  @property({ type: Boolean, reflect: true }) disabled?: boolean;

  public getFocusableElement(): HTMLElement | null {
    return this.shadowRoot?.querySelector('a, button') ?? null;
  }

  handlePress(event: KeyboardEvent | MouseEvent) {
    if (this.disabled) event.preventDefault();
  }

  protected override updated() {
    if (this.itRole && ['menuitem', 'option', 'treeitem'].includes(this.itRole)) {
      this.setAttribute('role', 'none');
    }
  }

  override render() {
    if (this.separator) {
      return html`<li><span class="divider" role="separator"></span></li>`;
    }

    const itemClasses = this.composeClass({
      dark: this.dark,
      fw: this.fullWidth,
    });

    const linkClasses = this.composeClass('list-item', 'dropdown-item', {
      disabled: this.disabled,
      active: this.active,
      large: this.large,
    });

    const content = html`
      <slot name="prefix"></slot>
      <slot>${this.label}${this.active ? html`<span class="visually-hidden"> attivo</span>` : null}</slot>
      <slot name="suffix"></slot>
    `;

    return html`
      <li role="none" class=${ifDefined(itemClasses || undefined)}>
        ${this.href
          ? html`<a
              class=${linkClasses}
              part="focusable"
              href=${this.href}
              role=${ifDefined(this.itRole)}
              aria-disabled=${ifDefined(this.disabled || undefined)}
              @keydown=${this.handlePress}
              @click=${this.handlePress}
              ><span>${content}</span></a
            >`
          : html`<span class="dropdown-item-text">${content}</span>`}
      </li>
    `;
  }
}
