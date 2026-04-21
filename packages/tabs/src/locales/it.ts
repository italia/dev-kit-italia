import type { DefaultTranslation } from '@italia/i18n';

const translation: DefaultTranslation = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',

  /**
   * Suggerimento a11y annunciato dallo screen reader sul tab attivo e dismissibile.
   * Informa l'utente che può chiudere il tab riattivando l'elemento
   * (doppio tap con VoiceOver/TalkBack, Invio/Spazio con tastiera)
   * oppure premendo Delete/Backspace sulla tastiera fisica.
   */
  closeActiveTabHint:
    'Puoi chiudere questo tab premendo Delete o Backspace da tastiera. Su dispositivi touch, doppio tap per chiudere questo tab.',
};

export default translation;
