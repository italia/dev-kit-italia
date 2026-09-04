import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { TOOLTIP_PLACEMENTS } from '../src/types.js';

type TooltipArgs = {
  placement?: (typeof TOOLTIP_PLACEMENTS)[number];
};

type Story = StoryObj<TooltipArgs>;

const meta = {
  title: 'Componenti/Tooltip',
  component: 'it-tooltip',
  tags: ['web-component', 'a11y-ok'],
  parameters: {
    layout: 'padded',
  },
  args: {
    placement: 'top',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: TOOLTIP_PLACEMENTS,
      description: 'Posizione del Tooltip rispetto al suo elemento trigger',
      table: { defaultValue: { summary: 'top' } },
    },
  },
} satisfies Meta<TooltipArgs>;

export default meta;

function disabledControls(except?: (keyof (typeof meta)['argTypes'])[]) {
  return Object.keys(meta.argTypes).reduce<Record<string, { table: { disable: true } }>>((acc, key) => {
    if (!except?.includes(key as keyof (typeof meta)['argTypes'])) {
      acc[key] = { table: { disable: true } };
    }
    return acc;
  }, {});
}

export const Base: Story = {
  decorators: [(story) => html`<div style="padding:30px 0;text-align:center">${story()}</div>`],
  render: (args) => html`
    <it-tooltip placement=${ifDefined(args.placement)}>
      <it-button slot="trigger" variant="primary">Mostra tooltip</it-button>
      <span slot="content">Testo del tooltip</span>
    </it-tooltip>
  `,
  tags: ['!autodocs', '!dev'],
};

export const SuLink: Story = {
  name: 'Su link e testo',
  render: (args) => html`
    <p style="max-width:400px;line-height:2">
      Il tooltip può essere usato su qualsiasi elemento interattivo, come i
      <it-tooltip placement=${ifDefined(args.placement)}>
        <a slot="trigger" href="#" @click=${(e: Event) => e.preventDefault()}>link in una frase</a>
        <span slot="content">Primo link con tooltip</span>
      </it-tooltip>
      di testo, per fornire informazioni contestuali senza occupare spazio nella pagina. Basta passare il mouse o
      portare il focus su un
      <it-tooltip placement=${ifDefined(args.placement)}>
        <a slot="trigger" href="#" @click=${(e: Event) => e.preventDefault()}>elemento con tooltip</a>
        <span slot="content">Secondo link con tooltip</span>
      </it-tooltip>
      per vedere l'etichetta comparire.
    </p>
  `,
};

export const Posizione: Story = {
  argTypes: { ...disabledControls() },
  decorators: [
    (story) =>
      html`<div style="display:grid;gap:.5rem;grid-template:1fr 1fr 1fr / 1fr 1fr 1fr;place-items:center">
        ${story()}
      </div>`,
  ],
  render: () => html`
    <it-tooltip placement="bottom" style="grid-column:2;grid-row:1">
      <it-button slot="trigger" variant="primary">Giù</it-button>
      <span slot="content">Tooltip in basso</span>
    </it-tooltip>
    <it-tooltip placement="top" style="grid-column:2;grid-row:3">
      <it-button slot="trigger" variant="primary">Su</it-button>
      <span slot="content">Tooltip in alto</span>
    </it-tooltip>
    <it-tooltip placement="right" style="grid-column:1;grid-row:2">
      <it-button slot="trigger" variant="primary">Destra</it-button>
      <span slot="content">Tooltip a destra</span>
    </it-tooltip>
    <it-tooltip placement="left" style="grid-column:3;grid-row:2">
      <it-button slot="trigger" variant="primary">Sinistra</it-button>
      <span slot="content">Tooltip a sinistra</span>
    </it-tooltip>
  `,
};

export const TestoFormattato: Story = {
  name: 'Testo formattato',
  argTypes: { ...disabledControls() },
  render: () => html`
    <it-tooltip placement="right">
      <it-button slot="trigger" variant="primary">Mostra tooltip</it-button>
      <span slot="content"><em>Tooltip</em> <u>con</u> <strong>HTML</strong></span>
    </it-tooltip>
  `,
};

export const AttivazioneControllata: Story = {
  name: 'Attivazione controllata',
  argTypes: { ...disabledControls() },
  decorators: [(story) => html`<div style="display:flex;gap:1rem;align-items:flex-start;height:70px">${story()}</div>`],
  render: () => {
    const show = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const tooltip = btn.closest('div')?.querySelector('it-tooltip') as any;
      tooltip?.showTooltip();
    };
    const hide = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const tooltip = btn.closest('div')?.querySelector('it-tooltip') as any;
      tooltip?.hideTooltip();
    };
    return html`
      <it-tooltip placement="bottom" controlled>
        <it-button slot="trigger" variant="primary">Target</it-button>
        <span slot="content">Tooltip controllato</span>
      </it-tooltip>
      <button @mouseenter=${show} @mouseleave=${hide} class="btn btn-secondary">
        Hover qui per mostrare il tooltip
      </button>
    `;
  },
};

export const Eventi: Story = {
  args: {
    placement: 'right',
  },
  argTypes: { ...disabledControls() },
  render: (args) => {
    const onOpen = (e: CustomEvent) => console.log('Tooltip aperto', e);
    const onClose = (e: CustomEvent) => console.log('Tooltip chiuso', e);
    return html`
      <it-tooltip placement=${ifDefined(args.placement)} @it-tooltip-open=${onOpen} @it-tooltip-close=${onClose}>
        <it-button slot="trigger" variant="primary">Hover o focus</it-button>
        <span slot="content">Tooltip con eventi</span>
      </it-tooltip>
    `;
  },
};
