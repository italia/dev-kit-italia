/** @type { import('@storybook/web-components').Preview } */
import './main.scss';
import './storybook-styles.scss';
import prettier from 'prettier-v2';
import HTMLParser from 'prettier-v2/parser-html';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        // trasforma tutte le preview docs (restituendo il codice HTML formattato)
        transform: (input) => {
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
          'Welcome',
          'PersonalizzazioneDegliStili',
          'Componenti',
          ['Button', 'Dropdown', 'Icon', 'Video', 'Form'],
        ],
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => {
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
