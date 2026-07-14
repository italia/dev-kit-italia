import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlertComponent {
  // eslint-disable-next-line class-methods-use-this
  onAlertClose(e: Event): void {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    if (window.confirm('Vuoi davvero chiudere questo avviso?')) {
      (e.currentTarget as HTMLElement & { close(): void }).close();
    }
  }
}
