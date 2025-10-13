import { html, PropertyValues } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { FormControl, FormControlController } from '@italia/globals';
import { radioGroupContext } from './radio-context.js';
import type { ItRadio } from './it-radio.js';

/**
 * Radio group component - manages a collection of radio buttons
 *
 * @element it-radio-group
 * @slot - Contains the `<it-radio>` elements
 *
 * @cssprop --radio-group-gap - Gap between radio buttons (default: 0.5rem)
 */
export class ItRadioGroup extends FormControl {
  static formAssociated = true;

  /**
   * Provide this group instance to child radio buttons via Lit Context
   */
  @provide({ context: radioGroupContext })
  private _context = this;

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
   * Optional label for the radio group (alternative to using <legend>)
   */
  @property({ type: String })
  label = '';

  /**
   * Get all slotted radio buttons
   */
  @queryAssignedElements({ selector: 'it-radio' })
  private _radios!: ItRadio[];

  private _internals?: ElementInternals;

  private _hasUserInteracted = false;
  
  private _initialized = false;

  /**
   * Form control integration
   */
  private formController = new FormControlController(this as any, {
    value: () => this.value,
    disabled: () => this.disabled,
  });

  constructor() {
    super();

    // Attach ElementInternals for form participation
    if ('attachInternals' in this) {
      this._internals = (this as any).attachInternals();
    }
  }

  connectedCallback() {
    super.connectedCallback();

    // Set ARIA role for screen readers
    this.setAttribute('role', 'radiogroup');

    // Set aria-label if label is provided
    if (this.label) {
      this.setAttribute('aria-label', this.label);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('change', this._handleRadioChange);
  }

  /**
   * Initialize radio buttons and set up event listeners
   */
  private _setupRadios() {
    // Listen for change events from child radios
    this.addEventListener('change', this._handleRadioChange);

    // Sync value from checked radio
    this._syncValueFromRadios();

    // Initialize radio states
    this._updateRadiosState();

    // Update form value
    this._updateFormValue();
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
    this._hasUserInteracted = true;

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
    this._updateFormValue();

    // Dispatch change event from the group if value changed
    if (oldValue !== this.value) {
      this.dispatchEvent(
        new Event('change', {
          bubbles: true,
          composed: true,
        }),
      );
    }

    // Clear validity errors if required field is now filled
    if (this.required && this._internals) {
      this._internals.setValidity({});
    }
  }

  /**
   * PUBLIC API: Handle keyboard navigation from radio buttons
   */
  handleRadioKeyDown(radio: ItRadio, event: KeyboardEvent): void {
    // Only handle arrow keys
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      return;
    }

    event.preventDefault();

    // Get radios dynamically to ensure we have the latest state
    const radios = Array.from(this.querySelectorAll<ItRadio>('it-radio'));
    const currentIndex = radios.indexOf(radio);
    if (currentIndex === -1) {
      return;
    }

    let nextIndex = currentIndex;

    // Determine next radio based on arrow key
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      // Move to previous radio (wrap around)
      nextIndex = currentIndex > 0 ? currentIndex - 1 : radios.length - 1;
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      // Move to next radio (wrap around)
      nextIndex = currentIndex < radios.length - 1 ? currentIndex + 1 : 0;
    }

    // Skip disabled radios
    let attempts = 0;
    while (radios[nextIndex]?.disabled && attempts < radios.length) {
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        nextIndex = nextIndex > 0 ? nextIndex - 1 : radios.length - 1;
      } else {
        nextIndex = nextIndex < radios.length - 1 ? nextIndex + 1 : 0;
      }
      attempts += 1;
    }

    const nextRadio = radios[nextIndex];
    if (nextRadio && !nextRadio.disabled) {
      // Select and focus the next radio
      this.selectRadio(nextRadio);
      nextRadio.focus();
    }
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
  private _updateFormValue() {
    if (this._internals && this.name) {
      // Always set form value, even if empty
      // This ensures the key exists in FormData (like native radio buttons)
      this._internals.setFormValue(this.value || '');
    }
  }

  /**
   * Synchronize radio button states with group state
   */
  private _updateRadiosState() {
    if (!this._radios || this._radios.length === 0) {
      return;
    }

    const hasChecked = this._radios.some((r) => r.checked);

    this._radios.forEach((radio, index) => {
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

      // NOTE: Following Spectrum pattern - NO aria-setsize/aria-posinset
      // The role="radiogroup" on the parent and role="radio" on children
      // is enough for screen readers to announce the correct count

      // Roving tabindex pattern:
      // Only the checked radio (or first if none checked) should be tabbable
      if (radio.disabled) {
        // eslint-disable-next-line no-param-reassign
        radio.tabIndex = -1;
      } else if (hasChecked) {
        // eslint-disable-next-line no-param-reassign
        radio.tabIndex = radio.checked ? 0 : -1;
      } else {
        // eslint-disable-next-line no-param-reassign
        radio.tabIndex = index === 0 ? 0 : -1;
      }
    });
  }

  updated(changed: PropertyValues) {
    super.updated(changed);

    // Update radios when value or name changes
    if (changed.has('value') || changed.has('name')) {
      this._updateRadiosState();
      this._updateFormValue();
    }

    // Update disabled state
    if (changed.has('disabled')) {
      this._radios?.forEach((radio) => {
        if (radio) {
          // eslint-disable-next-line no-param-reassign
          radio.disabled = this.disabled;
        }
      });
    }

    // Update aria-label
    if (changed.has('label')) {
      if (this.label) {
        this.setAttribute('aria-label', this.label);
      } else {
        this.removeAttribute('aria-label');
      }
    }
  }

  /**
   * Get the validity state of the radio group
   */
  get validity(): ValidityState {
    return this._internals?.validity ?? ({} as ValidityState);
  }

  /**
   * Check if the radio group is valid
   */
  checkValidity(): boolean {
    if (this.required && !this.value) {
      return false;
    }
    return true;
  }

  /**
   * Report validity and show validation UI
   */
  reportValidity(): boolean {
    const isValid = this.checkValidity();

    if (!isValid && this._internals && this._radios.length > 0) {
      this._internals.setValidity(
        { valueMissing: true },
        "Seleziona un'opzione",
        this._radios[0], // Reference first radio for focus
      );

      // Focus the first radio
      this._radios[0].focus();
    } else if (isValid && this._internals) {
      this._internals.setValidity({});
    }

    return isValid;
  }

  /**
   * Handle slot changes (when radios are added/removed)
   */
  private _handleSlotChange = () => {
    // Initialize on first slot change
    if (!this._initialized && this._radios && this._radios.length > 0) {
      // Wait for all radios to complete their updates
      Promise.all(this._radios.map((r) => r.updateComplete)).then(() => {
        if (!this._initialized) {
          this._initialized = true;
          this._setupRadios();
        }
      });
    } else if (this._initialized) {
      // Update state when radios change after initialization
      this._updateRadiosState();
    }
  };

  /**
   * Render the component
   */
  render() {
    return html` <slot @slotchange=${this._handleSlotChange}></slot> `;
  }
}

// Declare custom element
declare global {
  interface HTMLElementTagNameMap {
    'it-radio-group': ItRadioGroup;
  }
}

// Define custom element if not already defined
if (!customElements.get('it-radio-group')) {
  customElements.define('it-radio-group', ItRadioGroup);
}
