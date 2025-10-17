import { setAttributes, FormControl } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html, nothing } from 'lit';
import { customElement, property, state, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { live } from 'lit/directives/live.js';
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
export class ItInput extends FormControl {
  static styles = styles;

  @state()
  private _slotPrepend: HTMLSlotElement | null = null;

  @state()
  private _slotAppend: HTMLSlotElement | null = null;

  /**
   * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
   * to `text`.
   */
  @property({ type: String })
  type: InputType = 'text';

  /** The input's size. */
  @property()
  size?: Sizes;

  /** If you want number-input to be adaptive in width */
  @property({ type: Boolean })
  adaptive = false;

  /** If you want label to be hidden. */
  @property({ type: Boolean, attribute: 'label-hidden' })
  labelHidden = false;

  /** Placeholder text to show as a hint when the input is empty. */
  @property({ type: String })
  placeholder = '';

  /** The input's help text. */
  @property({ type: String, attribute: 'support-text' })
  supportText = '';

  /** If you want the input to be displayed as plaintext. */
  @property({ type: Boolean })
  plaintext = false;

  /** If the input is read-only. */
  @property({ type: Boolean })
  readonly = false;

  /** If your input is of type 'password' and you want to display a strength meter */
  @property({ type: Boolean, attribute: 'strength-meter' })
  passwordStrengthMeter = false;

  /** If your input is of type 'password' and you want to show password suggestions. */
  @property({ type: Boolean })
  suggestions = false;

  @queryAssignedElements({ slot: 'label' })
  labelElements!: HTMLElement[];

  get label(): string {
    if (this.labelElements.length > 0) {
      return this.labelElements[0].innerText.trim();
    }
    return '';
  }

  @state()
  private _passwordVisible = false;

  @state()
  private _strengthInfos = '';

  @state()
  private _score = 0;

  get slotted() {
    return this._slotPrepend || this._slotAppend;
  }

  firstUpdated() {
    // this.addFocus(this.inputElement); //NON serve per il momento perche sfruttiamo :focus-visible. Per gli input focus-visible si attiva anche al click perchè è il browser che lo gestisce
    this._slotPrepend = this.querySelector('[slot="prepend"]');
    this._slotAppend = this.querySelector('[slot="append"]');

    this._slotPrepend?.addEventListener('slotchange', () => {
      this.requestUpdate();
    });

    this._slotAppend?.addEventListener('slotchange', () => {
      this.requestUpdate();
    });
  }

  override connectedCallback() {
    super.connectedCallback?.();

    if (this.type === 'password' && this.minlength < 0) {
      this.minlength = 8; // set default minlength for password
    }
    this._handleReady();
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    // logger
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

  override _handleInput(e: Event) {
    this.value = this.inputElement.value;

    if (this.passwordStrengthMeter) {
      this._checkPasswordStrength(this.inputElement.value);
    }

    super._handleInput(e);
  }

  private _togglePasswordVisibility() {
    this._passwordVisible = !this._passwordVisible;
    if (this.inputElement) {
      this.inputElement.type = this._passwordVisible ? 'text' : 'password';
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
          part="focusable"
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
      const color = this.value?.length === 0 ? 'muted' : scoreColor(this._score);
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

  private _renderInput(supportTextId: string, invalid: boolean, validityMessage: string) {
    const ariaDescribedBy = this.composeClass(
      this.supportText?.length > 0 ? supportTextId : '',
      this.passwordStrengthMeter ? `strengthMeterInfo_${this._id}` : '',
      this._ariaAttributes['aria-describedby']?.length > 0 ? this._ariaAttributes['aria-describedby'] : '',
      validityMessage?.length > 0 ? `invalid-feedback-${this._id}` : '',
    );

    const inputClasses = this.composeClass(
      'it-form__control',
      this.plaintext ? 'form-control-plaintext' : 'form-control',
      this.size ? `form-control-${this.size}` : '',
      invalid ? 'is-invalid' : '',
      !invalid && this._touched && !this.readonly ? 'just-validate-success-field' : '',
    );

    let inputRender;

    if (this.type === 'textarea') {
      inputRender = html`
        <textarea
          part="textarea focusable"
          ${setAttributes(this._ariaAttributes)}
          aria-describedby=${ifDefined(ariaDescribedBy || undefined)}
          ?aria-invalid=${invalid}
          @input="${this._handleInput}"
          @blur=${this._handleBlur}
          @focus=${this._handleFocus}
          @click=${this._handleClick}
          @change=${this._handleChange}
          @invalid=${this._handleInvalid}
          id="${this._id}"
          name="${this.name}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          minlength=${ifDefined(this.minlength)}
          maxlength=${ifDefined(this.maxlength)}
          pattern=${ifDefined(this.pattern)}
          ?formNoValidate=${this.customValidation}
          .value="${live(this.value)}"
          placeholder=${ifDefined(this.placeholder || undefined)}
          class="${inputClasses}"
        ></textarea>
      `;
    } else {
      let style = null;
      if (this.type === 'number' && this.adaptive) {
        style = `width: calc(${this.value.toString().length}ch + 70px);`;
      }
      inputRender = html`
        <input
          part="input focusable"
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
          ?readonly=${this.readonly}
          ?required=${this.required}
          minlength=${ifDefined(this.minlength)}
          maxlength=${ifDefined(this.maxlength)}
          min=${ifDefined(this.min)}
          max=${ifDefined(this.max)}
          step=${ifDefined(this.step as number)}
          pattern=${ifDefined(this.pattern)}
          ?formNoValidate=${this.customValidation}
          .value="${live(this.value)}"
          placeholder=${ifDefined(this.placeholder || undefined)}
          class="${inputClasses}"
          style=${ifDefined(style)}
        />${this._renderTogglePasswordButton()}
      `;
    }

    // inputRender = html`
    //   ${inputRender}
    //   <div
    //     role="alert"
    //     id="invalid-feedback-${this._id}"
    //     class="invalid-feedback form-feedback form-text form-feedback just-validate-error-label"
    //     ?hidden=${!(validityMessage?.length > 0)}
    //   >
    //     <span class="visually-hidden">${this.label}: </span>${validityMessage}
    //   </div>
    // `;

    return inputRender;
  }

  // Render the UI as a function of component state
  override render() {
    const supportTextId = `${this._id}-support-text`;

    const supportTextRender = html` ${when(
      this.supportText,
      () => html` <small class="form-text" id="${supportTextId}">${this.supportText}</small> `,
    )}`;

    const showValidation = true; // this._touched || this.customValidation;
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
          ><slot name="label"></slot
        ></label>

        ${when(
          this.slotted || this.type === 'number',
          () =>
            html`<div
                class="${this.composeClass(
                  'input-group ',
                  this.type === 'number' ? 'input-number' : '',
                  this.type === 'number' && this.adaptive ? 'input-number-adaptive' : '',
                )}"
              >
                ${when(
                  this._slotPrepend,
                  () =>
                    html` <span class="input-group-text">
                      <slot name="prepend" @slotchange=${() => this.requestUpdate()}></slot
                    ></span>`,
                )}
                ${this._renderInput(supportTextId, invalid, validityMessage)}
                ${when(
                  this._slotAppend,
                  () =>
                    html` <div class="input-group-append">
                      <slot name="append" @slotchange=${() => this.requestUpdate()}></slot>
                    </div>`,
                )}
              </div>
              ${validityMessageRender} ${supportTextRender} ${this._renderpasswordStrengthMeter()}`,
          () =>
            html` ${this._renderInput(supportTextId, invalid, validityMessage)} ${validityMessageRender}
            ${supportTextRender} ${this._renderpasswordStrengthMeter()}`,
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
