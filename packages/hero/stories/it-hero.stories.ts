import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryWidth100 } from '../../../.storybook/it-decorators.ts';
import { OVERLAY_COLORS, type OverlayColor } from '../src/types.js';

import '@italia/hero';

interface HeroProps {
  'it-aria-label'?: string;
  center?: boolean;
  'overlay-color'?: OverlayColor;
  overlap?: boolean;
}

const meta = {
  title: 'Componenti/Hero',
  tags: ['alpha', 'web-component', 'a11y-ok'],
  component: 'it-hero',

  args: {
    'it-aria-label': 'In evidenza',
    center: false,
    'overlay-color': undefined,
    overlap: false,
  },
  argTypes: {
    'it-aria-label': {
      control: 'text',
      description:
        "Testo usato come `aria-label` sul contenitore dell'Hero (es. \"In evidenza\"). Obbligatorio quando l'hero contiene solamente un'immagine.",
      table: { defaultValue: { summary: 'In evidenza' } },
    },
    center: {
      control: 'boolean',
      description: 'Allinea al centro il testo dello slot `text`.',
      table: { defaultValue: { summary: 'false' } },
    },
    'overlay-color': {
      control: 'select',
      options: OVERLAY_COLORS,
      description: 'Imposta il colore di overlay',
      type: 'string',
    },
    overlap: {
      control: 'boolean',
      description: "Sovrappone l'elemento che segue al componente Hero.",
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<HeroProps>;

const exampleSlotImage = html` <img
  title="titolo immagine"
  alt="descrizione immagine"
  slot="background"
  src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg"
/>`;

const exampleSlotText = html`<div slot="text" class="it-hero-text-wrapper bg-dark">
  <span class="it-category">Titolo occhiello</span>
  <h2>Titolo della sezione</h2>
  <p class="d-none d-lg-block">
    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
    enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
  </p>
  <div class="my-btn-container"><a class="btn btn-sm btn-outline-primary" href="#">Azione primaria </a></div>
</div>`;

const renderComponent = (args: any) => html`
  <it-hero
    it-aria-label=${ifDefined(args['it-aria-label'] || undefined)}
    ?center="${args.center}"
    overlay-color="${ifDefined(args['overlay-color'] || undefined)}"
    ?overlap="${args.overlap}"
  >
    ${ifDefined(args.children || undefined)}
  </it-hero>
`;

const renderComponentWithImage = (args: any) =>
  renderComponent({
    ...args,
    children: exampleSlotImage,
  });
export default meta;
type Story = StoryObj<HeroProps>;

const decorators = [StoryWidth100];

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: { docs: { canvas: { sourceState: 'hidden' } } },
  decorators,
  render: (args) =>
    html`${renderComponentWithImage({
      ...args,
    })}`,
};

export const ConImmagine: Story = {
  name: 'Con immagine',
  decorators,
  render: (args) =>
    html`${renderComponentWithImage({
      ...args,
    })}`,
};

export const ConContenutiTestuali: Story = {
  name: 'Con contenuti testuali',
  decorators,
  render: (args) => renderComponent({ ...args, children: exampleSlotText }),
};

export const ConContenutiTestualiCentrati: Story = {
  name: 'Con contenuti testuali centrati',
  decorators,
  args: { ...meta.args, center: true },
  render: (args) => renderComponent({ ...args, children: exampleSlotText }),
};

export const ConTestoEImmagine: Story = {
  name: 'Con testi ed immagine di sfondo',
  decorators,
  args: { ...meta.args },
  render: (args) => renderComponent({ ...args, children: html`${exampleSlotImage} ${exampleSlotText}` }),
};

export const ConTestoEImmaginePrimary: Story = {
  name: 'Con overlay di colore primario',
  decorators,
  args: { ...meta.args, 'overlay-color': 'primary' },
  render: (args) => renderComponent({ ...args, children: html`${exampleSlotImage} ${exampleSlotText}` }),
};

export const ConTestoEImmaginePrimaryFilter: Story = {
  name: 'Con overlay e filtro di colore primario',
  decorators,
  args: { ...meta.args, 'overlay-color': 'filter' },
  render: (args) => renderComponent({ ...args, children: html`${exampleSlotImage}` }),
};

// TODO: Sostituire in questo esempio, lhtml della card con il componente <it-card>
export const OverlapContent: Story = {
  name: 'Con immagine e margine negativo per contenuti sovrapposti',
  decorators,
  args: { ...meta.args, overlap: true },
  render: (args) => html`
    ${renderComponent({ ...args, children: html`${exampleSlotImage} ${exampleSlotText}` })}
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- <div class="col-12 col-lg-10 offset-lg-1"> e card-space nel wrapper>-->
          <div class="col-12 mb-3 mb-md-4">
            <!--start it-card-->
            <article class="it-card rounded shadow border px-5 py-4">
              <!--card first child is the title (link)-->
              <h3 class="it-card-title no_toc h4">Titolo del contenuto</h3>
              <!--card body content-->
              <div class="it-card-body">
                <p class="it-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div class="it-card-footer border-0" aria-label="Link correlati:">
                <a href="#" class="it-card-link"
                  >Scopri di più <span class="visually-hidden">su Titolo del contenuto</span></a
                >
              </div>
            </article>
            <!--end it-card-->
          </div>
        </div>
      </div>
    </div>
  `,
};
