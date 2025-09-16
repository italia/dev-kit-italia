import { mount } from 'svelte';
import './app.css';
import { registerTranslation } from '@italia/design-web-components/elements.js';
import App from './App.svelte';

import '@italia/design-web-components/fonts.css';
import '@italia/design-web-components/styles.css';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (in main.jsx).',
};

registerTranslation(it);

const app = mount(App, {
  target: document.getElementById('app'),
});

export default app;
