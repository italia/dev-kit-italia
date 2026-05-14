import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements AfterViewInit {
  // Helper per generare array di numeri per i loop
  getRange(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }

  // Per la sezione "More Mode"
  pagesList = this.getRange(50);

  ngAfterViewInit() {
    // Jump to page event listener
    const jumperInput = document.getElementById('jumper-example');
    const pagination = document.getElementById('jump');
    if (jumperInput && pagination) {
      const pTot = parseInt(pagination.getAttribute('total') || '10', 10);

      jumperInput.addEventListener('it-change', () => {
        const pageNumber = (jumperInput as any).value;
        if (pageNumber < 1 || pageNumber > pTot) {
          console.log('JumpToPage: Numero di pagina non valido', pageNumber);
          return;
        }
        console.log('JumpToPage: Vai a pagina', pageNumber);
        (pagination as any).value = pageNumber.toString();
      });
    }
  }

  handlePageSizeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    console.log('PageChanger:', target.value);
  }
}
