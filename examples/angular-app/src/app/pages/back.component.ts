import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back',
  standalone: true,
  templateUrl: './back.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BackComponent {
  constructor(private location: Location) {}

  onBack(e: Event) {
    e.preventDefault();
    this.location.back();
  }
}
