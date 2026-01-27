import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalComponent {
  longContent = Array(20).fill(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  );

  // eslint-disable-next-line class-methods-use-this
  closeModal(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const modal = target.closest('it-modal') as any;
    modal?.hide();
  }
}
