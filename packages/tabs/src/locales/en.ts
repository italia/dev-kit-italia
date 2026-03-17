import type { DefaultTranslation } from '@italia/i18n';

const translation: DefaultTranslation = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',

  /**
   * A11y hint announced by screen readers on the active + dismissible tab.
   * Tells the user they can close the tab by re-activating it
   * (double-tap on VoiceOver/TalkBack, Enter/Space on keyboard)
   * or by pressing Delete/Backspace on a physical keyboard.
   */
  closeActiveTabHint: 'Activate again to close.',
};

export default translation;
