export const MODAL_SIZES = ['sm', 'lg', 'xl'] as const;
export const MODAL_POSITIONS = ['center', 'left', 'right'] as const;
export const MODAL_VARIANTS = ['alert', 'popconfirm', 'link-list'] as const;

export type ModalSize = (typeof MODAL_SIZES)[number] | '';
export type ModalPosition = (typeof MODAL_POSITIONS)[number];
export type ModalVariant = (typeof MODAL_VARIANTS)[number];

export interface ModalEventDetail {
  /** Riferimento all'elemento modale */
  modal: HTMLElement;
}
