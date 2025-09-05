/* eslint-disable class-methods-use-this */
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormComponent {
  handleSubmit = (formElement: HTMLFormElement) => {
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // Handle form submission logic here
  };
}
