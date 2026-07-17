/** Varianti di colore dell'alert, secondo le classi `.alert-*` di Bootstrap Italia. */
export const ALERT_VARIANTS = ['primary', 'secondary', 'success', 'warning', 'danger'] as const;

export type AlertVariant = (typeof ALERT_VARIANTS)[number];

/**
 * Detail dell'evento `it-alert-close`.
 * L'evento è cancelable: `event.preventDefault()` impedisce la chiusura di default
 * dell'alert (potrai chiuderlo in seguito chiamando il metodo `close()`).
 */
export interface AlertCloseEventDetail {
  /** Riferimento all'elemento it-alert */
  alert: HTMLElement;
}

export type AlertProps = {
  variant?: AlertVariant;
};
