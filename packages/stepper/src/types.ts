export const STEPPER_HEADER_VARIANTS = ['text', 'icons', 'numbers'] as const;
export type StepperHeaderVariant = (typeof STEPPER_HEADER_VARIANTS)[number];

export const STEPPER_MOBILE_PROGRESS = ['bar', 'dots', ''] as const;
export type StepperMobileProgress = (typeof STEPPER_MOBILE_PROGRESS)[number];

/**
 * Payload dell'evento `it-stepper-change`.
 *
 * L'evento è annullabile **solo** quando è originato dal click dell'utente sul
 * pulsante "Avanti": in quel caso `preventDefault()` impedisce il cambio di step
 * (utile per bloccare l'avanzamento quando il form dello step non è valido).
 * Quando è emesso dai metodi pubblici `next()` / `prev()` l'evento non è
 * annullabile e `preventDefault()` non ha alcun effetto.
 */
export interface StepperChangeEventDetail {
  /** Indice (0-based) dello step di destinazione. */
  step: number;
  /** Indice (0-based) dello step di partenza. */
  prevStep: number;
}
