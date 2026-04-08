/* eslint-disable class-methods-use-this */
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-navscroll',
  standalone: true,
  templateUrl: './navscroll.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavscrollComponent {
  constructor() {}
}
