import { FormControl, FormControlController } from '@italia/globals';
import { html, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ItCheckbox } from '@italia/checkbox';
import styles from './checkbox-group.scss';

@customElement('it-checkbox-group')
export class ItCheckboxGroup extends FormControl {
  static styles = styles;

  @property({ type: Boolean, reflect: true })
  required = false;

  /** Draws checkboxes inline, side by side. */
  @property({ type: Boolean, reflect: true })
  inline = false;

  /** Draws checkboxes in groups. */
  @property({ type: Boolean, reflect: true })
  group = false;

  @property({ type: String, reflect: true })
  name = ''; // Il name del gruppo

  // Query per le checkbox assegnate nello slot
  @queryAssignedElements({ selector: 'it-checkbox' })
  checkboxes!: ItCheckbox[];

  @queryAssignedElements({ slot: 'legend' })
  private _label!: HTMLElement[];

  // Override del controller per usare le funzioni di validazione di gruppo
  protected override readonly formControlController: FormControlController = new FormControlController(this, {
    // Il valore è un array dei valori delle checkbox selezionate
    value: (control: FormControl) =>
      (control as ItCheckboxGroup).checkboxes.filter((cb) => cb.checked).map((cb) => cb.value || 'true'),
    // Il name è quello del gruppo
    name: (control: FormControl) => (control as ItCheckboxGroup).name,
    // La validità è gestita da noi con checkValidity di gruppo
    checkValidity: (control: FormControl) => (control as ItCheckboxGroup).checkValidity(),
    reportValidity: (control: FormControl) => (control as ItCheckboxGroup).reportValidity(),
    // Non implementiamo setValue qui, gestito dalle singole checkbox
    setValue: () => {},
    // Ascoltiamo l'input su tutti i cambi di stato delle checkbox
    assumeInteractionOn: ['it-change'],
  });

  // Questo state servirà per forzare il re-render del messaggio di errore
  @state()
  private _groupValid = true;

  get selectedValues(): string[] {
    if (!this.value) return [];
    try {
      return JSON.parse(this.value);
    } catch {
      return [];
    }
  }

  set selectedValues(vals: string[]) {
    this.value = JSON.stringify(vals);
  }

  public has(v: string) {
    return this.selectedValues.indexOf(v) >= 0;
  }

  override connectedCallback() {
    super.connectedCallback?.();
    this.addEventListener('it-change', this._handleGroupChange);
  }

  override disconnectedCallback() {
    super.disconnectedCallback?.();
    this.removeEventListener('it-change', this._handleGroupChange);
  }

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
      customError: this.customValidation && this.validationText?.length > 0,
    } as ValidityState;
  }

  // Ascolta gli 'it-change' bubblati dalle singole checkbox
  private _handleGroupChange() {
    // Aggiorna this.value con l'array corrente delle checkbox selezionate
    const selected = this.checkboxes.filter((cb) => cb.checked).map((cb) => cb.value || 'true');

    this.value = JSON.stringify(selected);

    // Quando qualcosa cambia, ricalcola la validità
    this.handleValidationMessages();
    this.requestUpdate(); // Aggiorna la vista
  }

  /**
   * Override di checkValidity per la logica di gruppo.
   */
  override checkValidity(): boolean {
    if (!this.required) {
      return true; // Non è obbligatorio
    }

    // Almeno una checkbox deve essere selezionata
    const atLeastOneChecked = this.checkboxes.some((cb) => cb.checked);

    // Aggiorna lo stato di validità del gruppo
    this._groupValid = atLeastOneChecked;

    return atLeastOneChecked;
  }

  /**
   * Override di reportValidity per mostrare l'errore a livello di gruppo.
   */
  override reportValidity(): boolean {
    // Chiama la logica di validazione personalizzata
    const isValid = this.checkValidity();

    // Aggiorna il messaggio di validazione se invalido
    if (!isValid) {
      this.validationMessage = this.$t('validityGroupRequired'); // Usa la tua chiave di traduzione per "Campo obbligatorio"
    } else {
      this.validationMessage = '';
    }

    // Forzare l'aggiornamento di FormControlController che gestirà data-invalid/data-valid
    this.formControlController.updateValidity();
    this.requestUpdate();

    return isValid;
  }

  /**
   * Il tuo FormControl ha già un handleValidationMessages che
   * setta this.validationMessage. Aggiorniamolo per la logica di gruppo.
   */
  protected override handleValidationMessages() {
    if (!this.customValidation && this.formControlController.submittedOnce) {
      this.validationMessage = this.checkValidity() ? '' : this.$t('validityGroupRequired');
    }
    if (this.customValidation) {
      this.validationMessage = this.inputElement.validationMessage;
    }
  }

  /**
   * Sync group state (name, grouped, inline, required, disabled, checked) to child checkboxes
   * This replaces the need for requestUpdate() calls
   */
  private _syncGroupStateToChildren() {
    if (!this.checkboxes || this.checkboxes.length === 0) {
      return;
    }

    this.checkboxes.forEach((cb) => {
      // eslint-disable-next-line no-param-reassign
      cb.name = this.name;
      // eslint-disable-next-line no-param-reassign
      cb.group = this.group || !this.inline;
      // eslint-disable-next-line no-param-reassign
      cb.inline = this.inline;
      // eslint-disable-next-line no-param-reassign
      cb.required = this.required;

      if (this.disabled) {
        // eslint-disable-next-line no-param-reassign
        cb.disabled = this.disabled;
      }
      if (!cb.hasAttribute('checked')) {
        // eslint-disable-next-line no-param-reassign
        cb.checked = this.has(cb.value);
      }
    });
  }

  updated(changed: PropertyValues) {
    super.updated(changed);

    // Update radios when value or name changes
    if (changed.has('value') || (changed.has('validationText') && this.customValidation)) {
      // Re-validate after value change (for native validation) only if validation was already triggered

      this.handleValidationMessages();
    }

    // If relevant group properties changed, sync to child checkboxes
    const relevant = ['group', 'inline', 'name', 'required', 'disabled', 'value'];
    const hasChanged = Array.from(changed.keys()).some((k) => relevant.includes(String(k)));
    if (hasChanged && this.checkboxes?.length) {
      this._syncGroupStateToChildren();
    }
  }

  // Render per mostrare l'errore (usa la tua logica di rendering dell'errore)
  // All'interno di ItCheckboxGroup (metodo render)

  override render() {
    const showValidation = this.formControlController.submittedOnce || this.customValidation; // true; // this._touched || this.customValidation;
    const validityMessage = (showValidation ? this.validationMessage : '') ?? '';

    // Determina lo stato di invalidità in base alla validazione di gruppo
    const invalid = validityMessage?.length > 0 || !this._groupValid;

    const errorId = `invalid-feedback-${this._id}`;

    // Messaggio di validazione per il gruppo
    const validityMessageRender = html`<div
      role="alert"
      id="${errorId}"
      class="form-feedback just-validate-error-label"
      ?hidden=${!(validityMessage?.length > 0)}
    >
      <span class="visually-hidden">${this._label?.[0]?.textContent || ''}: </span>
      ${validityMessage}
    </div>`;

    // il pattern per errori nel form è stato preso da qui https://design-system.w3.org/styles/form-errors.html
    return html`
      <fieldset
        class="it-checkbox-group it-form__control"
        id="${this._id}"
        aria-describedby=${ifDefined(invalid ? errorId : undefined)}
        aria-required=${ifDefined(this.required ? 'true' : undefined)}
        part="fieldset"
      >
        <legend part="legend">
          <slot name="legend"></slot>
        </legend>

        <slot @slotchange=${this._handleSlotChange}></slot>
        ${when(invalid, () => validityMessageRender)}
      </fieldset>
    `;
  }

  public override setCustomValidity(message: string) {
    if (!this.customValidation) {
      this.inputElement.setCustomValidity(message);
      this.validationMessage = this.inputElement.validationMessage;
    } else {
      this.validationMessage = message;
    }
    this.formControlController.updateValidity();
  }

  // Metodo per gestire l'assegnazione iniziale e re-assegnazione delle checkbox
  private _handleSlotChange() {
    // Dopo l'assegnazione, forziamo un controllo di validità per inizializzare _groupValid
    this.handleValidationMessages();
    this.requestUpdate();
  }
}
