import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { TOOLTIP_PLACEMENTS } from '../src/types.js';

type TooltipArgs = {
  label?: string;
  placement?: (typeof TOOLTIP_PLACEMENTS)[number];
};

type Story = StoryObj<TooltipArgs>;

const meta = {
  title: 'Componenti/Tooltip',
  component: 'it-tooltip',
  tags: ['alpha', 'web-component', 'a11y-ok'],
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Testo del tooltip',
    placement: 'right',
  },
  argTypes: {
    label: { control: 'text' },
    placement: {
      control: 'select',
      options: TOOLTIP_PLACEMENTS,
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
  render: (args) => html`
    <it-tooltip label=${ifDefined(args.label)} placement=${ifDefined(args.placement)}>
      <it-button slot="trigger" variant="primary">Mostra tooltip</it-button>
    </it-tooltip>
  `,
  tags: ['!autodocs', '!dev'],
};

export const SuLink: Story = {
  name: 'Su link e testo',
  args: {
    placement: 'top',
  },
  argTypes: { ...disabledControls(['placement']) },
  render: (args) => html`
    <p style="max-width:400px;line-height:2">
      Il tooltip può essere usato su qualsiasi elemento interattivo, come i
      <it-tooltip label="Primo link con tooltip" placement=${ifDefined(args.placement)}>
        <a slot="trigger" href="#" @click=${(e: Event) => e.preventDefault()}>link in una frase</a>
      </it-tooltip>
      di testo, per fornire informazioni contestuali senza occupare spazio nella pagina. Basta passare il mouse o
      portare il focus su un
      <it-tooltip label="Secondo link con tooltip" placement=${ifDefined(args.placement)}>
        <a slot="trigger" href="#" @click=${(e: Event) => e.preventDefault()}>elemento con tooltip</a>
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
    <it-tooltip label="Tooltip in basso" placement="bottom" style="grid-column:2;grid-row:1">
      <it-button slot="trigger" variant="primary">Giù</it-button>
    </it-tooltip>
    <it-tooltip label="Tooltip in alto" placement="top" style="grid-column:2;grid-row:3">
      <it-button slot="trigger" variant="primary">Su</it-button>
    </it-tooltip>
    <it-tooltip label="Tooltip a destra" placement="right" style="grid-column:1;grid-row:2">
      <it-button slot="trigger" variant="primary">Destra</it-button>
    </it-tooltip>
    <it-tooltip label="Tooltip a sinistra" placement="left" style="grid-column:3;grid-row:2">
      <it-button slot="trigger" variant="primary">Sinistra</it-button>
    </it-tooltip>
  `,
};

export const AttivazioneControllata: Story = {
  name: 'Attivazione controllata',
  args: {
    label: 'Tooltip controllato',
  },
  argTypes: { ...disabledControls(['label']) },
  decorators: [(story) => html`<div style="display:flex;gap:1rem;align-items:flex-start;height:70px">${story()}</div>`],
  render: (args) => {
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
      <it-tooltip label=${ifDefined(args.label)} placement="bottom" controlled>
        <it-button slot="trigger" variant="primary">Target</it-button>
      </it-tooltip>
      <button @mouseenter=${show} @mouseleave=${hide} class="btn btn-secondary">
        Hover qui per mostrare il tooltip
      </button>
    `;
  },
};

export const Eventi: Story = {
  args: {
    label: 'Tooltip con eventi',
  },
  render: (args) => {
    const onOpen = (e: CustomEvent) => console.log('Tooltip aperto', e);
    const onClose = (e: CustomEvent) => console.log('Tooltip chiuso', e);
    return html`
      <it-tooltip
        label=${ifDefined(args.label)}
        placement=${ifDefined(args.placement)}
        @it-tooltip-open=${onOpen}
        @it-tooltip-close=${onClose}
      >
        <it-button slot="trigger" variant="primary">Hover o focus</it-button>
      </it-tooltip>
    `;
  },
};
