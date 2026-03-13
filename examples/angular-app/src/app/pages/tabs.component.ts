import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class TabsComponent {
  title = 'Tabs';
}
