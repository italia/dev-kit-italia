import { FormControl, FormControlController } from '@italia/globals';
import { html } from 'lit';
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
      customError: false,
    } as ValidityState;
  }

  // Ascolta gli 'it-change' bubblati dalle singole checkbox
  private _handleGroupChange() {
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
    this.validationMessage = this.checkValidity() ? '' : this.$t('validityGroupRequired');
  }

  // Render per mostrare l'errore (usa la tua logica di rendering dell'errore)
  // All'interno di ItCheckboxGroup (metodo render)

  override render() {
    const showValidation = true;
    const validityMessage = (showValidation ? (this.validationMessage ?? '') : '') ?? '';

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

  // Metodo per gestire l'assegnazione iniziale e re-assegnazione delle checkbox
  private _handleSlotChange() {
    // Dopo l'assegnazione, forziamo un controllo di validità per inizializzare _groupValid
    if (this.formControlController.submittedOnce) {
      this.handleValidationMessages();
    }
    this.requestUpdate();
  }
}
