export const NOTIFICATION_HEADING_LEVELS = ['h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type NotificationHeadingLevel = (typeof NOTIFICATION_HEADING_LEVELS)[number];

export const NOTIFICATION_STATUS = ['success', 'error', 'warning', 'info'] as const;
export type NotificationStatus = (typeof NOTIFICATION_STATUS)[number];
export const NOTIFICATION_STATUS_COLORS: Record<NotificationStatus, string> = {
  success: 'success',
  error: 'danger',
  warning: 'warning',
  info: 'primary',
};

export const NOTIFICATION_FIX = ['top', 'bottom', 'left', 'right'] as const;
export type NotificationFix = (typeof NOTIFICATION_FIX)[number];

/**
 * Detail degli eventi `it-notification-show` / `it-notification-close`.
 * Entrambi gli eventi sono cancelable: `event.preventDefault()` impedisce
 * rispettivamente la comparsa e la chiusura della notifica.
 */
export interface NotificationEventDetail {
  /** Riferimento all'elemento notifica */
  notification: HTMLElement;
}
