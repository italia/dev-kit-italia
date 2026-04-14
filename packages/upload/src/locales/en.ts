import type { DefaultTranslation } from '@italia/i18n';

const translation: DefaultTranslation = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',

  upload_label: 'Upload file',
  upload_file_list_label: 'Uploaded files',
  upload_remove_loading: 'Cancel upload of {name}',
  upload_remove_done: 'Uploaded file successfully',
  upload_remove_error: 'Retry upload of {name}',
  upload_status_loading: 'Uploading file',
  upload_status_success: 'File uploaded:',
  upload_status_error: 'Upload error:',
  upload_gallery_label: 'Upload photo',

  upload_avatar_label: 'Update avatar photo',
  upload_avatar_overlay_label: 'Update',

  upload_dd_title: 'Drag file here to upload',
  upload_dd_description: 'or select it from your device',
  upload_dd_select: 'select it from your device',
  upload_dd_progress_label: 'Upload progress',
  upload_dd_status_dragover: 'File ready to drop',
  upload_dd_status_loading: 'Loading...',
  upload_dd_status_success: 'Upload complete',

  validityRequired: 'Please select at least one file.',
};

export default translation;
