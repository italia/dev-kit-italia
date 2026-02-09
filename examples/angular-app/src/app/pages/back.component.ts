import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-back',
  standalone: true,
  templateUrl: './back.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BackComponent {
  // eslint-disable-next-line class-methods-use-this
  goBack(event?: Event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    window.history.back();
  }
}
