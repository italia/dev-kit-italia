import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readdirSync } from 'fs';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ghPagesPath = process.env.GH_PAGES_PATH || '';

const htmlEntries = Object.fromEntries(
  readdirSync(resolve(__dirname, 'src'))
    .filter((file) => file.endsWith('.html'))
    .map((file) => [file.replace(/\.html$/, ''), resolve(__dirname, 'src', file)]),
);

const require = createRequire(import.meta.url);

const base = ghPagesPath ? `${ghPagesPath}/vanilla-app/` : '/vanilla-app/';

// <link href="@scope/pkg/file.css"> non viene risolto dal dev server (solo
// il plugin HTML del build lo fa). Riscrive l'href a un path /@fs/ che il
// dev server sa servire — nessun JS coinvolto, gira server-side sull'HTML
// prima che arrivi al browser, quindi gli stili restano presenti anche a
// JS disabilitato. apply:'serve' lo esclude dal build, dove il bare
// specifier funziona già.
function resolveDevKitCssLinks() {
  return {
    name: 'resolve-devkit-css-links',
    apply: 'serve',
    transformIndexHtml(html) {
      return html.replace(/href="(@italia\/dev-kit-italia\/[\w.-]+\.css)"/g, (_, spec) => {
        try {
          return `href="${base}@fs${encodeURI(require.resolve(spec))}"`;
        } catch {
          // exports map non espone questo file: torna al link originale
          // invece di rompere l'intera pagina in dev.
          return `href="${spec}"`;
        }
      });
    },
  };
}

export default defineConfig({
  base,
  plugins: [resolveDevKitCssLinks()],
  server: {
    fs: {
      allow: [resolve(__dirname, '../../packages/dev-kit-italia'), resolve(__dirname)],
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