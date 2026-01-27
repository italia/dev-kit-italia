import { setAttributes, FormControl } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';

import { type Sizes } from './types.js';

import styles from './select.scss';

@customElement('it-select')
export class ItSelect extends FormControl {
  static styles = styles;

  /** The input's size. */
  @property()
  size?: Sizes;

  /** If you want label to be hidden. */
  @property({ type: Boolean, attribute: 'label-hidden' })
  labelHidden = false;

  /** Placeholder text to show as a hint when the select is empty. */
  @property({ type: String })
  placeholder = '';

  /** The select's help text. */
  @property({ type: String, attribute: 'support-text' })
  supportText = '';

  /** If the select is read-only. */
  @property({ type: Boolean })
  readonly = false;

  /** If the select is multiple. */
  @property({ type: Boolean })
  multiple = false;

  @queryAssignedElements({ slot: 'label' })
  labelElements!: HTMLElement[];

  @queryAssignedElements()
  private _options!: HTMLOptionElement[];

  get label(): string {
    if (this.labelElements.length > 0) {
      return this.labelElements[0].innerText.trim();
    }
    return '';
  }

  firstUpdated() {
    this._renderOptions();
  }

  override connectedCallback() {
    super.connectedCallback?.();

    this._renderOptions();
    this._handleReady();
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    // logger
    if (!this.label || this.label?.length === 0) {
      this.logger.warn(
        `Label is required to ensure accessibility. Please, define a label for <it-select name="${this.name}" id="${this.id}" ... /> . Set attribute label-hidden="true" if you don't want to show label.`,
      );
    }
  }

  override _handleInput(e: Event) {
    const select = e.target as HTMLSelectElement;

    if (this.multiple) {
      this.value = Array.from(select.selectedOptions)
        .map((o) => o.value)
        .join(',');
    } else {
      this.value = select.value;
    }

    super._handleInput(e);
  }

  private _isSelected(value: string) {
    if (this.multiple) {
      return (this.value ?? '').split(',').includes(value);
    }
    return this.value === value;
  }

  private _renderOptionItems(_opts: HTMLOptionElement[]) {
    return _opts.map(
      (opt) => html`
        <option value=${opt.value} ?disabled=${opt.disabled} ?selected=${this._isSelected(opt.value)}>
          ${opt.textContent}
        </option>
      `,
    );
  }

  private _renderOptions() {
    return this._options?.map((opt: any) => {
      if (opt.tagName === 'OPTGROUP') {
        return html`
          <optgroup label="${opt.label}" ?disabled=${opt.disabled}>
            ${this._renderOptionItems(Array.from(opt.children) as HTMLOptionElement[])}
          </optgroup>
        `;
      }
      return this._renderOptionItems([opt]);
    });
  }

  private _onOptionsChange() {
    this.requestUpdate();
  }

  // Render the UI as a function of component state
  override render() {
    const supportTextId = `${this._id}-support-text`;

    const supportTextRender = html` ${when(
      this.supportText,
      () => html` <small class="form-text" id="${supportTextId}">${this.supportText}</small> `,
    )}`;

    const showValidation = this.formControlController.submittedOnce || this.customValidation; // true; // this._touched || this.customValidation;
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

    const ariaDescribedBy = this.composeClass(
      this.supportText?.length > 0 ? supportTextId : '',
      this._ariaAttributes['aria-describedby']?.length > 0 ? this._ariaAttributes['aria-describedby'] : '',
      showValidation && validityMessage?.length > 0 ? `invalid-feedback-${this._id}` : '',
    );

    const inputClasses = this.composeClass(
      'it-form__control',
      'form-control',
      this.size ? `form-control-${this.size}` : '',
      showValidation && invalid ? 'is-invalid' : '',
      showValidation && !invalid && !this.readonly ? 'just-validate-success-field' : '',
    );

    return html`
      <div class="select-wrapper form-group" part="select-wrapper">
        <label
          for="${ifDefined(this._id || undefined)}"
          part="label"
          class="${this.composeClass(this.labelHidden ? 'visually-hidden' : '')}"
          ><slot name="label"></slot
        ></label>

        <select
          part="select focusable"
          ${setAttributes(this._ariaAttributes)}
          aria-describedby=${ifDefined(ariaDescribedBy || undefined)}
          aria-invalid=${ifDefined(invalid ? 'true' : undefined)}
          id="${this._id}"
          name="${this.name}"
          class="${inputClasses}"
          ?multiple=${this.multiple}
          ?disabled=${this.disabled || this.readonly}
          ?required=${this.required}
          ?formNoValidate=${this.customValidation}
          @blur=${this._handleBlur}
          @focus=${this._handleFocus}
          @click=${this._handleClick}
          @change=${this._handleInput}
          @invalid=${this._handleInvalid}
        >
          ${when(
            this.placeholder,
            () =>
              html`<option value="" ?disabled=${this.required} ?selected=${!this.value}>${this.placeholder}</option>`,
          )}
          ${this._renderOptions()}
        </select>
        <slot @slotchange=${this._onOptionsChange}></slot>
        ${validityMessageRender} ${supportTextRender}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-select': ItSelect;
  }
}
