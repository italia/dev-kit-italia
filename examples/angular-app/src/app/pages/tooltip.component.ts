import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {
  @ViewChild('tooltipControlled') tooltipControlledRef!: ElementRef;

  handleLinkClick(event: Event) {
    event.preventDefault();
  }

  handleShowTooltip() {
    (this.tooltipControlledRef?.nativeElement as any)?.showTooltip();
  }

  handleHideTooltip() {
    (this.tooltipControlledRef?.nativeElement as any)?.hideTooltip();
  }

  handleTooltipOpen(event: Event) {
    console.log('Tooltip aperto', event);
  }

  handleTooltipClose(event: Event) {
    console.log('Tooltip chiuso', event);
  }
}
