import { setAttributes, FormControl, FormControlController } from '@italia/globals';

// import { registerTranslation } from '@italia/i18n';
import { html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { live } from 'lit/directives/live.js';

import styles from './checkbox.scss';

@customElement('it-checkbox')
export class ItCheckbox extends FormControl {
  static styles = styles;

  protected readonly formControlController: FormControlController = new FormControlController(this, {
    value: (control: FormControl) =>
      (control as ItCheckbox).checked ? (control as ItCheckbox).value || 'true' : undefined,
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

  /** Draws checkboxes inline, side by side. */
  @property({ type: Boolean, reflect: true })
  inline = false;

  /** Draws checkboxes in groups. */
  @property({ type: Boolean, reflect: true })
  group = false;

  /**
   * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
   * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  @queryAssignedElements({ slot: 'label' })
  labelElements!: HTMLElement[];

  get label(): string {
    if (this.labelElements.length > 0) {
      return this.labelElements[0].innerText.trim();
    }
    return '';
  }

  /** The input's help text. */
  @property({ type: String, attribute: 'support-text' })
  supportText = '';

  /** Simulates a click on the checkbox. */
  click() {
    this.inputElement.click();
  }

  override connectedCallback() {
    super.connectedCallback?.();
    this._handleReady();
    // 🔍 Verifica se il parent è un it-checkbox-group
    this.isInGroup = !!this.closest('it-checkbox-group');
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    // logger
    if (!this.label || this.label?.length === 0) {
      this.logger.warn(
        `Label is required to ensure accessibility. Please, define a label for <it-checkbox name="${this.name}" ... /> .`,
      );
    }
  }

  protected override _handleClick(e: Event): void {
    this.checked = !this.checked;
    this.indeterminate = false;
    super._handleClick(e);
    this._handleChange(e);
    // ✅ Evento standard per compatibilità
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  private _renderInput(supportTextId: string, invalid: boolean, validityMessage: string) {
    const ariaDescribedBy = this.composeClass(
      this.supportText?.length > 0 ? supportTextId : '',
      this._ariaAttributes['aria-describedby']?.length > 0 ? this._ariaAttributes['aria-describedby'] : '',
      validityMessage?.length > 0 ? `invalid-feedback-${this._id}` : '',
    );

    const inputClasses = this.composeClass(
      'it-form__control',
      invalid ? 'is-invalid' : '',
      !invalid && this._touched ? 'just-validate-success-field' : '',
      this.indeterminate ? 'semi-checked' : '',
    );

    const inputIsRequired = this.required && !this.isInGroup; // Disabilita il 'required' nativo se siamo in un gruppo

    const inputRender = html`
      <input
        part="checkbox focusable"
        ${setAttributes(this._ariaAttributes)}
        aria-describedby=${ifDefined(ariaDescribedBy || undefined)}
        aria-invalid=${ifDefined(invalid ? 'true' : undefined)}
        @input="${this._handleInput}"
        @blur=${this._handleBlur}
        @focus=${this._handleFocus}
        @click=${this._handleClick}
        @invalid=${this._handleInvalid}
        type="${this.type}"
        id="${this._id}"
        name="${this.name}"
        .checked=${live(this.checked)}
        .indeterminate=${live(this.indeterminate)}
        .disabled=${this.disabled}
        .required=${inputIsRequired}
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

    const showValidation = this.formControlController.submittedOnce || this.customValidation; // true; // this._touched || this.customValidation ;
    const validityMessage = (showValidation ? (this.validationMessage ?? '') : '') ?? '';

    const invalid =
      validityMessage?.length > 0 || (!this.customValidation && this.inputElement?.checkValidity() === false);

    const validityMessageRender = html`<div
      role="alert"
      id="invalid-feedback-${this._id}"
      class="invalid-feedback form-feedback form-text form-feedback just-validate-error-label"
      ?hidden=${!(validityMessage?.length > 0)}
    >
      <span class="visually-hidden"><slot name="label"></slot>: </span>${validityMessage}
    </div>`;

    const wrapperClasses = this.composeClass(
      'form-check',
      this.inline ? 'form-check-inline' : '',
      this.group ? 'form-check-group' : '',
    );

    const labelClasses = this.composeClass(this.disabled ? 'disabled' : '');

    return html`
      <div class="${wrapperClasses}" part="input-wrapper">
        ${this._renderInput(supportTextId, invalid, validityMessage)}
        <label for="${ifDefined(this._id || undefined)}" part="label" class="${labelClasses}"
          ><slot name="label"></slot
        ></label>
        ${validityMessageRender} ${supportTextRender}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-checkbox': ItCheckbox;
  }
}
