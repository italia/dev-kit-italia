import { setAttributes, FormControl, FormControlController } from '@italia/globals';

// import { registerTranslation } from '@italia/i18n';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { live } from 'lit/directives/live.js';

// import it from './locales/it.js';
import styles from './checkbox.scss';

// registerTranslation(it);

@customElement('it-checkbox')
export class ItCheckbox extends FormControl {
  static styles = styles;

  protected readonly formControlController: FormControlController = new FormControlController(this, {
    value: (control: FormControl) =>
      (control as ItCheckbox).checked ? (control as ItCheckbox).value || 'on' : undefined,
    setValue: (control: FormControl, value: unknown) => {
      const checkbox = control as ItCheckbox;
      checkbox.checked = Boolean(value);
    },
  });

  /**
   * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   */
  type = 'checkbox';

  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /**
   * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
   * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** The input's label. */
  @property({ type: String })
  label = '';

  /** If you want label to be hidden. */
  @property({ type: Boolean, attribute: 'label-hidden' })
  labelHidden = false;

  /** The input's help text. */
  @property({ type: String, attribute: 'support-text' })
  supportText = '';

  override connectedCallback() {
    super.connectedCallback?.();
    this._handleReady();
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    // logger
    if (!this.label || this.label?.length === 0) {
      this.logger.warn(
        `Label is required to ensure accessibility. Please, define a label for <it-checkbox name="${this.name}" ... /> . Set attribute label-hidden="true" if you don't want to show label.`,
      );
    }
  }

  // override _handleInput() {
  //   this.value = this.inputElement.value;
  //   super._handleInput();
  // }

  private _renderInput(supportTextId: string, invalid: boolean, validityMessage: string) {
    const ariaDescribedBy = this.composeClass(
      this.supportText?.length > 0 ? supportTextId : '',
      this._ariaAttributes['aria-describedby']?.length > 0 ? this._ariaAttributes['aria-describedby'] : '',
      validityMessage?.length > 0 ? `invalid-feedback-${this._id}` : '',
    );

    const inputClasses = this.composeClass(
      'form__control form-control',
      invalid ? 'is-invalid' : '',
      !invalid && this._touched ? 'just-validate-success-field' : '',
    );

    const inputRender = html`
      <input
        part="checkbox focusable"
        ${setAttributes(this._ariaAttributes)}
        aria-describedby=${ifDefined(ariaDescribedBy || undefined)}
        ?aria-invalid=${invalid}
        @input="${this._handleInput}"
        @blur=${this._handleBlur}
        @focus=${this._handleFocus}
        @click=${this._handleClick}
        @change=${this._handleChange}
        @invalid=${this._handleInvalid}
        type="${this.type}"
        id="${this._id}"
        name="${this.name}"
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?formNoValidate=${this.customValidation}
        .value="${live(this.value)}"
        class="${inputClasses}"
      />
    `;

    return inputRender;
  }

  // Render the UI as a function of component state
  override render() {
    const supportTextId = `${this._id}-support-text`;

    const supportTextRender = html` ${when(
      this.supportText,
      () => html` <small class="form-text" id="${supportTextId}">${this.supportText}</small> `,
    )}`;

    const showValidation = this._touched || this.customValidation;
    const validityMessage = (showValidation ? this.validationMessage : '') ?? '';
    const invalid =
      validityMessage?.length > 0 || (!this.customValidation && this.inputElement?.checkValidity() === false);

    const validityMessageRender = html`<div
      role="alert"
      id="invalid-feedback-${this._id}"
      class="invalid-feedback form-feedback form-text form-feedback just-validate-error-label"
      ?hidden=${!(validityMessage?.length > 0)}
    >
      <span class="visually-hidden">${this.label}: </span>${validityMessage}
    </div>`;

    return html`
      <div class="form-group" part="input-wrapper">
        <label
          for="${ifDefined(this._id || undefined)}"
          part="label"
          class="${this.composeClass('active', this.labelHidden ? 'visually-hidden' : '')}"
          >${this.label}</label
        >

        ${this._renderInput(supportTextId, invalid, validityMessage)} ${validityMessageRender} ${supportTextRender}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-checkbox': ItCheckbox;
  }
}
