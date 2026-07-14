import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'chip-page',
  templateUrl: './chip.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChipComponent {
  // eslint-disable-next-line class-methods-use-this
  onChipClose(e: Event) {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    if (window.confirm('Rimuovere questa chip?')) {
      (e.currentTarget as HTMLElement & { close(): void }).close();
    }
  }
}
