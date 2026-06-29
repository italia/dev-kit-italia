import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-back',
  standalone: true,
  templateUrl: './back.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BackComponent {
  backStatus = '';

  onBack(e: Event) {
    e.preventDefault();
    this.backStatus = 'Navigazione indietro intercettata: la gestisce il tuo router.';
  }
}
