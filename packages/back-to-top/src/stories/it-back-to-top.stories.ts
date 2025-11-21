import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface BackToTopProps {
  offset: number;
  scrollLimit: number;
  duration: number;
  small: boolean;
  inverse: boolean;
  iconColor: string;
}

// Renderizza il wc it-back-to-top di default
const renderComponent = (params: BackToTopProps) =>
  html`<it-back-to-top
    offset="${ifDefined(params.offset)}"
    scroll-limit="${ifDefined(params.scrollLimit)}"
    duration="${ifDefined(params.duration)}"
    ?small="${params.small}"
    ?inverse="${params.inverse}"
    icon-color="${ifDefined(params.iconColor)}"
  ></it-back-to-top>`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Back to top',
  tags: ['a11y-ok', 'web-component', 'new'],
  component: 'it-back-to-top',
  args: {
    offset: undefined,
    scrollLimit: undefined,
    duration: undefined,
    small: undefined,
    inverse: undefined,
    iconColor: undefined,
  },
  argTypes: {
    offset: {
      control: 'number',
      description: "Posizione Y espressa in pixel alla quale ritornarne al click sull'elemento",
      table: { defaultValue: { summary: '0' } },
    },
    scrollLimit: {
      control: 'number',
      description: "Posizione Y espressa in pixel alla quale far comparire l'elemento",
      table: { defaultValue: { summary: '100' } },
    },
    duration: {
      control: 'number',
      description: "Durata dell'animazione di scroll espressa in millisecondi",
      table: { defaultValue: { summary: '800' } },
    },
    small: {
      control: 'boolean',
      description: 'Dimensione ridotta',
      table: { defaultValue: { summary: 'false' } },
    },
    inverse: {
      control: 'boolean',
      description: 'Variante di colore invertito',
      table: { defaultValue: { summary: 'false' } },
    },
    iconColor: {
      control: 'color',
      description: "Colore dell'icona",
      table: { defaultValue: { summary: 'inverse' } },
    },
  },
} satisfies Meta<BackToTopProps>;

export default meta;
type Story = StoryObj<BackToTopProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: (params) =>
    html` ${renderComponent({
      ...params,
    })}`,
};
