import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ghPagesPath = process.env.GH_PAGES_PATH || '';

export default defineConfig({
  base: ghPagesPath ? `${ghPagesPath}/vue-app/` : '/vue-app/',
  plugins: [vue()],
  build: {
    // lightningcss (default Vite 8/Rolldown) refuse valid selector per spec like 
    // ::part(x):focus-visible:not(.btn) used by dev-kit-italia, so we use esbuild instead.
    // https://github.com/parcel-bundler/lightningcss/issues/829
    cssMinify: 'esbuild',
  },
  server: {
    fs: {
      allow: [
        resolve(__dirname, '../../packages/dev-kit-italia'),
        resolve(__dirname),
      ],
    },
  },
});
