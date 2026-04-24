export const DIMMER_VARIANTS = ['primary', 'dark'] as const;

export type DimmerVariant = (typeof DIMMER_VARIANTS)[number];

export interface DimmerEventDetail {
  /** Riferimento al componente dimmer */
  dimmer: HTMLElement;
}
