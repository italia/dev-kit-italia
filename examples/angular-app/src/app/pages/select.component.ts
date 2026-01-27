/* eslint-disable class-methods-use-this */
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  templateUrl: './select.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SelectComponent {
  constructor() {}
}
