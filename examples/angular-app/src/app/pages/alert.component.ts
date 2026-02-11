import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlertComponent {
  handleClose(event: Event): void {
    const alertElement = (event.target as HTMLElement).closest('.alert');
    if (alertElement) {
      alertElement.classList.remove('show');
      setTimeout(() => {
        alertElement.remove();
      }, 150);
    }
  }
}
