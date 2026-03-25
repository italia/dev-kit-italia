import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { type ToolbarSizes, type ToolbarOrientations, TOOLBAR_SIZES, TOOLBAR_ORIENTATIONS } from '../src/types.ts';

interface ToolbarProps {
  size: ToolbarSizes;
  orientation: ToolbarOrientations;
  itAriaLabel: string;
  dark: boolean;
}

// Renderizza il wc it-toolbar di default
const renderComponent = (params: ToolbarProps, slot: any = '') => {
  return html`
    <it-toolbar
      size="${ifDefined(params.size)}"
      orientation="${ifDefined(params.orientation)}"
      it-aria-label="${ifDefined(params.itAriaLabel)}"
      ?dark="${params.dark}"
    >
      ${slot}
    </it-toolbar>
  `;
};

// Slot template per toolbar base
const baseToolbarSlot = html`
  <it-toolbar-item active label="messaggi" icon="it-comment" href="#" ?active="true"></it-toolbar-item>
  <it-toolbar-item label="immagini" icon="it-camera" href="#"></it-toolbar-item>
  <it-toolbar-item label="documenti" icon="it-file" href="#"></it-toolbar-item>
  <it-toolbar-item label="privacy" icon="it-locked"></it-toolbar-item>
  <it-toolbar-item disabled label="preferiti" icon="it-star-outline" href="#"></it-toolbar-item>
`;

const smallToolbarSlot = html`
  <it-toolbar-item active label="messaggi" icon="it-comment" href="#" ?active="true"></it-toolbar-item>
  <it-toolbar-item label="immagini" icon="it-camera" href="#"></it-toolbar-item>
  <it-toolbar-item label="documenti" icon="it-file" href="#"></it-toolbar-item>
  <it-toolbar-item label="privacy" icon="it-locked" href="#"></it-toolbar-item>
  <it-toolbar-item label="preferiti" icon="it-star-outline" href="#"></it-toolbar-item>
  <it-toolbar-item disabled label="downloads" icon="it-download" href="#"></it-toolbar-item>
`;

// Slot template con badge
const toolbarWithBadgeSlot = html`
  <it-toolbar-item
    label="messaggi"
    icon="it-comment"
    href="#"
    badge="1"
    ?active="true"
    it-aria-label-extended="1 da leggere"
  ></it-toolbar-item>
  <it-toolbar-item
    label="documenti"
    icon="it-file"
    href="#"
    badge="42"
    it-aria-label-extended="42 da esaminare"
  ></it-toolbar-item>
  <it-toolbar-item label="immagini" icon="it-camera" href="#"></it-toolbar-item>
`;

// Slot template con divisori
const toolbarWithDividersSlot = html`
  <it-toolbar-item label="messaggi" icon="it-comment" href="#" ?active="true"></it-toolbar-item>
  <it-toolbar-item label="immagini" icon="it-camera" href="#"></it-toolbar-item>
  <li class="toolbar-divider" role="separator" aria-orientation="vertical"><span></span></li>
  <it-toolbar-item label="documenti" icon="it-file" href="#"></it-toolbar-item>
  <it-toolbar-item label="privacy" icon="it-locked" href="#"></it-toolbar-item>
`;

// Slot template disabilitato
const toolbarWithDisabledSlot = html`
  <it-toolbar-item label="messaggi" icon="it-comment" href="#" ?active="true"></it-toolbar-item>
  <it-toolbar-item label="immagini (disabilitato)" icon="it-camera" href="#" ?disabled="true"></it-toolbar-item>
  <it-toolbar-item label="documenti" icon="it-file" href="#"></it-toolbar-item>
`;

const meta = {
  title: 'Componenti/Toolbar',
  tags: ['a11y-ok', 'web-component'],
  component: 'it-toolbar',
  args: {
    size: 'lg',
    orientation: 'horizontal',
    itAriaLabel: 'Toolbar',
    dark: false,
  },
  argTypes: {
    size: {
      control: 'select',
      description: 'Dimensione della toolbar',
      options: ['', ...TOOLBAR_SIZES],
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    orientation: {
      control: 'select',
      description: 'Orientamento della toolbar',
      options: ['', ...TOOLBAR_ORIENTATIONS],
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    itAriaLabel: {
      control: 'text',
      description: 'Aria label per la navigazione',
      table: {
        defaultValue: { summary: 'Toolbar' },
      },
    },
    dark: {
      control: 'boolean',
      description: 'Variante dark',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    wrapperClasses: 'toolbar-layout',
  },
} satisfies Meta<ToolbarProps>;

export default meta;
type Story = StoryObj<ToolbarProps>;

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
  render: (params) => html`${renderComponent(params, baseToolbarSlot)}`,
};

export const ToolbarGrande: Story = {
  name: 'Toolbar grande',
  args: {
    size: '',
  },
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => html`${renderComponent(args, baseToolbarSlot)}`,
};

export const ToolbarMedia: Story = {
  name: 'Toolbar media',
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => html`${renderComponent(args, baseToolbarSlot)}`,
};

export const ToolbarPiccola: Story = {
  name: 'Toolbar piccola',
  args: {
    size: 'sm',
  },
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => html`${renderComponent(args, smallToolbarSlot)}`,
};

export const ToolbarVertical: Story = {
  name: 'Toolbar verticale',
  args: {
    orientation: 'vertical',
  },
  argTypes: {
    orientation: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => html`${renderComponent(args, baseToolbarSlot)}`,
};

export const ToolbarConBadge: Story = {
  name: 'Toolbar con badge',
  render: (args) => html`${renderComponent(args, toolbarWithBadgeSlot)}`,
};

export const ToolbarConDivisori: Story = {
  name: 'Toolbar con divisori',
  render: (args) => html`${renderComponent(args, toolbarWithDividersSlot)}`,
};

export const ToolbarDisabilitata: Story = {
  name: 'Toolbar con elemento disabilitato',
  render: (args) => html`${renderComponent(args, toolbarWithDisabledSlot)}`,
};
