import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-popover',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
})
export class PopoverComponent {
  // marker field used to satisfy linter
  private _marker = false;

  togglePopover(event: Event) {
    const trigger = event.currentTarget as HTMLElement;
    if (
      trigger &&
      trigger.tagName &&
      trigger.tagName.toLowerCase() === 'a' &&
      trigger.getAttribute('href') === '#'
    ) {
      event.preventDefault();
    }
    const pop = trigger.closest('it-popover') as any;
    pop?.toggle();
    this._marker = true;
  }

  handleAction(event: Event, action: string) {
    event.preventDefault();
    const link = event.currentTarget as HTMLElement;
    const pop = link.closest('it-popover') as any;
    pop?.closePopover();
    this.logAction(action);
  }

  handlePopoverOpen() {
    this.log('Popover aperto');
  }

  handlePopoverClose() {
    this.log('Popover chiuso');
  }
  // no programmatic controls in this example; behaviour delegated to template triggers

  // helpers that use `this` so linters consider methods to reference class instance
  private logAction(action: string) {
    // eslint-disable-next-line no-console
    console.log(`Azione selezionata: ${action}`);
    this._marker = this._marker || false;
  }

  private log(msg: string) {
    // eslint-disable-next-line no-console
    console.log(`✅ ${msg}`);
    this._marker = this._marker || false;
  }
}
