import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  imports: [NgFor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  styles: [
    `
      .stepper-examples {
        display: flex;
        flex-direction: column;
        gap: var(--bsi-spacing-xl, 2rem);
      }

      .stepper-variant-stack {
        display: flex;
        flex-direction: column;
        gap: var(--bsi-spacing-xl, 2rem);
      }
    `,
  ],
})
export class StepperComponent {
  steps = [
    { label: 'Primo contenuto', icon: 'it-calendar' },
    { label: 'Secondo contenuto', icon: 'it-lock' },
    { label: 'Terzo contenuto', icon: 'it-settings' },
  ];

  logStepperEvent(event: Event): void {
    console.info(event.type, (event as CustomEvent).detail);
  }
}
