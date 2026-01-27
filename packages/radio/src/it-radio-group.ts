import { html, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { FormControl, FormControlController, RovingTabindexController } from '@italia/globals';
import type { ItRadio } from '@italia/radio';
import styles from './radio-group.scss';

/**
 * Radio group component - manages a collection of radio buttons
 *
 * @element it-radio-group
 * @slot - Contains the `<it-radio>` elements
 *
 */
@customElement('it-radio-group')
export class ItRadioGroup extends FormControl {
  static styles = styles;

  static formAssociated = true;

  /**
   * The name of the radio group, used for form submission
   */
  @property({ type: String })
  name = '';

  /**
   * The currently selected value
   */
  @property({ type: String, reflect: true })
  value = '';

  /**
   * Whether the radio group is disabled
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Whether a selection is required
   */
  @property({ type: Boolean, reflect: true })
  required = false;

  /**
   * Optional prop for visual styling of grouped radios (borders between radios)
   */
  @property({ type: Boolean, reflect: true })
  grouped = false;

  /**
   * Whether the radios are displayed inline (horizontally) or stacked (vertically)
   */
  @property({ type: Boolean, reflect: true })
  inline = false;

  /**
   * Get all slotted radio buttons
   */
  @queryAssignedElements()
  protected _radios!: ItRadio[];

  @queryAssignedElements({ slot: 'label' })
  private _label!: HTMLElement[];

  /**
   * Roving tabindex controller for keyboard navigation
   */
  protected rovingTabindex = new RovingTabindexController<ItRadio>(this, {
    getItems: () => this._radios,
    onSelect: (radio, event) => this.selectRadio(radio, event),
    direction: 'both',
    selectOnFocus: true,
  });

  /**
   * Form control integration
   */
  private _formController = new FormControlController(this as any, {
    value: () => this.value,
    // disabled: () => this.disabled,
    setValue: (control: FormControl, value: unknown) => {
      const radioGroup = control as ItRadioGroup;
      radioGroup.value = value as string;
    },
  });

  /**
   * Override: Custom validity check for radio group
   */
  override get validity(): ValidityState {
    // Fallback: create a custom ValidityState-like object
    const valid = !this.required || !!this.value;
    return {
      valid,
      valueMissing: this.required && !this.value,
      typeMismatch: false,
      patternMismatch: false,
      tooLong: false,
      tooShort: false,
      rangeUnderflow: false,
      rangeOverflow: false,
      stepMismatch: false,
      badInput: false,
      customError: false,
    } as ValidityState;
  }

  /**
   * Override: Check validity for radio group
   */
  override checkValidity(): boolean {
    if (this.required && !this.value) {
      return false;
    }
    return true;
  }

  /**
   * Override: Report validity for radio group
   */
  override reportValidity(): boolean {
    const isValid = this.checkValidity();
    this.handleValidationMessages();
    this._updateInvalidState();
    return isValid;
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  public override setCustomValidity(message: string) {
    // Only trigger validation state if message is non-empty (actual error)
    // Empty message during init or after correction should not trigger invalid state initially

    this.validationMessage = message;
    this.formControlController.updateValidity();
    // Update aria-invalid on group and children immediately
    this._updateInvalidState();
  }

  protected override handleValidationMessages() {
    const _v = this.validity;
    if (!this.customValidation) {
      if (_v.valueMissing) {
        this.setCustomValidity(this.$t('validityRequired'));
      } else this.setCustomValidity('');
    }
  }

  private _updateInvalidState() {
    // Only show aria-invalid if validation has been triggered (ARIA best practice)
    if (!this.formControlController.submittedOnce) {
      return;
    }

    const invalid = this.checkValidity() === false || !!this.validationMessage;
    if (invalid) this.setAttribute('aria-invalid', 'true');
    else this.removeAttribute('aria-invalid');
    this._radios?.forEach((r) => {
      if (invalid) r.setAttribute('aria-invalid', 'true');
      else r.removeAttribute('aria-invalid');
    });

    // Update validation message in light DOM
    this._updateValidationMessage();
  }

  /**
   * Update validation message in light DOM (for aria-describedby cross-boundary support)
   */
  private _updateValidationMessage() {
    const validityMessage = this.validationMessage;
    const messageId = `invalid-feedback-${this._id}`;

    // Find or create validation message element in light DOM
    let messageEl = this.querySelector(`[slot="validation-message"]`);

    if (validityMessage && validityMessage.length > 0) {
      // Create message element if it doesn't exist
      if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.setAttribute('slot', 'validation-message');
        this.appendChild(messageEl);
      }

      // Update message content and attributes
      messageEl.id = messageId;
      messageEl.className = 'form-feedback just-validate-error-label';
      messageEl.setAttribute('role', 'alert');
      messageEl.removeAttribute('hidden');

      const labelText = this._label?.[0]?.textContent || '';
      messageEl.innerHTML = `<span class="visually-hidden">${labelText}: </span>${validityMessage}`;

      // Update aria-describedby on host
      const existingDescribedBy = this._ariaAttributes['aria-describedby'] || '';
      const ariaDescribedBy = existingDescribedBy ? `${existingDescribedBy} ${messageId}` : messageId;
      this.setAttribute('aria-describedby', ariaDescribedBy);
    } else {
      // Remove message element if validation passed
      if (messageEl) {
        messageEl.remove();
      }

      // Update aria-describedby (remove message id)
      const existingDescribedBy = this._ariaAttributes['aria-describedby'] || '';
      if (existingDescribedBy) {
        this.setAttribute('aria-describedby', existingDescribedBy);
      } else {
        this.removeAttribute('aria-describedby');
      }
    }
  }

  connectedCallback() {
    super.connectedCallback?.();
    this._handleReady();
    this.setAttribute('role', 'radiogroup');
  }

  firstUpdated() {
    const checkedRadio = this.querySelector<ItRadio>('it-radio[checked]');
    if (checkedRadio) {
      this.value = checkedRadio.value;
    }
    this.updateRadios();
  }

  private async updateRadios() {
    if (!this.hasUpdated) {
      // Initial validation has to happen after the initial render to allow
      // the buttons to be queries from the rendered <slot> element
      await this.updateComplete;
    }
    const radios = this.querySelectorAll<ItRadio>('it-radio');
    // eslint-disable-next-line no-return-assign, no-param-reassign
    radios.forEach((r) => {
      // eslint-disable-next-line no-param-reassign
      r.checked = r.value === this.value;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();
  }

  /**
   * Sync group value from checked radio (initialization)
   */
  private _syncValueFromRadios() {
    if (!this._radios) {
      return;
    }

    // Find the first checked radio
    const checkedRadio = this._radios.find((r) => r.checked);
    if (checkedRadio) {
      // Sync the group value from the checked radio
      this.value = checkedRadio.value;
    }
  }

  /**
   * PUBLIC API: Called by radio buttons to select themselves
   */
  selectRadio(radio: ItRadio, event: KeyboardEvent | PointerEvent | MouseEvent): void {
    if (radio.disabled || this.disabled) {
      return;
    }

    this.value = radio.value;

    // Uncheck other radios using their public API
    this._radios.forEach((r) => {
      if (r !== radio) {
        // eslint-disable-next-line no-param-reassign
        r.checked = false;
      } else {
        // eslint-disable-next-line no-param-reassign
        r.checked = true;
      }
    });

    // If validation was already triggered, update state after selection
    if (this.formControlController.submittedOnce) {
      // For native validation, clear error if now valid
      if (!this.customValidation) {
        this.handleValidationMessages();
        this._updateInvalidState();
      }
      // For custom validation (JustValidate), the external validator will call setCustomValidity
      // but we still update the state based on current validationMessage
      else {
        this._updateInvalidState();
      }
    }

    if (event.type === 'click' || event.type === 'pointerdown') {
      this._handleClick(event);
    } else {
      this._handleChange(event);
    }
  }

  /**
   * PUBLIC API: Handle keyboard navigation from radio buttons
   */
  handleRadioKeyDown(radio: ItRadio, event: KeyboardEvent): void {
    // Delegate to roving tabindex controller
    const handled = this.rovingTabindex.handleKeydown(radio, event);
    if (handled) this._handleFocus(event);
    else this._handleBlur(event);
  }

  /**
   * Synchronize radio button states with group state
   */
  protected _updateRadiosState() {
    if (!this._radios || this._radios.length === 0) {
      return;
    }

    this._radios.forEach((radio) => {
      // Set checked state based on value
      // eslint-disable-next-line no-param-reassign
      radio.checked = radio.value === this.value;

      // Sync disabled state from group to radios
      // Note: We don't override individual radio's disabled state
      // If the group is disabled, all radios should be disabled
      // But individual radios can be disabled independently
      if (this.disabled) {
        // eslint-disable-next-line no-param-reassign
        radio.disabled = true;
      }
    });

    // Update tabindex using roving tabindex controller
    // Priority: checked and enabled > first enabled > 0
    let tabbableIndex = 0;

    // First, try to find a checked radio that is not disabled
    const checkedEnabledIndex = this._radios.findIndex((r) => r.checked && !r.disabled);
    if (checkedEnabledIndex >= 0) {
      tabbableIndex = checkedEnabledIndex;
    } else {
      // If no checked enabled radio, find the first enabled radio
      const firstEnabledIndex = this._radios.findIndex((r) => !r.disabled);
      if (firstEnabledIndex >= 0) {
        tabbableIndex = firstEnabledIndex;
      }
      // If all radios are disabled, tabbableIndex stays 0 (but controller will set all to -1)
    }

    this.rovingTabindex.updateTabindices(tabbableIndex);
  }

  /**
   * Sync group state (name, grouped, inline, required) to child radios
   * This replaces the need for requestUpdate() calls
   */
  private _syncGroupStateToRadios() {
    if (!this._radios || this._radios.length === 0) {
      return;
    }

    const groupState = {
      name: this.name,
      grouped: this.grouped,
      inline: this.inline,
      required: this.required,
    };

    this._radios.forEach((radio) => {
      radio.syncFromGroup(groupState);
    });
  }

  updated(changed: PropertyValues) {
    super.updated(changed);

    // Update radios when value or name changes
    if (changed.has('value')) {
      this._updateRadiosState();
      this.dispatchEvent(new Event('it-change', { bubbles: true }));
      // Re-validate after value change (for native validation) only if validation was already triggered
      if (!this.customValidation && this.formControlController.submittedOnce) {
        this.handleValidationMessages();
        this._updateInvalidState();
      }
    }

    // If validation message changed, update aria-invalid on group and children
    if (changed.has('validationMessage')) {
      this._updateInvalidState();
    }

    // If relevant group properties changed, sync to child radios
    const relevant = ['grouped', 'inline', 'name', 'required', 'disabled'];
    const hasChanged = Array.from(changed.keys()).some((k) => relevant.includes(String(k)));
    if (hasChanged && this._radios?.length) {
      this._syncGroupStateToRadios();
    }
  }

  /**
   * Handle slot changes (when radios are added/removed)
   */
  protected _handleSlotChange = () => {
    this._syncValueFromRadios();
    this._updateRadiosState();
    // Sync group state to newly added radios
    this._syncGroupStateToRadios();
  };

  protected _handleLabelSlotChange = () => {
    const labelId = this.generateId('it-radio-group-label');
    this._label[0]?.setAttribute('id', labelId);
    this.setAttribute('aria-labelledby', labelId);
  };

  /**
   * Render the component
   */
  render() {
    const validityMessage = this.validationMessage;
    const invalid = validityMessage?.length > 0 || (!this.customValidation && this?.checkValidity() === false);

    const groupWrapperClasses = this.composeClass(
      'it-radio-group',
      'it-form__control',
      this.inline && !this.grouped ? 'it-radio-group-inline' : '',
      this.grouped && !this.inline ? 'it-radio-group-stacked' : '',
      invalid ? 'is-invalid' : '',
    );

    return html`<slot name="label" @slotchange=${this._handleLabelSlotChange}></slot>
      <div class=${groupWrapperClasses}>
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
      <slot name="validation-message"></slot>`;
  }
}

// Declare custom element
declare global {
  interface HTMLElementTagNameMap {
    'it-radio-group': ItRadioGroup;
  }
}
