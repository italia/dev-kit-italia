import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-radio-examples',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio-examples.component.html',
})
export class RadioExamplesComponent {
  selectedValue = 'opzione1';

  selectedInline = 'opzione1';

  selectedGrouped = 'opzione1';

  handleChange(event: Event, property: 'selectedValue' | 'selectedInline' | 'selectedGrouped') {
    const target = event.target as HTMLElement & { value: string };
    this[property] = target.value;
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    // eslint-disable-next-line no-alert
    alert(`Form valido! Dati: ${JSON.stringify(data)}`);
  }
}
