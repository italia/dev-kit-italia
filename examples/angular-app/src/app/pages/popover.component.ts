import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-popover',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
})
export class PopoverComponent {
  handleLinkClick(event: Event) {
    event.preventDefault();
  }

  handleMouseEnter(event: Event) {
    const button = event.target as HTMLElement;
    const popover = button.closest('it-popover') as any;
    popover?.openPopover();
  }

  handleMouseLeave(event: Event) {
    const button = event.target as HTMLElement;
    const popover = button.closest('it-popover') as any;
    popover?.closePopover();
  }

  handleFocus(event: Event) {
    const button = event.target as HTMLElement;
    const popover = button.closest('it-popover') as any;
    popover?.openPopover();
  }

  handleBlur(event: FocusEvent) {
    const target = event.relatedTarget as HTMLElement;
    if (!target?.closest?.('it-popover')) {
      const button = event.target as HTMLElement;
      const popover = button.closest('it-popover') as any;
      popover?.closePopover();
    }
  }

  handlePopoverOpen(event: Event) {
    console.log('Popover aperto', event);
  }

  handlePopoverClose(event: Event) {
    console.log('Popover chiuso', event);
  }
}
