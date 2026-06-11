export const STEPPER_HEADER_VARIANTS = ['text', 'icons', 'numbers'] as const;
export type StepperHeaderVariant = (typeof STEPPER_HEADER_VARIANTS)[number];

export const STEPPER_MOBILE_PROGRESS = ['bar', 'dots', ''] as const;
export type StepperMobileProgress = (typeof STEPPER_MOBILE_PROGRESS)[number];
