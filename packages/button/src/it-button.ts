import { BaseComponent } from '@italia/globals';
import { html, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import styles from './button.scss';

export type ButtonSize = 'lg' | 'sm' | 'xs';
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'link' | string;

@customElement('it-button')
export class ItButton extends BaseComponent {
  static styles = styles;

  static get formAssociated() {
    return true;
  }

  @property({ type: String })
  private _buttonClasses = '';

  @property({ type: String })
  type = 'button';

  @property({ type: String })
  variant: ButtonVariant = '';

  @property({ type: String })
  size: ButtonSize = 'sm';

  @property({ type: Boolean })
  outline = false;

  @property({ type: Boolean })
  block = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  icon = false;

  @property({ type: String })
  value = '';

  @property()
  internals = this.attachInternals();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected override firstUpdated(_changedProperties: PropertyValues): void {
    const button = this.renderRoot.querySelector('button');
    if (button) {
      this.addFocus(button);
    }
  }

  override updated() {
    this._buttonClasses = this.composeClass(
      'btn',
      !this.outline && this.variant !== '' ? `btn-${this.variant}` : '',
      this.outline ? `${this.variant ? 'btn-outline-' : ''}${this.variant}` : '',
      this.disabled ? 'disabled' : '',
      this.size ? `btn-${this.size}` : '',
      this.block ? 'd-block w-100' : '',
      this.icon ? 'btn-icon' : '',
    );
  }

  surfaceSubmitEvent(event: any) {
    if (this.form) {
      event.preventDefault();
      event.stopPropagation();
      this.form.requestSubmit();
    }
  }

  get form() {
    return this.internals ? this.internals.form : null;
  }

  connectedCallback(): void {
    super.connectedCallback?.();

    if (this.block) {
      this.classList.add('d-block', 'w-100');
    }
  }

  // Render the UI as a function of component state
  override render() {
    return html`
      <button
        part="${this.variant} ${this.outline ? 'outline' : ''}"
        type="${this.type}"
        disabled=${ifDefined(this.disabled || undefined)}
        class="${this._buttonClasses}"
        @click="${this.type === 'submit' ? this.surfaceSubmitEvent : undefined}"
        .value="${ifDefined(this.value ? this.value : undefined)}"
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-button': ItButton;
  }
}
