import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
// import { ifDefined } from 'lit/directives/if-defined.js';

interface CardProps {}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Card',
  tags: ['a11y-ok', 'web-component', 'alpha'],
  component: 'it-card',
  parameters: {
    docs: {
      source: { excludeDecorators: true },
    },
  },
  args: {},
  argTypes: {
    // offset: {
    //   control: 'number',
    //   type: 'number',
    //   description: "Posizione Y espressa in pixel alla quale ritornarne al click sull'elemento",
    //   table: { defaultValue: { summary: '0' } },
    // },
    // scrollLimit: {
    //   name: 'scroll-limit',
    //   control: 'number',
    //   type: 'number',
    //   description: "Posizione Y espressa in pixel alla quale far comparire l'elemento",
    //   table: { defaultValue: { summary: '100' } },
    // },
    // duration: {
    //   control: 'number',
    //   type: 'number',
    //   description: "Durata dell'animazione di scroll espressa in millisecondi",
    //   table: { defaultValue: { summary: '800' } },
    // },
    // small: {
    //   control: 'boolean',
    //   type: 'boolean',
    //   description: 'Dimensione ridotta',
    //   table: { defaultValue: { summary: 'false' } },
    // },
    // inverse: {
    //   control: 'boolean',
    //   type: 'boolean',
    //   description: 'Variante di colore invertito',
    //   table: { defaultValue: { summary: 'false' } },
    // },
    // shadow: {
    //   control: 'boolean',
    //   type: 'boolean',
    //   description: "Aggiunge un'ombra al pulsante",
    //   table: { defaultValue: { summary: 'false' } },
    // },
    // border: {
    //   control: 'boolean',
    //   type: 'boolean',
    //   defaultValue: false,
    //   description:
    //     'Abilita / disabilita il bordo sul bottone per garantire il contrasto del pulsante su sfondi non a contrasto',
    //   table: { defaultValue: { summary: 'false' } },
    // },
    // borderColor: {
    //   name: 'border-color',
    //   control: 'text',
    //   type: 'string',
    //   defaultValue: 'white',
    //   description: 'Colore del bordo',
    //   table: {
    //     defaultValue: { summary: 'Default: "white". Se è attivo l\'attributo "inverse", il default è "primary".' },
    //   },
    // },
    // iconColor: {
    //   name: 'icon-color',
    //   control: 'text',
    //   type: 'string',
    //   description: "Colore dell'icona",
    //   table: { defaultValue: { summary: 'inverse' } },
    // },
    // itAriaLabel: {
    //   name: 'it-aria-label',
    //   control: 'text',
    //   type: 'string',
    //   description: "Etichetta aria per l'accessibilità",
    // },
  },
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  decorators: [
    (story) => html`
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">${story()}</div>
      </div>
    `,
  ],
  render: () => html`
    <it-card>
      <a href="#" slot="title">Titolo del contenuto</a>
      <figure class="figure img-full" slot="image">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
      senza troncamento.
      <time class="it-card-date" datetime="2026-04-22" slot="footer"> 22 aprile 2026 </time>
    </it-card>
  `,
};
