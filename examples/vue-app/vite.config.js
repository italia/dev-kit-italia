import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    fs: {
      allow: [
        // consenti a Vite di leggere anche da qui
        resolve(__dirname, '../../packages/dev-kit-italia'),
        resolve(__dirname),
      ],
    },
  },
});
