import { html } from 'lit';
import type { Preview } from '@storybook/web-components-vite';
import './main.scss';
import './storybook-styles.scss';
import prettier from 'prettier-v2';
import HTMLParser from 'prettier-v2/parser-html';
import { StoryWidth100 } from './it-decorators';
import './elements';
import { version } from '../packages/dev-kit-italia/package.json';

const versionMatch = version.match(/^(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/);
const [, major, minor, patch, postfix] = versionMatch || ['', '1', '0', '0', ''];

const preview: Preview = {
  parameters: {
    version: {
      major,
      minor,
      patch,
      postfix: postfix || undefined, // 'alpha.X' | 'beta.X' | 'rc.X' | undefined
      style: {
        'font-family': 'Roboto, monospace',
      }
    },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        // trasforma tutte le preview docs (restituendo il codice HTML formattato)
        transform: (input: string) => {
          if (!input || typeof input !== 'string') return input;
          const t = input.trim();
          if (!(t.startsWith('<') || /<\s*it-[a-z0-9-]+/i.test(input))) return input;
          try {
            return prettier.format(input, {
              parser: 'html',
              plugins: [HTMLParser],
            });
          } catch (err) {
            // eslint-disable-next-line no-console
            console.warn('Prettier docs.source.transform failed:', err);
            return input;
          }
        },

        excludeDecorators: true, // permette di mettere dei decorator, e fare in modo che questi non appaiano nella preview del codice
      },
      toc: {
        headingSelector: 'h2',
        ignoreSelector: 'h2[id|="stories"], #esempio, .docs-story h2',
        title: 'Indice',
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Introduzione',
          'Personalizzazione degli stili',
          'Font',
          'i18n - Internazionalizzazione',
          'Accessibilità',
          'Migrazione',
          'Documentazione tecnica',
          'Misurare l\'adozione del Kit',
          'Componenti',
          'Framework',
          'Organizzare gli spazi',
          ['Introduzione', '*'],
          'Organizzare i contenuti',
          ['Introduzione', '*'],
        ],
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story: any, ctx: any) => {
    // Usa un effetto per agire sul documento dell'iframe dopo il mount
    // Funziona anche con React o senza (a seconda del setup)

    // Questo codice funziona anche senza React
    setTimeout(() => {
      if (typeof document !== 'undefined' && document.documentElement) {
        document.documentElement.lang = 'it'; // Cambia "it" con la lingua desiderata
      }
    }, 0); // Lascia tempo all'iframe di caricare

    const { pageLayout, wrapperClasses } = ctx.parameters;

    switch (pageLayout) {
      //
      // case 'page':
      //   return (
      //     // Your page layout is probably a little more complex than this
      //     <div className="page-layout">
      //       <Story />
      //     </div>
      //   );
      // case 'page-mobile':
      //   return (
      //     <div className="page-mobile-layout">
      //       <Story />
      //     </div>
      //   );
      case 'w-100':
        return StoryWidth100(Story, ctx);

      default:
        // In the default case, don't apply a layout

        if (wrapperClasses) {
          return html`<div class="${wrapperClasses}">${Story()}</div>`;
        }
        return Story();
    }
  },
];
