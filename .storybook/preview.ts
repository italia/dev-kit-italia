import type { Preview } from '@storybook/web-components-vite';
import './main.scss';
import './storybook-styles.scss';
// @ts-expect-error
import prettier from 'prettier-v2';
// @ts-expect-error
import HTMLParser from 'prettier-v2/parser-html';

const preview: Preview = {
  parameters: {
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
      },
      toc: {
        headingSelector: 'h2, h3',
        ignoreSelector: 'h2[id|="stories"], #esempio, .docs-story h2, .docs-story h3',
        title: 'Indice',
      },
    },
    options: {
      storySort: {
        order: [
          'Introduzione',
          'Personalizzazione degli stili',
          'Font',
          'i18n - Internazionalizzazione',
          'Componenti',
          ['Accordion', 'Button', 'Chip', 'Dropdown', 'Footer', 'Form', 'Icon', 'Section', 'Video'],
          'Framework',
          ['React'],
        ],
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story: any) => {
    // Usa un effetto per agire sul documento dell'iframe dopo il mount
    // Funziona anche con React o senza (a seconda del setup)

    // Questo codice funziona anche senza React
    setTimeout(() => {
      if (typeof document !== 'undefined' && document.documentElement) {
        document.documentElement.lang = 'it'; // Cambia "it" con la lingua desiderata
      }
    }, 0); // Lascia tempo all'iframe di caricare
    return Story();
  },
];
