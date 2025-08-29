import { createApp } from 'vue';

import './style.css';

import { registerTranslation } from '@italia/design-web-components/elements.js';

import '@italia/design-web-components/fonts.css';
import '@italia/design-web-components/styles.css';
import '@italia/design-web-components/elements.js';

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
