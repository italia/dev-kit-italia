import './style.css';

import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
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

document.querySelector('#app-header').innerHTML = `
  <div class="app-header">
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <nav class="app-nav">
      <a href="/src/button">
        Button
      </a>
      <a href="/src/chip">
        Chip
      </a>
      <a href="/src/dropdown">
        Dropdown
      </a>
      <a href="/src/form">
        Form
      </a>
      <a href="/src/icon">
        Icon
      </a>
      <a href="/src/input">
        Input
      </a>
      <a href="/src/section">
        Section
      </a>
      <a href="/src/video">
        Video
      </a>
    </nav>
  </div>
`;
