/// <reference path="../src/it-popover.ts" />

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type PopoverProps = {
  placement?:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'right-start'
    | 'right-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end';
  open?: boolean;
};

type Story = StoryObj<PopoverProps>;

const meta = {
  title: 'Componenti/Popover',
  component: 'it-popover',
  tags: ['beta', 'web-component'],
  args: {
    placement: 'right',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
      ],
      table: {
        defaultValue: { summary: 'bottom-start' },
      },
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      source: { excludeDecorators: true },
    },
  },
} satisfies Meta<PopoverProps>;

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
  ...meta,
  render: (args) => html`
    <it-popover placement=${ifDefined(args.placement)}>
      <it-button slot="trigger" variant="primary"> Opzioni utente, clicca per aprire </it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>
  `,
  tags: ['!autodocs', '!dev'],
};

export const Posizione: Story = {
  ...meta,
  render: () => html`
    <it-popover placement="bottom-start" style="grid-column:2">
      <it-button slot="trigger" variant="primary">Giù</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="top-start" style="grid-row:3;grid-column:2">
      <it-button slot="trigger" variant="primary">Su</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="left" style="grid-row:2;grid-column:3">
      <it-button slot="trigger" variant="primary">Sinistra</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>

    <it-popover placement="right" style="grid-row:2;grid-column:1">
      <it-button slot="trigger" variant="primary">Destra</it-button>
      <div slot="content" class="popover">
        <h4 class="popover-header">Titolo del popover</h4>
        <div class="popover-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.</div>
      </div>
    </it-popover>
  `,
  decorators: [(Story) => html`<div style="display:grid;gap:.5rem;grid:1fr 1fr 1fr/1fr 1fr 1fr;">${Story()}</div>`],
  argTypes: { ...disabledControls() },
};

export const ConIconaELink: Story = {
  ...meta,
  name: 'Titolo con icona e link',
  render: () => {
    const handleLinkClick = (e: Event) => {
      e.preventDefault();
    };

    return html`
      <it-popover>
        <it-button slot="trigger" variant="primary"> Popover con icona e link </it-button>
        <div slot="content" class="popover">
          <h4 class="popover-header">
            <it-icon name="it-help-circle" size="sm"></it-icon>
            Titolo con icona
          </h4>
          <div class="popover-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
            <a href="#" class="popover-inner-link" @click=${handleLinkClick}>
              Leggi tutto
              <it-icon name="it-arrow-right" size="xs" color="primary"></it-icon>
            </a>
          </div>
        </div>
      </it-popover>
    `;
  },
  decorators: [(Story) => html`<div style="height:200px">${Story()}</div>`],
  argTypes: { ...disabledControls() },
};

export const ElementiDisabilitati: Story = {
  ...meta,
  name: 'Elementi disabilitati',
  render: () => html`
    <it-popover placement="right">
      <it-button slot="trigger" variant="primary" disabled> Pulsante disabilitato, il popover non si apre </it-button>
      <div slot="content" class="popover">
        <div class="popover-body">Popover disabilitato</div>
      </div>
    </it-popover>
  `,
  argTypes: { ...disabledControls() },
};

export const ElementiDisabilitatiConHover: Story = {
  ...meta,
  name: 'Elementi disabilitati con hover',
  render: () => {
    const handleMouseEnter = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover');
      popover?.openPopover();
    };

    const handleMouseLeave = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover');
      popover?.closePopover();
    };

    const handleFocus = (e: Event) => {
      const button = e.target as HTMLElement;
      const popover = button.closest('it-popover');
      popover?.openPopover();
    };

    const handleBlur = (e: FocusEvent) => {
      const target = e.relatedTarget as HTMLElement;
      if (!target?.closest?.('it-popover')) {
        const button = e.target as HTMLElement;
        const popover = button.closest('it-popover');
        popover?.closePopover();
      }
    };

    return html`
      <it-popover placement="right">
        <it-button
          slot="trigger"
          variant="primary"
          disabled
          @mouseenter=${handleMouseEnter}
          @mouseleave=${handleMouseLeave}
          @focus=${handleFocus}
          @blur=${handleBlur}
        >
          Pulsante disabilitato
        </it-button>
        <div slot="content" class="popover" @blur=${handleBlur}>
          <div class="popover-body">Pulsante disabilitato, qui puoi spiegare il perché</div>
        </div>
      </it-popover>
    `;
  },
  argTypes: { ...disabledControls() },
};

export const AttivazioneControllata: Story = {
  ...meta,
  name: 'Attivazione controllata',
  tags: ['!dev'],
  render: () => html`
    <it-popover controlled placement="right">
      <it-button slot="trigger" variant="primary" id="controlled-trigger"> Popover controllato </it-button>
      <div slot="content" class="popover">
        <div class="popover-inner">
          <div class="popover-body">Questo popover non si aprirà e questo testo non si vedrà.</div>
        </div>
      </div>
    </it-popover>
  `,
  argTypes: { ...disabledControls() },
};

export const Eventi: Story = {
  ...meta,
  render: () => {
    const handleOpen = (e: CustomEvent) => {
      console.log('Popover aperto', e);
    };

    const handleClose = (e: CustomEvent) => {
      console.log('Popover chiuso', e);
    };

    return html`
      <it-popover @it-popover-open=${handleOpen} @it-popover-close=${handleClose} placement="right">
        <it-button slot="trigger" variant="primary">Popover con eventi</it-button>
        <div slot="content" class="popover">
          <h4 class="popover-header">Eventi del Popover</h4>
          <div class="popover-body">Apri e chiudi questo popover per vedere gli eventi nella console.</div>
        </div>
      </it-popover>
    `;
  },
  argTypes: { ...disabledControls() },
};
