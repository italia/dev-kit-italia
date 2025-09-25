import { bootstrapApplication } from '@angular/platform-browser';
import { registerTranslation } from '@italia/dev-kit-italia/elements.js';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr' as 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (in main.jsx).',
};

registerTranslation(it);

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
