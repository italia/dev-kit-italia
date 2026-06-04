export type UploadFileStatus = 'loading' | 'success' | 'error';

export const DRAG_DROP_HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type DragDropHeadingLevel = (typeof DRAG_DROP_HEADING_LEVELS)[number];

export type UploadVariant = 'default' | 'gallery';

export interface UploadFile {
  id: string;
  name: string;
  size: number;
  status: UploadFileStatus;
  progress?: number;
  thumbnail?: string;
}

/** Internal representation that also carries the raw File reference */
export interface UploadInternalFile extends UploadFile {
  _raw: File;
}
