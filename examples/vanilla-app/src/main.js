import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
// import '@italia/dev-kit-italia/fonts.css';
// import '@italia/dev-kit-italia/styles.css';
import '@italia/dev-kit-italia/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  video_consent_accept: 'Accetto i cookie',
  showHidePassword: 'Mostra/Nascondi Password (Custom translated message).',
};

const en = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr',
  video_consent_accept: 'Accept',
  showHidePassword: 'Show/Hide Password (Custom translated message).',
};

registerTranslation(it);
registerTranslation(en);
