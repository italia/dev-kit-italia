import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  // Helper per generare array di numeri per i loop
  getRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }

  // Per la sezione "More Mode"
  pagesList = this.getRange(50);

  handlePageSizeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    console.log('PageChanger:', target.value);
  }
}
