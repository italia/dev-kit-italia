import { setAttributes, FormControl, FormControlController } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { live } from 'lit/directives/live.js';

import styles from './radio.scss';

@customElement('it-radio')
export class ItRadio extends FormControl {
  static styles = styles;

  protected readonly formControlController: FormControlController = new FormControlController(this, {
    value: (control: FormControl) => ((control as ItRadio).checked ? (control as ItRadio).value : undefined),
    setValue: (control: FormControl, value: unknown) => {
      const radio = control as ItRadio;
      radio.checked = Boolean(value);
    },
  });

  /**
   * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   */
  type = 'radio';

  /** Draws the radio in a checked state. */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Draws radioes inline, side by side. */
  @property({ type: Boolean, reflect: true })
  inline = false;

  /** Draws radios in groups. */
  @property({ type: Boolean, reflect: true })
  group = false;

  /** The input's label. */
  @property({ type: String })
  label = '';

  /** The input's help text. */
  @property({ type: String, attribute: 'support-text' })
  supportText = '';

  /** Simulates a click on the radio. */
  click() {
    this.inputElement.click();
  }

  /** Sets focus on the radio button. */
  focus(options?: FocusOptions) {
    this.inputElement?.focus(options);
  }

  /** Removes focus from the radio button. */
  blur() {
    this.inputElement?.blur();
  }

  override connectedCallback() {
    super.connectedCallback?.();
    this._handleReady();
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    // logger
    if (!this.label || this.label?.length === 0) {
      this.logger.warn(
        `Label is required to ensure accessibility. Please, define a label for <it-radio name="${this.name}" ... /> .`,
      );
    }

    // When checked changes, uncheck siblings
    if (changedProperties.has('checked') && this.checked) {
      this._uncheckSiblingRadios();
    }

    // Update tabindex based on checked state
    if (changedProperties.has('checked') || changedProperties.has('name')) {
      this._updateTabIndex();
    }
  }

  /**
   * Handle keyboard navigation in radio group
   * Arrow keys move focus and select the radio
   * Space selects the focused radio
   */
  private _handleKeyDown = (event: KeyboardEvent) => {
    // Only handle keys if not disabled
    if (this.disabled) return;

    const radios = this._getSiblingRadios();
    const currentIndex = radios.indexOf(this);

    let handled = false;
    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        // Move to previous radio (wrap around)
        nextIndex = currentIndex > 0 ? currentIndex - 1 : radios.length - 1;
        handled = true;
        break;

      case 'ArrowDown':
      case 'ArrowRight':
        // Move to next radio (wrap around)
        nextIndex = currentIndex < radios.length - 1 ? currentIndex + 1 : 0;
        handled = true;
        break;

      case ' ':
      case 'Space':
        // Select current radio if not already selected
        if (!this.checked) {
          this._uncheckSiblingRadios();
          this.checked = true;
          this.dispatchEvent(new Event('change', { bubbles: true }));
        }
        handled = true;
        break;

      default:
        // Let other keys bubble normally
        break;
    }

    if (handled) {
      event.preventDefault();

      // For arrow keys, move focus and select the next/previous radio
      if (event.key.startsWith('Arrow') && nextIndex !== currentIndex) {
        const nextRadio = radios[nextIndex];
        if (nextRadio && !nextRadio.disabled) {
          // Uncheck all siblings first
          nextRadio._uncheckSiblingRadios();
          // Check the next radio
          nextRadio.checked = true;
          // Move focus to the next radio
          nextRadio.focus();
          // Dispatch change event
          nextRadio.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    }
  };

  /**
   * Get all sibling radios with the same name
   */
  private _getSiblingRadios(): ItRadio[] {
    if (!this.name) return [this];

    const form = this.form ? document.getElementById(this.form) : this.closest('form');
    const root = form || document;

    const radios = Array.from(root.querySelectorAll<ItRadio>(`it-radio[name="${this.name}"]`));
    // Filter out disabled radios from navigation
    return radios.filter((radio) => !radio.disabled);
  }

  /**
   * Update tabindex to implement roving tabindex pattern
   * Only the checked radio (or first radio if none checked) should be tabbable
   */
  private _updateTabIndex() {
    const radios = this._getSiblingRadios();
    const hasChecked = radios.some((radio) => radio.checked);

    // Update tabindex for all radios in the group
    radios.forEach((radio) => {
      let shouldBeTabbed = false;

      if (hasChecked) {
        // If there's a checked radio, only it should be tabbable
        shouldBeTabbed = radio.checked;
      } else {
        // If no radio is checked, only the first one should be tabbable
        shouldBeTabbed = radio === radios[0];
      }

      // Update the tabindex of the internal input
      if (radio.inputElement) {
        // eslint-disable-next-line no-param-reassign
        radio.inputElement.tabIndex = shouldBeTabbed ? 0 : -1;
      }
    });
  }

  protected override _handleClick(e: Event): void {
    // Radio buttons should always be checked when clicked, not toggled
    if (!this.checked) {
      // First uncheck siblings, then set checked to true
      // This ensures FormControlController sees only one checked radio
      this._uncheckSiblingRadios();
      this.checked = true;
      super._handleClick(e);
      this._handleChange(e);
      this.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  /**
   * Uncheck all other radio buttons with the same name in the document
   */
  private _uncheckSiblingRadios() {
    if (!this.name) return;

    // Find all radio buttons with the same name in the form or document
    const form = this.form ? document.getElementById(this.form) : this.closest('form');
    const root = form || document;

    const radios = root.querySelectorAll<ItRadio>(`it-radio[name="${this.name}"]`);
    radios.forEach((radio) => {
      if (radio !== this && radio.checked) {
        // eslint-disable-next-line no-param-reassign
        radio.checked = false;
      }
    });
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
    );

    const inputRender = html`
      <input
        part="radio focusable"
        ${setAttributes(this._ariaAttributes)}
        aria-describedby=${ifDefined(ariaDescribedBy || undefined)}
        ?aria-invalid=${invalid}
        @input="${this._handleInput}"
        @blur=${this._handleBlur}
        @focus=${this._handleFocus}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
        @invalid=${this._handleInvalid}
        type="${this.type}"
        id="${this._id}"
        name="${this.name}"
        .checked=${live(this.checked)}
        .disabled=${this.disabled}
        .required=${this.required}
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

    const showValidation = true; // this._touched || this.customValidation ;
    const validityMessage = (showValidation ? (this.validationMessage ?? '') : '') ?? '';

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

    const wrapperClasses = this.composeClass(
      'form-check',
      this.inline ? 'form-check-inline' : '',
      this.group ? 'form-check-group' : '',
    );

    const labelClasses = this.composeClass(this.disabled ? 'disabled' : '');

    return html`
      <div class="${wrapperClasses}" part="input-wrapper">
        ${this._renderInput(supportTextId, invalid, validityMessage)}
        <label for="${ifDefined(this._id || undefined)}" part="label" class="${labelClasses}">${this.label}</label>
        ${validityMessageRender} ${supportTextRender}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-radio': ItRadio;
  }
}
