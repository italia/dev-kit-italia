import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'chip-page',
  templateUrl: './chip.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChipComponent {
  handleDismiss(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const chip = target.closest('it-chip');

    // Controlla se la chip è disabilitata
    if (chip?.hasAttribute('is-disabled')) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (chip) chip.remove();
  }

  handleKeyDown(event: KeyboardEvent) {
    const target = event.currentTarget as HTMLElement;
    const chip = target.closest('it-chip');

    // Lascia passare Tab e Shift+Tab per la navigazione
    if (event.key === 'Tab') {
      return;
    }

    // Controlla se la chip è disabilitata per altri tasti
    if (chip?.hasAttribute('is-disabled')) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (chip) chip.remove();
    }
  }
}
