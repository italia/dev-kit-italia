import { BaseComponent } from '../base-component/base-component.js';

export interface FormControl extends BaseComponent {
  // Form attributes
  name: string;
  value: unknown;
  disabled?: boolean;
  defaultChecked?: boolean;
  form?: string;
  customValidation?: boolean; // se true, la validazione nativa del browser non viene eseguita
  validationText?: string; // messaggio di errore da mostrare in caso di validazione custom
  // internal attributes
  inputElement: HTMLInputElement;

  // Constraint validation attributes
  pattern?: string;
  min?: number | string | Date;
  max?: number | string | Date;
  step?: number | 'any';
  minlength?: number;
  maxlength?: number;
  required?: boolean;

  // Form validation properties
  readonly validity: ValidityState; // getter methods to be implemented
  readonly validationMessage: string; // getter methods to be implemented

  // // Form validation methods
  checkValidity: () => boolean;
  getForm: () => HTMLFormElement | null;
  reportValidity: () => boolean;
  setCustomValidity: (message: string) => void;
}
