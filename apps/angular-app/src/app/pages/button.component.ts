import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonComponent {
  onButtonClick(event: Event): void {
    alert('Mi hai cliccato!');
  }
}
