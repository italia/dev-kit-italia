export type UploadFileStatus = 'loading' | 'success' | 'error';

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
