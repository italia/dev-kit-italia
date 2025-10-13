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

  selectedGroup = 'opzione1';

  handleChange(event: Event, property: 'selectedValue' | 'selectedInline' | 'selectedGroup') {
    const target = event.target as HTMLElement & { value: string };
    this[property] = target.value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    alert(`Form valido! Dati: ${JSON.stringify(data)}`);
  }
}
