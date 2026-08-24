import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ghPagesPath = process.env.GH_PAGES_PATH || '';

export default defineConfig({
  base: ghPagesPath ? `${ghPagesPath}/svelte-app/` : '/svelte-app/',
  plugins: [svelte()],
  server: {
    fs: {
      allow: [
        resolve(__dirname, '../../packages/dev-kit-italia'),
        resolve(__dirname),
      ],
    },
  },
});
