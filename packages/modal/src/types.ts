export const MODAL_SIZES = ['sm', 'lg', 'xl'] as const;
export const MODAL_POSITIONS = ['center', 'left', 'right'] as const;
export const MODAL_VARIANTS = ['alert', 'popconfirm', 'link-list'] as const;

export type ModalSize = (typeof MODAL_SIZES)[number] | '';
export type ModalPosition = (typeof MODAL_POSITIONS)[number];
export type ModalVariant = (typeof MODAL_VARIANTS)[number];

/**
 * Detail degli eventi `it-modal-open` / `it-modal-close`.
 * Entrambi gli eventi sono cancelable: `event.preventDefault()` impedisce
 * rispettivamente l'apertura e la chiusura della modale.
 */
export interface ModalEventDetail {
  /** Riferimento all'elemento modale */
  modal: HTMLElement;
}
