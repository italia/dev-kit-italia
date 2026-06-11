import type { DefaultTranslation } from '@italia/i18n';

const translation: DefaultTranslation = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',

  upload_label: 'Carica file',
  upload_required: 'obbligatorio',
  upload_file_list_label: 'File caricati',
  upload_remove_loading: 'Annulla caricamento file {name}',
  upload_remove_done: 'Rimuovi file {name}',
  upload_remove_error: 'Riprova caricamento file {name}',
  upload_status_loading: 'Caricamento file:',
  upload_status_success: 'File caricato:',
  upload_status_error: 'Errore caricamento file:',
  upload_gallery_label: 'Carica foto',

  upload_avatar_label: "Aggiorna foto dell'avatar",
  upload_avatar_overlay_label: 'Aggiorna',

  upload_dd_title: 'Trascina il file per caricarlo',
  upload_dd_description: 'oppure selezionalo dal dispositivo',
  upload_dd_select: 'selezionalo dal dispositivo',
  upload_dd_progress_label: 'Avanzamento caricamento',
  upload_dd_status_dragover: 'File pronto per il rilascio',
  upload_dd_status_loading: 'Caricamento in corso...',
  upload_dd_status_success: 'Caricamento completato',

  validityRequired: 'Seleziona almeno un file.',
};

export default translation;
