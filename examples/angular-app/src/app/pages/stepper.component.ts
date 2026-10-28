import { NgFor } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnDestroy, ViewChild } from '@angular/core';

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
export class StepperComponent implements AfterViewInit, OnDestroy {
  @ViewChild('stepperForm', { static: false }) stepperFormRef?: ElementRef;
  @ViewChild('notificationForm', { static: false }) notificationFormRef?: ElementRef;

  steps = [
    { label: 'Primo contenuto', icon: 'it-calendar' },
    { label: 'Secondo contenuto', icon: 'it-lock' },
    { label: 'Terzo contenuto', icon: 'it-settings' },
  ];

  private listeners: Array<{ el: Element; event: string; handler: (e: Event) => void }> = [];

  logStepperEvent(event: Event): void {
    console.info(event.type, (event as CustomEvent).detail);
  }

  ngAfterViewInit(): void {
    const stepper = this.stepperFormRef?.nativeElement;
    const notification = this.notificationFormRef?.nativeElement;
    if (!stepper || !notification) return;

    const form = stepper.querySelector('form') as HTMLFormElement | null;
    if (!form) return;

    const isFirstStepInvalid = (step: number): boolean => step === 0 && !form.checkValidity();

    const handleFormChange = () => {
      stepper.nextDisabled = isFirstStepInvalid(stepper.current);
    };

    const handleStepChange = (event: Event): void => {
      const { step } = (event as CustomEvent).detail;
      stepper.showConfirm = step >= stepper.querySelectorAll('it-stepper-step').length - 1;
      stepper.nextDisabled = isFirstStepInvalid(step);
    };

    const handleConfirm = () => notification.show();

    handleFormChange();

    form.addEventListener('it-input', handleFormChange);
    stepper.addEventListener('it-stepper-change', handleStepChange);
    stepper.addEventListener('it-stepper-confirm', handleConfirm);

    this.listeners.push(
      { el: form, event: 'it-input', handler: handleFormChange },
      { el: stepper, event: 'it-stepper-change', handler: handleStepChange },
      { el: stepper, event: 'it-stepper-confirm', handler: handleConfirm },
    );
  }

  ngOnDestroy(): void {
    this.listeners.forEach(({ el, event, handler }) => {
      el.removeEventListener(event, handler);
    });
    this.listeners = [];
  }
}
