import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-dimmer',
  standalone: true,
  templateUrl: './dimmer.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DimmerComponent {
  toggle(event: Event): void {
    const btn = event.currentTarget as HTMLElement;
    const wrapper = btn.closest('[data-demo-wrapper]');
    const dimmer = wrapper?.querySelector('it-dimmer') as any;
    dimmer?.toggle();
  }

  show(event: Event): void {
    const btn = event.currentTarget as HTMLElement;
    const wrapper = btn.closest('[data-demo-wrapper]');
    const dimmer = wrapper?.querySelector('it-dimmer') as any;
    dimmer?.show();
  }

  hide(event: Event): void {
    const btn = event.currentTarget as HTMLElement;
    const wrapper = btn.closest('[data-demo-wrapper]');
    const dimmer = wrapper?.querySelector('it-dimmer') as any;
    dimmer?.hide();
  }
}
