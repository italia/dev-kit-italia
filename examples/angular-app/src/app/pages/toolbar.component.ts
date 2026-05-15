import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToolbarComponent {}
