import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-sticky',
  standalone: true,
  templateUrl: './sticky.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StickyComponent {
  // Method used in template
  handleResize(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const section = target.closest('section');
    const container = section?.querySelector('.container-resizable') as HTMLElement;
    if (container) {
      container.style.width = `${target.value}px`;
      container.getBoundingClientRect();
    }
  }
}
