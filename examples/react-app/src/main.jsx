import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (in main.jsx).',
};

import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
import '@italia/dev-kit-italia/elements.js';

registerTranslation(it);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
