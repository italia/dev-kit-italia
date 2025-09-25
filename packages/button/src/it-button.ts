import { BaseComponent, setAttributes } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Sizes, type Variants } from './types.js';
import styles from './button.scss';

@customElement('it-button')
export class ItButton extends BaseComponent {
  static styles = styles;

  static get formAssociated() {
    return true;
  }

  @query('button') private _nativeButton!: HTMLButtonElement;

  @property({ type: String, reflect: true }) type = 'button';

  @property({ type: String, reflect: true }) variant: Variants = '';

  @property({ type: String, reflect: true }) size: Sizes = '';

  @property({ type: Boolean, reflect: true }) outline = false;

  @property({ type: Boolean, reflect: true }) block = false;

  @property({ type: Boolean, reflect: true }) icon = false;

  @property({ type: String }) value = '';

  @property() internals = this.attachInternals();

  @property({ type: Boolean, reflect: true, attribute: 'it-aria-disabled' }) disabled?: boolean;

  @property({ type: Boolean, reflect: true, attribute: 'it-aria-expanded' }) expanded?: boolean;

  surfaceSubmitEvent(event: any) {
    if (this.form && !this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      this.form.requestSubmit();
    }
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  get form() {
    return this.internals ? this.internals.form : null;
  }

  public override focus() {
    this._nativeButton?.focus();
  }

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._nativeButton?.click();
    }
  };

  connectedCallback(): void {
    super.connectedCallback?.();

    if (this.block) {
      this.classList.add('d-block', 'w-100');
    }

    this.addEventListener('keydown', this._onKeyDown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('keydown', this._onKeyDown);
    super.disconnectedCallback?.();
  }

  // Render the UI as a function of component state
  override render() {
    const classes = this.composeClass('btn', this.className, {
      [`btn-${this.variant}`]: !!this.variant && !this.outline,
      [`btn-outline-${this.variant}`]: !!this.variant && this.outline,
      [`btn-${this.size}`]: !!this.size,
      disabled: this.disabled,
      'btn-icon': this.icon,
      'd-block w-100': this.block,
    });
    const part = this.composeClass('button', 'focusable', {
      [this.variant]: this.variant?.length > 0,
      outline: this.outline,
    });
    return html`
      <button
        id=${ifDefined(this.id || undefined)}
        part="${part}"
        type="${this.type}"
        class="${classes}"
        @click="${this.type === 'submit' ? this.surfaceSubmitEvent : undefined}"
        .value="${ifDefined(this.value ? this.value : undefined)}"
        ${setAttributes(this._ariaAttributes)}
        aria-expanded="${ifDefined(this.expanded !== undefined ? this.expanded : undefined)}"
        aria-disabled="${ifDefined(this.disabled ? this.disabled : undefined)}"
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
