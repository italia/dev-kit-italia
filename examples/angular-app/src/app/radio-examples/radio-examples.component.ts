import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@italia/radio';

@Component({
  selector: 'app-radio-examples',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './radio-examples.component.html',
  styleUrls: ['./radio-examples.component.css'],
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
