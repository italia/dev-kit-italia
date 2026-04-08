import { mount } from 'svelte';
import './app.css';
import { registerTranslation } from '@italia/dev-kit-italia/elements.js';
import App from './App.svelte';

import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';

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
