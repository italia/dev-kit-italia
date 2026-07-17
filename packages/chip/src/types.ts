export const CHIP_VARIANTS = ['primary', 'secondary', 'success', 'danger', 'warning'] as const;
export const CHIP_SIZES = ['sm', 'lg'] as const;

export type ChipVariant = (typeof CHIP_VARIANTS)[number];
export type ChipSize = (typeof CHIP_SIZES)[number];
/**
 * Detail dell'evento `it-chip-close`.
 * L'evento è cancelable: `event.preventDefault()` impedisce la rimozione di default
 * della chip dal DOM (potrai rimuoverla in seguito chiamando `close()`).
 */
export interface ChipCloseEventDetail {
  /** Riferimento all'elemento chip */
  chip: HTMLElement;
}

export type ChipProps = {
  dismissable?: boolean;
  size?: ChipSize;
  avatar?: string;
  avatarAlt?: string;
  label?: string;
  href?: string;
  variant?: ChipVariant;
  isDisabled?: boolean;
  a11yDescription?: string;
};
