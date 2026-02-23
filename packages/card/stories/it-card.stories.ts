import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CARD_VARIANTS, type CardVariant } from '../src/types.js';

interface CardProps {
  fullHeight?: boolean;
  variant: CardVariant;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Card',
  tags: ['a11y-ok', 'web-component', 'alpha'],
  component: 'it-card',
  parameters: {
    layout: 'padded',
    docs: {
      source: { excludeDecorators: true },
    },
  },
  decorators: [(story) => html` <div class="container p-0">${story()}</div> `],
  args: {
    fullHeight: false,
  },
  argTypes: {
    fullHeight: {
      name: 'full-height',
      control: 'boolean',
      description: "La card riempie l'altezza del contenitore padre",
      table: { defaultValue: { summary: 'false' } },
    },
    variant: {
      control: 'select',
      type: 'string',
      options: CARD_VARIANTS,
      description: 'Variante di layout della card',
      table: { defaultValue: { summary: 'default' } },
    },
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
  name: 'Esempio interattivo',
  tags: ['!dev'],
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
  render: (args) => html`
    <it-card variant=${ifDefined(args.variant)} ?full-height=${args.fullHeight}>
      <a slot="title" href="#">Titolo del contenuto</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>
  `,
};

export const EditorialiStandard: Story = {
  name: 'Card editoriali standard',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card full-height>
      <a slot="title" href="#">Titolo del contenuto</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>

    <it-card full-height>
      <a slot="title" href="#">Titolo del contenuto</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/nature/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <ul class="it-card-chips" aria-label="Argomenti correlati: ">
          <li class="list-item">
            <it-chip label="Argomento 1" size="sm" href="#"></it-chip>
          </li>
          <li class="list-item">
            <it-chip label="Argomento 2" size="sm" href="#"></it-chip>
          </li>
        </ul>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>

    <it-card>
      <a slot="title" href="#">Titolo del contenuto</a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>
  `,
};

export const EditorialiFeatured: Story = {
  name: 'Card editoriali featured',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card full-height>
      <a slot="title" href="#">
        Titolo del contenuto featured
        <span class="visually-hidden"> (link esterno su piattaforma XYZ)</span>
        <div class="it-card-title-icon-wrapper">
          <it-icon color="primary" name="it-file"></it-icon>
        </div>
      </a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="subtitle">Sottotitolo del contenuto</span>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>

    <it-card full-height>
      <a slot="title" href="#">
        Titolo del contenuto featured
        <span class="visually-hidden"> (link esterno su Designers Italia)</span>
        <div class="it-card-title-icon-wrapper">
          <it-icon color="primary" name="it-designers-italia"></it-icon>
        </div>
      </a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/nature/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="subtitle">Sottotitolo del contenuto</span>
      <span slot="signature">di Maria Verde</span>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <ul class="it-card-chips" aria-label="Argomenti correlati: ">
          <li class="list-item">
            <it-chip label="Argomento 1" size="sm" href="#"></it-chip>
          </li>
          <li class="list-item">
            <it-chip label="Argomento 2" size="sm" href="#"></it-chip>
          </li>
        </ul>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>

    <it-card>
      <a slot="title" href="#">
        Titolo del contenuto featured
        <span class="visually-hidden"> (link esterno)</span>
        <div class="it-card-title-icon-wrapper">
          <it-icon color="primary" name="it-external-link"></it-icon>
        </div>
      </a>
      <span slot="signature">di Maria Verde</span>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>
  `,
};

export const CardInline: Story = {
  name: 'Card inline',
  decorators: [(story) => html` <div style="display:flex;flex-direction:column;gap:24px;">${story()}</div> `],
  render: () => html`
    <it-card variant="inline">
      <a slot="title" href="#">Titolo contenuto editoriale</a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
    </it-card>

    <it-card variant="inline-reverse">
      <a slot="title" href="#">Titolo contenuto editoriale</a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
    </it-card>
  `,
};

export const CardInlineMini: Story = {
  name: 'Card inline mini',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card variant="inline-mini">
      <a slot="title" href="#">Titolo contenuto editoriale</a>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
    </it-card>

    <it-card variant="inline-mini-reverse">
      <a slot="title" href="#">Titolo contenuto editoriale</a>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
    </it-card>
  `,
};

export const Eventi: Story = {
  name: 'Card per eventi',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card full-height>
      <a slot="title" href="#">Titolo evento</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="subtitle">Dal 4 al 6 agosto</span>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
      <a slot="actions" href="#" class="it-card-link">
        <span class="visually-hidden">Link correlati: </span>
        Iscriviti all'evento
      </a>
    </it-card>

    <it-card full-height>
      <a slot="title" href="#">Titolo evento</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/nature/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="subtitle">Dal 4 al 6 novembre</span>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <it-button slot="actions" variant="secondary" outline>
        <span class="visually-hidden">Link correlati: </span>
        Compila il form di iscrizione
      </it-button>
    </it-card>

    <it-card>
      <a slot="title" href="#">Titolo evento</a>
      <span slot="subtitle">
        <span class="visually-hidden">Data evento:</span> <time datetime="08-19">19 agosto</time>,
        <span class="visually-hidden">Orario:</span> <time>11:30</time>–<time>13:00</time>
      </span>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>
  `,
};

export const EventiInline: Story = {
  name: 'Card per eventi inline',
  decorators: [(story) => html` <div style="display:flex;flex-direction:column;gap:24px;">${story()}</div> `],
  render: () => html`
    <it-card variant="inline">
      <a slot="title" href="#">Titolo evento</a>
      <span slot="subtitle">
        <span class="visually-hidden">Data evento:</span> <time datetime="08-19">19 agosto</time>,
        <span class="visually-hidden">Orario:</span> <time>11:30</time>–<time>13:00</time>
      </span>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
      <a slot="actions" href="#" class="it-card-link">
        <span class="visually-hidden">Link correlati: </span>
        Iscriviti all'evento
      </a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
    </it-card>

    <it-card variant="inline-reverse">
      <a slot="title" href="#">Titolo evento</a>
      <span slot="subtitle"> Dal 4 al 6 agosto </span>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
      <it-button slot="actions" variant="secondary" outline>
        <span class="visually-hidden">Link correlati: </span>
        Iscriviti
      </it-button>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/nature/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
    </it-card>
  `,
};

export const Media: Story = {
  name: 'Card per media',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card full-height>
      <a slot="title" href="#">
        Titolo contenuto video
        <div class="it-card-title-icon-wrapper">
          <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
        </div>
      </a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>

    <it-card full-height>
      <a slot="title" href="#">
        Titolo contenuto video
        <div class="it-card-title-icon-wrapper">
          <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
        </div>
      </a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/nature/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <ul class="it-card-chips" aria-label="Argomenti correlati: ">
          <li class="list-item">
            <it-chip label="Argomento 1" size="sm" href="#"></it-chip>
          </li>
          <li class="list-item">
            <it-chip label="Argomento 2" size="sm" href="#"></it-chip>
          </li>
        </ul>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>

    <it-card>
      <a slot="title" href="#">
        Titolo contenuto audio
        <div class="it-card-title-icon-wrapper">
          <it-icon color="primary" name="it-horn" label="Tipo: Audio"></it-icon>
        </div>
      </a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>

    <it-card>
      <a slot="title" href="#">
        Titolo contenuto audio
        <div class="it-card-title-icon-wrapper">
          <it-icon color="primary" name="it-horn" label="Tipo: Audio"></it-icon>
        </div>
      </a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <ul class="it-card-chips" aria-label="Argomenti correlati: ">
          <li class="list-item">
            <it-chip label="Argomento 1" size="sm" href="#"></it-chip>
          </li>
          <li class="list-item">
            <it-chip label="Argomento 2" size="sm" href="#"></it-chip>
          </li>
        </ul>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>
  `,
};

export const MediaVideoInline: Story = {
  name: 'Card per media video inline',
  decorators: [(story) => html` <div style="display:flex;flex-direction:column;gap:24px;">${story()}</div> `],
  render: () => html`
    <it-card variant="inline">
      <a slot="title" href="#">
        Titolo contenuto video
        <div class="it-card-title-icon-wrapper">
          <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
        </div>
      </a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
    </it-card>

    <it-card variant="inline-reverse">
      <a slot="title" href="#">
        Titolo contenuto video
        <div class="it-card-title-icon-wrapper">
          <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
        </div>
      </a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/nature/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
    </it-card>
  `,
};

export const ServiziEBandi: Story = {
  name: 'Card per servizi e bandi',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card full-height>
      <a slot="title" href="#">Titolo servizio</a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
    </it-card>

    <it-card full-height>
      <a slot="title" href="#">Titolo del servizio</a>
      <span slot="subtitle">Sottotitolo del servizio</span>
      <div slot="footer" class="it-card-taxonomy">
        <span class="visually-hidden">Stato del servizio: </span>
        <it-chip label="Attivo" variant="success" size="sm"></it-chip>
      </div>
      <a slot="actions" href="#" class="it-card-link">
        <span class="visually-hidden">Link correlati: </span>
        Requisiti per l'accesso
      </a>
    </it-card>

    <it-card full-height>
      <a slot="title" href="#">Titolo del bando</a>
      <span slot="subtitle">Sottotitolo del bando</span>
      <div slot="footer" class="it-card-taxonomy">
        <span class="visually-hidden">Stato del bando: </span>
        <it-chip label="Aperto" variant="success" size="sm"></it-chip>
      </div>
      <span slot="footer" class="it-card-date text-warning">
        <strong>Scadenza: </strong>
        <time class="it-card-date text-warning" datetime="2026-04-22"> 22 aprile 2026 </time>
      </span>
      <it-button slot="actions" variant="secondary" outline>
        <span class="visually-hidden">Link correlati: </span>
        Compila il form di candidatura
      </it-button>
    </it-card>
  `,
};
