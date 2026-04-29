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

      .stepper-example-stack {
        display: flex;
        flex-direction: column;
        gap: var(--bsi-spacing-xl, 2rem);
      }

      .stepper-examples it-stepper::part(content) {
        display: flex;
        min-height: 9rem;
        align-items: center;
        justify-content: center;
        border: 1px dashed var(--bsi-color-border-subtle, var(--bsi-border-color));
        background: var(--bsi-color-background-secondary-lighter, var(--bsi-body-bg));
        color: var(--bsi-body-color);
        text-align: center;
      }

      .stepper-examples it-stepper-step p {
        margin: 0;
        font-size: var(--bsi-font-size-sm);
      }

      .stepper-dark-demo {
        padding: var(--bsi-spacing-l, 1.5rem);
        background: var(--bsi-color-background-inverse, #17324d);
      }

      .stepper-dark-demo it-stepper::part(content) {
        border-color: var(--bsi-color-border-inverse, var(--bsi-color-border-subtle));
        background: transparent;
        color: var(--bsi-color-text-inverse, #fff);
      }
    `,
  ],
})
export class StepperComponent {
  steps = [
    { label: 'Primo contenuto', icon: 'it-calendar' },
    { label: 'Secondo contenuto', icon: 'it-lock' },
    { label: 'Terzo contenuto', icon: 'it-settings' },
    { label: 'Quarto contenuto', icon: 'it-mail' },
    { label: 'Quinto contenuto', icon: 'it-file' },
    { label: 'Sesto contenuto', icon: 'it-check' },
  ];

  headerSteps = this.steps.slice(0, 3);

  logStepperEvent(event: Event): void {
    console.info(event.type, (event as CustomEvent).detail);
  }
}
