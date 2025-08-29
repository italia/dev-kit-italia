import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    fs: {
      allow: [
        // consenti a Vite di leggere anche da qui
        resolve(__dirname, '../../packages/design-web-components'),
        resolve(__dirname),
      ],
    },
  },
});
