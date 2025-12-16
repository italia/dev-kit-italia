/* eslint-disable class-methods-use-this */
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormComponent {
  formDataToObject = (fd: any) => {
    const obj: any = {};

    for (const [key, value] of fd.entries()) {
      if (obj[key] !== undefined) {
        // Se la key esiste già → trasformala in array
        if (!Array.isArray(obj[key])) {
          obj[key] = [obj[key]];
        }
        obj[key].push(value);
      } else {
        obj[key] = value;
      }
    }

    return obj;
  };

  handleSubmit = (formElement: HTMLFormElement) => {
    const formData = new FormData(formElement);
    const data = this.formDataToObject(formData);
    console.log(data);
    // Handle form submission logic here
    /*
    Per i campi di tipo checkbox multiple (stesso [name] e valori delle checkbox diversi),
    il valore si ottiene con formData.getAll(field_name) dove field_name è il valore dell'attributo [name] delle checkbox
    */
  };
}
