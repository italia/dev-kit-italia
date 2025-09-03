import { BaseComponent } from '../base-component/base-component.js';

export interface FormControl extends BaseComponent {
  // Form attributes
  name: string;
  value: unknown;
  disabled?: boolean;
  defaultValue?: unknown;
  defaultChecked?: boolean;
  form?: string;

  // internal attributes
  inputElement: HTMLInputElement;

  // // Constraint validation attributes
  // pattern?: string;
  // min?: number | string | Date;
  // max?: number | string | Date;
  // step?: number | 'any';
  required?: boolean;
  // minlength?: number;
  // maxlength?: number;

  // // Form validation properties
  // readonly validity: ValidityState;
  // readonly validationMessage: string;

  // // Form validation methods
  // checkValidity: () => boolean;
  // getForm: () => HTMLFormElement | null;
  // reportValidity: () => boolean;
  // setCustomValidity: (message: string) => void;
}
