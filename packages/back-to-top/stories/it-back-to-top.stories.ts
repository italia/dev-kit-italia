import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface BackToTopProps {
  offset: number;
  scrollLimit: number;
  duration: number;
  small: boolean;
  inverse: boolean;
  shadow: boolean;
  border: boolean;
  borderColor: string;
  iconColor: string;
  itAriaLabel?: string;
}

// Renderizza il wc it-back-to-top di default
const renderComponent = (params: BackToTopProps) => html`
  <it-back-to-top
    offset="${ifDefined(params.offset)}"
    scroll-limit="${ifDefined(params.scrollLimit)}"
    duration="${ifDefined(params.duration)}"
    ?small="${params.small}"
    ?inverse="${params.inverse}"
    ?shadow="${params.shadow}"
    ?border="${params.border}"
    border-color="${ifDefined(params.borderColor)}"
    icon-color="${ifDefined(params.iconColor)}"
    it-aria-label="${ifDefined(params.itAriaLabel)}"
  ></it-back-to-top>
`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Back to top',
  tags: ['a11y-ok', 'web-component', 'beta'],
  component: 'it-back-to-top',
  args: {
    offset: undefined,
    scrollLimit: 0,
    duration: undefined,
    small: undefined,
    inverse: undefined,
    shadow: undefined,
    border: false,
    borderColor: undefined,
    iconColor: undefined,
    itAriaLabel: 'Torna su',
  },
  argTypes: {
    offset: {
      control: 'number',
      type: 'number',
      description: "Posizione Y espressa in pixel alla quale ritornarne al click sull'elemento",
      table: { defaultValue: { summary: '0' } },
    },
    scrollLimit: {
      name: 'scroll-limit',
      control: 'number',
      type: 'number',
      description: "Posizione Y espressa in pixel alla quale far comparire l'elemento",
      table: { defaultValue: { summary: '100' } },
    },
    duration: {
      control: 'number',
      type: 'number',
      description: "Durata dell'animazione di scroll espressa in millisecondi",
      table: { defaultValue: { summary: '800' } },
    },
    small: {
      control: 'boolean',
      type: 'boolean',
      description: 'Dimensione ridotta',
      table: { defaultValue: { summary: 'false' } },
    },
    inverse: {
      control: 'boolean',
      type: 'boolean',
      description: 'Variante di colore invertito',
      table: { defaultValue: { summary: 'false' } },
    },
    shadow: {
      control: 'boolean',
      type: 'boolean',
      description: "Aggiunge un'ombra al pulsante",
      table: { defaultValue: { summary: 'false' } },
    },
    border: {
      control: 'boolean',
      type: 'boolean',
      defaultValue: false,
      description:
        'Abilita / disabilita il bordo sul bottone per garantire il contrasto del pulsante su sfondi non a contrasto',
      table: { defaultValue: { summary: 'false' } },
    },
    borderColor: {
      name: 'border-color',
      control: 'text',
      type: 'string',
      defaultValue: 'white',
      description: 'Colore del bordo',
      table: {
        defaultValue: { summary: 'Default: "white". Se è attivo l\'attributo "inverse", il default è "primary".' },
      },
    },
    iconColor: {
      name: 'icon-color',
      control: 'text',
      type: 'string',
      description: "Colore dell'icona",
      table: { defaultValue: { summary: 'inverse' } },
    },
    itAriaLabel: {
      name: 'it-aria-label',
      control: 'text',
      type: 'string',
      description: "Etichetta aria per l'accessibilità",
    },
  },
} satisfies Meta<BackToTopProps>;

export default meta;
type Story = StoryObj<BackToTopProps>;

const ScrollToTopTemplate = (params: BackToTopProps, context: { viewMode: string }) => {
  const wrapperStyle =
    context.viewMode === 'story'
      ? ' width:100vw; overflow: auto;' // altezza fissa solo in story view
      : 'height:100px; width:100px;';
  const exampleText =
    context.viewMode === 'story'
      ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac orci vel dui convallis accumsan. Nulla facilisi. Sed euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Sed euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Sed euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac orci vel dui convallis accumsan. Nulla facilisi. Sed euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Sed euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Sed euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac orci vel dui convallis accumsan. Nulla facilisi. Sed euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Sed euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Sed euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc. Praesent euismod, nisl vel tincidunt luctus, nunc urna aliquam nunc, eget aliquam nisl nunc eu nunc.'
      : '';

  return html` <div style="${wrapperStyle}">
    ${context.viewMode === 'story'
      ? html` <div class="py-4" style="width:300px; margin-left: auto; margin-right:auto;">
          <p><strong>Scrolla il contenuto sottostante per veder apparire il pulsante.</strong></p>
          ${exampleText}
        </div>`
      : ''}
    ${renderComponent({
      ...params,
    })}
  </div>`;
};

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
  render: ScrollToTopTemplate,
};

export const Border: Story = {
  ...meta,
  name: 'Con bordo',
  args: { border: true },
  render: (params, context) => html` <div class="bg-primary text-white">${ScrollToTopTemplate(params, context)}</div> `,
};

export const BorderColor: Story = {
  ...meta,
  name: 'Colore del bordo',
  args: { border: true, borderColor: 'secondary', inverse: true, iconColor: 'secondary' },
  render: ScrollToTopTemplate,
};

export const IconColor: Story = {
  ...meta,
  name: "Colore dell'icona",
  args: { border: true, borderColor: 'danger', inverse: true, iconColor: 'danger' },
  render: ScrollToTopTemplate,
};

export const Small: Story = {
  ...meta,
  name: 'Versione ridotta',
  args: { small: true },
  render: ScrollToTopTemplate,
};

export const Shadow: Story = {
  ...meta,
  name: 'Versione con ombra',
  args: { shadow: true },
  render: ScrollToTopTemplate,
};

export const Dark: Story = {
  ...meta,
  name: 'Versione per sfondo scuro',
  args: { inverse: true, border: true },
  // render: ScrollToTopTemplate,
  render: (params, context) => html`
    <div class="bg-secondary text-white">${ScrollToTopTemplate(params, context)}</div>
  `,
};

export const DarkShadow: Story = {
  ...meta,
  name: 'Versione con ombra su sfondo scuro',
  args: { inverse: true, border: true, shadow: true },

  render: (params, context) => html`
    <div class="bg-secondary text-white">${ScrollToTopTemplate(params, context)}</div>
  `,
};
