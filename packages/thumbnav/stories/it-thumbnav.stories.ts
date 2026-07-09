import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { THUMBNAV_HOVER_EFFECTS, THUMBNAV_AUTO_COLUMNS, THUMBNAV_POSITIONS } from '../src/types.js';
import type { ThumbnnavHoverEffect, ThumbnnavAutoColumns, ThumbnnavPosition } from '../src/types.js';

interface ThumbnnavProps {
  small?: boolean;
  vertical?: boolean;
  fixed?: boolean;
  hover?: ThumbnnavHoverEffect | '';
  auto?: ThumbnnavAutoColumns | undefined;
  position?: ThumbnnavPosition | '';
}

const IMAGES = [
  { src: 'https://picsum.photos/240/160?image=1056', alt: 'Visualizza immagine 1' },
  { src: 'https://picsum.photos/240/160?image=1050', alt: 'Visualizza immagine 2' },
  { src: 'https://picsum.photos/240/160?image=1044', alt: 'Visualizza immagine 3' },
  { src: 'https://picsum.photos/240/160?image=1039', alt: 'Visualizza immagine 4' },
  { src: 'https://picsum.photos/240/160?image=1029', alt: 'Visualizza immagine 5' },
];

const renderItems = (count = 3, firstActive = true) =>
  IMAGES.slice(0, count).map(
    (img, i) => html`
      <it-thumbnav-item ?active="${i === 0 && firstActive}">
        <a href="#" class="ratio ratio-3x2">
          <img src="${img.src}" alt="${img.alt}" />
        </a>
      </it-thumbnav-item>
    `,
  );

const renderComponent = (args: ThumbnnavProps, count = 3) => html`
  <it-thumbnav
    ?small="${args.small}"
    ?vertical="${args.vertical}"
    ?fixed="${args.fixed}"
    hover="${ifDefined(args.hover || undefined)}"
    auto="${ifDefined(args.auto != null ? String(args.auto) : undefined)}"
    position="${ifDefined(args.position || undefined)}"
  >
    ${renderItems(count)}
  </it-thumbnav>
`;

const meta: Meta<ThumbnnavProps> = {
  title: 'Componenti/Thumbnav',
  tags: ['a11y-ok', 'web-component', 'alpha'],
  component: 'it-thumbnav',
  args: {
    small: false,
    vertical: false,
    fixed: false,
    hover: undefined,
    auto: undefined,
    position: undefined,
  },
  argTypes: {
    small: {
      control: 'boolean',
      description: 'Usa thumbnail di dimensione ridotta (120px invece di 240px).',
      table: { defaultValue: { summary: 'false' } },
    },
    vertical: {
      control: 'boolean',
      description: 'Dispone le thumbnail in colonna verticale invece che orizzontale.',
      table: { defaultValue: { summary: 'false' } },
    },
    fixed: {
      control: 'boolean',
      description: 'Imposta larghezza fissa per ogni thumbnail: 240px per default, 120px se combinato con `small`.',
      table: { defaultValue: { summary: 'false' } },
    },
    hover: {
      control: 'select',
      options: THUMBNAV_HOVER_EFFECTS,
      description:
        "Personalizza l'effetto al passaggio del mouse. Ometti l'attributo per lo zoom predefinito. Usa `nozoom` per disabilitarlo, `black` o `primary` per aggiungere un layer colorato sull'immagine.",
    },
    auto: {
      control: 'select',
      options: THUMBNAV_AUTO_COLUMNS,
      description: 'Attiva la griglia a larghezza automatica e imposta il numero di thumbnail per riga (2, 3, 4 o 5).',
    },
    position: {
      control: 'select',
      options: THUMBNAV_POSITIONS,
      description:
        "Posiziona la Thumbnav in overlay rispetto a un contenitore con classe `.position-relative`. Usa `bottom` o `top` per la versione orizzontale, `left` o `right` per la verticale (il comportamento verticale viene applicato automaticamente). Questo attributo non ha effetto nell'esempio interattivo: richiede la struttura HTML corretta con un contenitore esterno. Vedi le stories dedicate agli overlay.",
    },
  },
  parameters: {
    layout: 'padded',
    a11y: {
      config: {
        rules: [
          {
            id: 'list',
            enabled: false,
          },
          {
            id: 'listitem',
            enabled: false,
          },
        ],
      },
    },
    docs: {
      description: {
        component: `
Componente di navigazione con immagini thumbnail.

Il componente Thumbnav è composto da due elementi:

- \`it-thumbnav\`: contenitore che raggruppa le thumbnail e gestisce il layout;
- \`it-thumbnav-item\`: singolo elemento, che accetta nello slot un anchor con immagine.

Ogni \`it-thumbnav-item\` si aspetta un anchor con la classe Bootstrap \`.ratio\` per il corretto rapporto d'aspetto:

\`\`\`html
<it-thumbnav>
  <it-thumbnav-item>
    <a href="#" class="ratio ratio-3x2">
      <img src="…" alt="Descrizione azione">
    </a>
  </it-thumbnav-item>
</it-thumbnav>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ThumbnnavProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: { docs: { canvas: { sourceState: 'hidden' } } },
  render: (args) => renderComponent(args),
};

export const VersioneSmall: Story = {
  name: 'Versione small',
  render: () => html` <it-thumbnav small> ${renderItems(3)} </it-thumbnav> `,
};

export const HoverSenzaZoom: Story = {
  name: 'Hover senza zoom',
  render: () => html` <it-thumbnav hover="nozoom"> ${renderItems(3)} </it-thumbnav> `,
};

export const HoverLayerNero: Story = {
  name: 'Hover con layer nero',
  render: () => html` <it-thumbnav hover="black"> ${renderItems(3)} </it-thumbnav> `,
};

export const HoverLayerPrimary: Story = {
  name: 'Hover con layer primary',
  render: () => html` <it-thumbnav hover="primary"> ${renderItems(3)} </it-thumbnav> `,
};

export const Verticale: Story = {
  name: 'Thumbnav verticale',
  render: () => html` <it-thumbnav vertical> ${renderItems(3)} </it-thumbnav> `,
};

export const OverlayInferiore: Story = {
  name: 'Overlay orizzontale inferiore',
  parameters: { layout: 'fullscreen' },
  render: () => html`
    <div class="position-relative" style="height: 400px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="bottom" small> ${renderItems(3)} </it-thumbnav>
    </div>
  `,
};

export const OverlaySuperiore: Story = {
  name: 'Overlay orizzontale superiore',
  parameters: { layout: 'fullscreen' },
  render: () => html`
    <div class="position-relative" style="height: 400px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="top" small> ${renderItems(3)} </it-thumbnav>
    </div>
  `,
};

export const OverlayVerticaleLeft: Story = {
  name: 'Overlay verticale a sinistra',
  parameters: { layout: 'fullscreen' },
  render: () => html`
    <div class="position-relative" style="height: 500px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="left" small> ${renderItems(3)} </it-thumbnav>
    </div>
  `,
};

export const OverlayVerticaleRight: Story = {
  name: 'Overlay verticale a destra',
  parameters: { layout: 'fullscreen' },
  render: () => html`
    <div class="position-relative" style="height: 500px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="right" small> ${renderItems(3)} </it-thumbnav>
    </div>
  `,
};

export const GrigliaFissa: Story = {
  name: 'Griglia a larghezza fissa',
  parameters: { pageLayout: 'w-100' },
  render: () => html` <it-thumbnav fixed> ${renderItems(5)} </it-thumbnav> `,
};

export const GrigliaAutomatica3: Story = {
  name: 'Griglia automatica - 3 per riga',
  parameters: { pageLayout: 'w-100' },
  render: () => html` <it-thumbnav auto="3"> ${renderItems(5)} </it-thumbnav> `,
};

export const GrigliaAutomatica5: Story = {
  name: 'Griglia automatica - 5 per riga',
  parameters: { pageLayout: 'w-100' },
  render: () => html` <it-thumbnav auto="5"> ${renderItems(5)} </it-thumbnav> `,
};
