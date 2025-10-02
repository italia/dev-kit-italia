import { property, query, state } from 'lit/decorators.js';
import { BaseLocalizedComponent } from '../base-component/base-component.js';
import { FormControlController } from './form-controller.js';

export class FormControl extends BaseLocalizedComponent {
  protected readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ['it-input', 'it-blur', 'it-change'],
  });

  // TODO: verificare se serve davvero con il fatto che usiamo form-controller
  // static formAssociated = true;

  //   @property()
  // internals = this.attachInternals();

  @state()
  _touched = false;

  @query('.it-form__control')
  inputElement!: HTMLInputElement; // from FormControl

  /** The name of the input, submitted as a name/value pair with form data. */
  @property({ type: String, reflect: true }) // from FormControl
  name = '';

  /** The current value of the input, submitted as a name/value pair with form data. */
  @property({ reflect: true })
  value = '';

  /** If the input is disabled. */
  @property({ type: Boolean, reflect: true }) // from FormControl
  disabled = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true, type: String }) form = '';

  /** If you implement your custom validation and you won't to trigger default validation */
  @property({ type: Boolean, reflect: true, attribute: 'custom-validation' })
  customValidation = false;

  /** If your input is invalid from your custom validition, set this attribute with message validation */
  @property({ attribute: 'validity-message', reflect: true })
  validationText: string = '';

  /** Pattern the `value` must match to be valid */
  @property()
  pattern?: string;

  /** The input's minimum value. Only applies to date and number input types. */
  @property()
  min: number | string | Date | undefined;

  /** The input's maximum value. Only applies to date and number input types. */
  @property()
  max: number | string | Date | undefined;

  /**
   * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
   * implied, allowing any numeric value. Only applies to date and number input types.
   */
  @property()
  step: number | 'any' = 'any';

  /** The input's minimum length. */
  @property({ type: Number })
  minlength = -1;

  /** The input's maximum length. */
  @property({ type: Number })
  maxlength = -1;

  /** If the input is required. */
  @property({ type: Boolean, reflect: true }) // from FormControl
  required = false;

  /** Gets the validity state object */
  public get validity(): ValidityState {
    return this.inputElement?.validity;
  }

  @state()
  public validationMessage = '';

  // Form validation methods
  public checkValidity(): boolean {
    const inputValid = this.inputElement?.checkValidity() ?? true; // this.inputElement.checkValidity() è la validazione del browser
    return inputValid;
  }

  /** Gets the associated form, if one exists. */
  public getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  public reportValidity() {
    return this.inputElement.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  public setCustomValidity(message: string) {
    this.inputElement.setCustomValidity(message);
    this.formControlController.updateValidity();
    this.handleValidationMessages();
  }

  // Handlers

  protected _handleReady() {
    requestAnimationFrame(() => {
      this.dispatchEvent(new CustomEvent('it-input-ready', { bubbles: true, detail: { el: this.inputElement } }));
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected _handleInput(e: Event) {
    this.handleValidationMessages();

    this.dispatchEvent(
      new CustomEvent('it-input', {
        detail: { value: this.inputElement.value, el: this.inputElement },
        bubbles: true,
        composed: true,
      }),
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected _handleBlur(e: Event) {
    this._touched = true;
    this.handleValidationMessages();

    this.dispatchEvent(new FocusEvent('it-blur', { bubbles: true, composed: true }));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected _handleFocus(e: Event) {
    this.dispatchEvent(new FocusEvent('it-focus', { bubbles: true, composed: true }));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected _handleClick(e: Event) {
    this.dispatchEvent(new MouseEvent('it-click', { bubbles: true, composed: true }));
  }

  /*
  Override default browser validation messages
   */
  private handleValidationMessages() {
    if (!this.customValidation) {
      const _v = this.inputElement.validity;

      if (_v.valueMissing) {
        this.setCustomValidity(this.$t('validityRequired'));
      } else if (_v.patternMismatch) {
        this.setCustomValidity(this.$t('validityPattern'));
      } else if (_v.tooShort) {
        this.setCustomValidity(this.$t('validityMinlength').replace('{minlength}', this.minlength.toString()));
      } else if (_v.tooLong) {
        this.setCustomValidity(this.$t('validityMaxlength').replace('{maxlength}', this.maxlength.toString()));
      } else {
        /* nothing. Usa il messaggio di errore della validazione
        di default del browser per altri errori di validità come:
        - typeMismatch
        - rangeUnderflow
        - rangeOverflow
        - stepMismatch
        - badInput */

        const otherConstraintErrors =
          _v.typeMismatch || _v.rangeUnderflow || _v.rangeOverflow || _v.stepMismatch || _v.badInput;

        if (!otherConstraintErrors) {
          this.setCustomValidity('');
        }
      }
    }

    this.validationMessage = this.inputElement.validationMessage;
  }

  protected _handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  protected _handleChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    let value: unknown;

    if (target instanceof HTMLInputElement) {
      switch (target.type) {
        case 'checkbox':
        case 'radio':
          value = target.checked;
          break;
        case 'file':
          value = target.files; // FileList
          break;
        default:
          value = target.value;
      }
    } else if (target instanceof HTMLSelectElement) {
      if (target.multiple) {
        value = Array.from(target.selectedOptions).map((o) => o.value);
      } else {
        value = target.value;
      }
    } else {
      // textarea o altri input con value
      value = (target as any).value;
    }

    this.dispatchEvent(
      new CustomEvent('it-change', {
        detail: { value, el: target },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    if (this.customValidation) {
      this.setCustomValidity(this.validationText ?? '');
    } else {
      this.formControlController.updateValidity();
    }
  }
}
