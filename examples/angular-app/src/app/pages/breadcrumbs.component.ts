import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class BreadcrumbsComponent {
  title = 'Breadcrumbs';
}
