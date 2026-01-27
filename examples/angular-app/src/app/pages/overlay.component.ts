/* eslint-disable class-methods-use-this */
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  templateUrl: './overlay.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OverlayComponent {}
