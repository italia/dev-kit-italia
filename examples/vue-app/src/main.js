import { createApp } from 'vue';

import './style.css';

import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';

import App from './App.vue';
import router from './routes.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (in Main.js).',
};

registerTranslation(it);

createApp(App).use(router).mount('#app');
