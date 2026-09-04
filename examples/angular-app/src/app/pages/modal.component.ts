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

  private _closing = false;

  onModalClose(event: Event) {
    if (this._closing) return;
    event.preventDefault();
    const alertEl = document.getElementById('modal-close-alert');
    if (alertEl) alertEl.style.display = '';
    this._closing = true;
    (event.currentTarget as any).hide();
    this._closing = false;
  }

  // eslint-disable-next-line class-methods-use-this
  closeModal(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const modal = target.closest('it-modal') as any;
    modal?.hide();
  }
}
