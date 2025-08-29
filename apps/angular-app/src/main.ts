import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { registerTranslation } from '@italia/design-web-components/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr' as 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (in main.jsx).',
};

import '@italia/design-web-components/fonts.css';
import '@italia/design-web-components/styles.css';
import '@italia/design-web-components/elements.js';

registerTranslation(it);

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
