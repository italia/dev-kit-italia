import { FormMixin, ValidityMixin, VALIDATION_STATUS, setAttributes, BaseLocalizedComponent } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import {
  calculateScore,
  scoreColor,
  scoreText,
  suggestionsConfig,
  calcCompletedSuggestions,
} from './helpers/password.js';

import { type InputType, type Sizes, type Suggestion } from './types.js';
import it from './locales/it.js';
import styles from './input.scss';

registerTranslation(it);

@customElement('it-input')
export class ItInput extends ValidityMixin(FormMixin(BaseLocalizedComponent)) {
  static styles = styles;

  static get formAssociated() {
    return true;
  }

  @property()
  internals = this.attachInternals();

  @property({ type: Boolean })
  slotted = false;

  @property({ type: Boolean, reflect: true }) // from validity mixin
  invalid = false;

  @property({ type: Boolean, reflect: true, attribute: 'custom-validation' }) // from validity mixin
  customValidation = false;

  @property({ type: Boolean, reflect: true }) // from validity mixin
  required = false;

  @property({ attribute: 'validity-message' })
  validationText: string = '';

  @query('input')
  protected _inputElement!: HTMLInputElement;

  @property({ type: String }) size?: Sizes;

  @property({ type: String })
  label = '';

  @property({ type: Boolean, attribute: 'label-hidden' })
  labelHidden = false;

  @property({ type: String })
  type: InputType = 'text';

  @property({ type: String })
  name = '';

  @property({ type: String })
  placeholder = '';

  @property({ type: String, attribute: 'support-text' })
  supportText = '';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  plaintext = false;

  @property({ type: Boolean })
  readonly = false;

  @property({ type: Boolean, attribute: 'strength-meter' })
  passwordStrengthMeter = false;

  @property({ type: Boolean })
  suggestions = false;

  @property({ type: Number })
  minlength = -1;

  @property({ type: Number })
  maxlength = -1;

  /**
   * Pattern the `value` must match to be valid
   */
  @property({ type: String })
  public pattern?: string;

  @state()
  private _passwordVisible = false;

  @state()
  private _strengthInfos = '';

  @state()
  private _score = 0;

  @state()
  _value = ''; // from validity mixin

  @state()
  _touched = false; // from validity mixin

  @property({ type: String })
  public validityMessage: string = ''; // from validity mixin

  @property({ reflect: true })
  get value() {
    if (this._inputElement) {
      return this._inputElement.value;
    }
    return this._value;
  }

  set value(value) {
    const oldValue = this._value;
    this._value = value;
    this.internals.setFormValue(value); // <- Associa il valore al form
    // make sure that lit-element updates the right properties
    this.requestUpdate('value', oldValue);
    // we set the value directly on the input (when available)
    // so that programatic manipulation updates the UI correctly
    if (this._inputElement && this._inputElement.value !== value) {
      this._inputElement.value = value;
    }
  }

  // Getter pubblico per accedere all'input
  get inputElement() {
    return this.shadowRoot?.querySelector('input');
  }

  _handleFormdata(event: FormDataEvent) {
    // Add name and value to the form's submission data if it's not disabled.
    if (!this.disabled) {
      const { formData } = event;
      formData.append(this.name, this._value);
    }
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;

    if (this.passwordStrengthMeter) {
      this._checkPasswordStrength(input.value);
    }

    this.dispatchEvent(
      new CustomEvent('on-input', {
        detail: { value: input.value, el: input },
        bubbles: true,
        composed: true,
      }),
    );
  }

  checkValidity() {
    if (!this.customValidation) {
      const inputValid = this._inputElement ? this._inputElement.checkValidity() : true; // this._inputElement.checkValidity() è la validazione del browser
      this._checkValidity(
        {
          [VALIDATION_STATUS.INVALID]: this.$t('validityInvalid'),
          [VALIDATION_STATUS.ERROR_REQUIRED]: this.$t('validityRequired'),
          [VALIDATION_STATUS.PATTERN]: this.$t('validityPattern'),
          [VALIDATION_STATUS.MINLENGTH]: this.$t('validityMinlength'),
          [VALIDATION_STATUS.MAXLENGTH]: this.$t('validityMaxlength'),
        },
        inputValid,
      );
    }
  }

  override _handleBlur() {
    super._handleBlur();
    this.checkValidity();
  }

  override firstUpdated() {
    // this.addFocus(this._inputElement); //NON serve per il momento perche sfruttiamo :focus-visible. Per gli input focus-visible si attiva anche al click perchè è il browser che lo gestisce
    const iconSlot = this.shadowRoot?.querySelector('slot[name="icon"]');
    const appendSlot = this.shadowRoot?.querySelector('slot[name="append"]');

    iconSlot?.addEventListener('slotchange', () => {
      this.requestUpdate();
    });
    appendSlot?.addEventListener('slotchange', () => {
      this.requestUpdate();
    });
  }

  override connectedCallback() {
    super.connectedCallback?.();

    /* così quando si scrive <it-input value="ciao"></it-input>, this.value viene impostato con 'ciao' */
    const attrValue = this.getAttribute('value');
    if (attrValue !== null) {
      this.value = attrValue;
    }
    if (this.type === 'password' && this.minlength < 0) {
      this.minlength = 8; // set default minlength for password
    }

    requestAnimationFrame(() => {
      this.dispatchEvent(new CustomEvent('input-ready', { bubbles: true, detail: { el: this.inputElement } }));
    });
  }

  // protected override update(changedProperties: Map<string | number | symbol, unknown>): void {
  //   if (changedProperties.has('value') || (changedProperties.has('required') && this.required)) {
  //     this.updateComplete.then(() => {
  //       this.checkValidity();
  //     });
  //   }

  //   super.update(changedProperties);
  // }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    if (this.customValidation) {
      this.setCustomValidity(this.validationText);
    }

    if (this.invalid) {
      const message =
        this.validationText?.length > 0 ? this.validationText : (this.validityMessage ?? 'Campo non valido');

      this.internals.setValidity({ customError: this.invalid }, message);
    }

    if (this.passwordStrengthMeter && this.type !== 'password') {
      this.logger.warn(
        "The strength-meter property is enabled, but type isn't password. Please, remove strength-meter property.",
      );
    }

    if (this.suggestions && this.type !== 'password') {
      this.logger.warn(
        "The suggestions property is enabled, but type isn't password. Please, remove suggestions this property.",
      );
    }

    if (!this.label || this.label?.length === 0) {
      this.logger.warn(
        `Label is required to ensure accessibility. Please, define a label for <it-input name="${this.name}" ... /> . Set attribute label-hidden="true" if you don't want to show label.`,
      );
    }
  }

  private _togglePasswordVisibility() {
    this._passwordVisible = !this._passwordVisible;
    if (this._inputElement) {
      this._inputElement.type = this._passwordVisible ? 'text' : 'password';
    }
  }

  private _checkPasswordStrength(value: string) {
    this._score = calculateScore(value, this.minlength);
    this._updateStrengthInfos();
  }

  private _getPasswordConfig() {
    return {
      minimumLength: this.minlength,
      showHidePassword: this.$t('showHidePassword'),
      shortPass: this.$t('shortPass'),
      badPass: this.$t('badPass'),
      goodPass: this.$t('goodPass'),
      strongPass: this.$t('strongPass'),
      ariaLabelPasswordMeter: this.$t('ariaLabelPasswordMeter'),
      suggestionsLabel: this.$t('passwordSuggestionsLabel'),
      suggestionLength: this.$t('passwordSuggestionLength'),
      suggestionUppercase: this.$t('passwordSuggestionUppercase'),
      suggestionLowercase: this.$t('passwordSuggestionLowercase'),
      suggestionNumber: this.$t('passwordSuggestionNumber'),
      suggestionSpecial: this.$t('passwordSuggestionSpecial'),
      suggestionFollowed: this.$t('passwordSuggestionFollowed'),
      suggestionFollowedPlural: this.$t('passwordSuggestionFollowedPlural'),
      suggestionOf: this.$t('passwordSuggestionOf'),
    };
  }

  private _updateStrengthInfos() {
    let text = scoreText(this._score, {
      shortPass: this.$t('shortPass'),
      badPass: this.$t('badPass'),
      goodPass: this.$t('goodPass'),
      strongPass: this.$t('strongPass'),
    });

    if (suggestionsConfig) {
      const { completedCount, totalCount } = calcCompletedSuggestions(
        suggestionsConfig,
        this.value,
        this._getPasswordConfig(),
      );
      const suggestionOfText =
        completedCount === 1 ? this.$t('passwordSuggestionFollowed') : this.$t('passwordSuggestionFollowedPlural');

      text += ` ${completedCount} ${this.$t('passwordSuggestionOf')} ${totalCount} ${suggestionOfText}.`;
    }
    this._strengthInfos = text;
  }

  private _renderTogglePasswordButton() {
    // Solo se type=password
    if (this.type === 'password') {
      return html`
        <button
          type="button"
          class="password-icon btn"
          role="switch"
          aria-checked="${this._passwordVisible}"
          @click="${this._togglePasswordVisibility}"
        >
          <span class="visually-hidden">${this.$t('showHidePassword')}</span>
          <it-icon
            name="${this._passwordVisible ? 'it-password-visible' : 'it-password-invisible'}"
            size="sm"
          ></it-icon>
        </button>
      `;
    }
    return nothing;
  }

  private _renderSuggestions() {
    return this.suggestions
      ? html`<div class="strength-meter-suggestions small form-text text-muted">
          <label class="visually-hidden" for="suggestions">${this.$t('passwordSuggestionsLabel')}</label>
          <div class="password-suggestions">
            ${suggestionsConfig.map((sugg: Suggestion) => {
              const isMet = sugg.test(this.value, this._getPasswordConfig());
              return html`
                <div class="suggestion">
                  ${isMet
                    ? html` <svg
                        class="icon icon-xs me-1"
                        aria-label="${this.$t('passwordSuggestionMetLabel')}"
                        viewBox="0 0 24 24"
                        style="width: 1em; height: 1em;"
                      >
                        <path d="M9.6 16.9 4 11.4l.8-.7 4.8 4.8 8.5-8.4.7.7-9.2 9.1z"></path>
                      </svg>`
                    : nothing}
                  <span>${sugg.text(this._getPasswordConfig())}</span>
                </div>
              `;
            })}
          </div>
        </div>`
      : nothing;
  }

  private _renderpasswordStrengthMeter() {
    if (this.type === 'password' && this.passwordStrengthMeter) {
      const perc = this._score < 0 ? 0 : this._score;
      const color = this._value?.length === 0 ? 'muted' : scoreColor(this._score);
      return html`<div class="password-strength-meter">
        ${this._renderSuggestions()}

        <p
          id=${`strengthMeterInfo_${this._id}`}
          class="${`strength-meter-info small form-text pt-0 text-${color}`}"
          aria-live="polite"
        >
          ${this._strengthInfos}
        </p>
        <div class="password-meter progress rounded-0 position-absolute">
          <div
            class="${this.composeClass('progress-bar', `bg-${color}`)}"
            style="width: ${perc}%"
            role="progressbar"
            aria-valuenow="${perc}"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="${this.$t('ariaLabelPasswordMeter')}"
          >
            <div class="row position-absolute w-100 m-0">
              <div class="col-3 border-start border-end border-white"></div>
              <div class="col-3 border-start border-end border-white"></div>
              <div class="col-3 border-start border-end border-white"></div>
              <div class="col-3 border-start border-end border-white"></div>
            </div>
          </div>
        </div>
      </div>`;
    }
    return nothing;
  }

  private _renderInput(supportTextId: string) {
    const ariaDescribedBy = this.composeClass(
      this.supportText?.length > 0 ? supportTextId : '',
      this.passwordStrengthMeter ? `strengthMeterInfo_${this._id}` : '',
      this._ariaAttributes['aria-describedby']?.length > 0 ? this._ariaAttributes['aria-describedby'] : '',
      this.validityMessage?.length > 0 ? `invalid-feedback-${this._id}` : '',
    );

    const inputClasses = this.composeClass(
      this.plaintext ? 'form-control-plaintext' : 'form-control',
      this.size ? `form-control-${this.size}` : '',
      this.invalid ? 'is-invalid' : '',
      !this.invalid && this._touched ? 'just-validate-success-field' : '',
    );

    let inputRender;

    if (this.type === 'textarea') {
      inputRender = html`
        <textarea
          part="textarea focusable"
          ${setAttributes(this._ariaAttributes)}
          aria-describedby=${ifDefined(ariaDescribedBy || undefined)}
          ?aria-invalid=${this.invalid}
          @input="${this._handleInput}"
          @blur=${this._handleBlur}
          @focus=${this._handleFocus}
          @click=${this._handleClick}
          @change=${this._handleChange}
          id="${this._id}"
          name="${this.name}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .value="${this._value}"
          placeholder=${ifDefined(this.placeholder || undefined)}
          class="${inputClasses}"
        ></textarea>
      `;
    } else {
      inputRender = html`
        <input
          part="input focusable"
          ${setAttributes(this._ariaAttributes)}
          aria-describedby=${ifDefined(ariaDescribedBy || undefined)}
          ?aria-invalid=${this.invalid}
          @input="${this._handleInput}"
          @blur=${this._handleBlur}
          @focus=${this._handleFocus}
          @click=${this._handleClick}
          @change=${this._handleChange}
          type="${this.type}"
          id="${this._id}"
          name="${this.name}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .value="${this._value}"
          placeholder=${ifDefined(this.placeholder || undefined)}
          class="${inputClasses}"
        />${this._renderTogglePasswordButton()}
      `;
    }

    inputRender = html`
      ${inputRender}
      <div
        role="alert"
        id="invalid-feedback-${this._id}"
        class="invalid-feedback form-feedback form-text form-feedback just-validate-error-label"
        ?hidden=${!(this.validityMessage?.length > 0)}
      >
        <span class="visually-hidden">${this.label}: </span>${this.validityMessage}
      </div>
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

    return html`
      <div class="form-group" part="input-wrapper">
        <label
          for="${ifDefined(this._id || undefined)}"
          part="label"
          class="${this.composeClass('active', this.labelHidden ? 'visually-hidden' : '')}"
          >${this.label}</label
        >

        ${when(
          this.slotted,
          () =>
            html` <div class="input-group">
                <span class="input-group-text">
                  <slot name="icon" @slotchange=${() => this.requestUpdate()}></slot
                ></span>
                ${this._renderInput(supportTextId)}
                <div class="input-group-append">
                  <slot name="append" @slotchange=${() => this.requestUpdate()}></slot>
                </div>
              </div>
              ${supportTextRender} ${this._renderpasswordStrengthMeter()}`,
          () => html` ${this._renderInput(supportTextId)} ${supportTextRender} ${this._renderpasswordStrengthMeter()}`,
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-input': ItInput;
  }
}
