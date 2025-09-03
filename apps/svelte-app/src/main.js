import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';

import { registerTranslation } from '@italia/design-web-components/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (in main.jsx).',
};

import '@italia/design-web-components/fonts.css';
import '@italia/design-web-components/styles.css';
import '@italia/design-web-components/elements.js';

registerTranslation(it);

const app = mount(App, {
  target: document.getElementById('app'),
});

export default app;
