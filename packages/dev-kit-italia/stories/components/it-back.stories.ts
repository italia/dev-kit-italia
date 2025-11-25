import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '@italia/icon';
import '@italia/button';

const meta = {
  title: 'Componenti/Torna indietro',
  component: 'it-back',
  tags: ['beta', 'documentation'],
  render: () => html`<div class="hide-preview"></div>`,
  parameters: {
    docs: {
      description: {
        component: `
    <Description>Elemento di navigazione per tornare alla pagina o alla schermata precedente</Description>
            `.trim(),
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Link: Story = {
  render: () => html`
    <a
      href="#"
      class="go-back"
      @click=${(e: Event) => {
        e.preventDefault();
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
      <span>Torna indietro</span>
    </a>
  `,
};

export const Pulsante: Story = {
  decorators: [
    (story) => html` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${story()}<!-- Fine esempi --></div> `,
  ],
  render: () => html`
    <it-button
      variant="primary"
      class="go-back"
      @click=${() => {
        window.history.back();
      }}
      icon
    >
      <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
      <span>Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      @click=${() => {
        window.history.back();
      }}
      icon
    >
        <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
        <span>Torna su</span>
      </span>
    </it-button>
  `,
};

export const PulsanteSolaIcona: Story = {
  name: 'Pulsante con sola icona',

  decorators: [
    (story) => html` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${story()}<!-- Fine esempi --></div> `,
  ],
  render: () => html`
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-right" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-down" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
  `,
};
