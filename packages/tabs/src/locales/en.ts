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
  closeActiveTabHint:
    'You can close this tab by pressing Delete or Backspace on your keyboard. On touch devices, double tap to close this tab.',
};

export default translation;
