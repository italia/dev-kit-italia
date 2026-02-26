import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CARD_BORDER_COLORS, CARD_VARIANTS, type CardBorderColor, type CardVariant } from '../src/types.js';

interface CardProps {
  fullHeight?: boolean;
  variant: CardVariant;
  borderTop?: CardBorderColor;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Card',
  tags: ['a11y-ok', 'web-component', 'alpha'],
  component: 'it-card',
  parameters: {
    layout: 'padded',
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
    borderTop: {
      name: 'border-top',
      control: 'select',
      type: 'string',
      options: CARD_BORDER_COLORS,
      description: 'Aggiunge un bordo superiore colorato alla card per evidenziarla',
    },
    // scrollLimit: {
    //   name: 'scroll-limit',
    //   control: 'number',
    //   type: 'number',
    //   description: "Posizione Y espressa in pixel alla quale far comparire l'elemento",
    //   table: { defaultValue: { summary: '100' } },
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
    <it-card variant=${ifDefined(args.variant)} ?full-height=${args.fullHeight} border-top=${ifDefined(args.borderTop)}>
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

export const DocumentiEAllegati: Story = {
  name: 'Card per documenti e allegati',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card>
      <a slot="title" href="#">
        Titolo del documento
        <div class="it-card-title-icon-wrapper">
          <it-icon color="primary" name="it-file"></it-icon>
        </div>
      </a>
      <span slot="text">
        Eventuale breve estratto descrittivo del documento.
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
    </it-card>

    <it-card>
      <a slot="title" href="#">
        Titolo del documento
        <div class="it-card-title-icon-wrapper"></div>
          <it-icon color="primary" name="it-file"></it-icon>
        </div>
      </a>
      <span slot="text">
        Eventuale breve estratto descrittivo del documento. Formato PDF (200KB)
      </span>
      <div slot="footer" class="it-card-taxonomy">
        <a href="#" class="it-card-category it-card-link">
          <span class="visually-hidden">Categoria correlata: </span>
          Categoria
        </a>
      </div>
      <span slot="actions" class="me-2">Scarica come:</span>
      <a slot="actions" href="#" class="it-card-link">
        ODT (300KB)
        <span class="visually-hidden">: Titolo del documento</span>
      </a>
      <a slot="actions" href="#" class="it-card-link">
        ODS (400KB)
        <span class="visually-hidden">: Titolo del documento</span>
      </a>
    </it-card>

    <it-card>
      <a slot="title" href="#">
        Titolo del file allegato
        <span class="visually-hidden">(Formato ODT, 200KB)</span>
        <div class="it-card-title-icon-wrapper">
          <it-icon color="primary" name="it-file-odt"></it-icon>
        </div>
      </a>
      <span slot="text" aria-hidden="true">
        Formato ODT (200KB)
      </span>
    </it-card>
  `,
};

export const ProfiliPersonali: Story = {
  name: 'Card per profili personali',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card full-height variant="profile">
      <a slot="title" href="#">Nome Personale</a>
      <span slot="subtitle">Ruolo nell'organizzazione</span>
      <it-avatar slot="image" type="text" size="xl" text="Nome Personale" avatar-title="Nome Personale"></it-avatar>
    </it-card>

    <it-card full-height variant="profile" border-top="secondary">
      <a slot="title" href="#">Nome Personale</a>
      <span slot="subtitle">Ruolo nell'organizzazione</span>
      <it-avatar
        slot="image"
        size="xl"
        text="Nome Personale"
        src="https://randomuser.me/api/portraits/women/14.jpg"
        alt="Woman image"
      ></it-avatar>
    </it-card>

    <it-card full-height variant="profile">
      <a slot="title" href="#">Nome Personale</a>
      <span slot="subtitle">Ruolo nell'organizzazione</span>
      <it-avatar slot="image" type="text" size="xl" text="Nome Personale" avatar-title="Nome Personale"></it-avatar>
      <dl slot="body" class="it-card-description-list">
        <div>
          <dt>Area:</dt>
          <dd><a class="it-card-link" href="#">Nome dell'area di appartenenza</a></dd>
        </div>
        <div>
          <dt>Email:</dt>
          <dd>me@mail.com</dd>
        </div>
        <div>
          <dt>Tel:</dt>
          <dd>340.4050600</dd>
        </div>
        <div>
          <dt>Indirizzo:</dt>
          <dd>Via della città, 5 - 00100 Città</dd>
        </div>
      </dl>
    </it-card>

    <it-card full-height variant="profile" border-top="secondary">
      <a slot="title" href="#">Nome Personale</a>
      <span slot="subtitle">Ruolo nell'organizzazione</span>
      <it-avatar slot="image" type="text" size="xl" text="Nome Personale" avatar-title="Nome Personale"></it-avatar>
      <dl slot="body" class="it-card-description-list">
        <div>
          <dt>Area:</dt>
          <dd><a class="it-card-link" href="#">Nome dell'area di appartenenza</a></dd>
        </div>
        <div>
          <dt>Email:</dt>
          <dd>me@mail.com</dd>
        </div>
        <div>
          <dt>Tel:</dt>
          <dd>340.4050600</dd>
        </div>
        <div>
          <dt>Indirizzo:</dt>
          <dd>Via della città, 5 - 00100 Città</dd>
        </div>
      </dl>
    </it-card>
  `,
};

export const Luoghi: Story = {
  name: 'Card per luoghi',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card full-height variant="location">
      <a slot="title" href="#">Toponimo o luogo</a>
      <span slot="subtitle">Tipologia di luogo</span>
      <div slot="image" class="it-card-profile-image-icon-wrapper">
        <it-icon color="primary" name="it-pa" size="lg"></it-icon>
      </div>
    </it-card>

    <it-card full-height variant="location" border-top="secondary">
      <a slot="title" href="#">Toponimo o luogo</a>
      <span slot="subtitle">Tipologia di luogo</span>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/monument/320/320"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
    </it-card>

    <it-card full-height variant="location">
      <a slot="title" href="#">Toponimo o luogo</a>
      <span slot="subtitle">Tipologia di luogo</span>
      <div slot="image" class="it-card-profile-image-icon-wrapper">
        <it-icon color="primary" name="it-pa" size="lg"></it-icon>
      </div>
      <dl slot="body" class="it-card-description-list border-bottom-0 mb-0">
        <div>
          <dt>Email:</dt>
          <dd>me@mail.com</dd>
        </div>
        <div>
          <dt>Tel:</dt>
          <dd>340.4050600</dd>
        </div>
        <div>
          <dt>Indirizzo:</dt>
          <dd>Via della città, 5 - 00100 Città</dd>
        </div>
      </dl>
    </it-card>

    <it-card full-height variant="location" border-top="secondary">
      <a slot="title" href="#">Toponimo o luogo</a>
      <span slot="subtitle">Tipologia di luogo</span>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/monument/320/320"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <dl slot="body" class="it-card-description-list border-bottom-0 mb-0">
        <div>
          <dt>Email:</dt>
          <dd>me@mail.com</dd>
        </div>
        <div>
          <dt>Tel:</dt>
          <dd>340.4050600</dd>
        </div>
        <div>
          <dt>Indirizzo:</dt>
          <dd>Via della città, 5 - 00100 Città</dd>
        </div>
      </dl>
      <div slot="footer" style="flex-grow:1">
        <it-icon color="secondary" name="it-map-marker" size="sm"></it-icon>
        <strong>Distanza:</strong> 900 metri
      </div>
      <a slot="footer" href="#" target="_blank" class="it-card-link">
        Apri in mappa
        <span class="visually-hidden"> Toponimo o Luogo (si apre in una nuova finestra)</span>
        <it-icon class="ms-2" color="secondary" name="it-external-link" size="sm"></it-icon>
      </a>
    </it-card>
  `,
};

export const ListeDiContenutiAffini: Story = {
  name: 'Card con liste di contenuti affini',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card full-height ratio="21x9">
      <a slot="title" href="#">Argomento Y</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/nature/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">Descrizione breve dell'argomento in poche righe non troncate.</span>
      <ul slot="body" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
        <li class="list-group-item"><a href="#">Titolo notizia affine</a></li>
        <li class="list-group-item"><a href="#">Titolo media affine</a></li>
        <li class="list-group-item"><a href="#">Altro titolo scheda affine</a></li>
        <li class="list-group-item"><a href="#">Pagina profilo affine</a></li>
      </ul>
    </it-card>

    <it-card full-height ratio="21x9">
      <a slot="title" href="#">Titolo evento</a>
      <figure slot="image" class="figure img-full">
        <img src="https://placeholderimage.eu/api/monument/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
      </figure>
      <span slot="subtitle">Dal 17 al 22 novembre</span>
      <span slot="text">Descrizione breve dell'evento in poche righe non troncate.</span>
      <ul slot="body" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
        <li class="list-group-item"><a href="#">Gli artisti</a></li>
        <li class="list-group-item"><a href="#">Il luogo</a></li>
        <li class="list-group-item"><a href="#">Il programma dettagliato</a></li>
      </ul>
      <div slot="footer" style="flex-grow:1">
        <a class="it-card-link" href="#">Iscriviti per rimanere aggiornato</a>
      </div>
      <a slot="footer" href="#" target="_blank" class="it-card-link">
        Apri la mappa
        <span class="visually-hidden"> di Titolo evento (si apre in una nuova finestra)</span>
        <it-icon class="ms-2" color="secondary" name="it-external-link" size="sm"></it-icon>
      </a>
    </it-card>

    <it-card full-height">
      <a slot="title" href="#">Argomento X</a>
      <span slot="text">Descrizione breve dell'argomento in poche righe non troncate.</span>
      <ul slot="body" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
        <li class="list-group-item"><a href="#" class="it-card-link">Titolo notizia affine</a></li>
        <li class="list-group-item"><a href="#" class="it-card-link">Titolo media affine</a></li>
        <li class="list-group-item"><a href="#" class="it-card-link">Altro titolo scheda affine</a></li>
        <li class="list-group-item"><a href="#" class="it-card-link">Pagina profilo affine</a></li>
      </ul>
    </it-card>
  `,
};

export const Banner: Story = {
  name: 'Card banner',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card variant="banner">
      <a slot="title" href="#">Titolo del contenuto</a>
      <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
      <span slot="subtitle">Sottotitolo</span>
    </it-card>
  `,
};

export const BannerConAzione: Story = {
  name: 'Card banner con azione',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card variant="banner">
      <span slot="title">Titolo del contenuto</span>
      <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
      <span slot="subtitle">Sottotitolo</span>
      <a slot="footer" href="#">
        Scopri maggiori informazioni
        <span class="visually-hidden">su Titolo del contenuto</span>
      </a>
    </it-card>

    <it-card variant="banner">
      <span slot="title">Titolo del contenuto</span>
      <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
      <span slot="subtitle">Sottotitolo</span>
      <it-button slot="footer" variant="primary" outline>
        Apri il form di iscrizione
        <span class="visually-hidden">per Titolo del contenuto</span>
      </it-button>
    </it-card>
  `,
};

export const BannerInline: Story = {
  name: 'Card banner inline',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card variant="inline-banner">
      <a slot="title" href="#">Titolo del contenuto</a>
      <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
      <span slot="subtitle">Sottotitolo</span>
    </it-card>

    <it-card variant="inline-banner-reverse">
      <a slot="title" href="#">Titolo del contenuto</a>
      <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
      <span slot="subtitle">Sottotitolo</span>
    </it-card>

    <it-card variant="inline-banner-mini">
      <a slot="title" href="#">Titolo del contenuto</a>
      <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
      <span slot="subtitle">Versione inline anche su mobile</span>
    </it-card>

    <it-card variant="inline-banner-mini-reverse">
      <a slot="title" href="#">Titolo del contenuto</a>
      <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
      <span slot="subtitle">Versione inline anche su mobile</span>
    </it-card>
  `,
};

export const BordiEOmbre: Story = {
  name: 'Bordi e ombre',
  decorators: [
    (story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr 1fr;">${story()}</div> `,
  ],
  render: () => html`
    <it-card>
      <a slot="title" href="#">Titolo h3</a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
    </it-card>

    <it-card shadow="md">
      <a slot="title" href="#">Titolo h3</a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
    </it-card>

    <it-card shadow="lg">
      <a slot="title" href="#">Titolo h3</a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
    </it-card>

    <it-card shadow="md" border="0" style="grid-column:2">
      <a slot="title" href="#">Titolo h3</a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
    </it-card>

    <it-card shadow="lg" border="0" style="grid-column:3">
      <a slot="title" href="#">Titolo h3</a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
    </it-card>
  `,
};

export const Immagini: Story = {
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card ratio="21x9">
      <a slot="title" href="#">Titolo del contenuto</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">Card con immagine con proporzioni 21:9.</span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>

    <it-card ratio="16x9">
      <a slot="title" href="#">Titolo del contenuto</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">Card con immagine con proporzioni 16:9.</span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>

    <it-card ratio="4x3">
      <a slot="title" href="#">Titolo del contenuto</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">Card con immagine con proporzioni 4:3.</span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>

    <it-card ratio="1x1">
      <a slot="title" href="#">Titolo del contenuto</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://placeholderimage.eu/api/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">Card con immagine con proporzioni 1:1.</span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>
  `,
};

export const AltezzaDelleCard: Story = {
  name: 'Altezza delle card',
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
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>

    <it-card full-height>
      <a slot="title" href="#">Titolo del contenuto</a>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>
  `,
};

export const PulsantiMobile: Story = {
  name: 'Pulsanti a tutta larghezza su mobile',
  decorators: [(story) => html` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${story()}</div> `],
  render: () => html`
    <it-card>
      <a slot="title" href="#">Titolo dell'evento</a>
      <span slot="subtitle">Dal 4 al 6 agosto</span>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <div slot="footer" class="d-grid gap-2 d-md-block">
        <a href="#" class="btn btn-outline-secondary">
          Prenota
          <span class="visually-hidden">per Titolo dell'evento</span>
        </a>
      </div>
    </it-card>
  `,
};
