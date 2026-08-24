import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ghPagesPath = process.env.GH_PAGES_PATH || '';

const htmlEntries = Object.fromEntries(
  readdirSync(resolve(__dirname, 'src'))
    .filter((file) => file.endsWith('.html'))
    .map((file) => [file.replace(/\.html$/, ''), resolve(__dirname, 'src', file)]),
);

export default defineConfig({
  base: ghPagesPath ? `${ghPagesPath}/vanilla-app/` : '/vanilla-app/',
  server: {
    fs: {
      allow: [
        resolve(__dirname, '../../packages/dev-kit-italia'),
        resolve(__dirname),
      ],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...htmlEntries,
      },
    },
  },
});