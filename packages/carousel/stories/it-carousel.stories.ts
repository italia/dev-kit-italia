import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const VARIANTS = ['single', 'columns', 'gallery-sm', 'gallert-lg'] as const;

const renderSlide = (_content: string, image?: boolean) => {
  if (image) {
    return html`<it-carousel-slide>
      <div class="card-wrapper">
        <div class="card card-img no-after">
          <div class="img-responsive-wrapper">
            <div class="img-responsive">
              <div class="img-wrapper">
                <img
                  src="https://placehold.co/480x360/ebebeb/808080/?text=Immagine"
                  title="titolo immagine"
                  alt="descrizione immagine"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </it-carousel-slide>`;
  }
  return html`<it-carousel-slide
    ><article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h3 class="it-card-title ">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">
          Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
          senza troncamento.
        </p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <time class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
      </footer>
    </article></it-carousel-slide
  >`;
};
const renderComponent = (params: any) => html`
  <it-carousel
    variant=${params.variant}
    ?fullscreen=${params.fullscreen}
    ?arrows=${params.arrows}
    type=${ifDefined(params.type)}
    config=${ifDefined(params.config ? JSON.stringify(params.config) : undefined)}
    ><h2 slot="title">Titolo carousel</h2>
    ${renderSlide('Slide1', params.variant.includes('gallery'))}
    ${renderSlide('Slide2', params.variant.includes('gallery'))}
    ${renderSlide('Slide3', params.variant.includes('gallery'))}
    ${renderSlide('Slide4', params.variant.includes('gallery'))}
    ${renderSlide('Slide5', params.variant.includes('gallery'))}
    ${renderSlide('Slide6', params.variant.includes('gallery'))}
  </it-carousel>
`;

const meta: Meta<any> = {
  title: 'Componenti/Carousel',
  tags: ['new', 'web-component', 'a11y-ok'],
  component: 'it-carousel',
  args: {
    fullscreen: false,
    arrows: false,
    variant: 'single',
    type: undefined,
    config: undefined,
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
      options: [undefined, 'slide', 'loop', 'fade'],
      type: 'string',
      table: { defaultValue: { summary: 'variant default' } },
    },
    config: {
      control: 'object',
      description:
        'Oggetto di configurazione avanzata da passare a Splide. Consulta la documentazione del componente Carousel e quella di Splide v4.x per conoscere le opzioni disponibili.',
      table: { defaultValue: { summary: 'undefined' } },
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
  decorators: [(story) => html`<div style="padding:2rem;">${story()}</div>`],
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
  render: (args) => renderComponent(args),
};

export const VarianteSingola: Story = {
  name: 'Variante singola',
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
  },
  render: (args) => renderComponent(args),
};
export const VarianteGallerySM: Story = {
  name: 'Variante gallery small',
  args: {
    variant: 'gallery-sm',
    arrows: false,
  },
  render: (args) => renderComponent(args),
};
export const VarianteGalleryLG: Story = {
  name: 'Variante gallery large',
  args: {
    variant: 'gallery-lg',
    arrows: false,
  },
  render: (args) => renderComponent(args),
};
export const ConFrecce1: Story = {
  name: 'Con frecce di navigazione1',
  args: {
    variant: 'columns',
    arrows: true,
  },
  render: (args) => renderComponent(args),
};
export const ConFrecce2: Story = {
  name: 'Con frecce di navigazione2',
  args: {
    variant: 'single',
    arrows: true,
  },
  render: (args) => renderComponent(args),
};
export const Fullscreen: Story = {
  name: 'Fullscreen',
  args: {
    variant: 'single',
    arrows: true,
    fullscreen: true,
  },
  render: (args) => renderComponent(args),
};
export const TipoScorrimento: Story = {
  name: 'Modalità di scorrimento custom del Carousel',
  args: {
    variant: 'single',
    type: 'loop',
  },
  render: (args) => renderComponent(args),
};

export const ConfigurazioneAvanzata: Story = {
  name: 'Configurazione avanzata di Splide',
  args: {
    variant: 'columns',
    config: {
      type: 'fade',
      autoplay: true,
      interval: 2000,
      pauseOnHover: true,
      resetProgress: false,
      perPage: 2,
      arrows: true,
      gap: 4,
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
