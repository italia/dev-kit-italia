import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ghPagesPath = process.env.GH_PAGES_PATH || '';

export default defineConfig({
  base: ghPagesPath ? `${ghPagesPath}/react-app/` : '/react-app/',
  plugins: [react()],
  build: {
    cssMinify: "esbuild",
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
