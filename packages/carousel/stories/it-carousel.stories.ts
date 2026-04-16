import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import i18nIT from '../src/locales/it.js';

const VARIANTS = ['single', 'columns', 'gallery-sm', 'gallert-lg'] as const;

const renderSimpleCard = (image?: boolean, variant?: string, index?: string) => {
  if (variant === 'inline')
    return html`<it-card variant="inline">
      <a slot="title" href="#">Titolo contenuto editoriale ${index}</a>
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
    </it-card>`;
  return html` <it-card full-height="">
    <a slot="title" href="#">
      Titolo contenuto video ${index}
      <div class="it-card-title-icon-wrapper">
        <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
      </div>
    </a>
    ${image
      ? html`<figure slot="image" class="figure img-full">
          <img
            src="https://placeholderimage.eu/api/city/800/600"
            alt="${index}. Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
          />
        </figure>`
      : nothing}
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
  </it-card>`;
};

const renderSlide = (
  index?: string,
  cardOptions?: { type: 'simpleCard' | 'image' | 'cardWithImage' | 'inline' | 'video' },
) => {
  if (cardOptions?.type === 'video') {
    return html`<it-carousel-slide>
      <it-video
        src="https://vjs.zencdn.net/v/oceans.webm"
        poster=""
        type="video/mp4"
        translations='{"it":{"Audio Player":"Lettore audio","Video Player":"Lettore video","Play":"Play","Pause":"Pausa","Replay":"Replay","Current Time":"Orario attuale","Duration":"Durata","Remaining Time":"Tempo rimanente","Stream Type":"Tipo di streaming","LIVE":"LIVE","Loaded":"Caricato","Progress":"Stato","Progress Bar":"Barra di avanzamento","progress bar timing: currentTime={1} duration={2}":"{1} di {2}","Fullscreen":"Schermo intero","Exit Fullscreen":"Chiudi Schermo intero","Mute":"Disattiva l’audio","Unmute":"Attiva l’audio","Playback Rate":"Velocità di riproduzione","Subtitles":"Sottotitoli","subtitles off":"Senza sottotitoli","Captions":"Sottotitoli non udenti","captions off":"Senza sottotitoli non udenti","Chapters":"Capitolo","Descriptions":"Descrizioni","descriptions off":"Descrizioni disattivate","Audio Track":"Traccia audio","Volume Level":"Livello del volume","You aborted the media playback":"La riproduzione del filmato è stata interrotta.","A network error caused the media download to fail part-way.":"Il download del filmato è stato interrotto a causa di un problema rete.","The media could not be loaded, either because the server or network failed or because the format is not supported.":"Il filmato non può essere caricato a causa di un errore nel server o nella rete o perché il formato non viene supportato.","The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":"La riproduzione del filmato è stata interrotta a causa di un file danneggiato o per l’utilizzo di impostazioni non supportate dal browser.","No compatible source was found for this media.":"Non ci sono fonti compatibili per questo filmato.","The media is encrypted and we do not have the keys to decrypt it.":"Il contenuto multimediale è criptato e non disponiamo delle chiavi per decifrarlo.","Play Video":"Riproduci il video","Close":"Chiudi","Close Modal Dialog":"Chiudi la finestra di dialogo","Modal Window":"Finestra di dialogo","This is a modal window":"Questa è una finestra di dialogo","This modal can be closed by pressing the Escape key or activating the close button.":"Questa finestra di dialogo può essere chiusa premendo sul tasto Esc o attivando il pulsante di chiusura.",", opens captions settings dialog":", aprire i parametri della trascrizione dei sottotitoli",", opens subtitles settings dialog":", aprire i parametri dei sottotitoli",", opens descriptions settings dialog":", aprire i parametri delle descrizioni",", selected":", selezionato","captions settings":"Parametri sottotitoli non udenti","subtitles settings":"Parametri sottotitoli","descriptions settings":"Parametri descrizioni","Text":"Testo","White":"Bianco","Black":"Nero","Red":"Rosso","Green":"Verde","Blue":"Blu","Yellow":"Giallo","Magenta":"Magenta","Cyan":"Ciano","Background":"Sfondo","Window":"Finestra","Transparent":"Trasparente","Semi-Transparent":"Semi-Trasparente","Opaque":"Opaco","Font Size":"Dimensione dei caratteri","Text Edge Style":"Stile dei bordi del testo","None":"Nessuno","Uniform":"Uniforme","Drop shadow":"Ombra","Font Family":"Carattere","Proportional Sans-Serif":"Sans-Serif proporzionale","Monospace Sans-Serif":"Sans-Serif monospaziato","Proportional Serif":"Serif proporzionale","Monospace Serif":"Serif monospaziato","Small Caps":"Maiuscoletto","Reset":"Reinizializza","restore all settings to the default values":"Ripristina i valori predefiniti per tutti i parametri","Done":"Fatto","Caption Settings Dialog":"Finestra di dialogo dei parametri della trascrizione dei sottotitoli","Beginning of dialog window. Escape will cancel and close the window.":"Inizio della finestra di dialogo. Il tasto Esc annullerà l’operazione e chiuderà la finestra.","End of dialog window.":"Fine della finestra di dialogo.","{1} is loading.":"{1} in fase di caricamento.","Exit Picture-in-Picture":"Esci dalla modalità Picture-in-Picture","Picture-in-Picture":"Picture-in-Picture","Color":"Colore","Opacity":"Opacità","Text Background":"Sfondo testo","Caption Area Background":"Sfondo area sottotitoli","Skip forward {1} seconds":"Avanti {1} secondi","Skip backward {1} seconds":"Indietro {1} secondi"}}'
        lang="it"
        track="[]"
      ></it-video>
    </it-carousel-slide>`;
  }
  if (cardOptions?.type === 'image') {
    return html`<it-carousel-slide>
      <div class="card-wrapper">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper">
              <img
                src="https://www.placeholderimage.eu/api/800/600"
                title="titolo immagine ${index}"
                alt="descrizione immagine ${index}"
              />
            </div>
          </div>
        </div>
      </div>
    </it-carousel-slide>`;
  }
  if (cardOptions?.type === 'cardWithImage') {
    return html`<it-carousel-slide>${renderSimpleCard(true, undefined, index)}</it-carousel-slide>`;
  }
  return html`<it-carousel-slide>${renderSimpleCard(false, undefined, index)}</it-carousel-slide>`;
};
const renderComponent = (params: any) => html`
  <it-carousel
    variant=${params.variant}
    ?fullscreen=${params.fullscreen}
    ?arrows=${params.arrows}
    ?autoplay=${params.autoplay}
    ?separator=${params.separator}
    type=${ifDefined(params.type)}
    config=${ifDefined(params.config ? JSON.stringify(params.config) : undefined)}
    ><h2 slot="title">${params.title || 'Titolo carousel'}</h2>
    ${renderSlide('1', params.cardOptions)} ${renderSlide('2', params.cardOptions)}
    ${renderSlide('3', params.cardOptions)} ${renderSlide('4', params.cardOptions)}
    ${renderSlide('5', params.cardOptions)} ${renderSlide('6', params.cardOptions)}
  </it-carousel>
`;

const meta: Meta<any> = {
  title: 'Componenti/Carousel',
  tags: ['alpha', 'web-component', 'a11y-ok'],
  component: 'it-carousel',
  args: {
    arrows: false,
    autoplay: false,
    fullscreen: false,
    separator: false,
    type: undefined,
    variant: 'single',
    config: undefined,
    title: 'Titolo carousel',
  },
  argTypes: {
    fullscreen: {
      control: 'boolean',
      description: 'Se true, il carousel occupa tutta la larghezza disponibile.',
      table: { defaultValue: { summary: 'false' } },
    },
    arrows: {
      control: 'boolean',
      description: 'Se true, mostra le frecce di navigazione del carousel.',
      table: { defaultValue: { summary: 'false' } },
    },
    separator: {
      control: 'boolean',
      description: 'Se true, mostra un separatore verticale tra le slide.',
      table: { defaultValue: { summary: 'false' } },
    },
    variant: {
      control: 'select',
      description: 'Variante di layout del carousel.',
      options: VARIANTS,
      type: 'string',
      table: { defaultValue: { summary: 'single' } },
    },
    type: {
      control: 'select',
      description: 'Tipo di scorrimento del carousel. Se non specificato, viene usato il default della variante.',
      options: ['slide', 'loop', 'fade'],
      type: 'string',
      table: { defaultValue: { summary: '-' } },
    },
    autoplay: {
      control: 'boolean',
      description:
        "Se true, abilita l'autoplay del carousel con modalità \"pause\" (il carousel avanza automaticamente ma parte in pausa, l'utente deve premere play per avviarlo). Viene renderizzato automaticamente un pulsante di toggle play/pause. Per personalizzare l'intervallo o altre opzioni dell'autoplay, usa config.autoplay.",
      table: { defaultValue: { summary: 'false' } },
    },

    config: {
      control: false,
      description:
        'Oggetto di configurazione avanzata da passare a Splide. Consulta la documentazione del componente Carousel e quella di Splide v4.x per conoscere le opzioni disponibili.',
      table: { defaultValue: { summary: '-' } },
    },
    cardOptions: {
      table: { disable: true },
    },
    title: {
      table: { disable: true },
    },
  },

  parameters: {
    docs: {
      source: {
        excludeDecorators: true,
      },
    },
    layout: 'padded',
    a11y: {
      config: {
        rules: [
          {
            id: 'aria-valid-attr-value', // La regola che sta urlando
            enabled: false,
          },
        ],
      },
    },
  },
  decorators: [(story) => html`<div style="padding:2rem">${story()}</div>`],
};

export default meta;
type Story = StoryObj<any>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
    },
  },
  args: {
    cardOptions: {
      type: 'simpleCard',
    },
  },
  render: (args) => renderComponent(args),
};

export const VarianteSingola: Story = {
  name: 'Variante singola',
  args: {
    cardOptions: {
      type: 'inline',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'La variante `single` mostra una sola card alla volta.',
      },
    },
  },
  render: (args) => renderComponent(args),
};
export const Variante3Colonne: Story = {
  name: 'Variante 3 colonne',
  args: {
    variant: 'columns',
    arrows: false,
    cardOptions: {
      type: 'simpleCard',
    },
  },
  render: (args) => renderComponent(args),
};
export const VarianteGallerySM: Story = {
  name: 'Variante gallery small',
  args: {
    variant: 'gallery-sm',
    arrows: false,
    cardOptions: {
      type: 'image',
    },
    title: 'Variante gallery small',
  },
  render: (args) => renderComponent(args),
};
export const VarianteGalleryLG: Story = {
  name: 'Variante gallery large',
  args: {
    variant: 'gallery-lg',
    arrows: false,
    cardOptions: {
      type: 'image',
    },
    title: 'Variante gallery large',
  },
  render: (args) => renderComponent(args),
};
export const ConFrecce1: Story = {
  name: 'Con frecce di navigazione',
  args: {
    variant: 'columns',
    arrows: true,
    cardOptions: {
      type: 'cardWithImage',
    },
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 4rem;">
      ${renderComponent(args)} ${renderComponent({ ...args, variant: 'single' })}
    </div>
  `,
};

export const Fullscreen: Story = {
  args: {
    variant: 'single',
    arrows: true,
    fullscreen: true,
    cardOptions: {
      type: 'inline',
    },
  },
  render: (args) => renderComponent(args),
};

export const Separator: Story = {
  name: 'Con separatore tra le slide',
  args: {
    variant: 'columns',
    separator: true,
    cardOptions: {
      type: 'inline',
    },
  },
  render: (args) => renderComponent(args),
};

export const TipoScorrimento: Story = {
  name: 'Modalità di scorrimento custom del Carousel',
  args: {
    variant: 'single',
    type: 'loop',
    cardOptions: {
      type: 'cardWithImage',
    },
    title: 'Carousel con scorrimento in loop',
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 4rem;">
      ${renderComponent(args)} ${renderComponent({ ...args, type: 'fade', title: 'Carousel con scorrimento fade' })}
      ${renderComponent({ ...args, type: 'slide', title: 'Carousel con scorrimento slide' })}
    </div>
  `,
};

export const Autoplay: Story = {
  args: {
    variant: 'single',
    autoplay: true,
    cardOptions: {
      type: 'inline',
    },
    title: 'Carousel con autoplay',
  },
  parameters: {
    docs: {
      description: {
        story: "Esempio che mostra il pulsante Play/Pausa e l'autoplay abilitato (modalità 'pause').",
      },
    },
  },
  render: (args) => renderComponent(args),
};

export const ConfigurazioneAvanzata: Story = {
  name: 'Configurazione avanzata di Splide',
  args: {
    variant: 'columns',
    cardOptions: {
      type: 'cardWithImage',
    },
    config: {
      type: 'loop',
      autoplay: 'pause',
      interval: 3000,
      pauseOnHover: true,
      resetProgress: false,
      perPage: 2,
      arrows: true,
      gap: 16,
      padding: { left: 8, right: 8 },
      breakpoints: {
        560: {
          perPage: 1,
          gap: 0,
          padding: { left: 24, right: 24 },
          arrows: false,
        },
        768: {
          perPage: 2,
          gap: 0,
          padding: { left: 0, right: 0 },
          arrows: false,
        },
        992: {
          perPage: 3,
          gap: 0,
          padding: { left: 0, right: 0 },
          arrows: false,
        },
      },
    },
  },
  render: (args) => renderComponent(args),
};

export const VideoTest: Story = {
  name: 'VideoTest',
  tags: ['!dev'],
  args: {
    variant: 'single',
    arrows: true,
    fullscreen: true,
    cardOptions: {
      type: 'video',
    },
  },
  render: (args) => renderComponent(args),
};

export const I18n: Story = {
  name: 'i18n',
  tags: ['!dev'],
  render: () => html`<div class="hide-preview"></div>`,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        story: `
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = ${JSON.stringify(i18nIT, null, 2)}
\`\`\`
`,
      },
    },
  },
};
