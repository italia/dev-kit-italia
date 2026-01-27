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
  _progress: boolean;
  _inlineMenu: boolean;
  _uniqueStoryID: string;
}

const getBody = (id: string, progress = true) =>
  html`<div class="link-list-wrapper">
    <h3>Header</h3>
    ${progress
      ? html`
          <div class="progress">
            <div
              class="progress-bar it-navscroll-progressbar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="Progress bar"
            ></div>
          </div>
        `
      : html``}
    <nav>
      <ul class="link-list">
        <li class="nav-item">
          <a class="nav-link active" href="#p1${id}">
            <span>1. Introduzione </span>
          </a>
          <ul class="link-list">
            <li class="nav-item">
              <a class="nav-link" href="#p1_1${id}">
                <span>1.1 Elemento annidato </span>
              </a>
              <ul class="tertiary link-list">
                <li class="nav-item">
                  <a class="nav-link" href="#p1_1_1${id}">
                    <span>1.1.1 Elemento annidato </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#p1_1_2${id}">
                    <span>1.1.2 Elemento annidato </span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#p1_2${id}">
                <span>1.2 Elemento annidato </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#p1_3${id}">
                <span>1.3 Elemento annidato </span>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#p2${id}">
            <span>2. Seconda sezione </span>
          </a>
          <ul class="link-list">
            <li class="nav-item">
              <a class="nav-link" href="#p2_1${id}">
                <span>2.1 Elemento annidato </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>`;

const getBodyInlineMenu = (id: string) =>
  html`<div class="inline-menu">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <it-collapse>
            <button class="list-item icon-right border-0 bg-transparent" slot="trigger">
              <span class="list-item-title-icon-wrapper" slot="label">
                <span class="list-item-title">Introduzione</span>
                <it-icon name="it-expand" color="primary" class="left"></it-icon>
              </span>
            </button>
            <ul slot="content" class="link-sublist collapse">
              <li>
                <a class="list-item" href="#p1_1${id}"><span>1.1 Elemento annidato </span></a>
              </li>
              <li>
                <a class="list-item" href="#p1_2${id}"><span>1.2 Elemento annidato </span></a>
              </li>
              <li>
                <a class="list-item" href="#p1_3${id}"><span>1.3 Elemento annidato </span></a>
              </li>
            </ul>
          </it-collapse>
        </li>
        <li>
          <it-collapse>
            <button class="list-item icon-right border-0 bg-transparent" slot="trigger">
              <span class="list-item-title-icon-wrapper" slot="label">
                <span class="list-item-title">Seconda sezione</span>
                <it-icon name="it-expand" color="primary" class="left"></it-icon>
              </span>
            </button>
            <ul slot="content" class="link-sublist collapse">
              <li>
                <a class="list-item" href="#p2_1${id}"><span>2.1 Elemento annidato</span></a>
              </li>
            </ul>
          </it-collapse>
        </li>
      </ul>
    </div>
  </div>`;

// Renderizza il wc di default
const renderComponent = (params: NavscrollProps) => {
  const uniqueStoryID = params._uniqueStoryID ?? '';
  return html`
    <div class="row row-column-border border-light row-column-menu-left bg-white">
      <aside class="col-lg-4 ${params['line-position'] === 'left' ? 'order-2' : ''}" aria-label="Indice della pagina">
        <it-navscroll
          ?sticky="${params.sticky ? 'true' : undefined}"
          for="#scroll-container${uniqueStoryID}"
          dark-mode=${ifDefined(params['dark-mode'])}
          position=${ifDefined(params.position)}
          line-position=${ifDefined(params['line-position'])}
          breakpoint="${ifDefined(params.breakpoint)}"
          open-label=${ifDefined(params['open-label'])}
          open-aria-label=${ifDefined(params['open-aria-label'])}
          back-label=${ifDefined(params['back-label'])}
        >
          ${params._inlineMenu ? getBodyInlineMenu(uniqueStoryID) : getBody(uniqueStoryID, params._progress)}
        </it-navscroll>
      </aside>
      <main
        id="scroll-container${uniqueStoryID}"
        class="col-lg-8 it-page-sections-container border-light"
        style="height:500px; overflow-y: scroll;"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo
          libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst.
          In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante
          porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa
          turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in,
          ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel
          sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut
          quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod
          pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit
          mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem
          libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna
          luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor.
          Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales
          sollicitudin.
        </p>
        <h2 class="it-page-section" id="p1${uniqueStoryID}">Introduzione</h2>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h3 class="it-page-section" id="p1_1${uniqueStoryID}">Elemento annidato 1.1</h3>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h4 class="it-page-section" id="p1_1_1${uniqueStoryID}">Elemento annidato 1.1.1</h4>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h4 class="it-page-section" id="p1_1_2${uniqueStoryID}">Elemento annidato 1.1.2</h4>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h3 class="it-page-section" id="p1_2${uniqueStoryID}">Elemento annidato 1.2</h3>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h3 class="it-page-section" id="p1_3${uniqueStoryID}">Elemento annidato 1.3</h3>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h2 class="it-page-section" id="p2${uniqueStoryID}">Seconda sezione</h2>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <h3 class="it-page-section" id="p2_1${uniqueStoryID}">Elemento annidato 2.1</h3>
        <p>
          Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a
          neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam
          eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula
          rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non
          ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
      </main>
    </div>
  `;
};

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
        "Selettore del contenitore scrollabile da monitorare per determinare l'elemento attivo corrente ed eventualmente aggioranre la progress bar. Se non definito, viene usato document.scrollingElement",
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
      description: 'Quando mostrare la modalità "dark"',
      type: 'string',
      options: DARK_MODE,
    },
    breakpoint: {
      control: 'number',
      description: 'Breakpoint sotto il quale la navigazione viene collassata',
      type: 'number',
      table: { defaultValue: { summary: '991' } },
    },
    'open-label': {
      control: 'text',
      description: "Etichetta per l'apertura del menu collassato su mobile, quando nessuna sezione è ancora attiva",
      type: 'string',
      table: { defaultValue: { summary: 'Indice di navigazione' } },
    },
    'open-aria-label': {
      control: 'text',
      description: 'aria-label per il menu collassato su mobile',
      type: 'string',
      table: { defaultValue: { summary: 'Apri/Chiudi indice di navigazione' } },
    },
    'back-label': {
      control: 'text',
      description: 'Testo da mostrare sul pulsante di chiusura del menu su mobile',
      type: 'string',
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

  render: (params) =>
    html` ${renderComponent({
      ...params,
      _uniqueStoryID: '-story1',
    })}`,
};

export const DesktopOnLeft: Story = {
  ...meta,
  name: 'Posizionata a sinistra su desktop',
  args: { 'line-position': 'right' },
  render: (params) =>
    html` ${renderComponent({
      ...params,
      _progress: false,
      _uniqueStoryID: '-story2-1',
    })}`,
};
export const DesktopOnRight: Story = {
  ...meta,
  name: 'Posizionata a destra su desktop',
  args: { 'line-position': 'left' },
  render: (params) =>
    html` ${renderComponent({
      ...params,
      _progress: false,
      _uniqueStoryID: '-story2-2',
    })}`,
};

export const MobileBottom: Story = {
  ...meta,
  name: 'Posizionata a fondo pagina',
  args: { position: 'bottom' },
  render: (params) =>
    html` ${renderComponent({
      ...params,
      _progress: false,
      _uniqueStoryID: '-story3-1',
    })}`,
};

export const MobileTop: Story = {
  ...meta,
  name: 'Posizionata in testa alla pagina',
  args: { position: 'top' },
  render: (params) =>
    html` ${renderComponent({
      ...params,
      _progress: false,
      _uniqueStoryID: '-story3-2',
    })}`,
};

export const Progress: Story = {
  ...meta,
  name: 'Con barra di progresso',
  render: (params) =>
    html` ${renderComponent({
      ...params,
      _uniqueStoryID: '-story4',
    })}`,
};

export const DarkModeStory: Story = {
  ...meta,
  name: 'Variante scura',
  render: (params) =>
    html` ${renderComponent({
      ...params,
      'dark-mode': 'always',
      _progress: false,
      _uniqueStoryID: '-story5',
    })}`,
};

export const MenuInline: Story = {
  ...meta,
  name: 'Menu inline',
  render: (params) =>
    html` ${renderComponent({
      ...params,
      _inlineMenu: true,
      _progress: false,
      _uniqueStoryID: '-story6',
    })}`,
};
