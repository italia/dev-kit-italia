import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Position, type LinePosition, type DarkMode, POSITION, LINE_POSITION, DARK_MODE } from '../src/types.ts';

interface NavscrollProps {
  breakpoint: number | undefined;
  'open-label': string | undefined;
  'open-aria-label': string | undefined;
  'back-label': string | undefined;
  for: string | undefined;
  position: Position;
  sticky: boolean;
  'line-position': LinePosition;
  'dark-mode': DarkMode;
}

const BODY = html`<div class="link-list-wrapper">
  <h3>Header</h3>
  <div class="progress">
    <div
      class="progress-bar it-navscroll-progressbar"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Progress bar"
    ></div>
  </div>
  <nav>
    <ul class="link-list">
      <li class="nav-item">
        <a class="nav-link active" href="#p1">
          <span>1. Introduzione </span>
        </a>
        <ul class="link-list">
          <li class="nav-item">
            <a class="nav-link" href="#p1_1">
              <span>1.1 Elemento annidato </span>
            </a>
            <ul class="tertiary link-list">
              <li class="nav-item">
                <a class="nav-link" href="#p1_1_1">
                  <span>1.1.1 Elemento annidato </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#p1_1_2">
                  <span>1.1.2 Elemento annidato </span>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#p1_2">
              <span>1.2 Elemento annidato </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#p1_3">
              <span>1.3 Elemento annidato </span>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#p2">
          <span>2. Seconda sezione </span>
        </a>
        <ul class="link-list">
          <li class="nav-item">
            <a class="nav-link" href="#p2_1">
              <span>2.1 Elemento annidato </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>`;

// Renderizza il wc di default
const renderComponent = (params: NavscrollProps) => html`
  <div class="row row-column-border border-light row-column-menu-left">
    <aside class="col-lg-4" aria-label="Indice della pagina">
      <it-navscroll
        ?sticky="${params.sticky ? 'true' : undefined}"
        for=${ifDefined(params.for)}
        dark-mode=${ifDefined(params['dark-mode'])}
        position=${ifDefined(params.position)}
        line-position=${ifDefined(params['line-position'])}
        breakpoint="${ifDefined(params.breakpoint)}"
        open-label=${ifDefined(params['open-label'])}
        open-aria-label=${ifDefined(params['open-aria-label'])}
        back-label=${ifDefined(params['back-label'])}
      >
        ${BODY}
      </it-navscroll>
    </aside>
    <main
      id="scroll-container"
      class="col-lg-8 it-page-sections-container border-light"
      style="height:500px; overflow-y: scroll;"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo libero
        nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst. In
        malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante porta
        id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa turpis.
        Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a
        neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
        eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
        rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
        ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit mattis vitae ac ex. Proin
        pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa
        lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna luctus, a bibendum tortor
        facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor. Quisque accumsan magna ac risus
        ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales sollicitudin.
      </p>
      <h2 class="it-page-section" id="p1">Introduzione</h2>
      <p>
        Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a
        neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
        eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
        rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
        ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </p>
      <h3 class="it-page-section" id="p1_1">Elemento annidato 1.1</h3>
      <p>
        Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
        neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
        eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
        rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
        ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </p>
      <h4 class="it-page-section" id="p1_1_1">Elemento annidato 1.1.1</h4>
      <p>
        Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
        neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
        eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
        rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
        ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </p>
      <h4 class="it-page-section" id="p1_1_2">Elemento annidato 1.1.2</h4>
      <p>
        Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
        neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
        eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
        rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
        ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </p>
      <h3 class="it-page-section" id="p1_2">Elemento annidato 1.2</h3>
      <p>
        Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
        neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
        eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
        rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
        ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </p>
      <h3 class="it-page-section" id="p1_3">Elemento annidato 1.3</h3>
      <p>
        Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
        neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
        eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
        rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
        ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </p>
      <h2 class="it-page-section" id="p2">Seconda sezione</h2>
      <p>
        Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
        neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
        eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
        rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
        ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </p>
      <h3 class="it-page-section" id="p2_1">Elemento annidato 2.1</h3>
      <p>
        Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
        neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
        eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
        rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
        ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </p>
    </main>
  </div>
`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Navscroll',
  tags: ['beta'],
  component: 'it-navscroll',
  args: {
    for: '#scroll-container',
    position: undefined,
    sticky: undefined,
    'line-position': undefined,
    'dark-mode': undefined,
    breakpoint: undefined,
    'open-label': undefined,
    'open-aria-label': undefined,
    'back-label': undefined,
  },
  argTypes: {
    for: {
      control: 'text',
      description:
        "Selettore del contenitore scrollabile da monitorare per determinare l'elemento attivo corrente ed eventualmente aggioranre la progress bar. Se non definito, viene usato document.scrollingElement.",
    },
    position: {
      control: 'select',
      description: 'Posizione dello navscroll su mobile quando è chiuso',
      options: POSITION,
      type: 'string',
      table: { defaultValue: { summary: 'bottom' } },
    },
    sticky: {
      control: 'boolean',
      type: 'boolean',
      description: 'Quando abilitato, il nav viene fissato in alto durante lo scroll della pagina (su desktop)',
      table: { defaultValue: { summary: 'false' } },
    },
    'line-position': {
      control: 'select',
      description: 'Posizione della linea laterale su desktop',
      type: 'string',
      options: LINE_POSITION,
    },
    'dark-mode': {
      control: 'select',
      description: 'Quando mostrare la modalità `dark`',
      type: 'string',
      options: DARK_MODE,
    },
    breakpoint: {
      control: 'number',
      description: 'Breakpoint sotto il quale la navigazione viene collassata.',
      table: { defaultValue: { summary: '991' } },
    },
    'open-label': {
      control: 'text',
      description: "Etichetta per l'apertura del menu collassato su mobile, quando nessuna sezione è ancora attiva",
      table: { defaultValue: { summary: 'Indice di navigazione' } },
    },
    'open-aria-label': {
      control: 'text',
      description: 'aria-label per il menu collassato su mobile',
      table: { defaultValue: { summary: 'Apri/Chiudi indice di navigazione' } },
    },
    'back-label': {
      control: 'text',
      description: 'Testo da mostrare sul pulsante di chiusura del menu su mobile',
      table: { defaultValue: { summary: 'Indietro' } },
    },
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
      description: {
        component: `
<Description>Lista di link con àncore per navigare velocemente a una sezione specifica della pagina in cui è contenuto il componente.</Description>
`,
      },
    },
  },
} satisfies Meta<NavscrollProps>;

export default meta;
type Story = StoryObj<NavscrollProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio',
  args: {},
  parameters: {
    docs: {
      // className: 'my-wide-story',
      // canvas: {
      //   sourceState: 'shown',
      // },
    },
  },

  render: (params) =>
    html` ${renderComponent({
      ...params,
    })}`,
};

// export const PochiLink: Story = {
//   ...meta,
//   name: 'Numero ridotto di link',
//   args: {},
//   parameters: {
//     docs: {
//       description: {
//         story: `
// Quando sono presenti uno o due link, il componente evita di generare un elemento \`<nav>\` al fine di ridurre la complessità di lettura per gli screen reader.
// `,
//       },
//     },
//   },
//   render: (params) =>
//     html` ${renderComponent({
//       ...params,
//       // eslint-disable-next-line no-useless-computed-key
//       ['it-aria-label']: undefined,
//       slot: html`<a href="#menu">Vai al menu</a>
//         <a href="#main-content">Vai al contenuto principale</a> `,
//     })}`,
// };
