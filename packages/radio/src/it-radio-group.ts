import { html, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { FormControl, FormControlController, RovingTabindexController } from '@italia/globals';
import type { ItRadio } from './it-radio.js';

/**
 * Radio group component - manages a collection of radio buttons
 *
 * @element it-radio-group
 * @slot - Contains the `<it-radio>` elements
 *
 * @cssprop --radio-group-gap - Gap between radio buttons (default: 0.5rem)
 */
@customElement('it-radio-group')
export class ItRadioGroup extends FormControl {
  static formAssociated = true;

  /**
   * The name of the radio group, used for form submission
   */
  @property({ type: String })
  name = '';

  /**
   * The currently selected value
   */
  @state()
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
   * Optional label for the radio group (alternative to using <legend>)
   */
  @property({ type: String })
  label = '';

  /**
   * Get all slotted radio buttons
   */
  @queryAssignedElements({ selector: 'it-radio', slot: '' })
  private _radios!: ItRadio[];

  @queryAssignedElements({ slot: 'legend' })
  private _legend!: any;

  /**
   * Roving tabindex controller for keyboard navigation
   */
  private rovingTabindex = new RovingTabindexController<ItRadio>(this, {
    getItems: () => this._radios,
    onSelect: (radio) => this.selectRadio(radio),
    direction: 'both',
    selectOnFocus: true,
  });

  /**
   * Form control integration
   */
  private formController = new FormControlController(this as any, {
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

    if (!isValid) {
      // Focus the first enabled radio for better UX
      const firstEnabledRadio = this._radios?.find((r) => !r.disabled);
      if (firstEnabledRadio) {
        firstEnabledRadio.focus();
      }
    }

    return isValid;
  }

  connectedCallback() {
    super.connectedCallback?.();
    this._handleReady();
    this._setupRadios();
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();
    // this.removeEventListener('it-radio-keydown', this.handleRadioKeyDown);
    // this.removeEventListener('it-radio-activate', this.selectRadio);
    // this.removeEventListener('change', this._handleRadioChange);
  }

  // firstUpdated() {
  //   this._setupRadios();
  // }

  /**
   * Initialize radio buttons and set up event listeners
   */
  private _setupRadios() {
    // Listen for change events from child radios
    // this.addEventListener('change', this._handleRadioChange);

    // Sync value from checked radio
    this._syncValueFromRadios();

    // Initialize radio states
    this._updateRadiosState();
    this.setAttribute('role', 'radiogroup');

    // Set aria-label if label is provided
    if (this.label) {
      this.setAttribute('aria-label', this.label);
    }
    // Update form value
    // this._updateFormValue();
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
  selectRadio(radio: ItRadio): void {
    if (radio.disabled || this.disabled) {
      return;
    }

    const oldValue = this.value;
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

    // Update tabindex for roving tabindex pattern
    this._updateRadiosState();

    // Update form value
    // this._updateFormValue();

    // Dispatch change event from the group if value changed
    if (oldValue !== this.value) {
      this.dispatchEvent(
        new Event('change', {
          bubbles: true,
          composed: true,
        }),
      );
    }

    // // Clear validity errors if required field is now filled
    // if (this.required && this._internals) {
    //   this._internals.setValidity({});
    // }
  }

  /**
   * PUBLIC API: Handle keyboard navigation from radio buttons
   */
  handleRadioKeyDown(radio: ItRadio, event: KeyboardEvent): void {
    // Delegate to roving tabindex controller
    this.rovingTabindex.handleKeydown(radio, event);
  }

  /**
   * Handle change events from child radio buttons
   */
  private _handleRadioChange = (e: Event) => {
    const radio = e.target as ItRadio;

    // Only process if the radio is actually checked
    if (radio.checked) {
      // Use the public API to select this radio
      this.selectRadio(radio);
    }
  };

  /**
   * Update form value via ElementInternals
   */
  // private _updateFormValue() {
  //   if (this._internals && this.name) {
  //     // Always set form value, even if empty
  //     // This ensures the key exists in FormData (like native radio buttons)
  //     this._internals.setFormValue(this.value || '');
  //   }
  // }

  /**
   * Synchronize radio button states with group state
   */
  private _updateRadiosState() {
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
      // Don't re-enable radios that are individually disabled
      // (we only propagate disabled=true from group to radios, not false)

      // Set name for grouping (important for native behavior)
      if (this.name) {
        radio.setAttribute('data-group-name', this.name);
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

  updated(changed: PropertyValues) {
    super.updated(changed);

    // Update radios when value or name changes
    if (changed.has('value')) {
      this._updateRadiosState();
      this.dispatchEvent(new Event('change', { bubbles: true }));
      // this._updateFormValue();
    }

    // Update disabled state
    // if (changed.has('disabled')) {
    // this._radios?.forEach((radio) => {
    //   if (radio) {
    //     // eslint-disable-next-line no-param-reassign
    //     radio.disabled = this.disabled;
    //   }
    // });
    // }

    // // Update aria-label
    // if (changed.has('label')) {
    //   if (this.label) {
    //     this.setAttribute('aria-label', this.label);
    //   } else {
    //     this.removeAttribute('aria-label');
    //   }
    // }
  }

  // /**
  //  * Get the validity state of the radio group
  //  */
  // get validity(): ValidityState {
  //   return this._internals?.validity ?? ({} as ValidityState);
  // }

  // /**
  //  * Check if the radio group is valid
  //  */
  // checkValidity(): boolean {
  //   if (this.required && !this.value) {
  //     return false;
  //   }
  //   return true;
  // }

  /**
   * Report validity and show validation UI
   */
  // reportValidity(): boolean {
  //   const isValid = this.checkValidity();

  //   if (!isValid && this._internals && this._radios.length > 0) {
  //     this._internals.setValidity(
  //       { valueMissing: true },
  //       "Seleziona un'opzione",
  //       this._radios[0], // Reference first radio for focus
  //     );

  //     // Focus the first radio
  //     this._radios[0].focus();
  //   } else if (isValid && this._internals) {
  //     this._internals.setValidity({});
  //   }

  //   return isValid;
  // }

  /**
   * Handle slot changes (when radios are added/removed)
   */
  private _handleSlotChange = () => {
    this._updateRadiosState();
  };

  /**
   * Render the component
   */
  render() {
    return html`<fieldset>
      <legend><slot name="legend"></slot></legend>
      <slot @slotchange=${this._handleSlotChange}></slot>
    </fieldset>`;
  }
}

// Declare custom element
declare global {
  interface HTMLElementTagNameMap {
    'it-radio-group': ItRadioGroup;
  }
}
