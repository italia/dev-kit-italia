import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { type ToolbarSizes, type ToolbarOrientations, TOOLBAR_SIZES, TOOLBAR_ORIENTATIONS } from '../src/types.ts';

interface ToolbarProps {
  size: ToolbarSizes;
  orientation: ToolbarOrientations;
  itAriaLabel: string;
}

// Renderizza il wc it-toolbar di default
const renderComponent = (params: ToolbarProps, slot: any = '') => {
  return html`
    <it-toolbar
      size="${ifDefined(params.size)}"
      orientation="${ifDefined(params.orientation)}"
      it-aria-label="${ifDefined(params.itAriaLabel)}"
    >
      ${slot}
    </it-toolbar>
  `;
};

// Slot template per toolbar base
const baseToolbarSlot = html`
  <it-toolbar-item active label="Messaggi" icon="it-comment" href="#" active="true"></it-toolbar-item>
  <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
  <it-toolbar-item label="Documenti" icon="it-file" href="#"></it-toolbar-item>
  <it-toolbar-item label="Privacy" icon="it-locked"></it-toolbar-item>
  <it-toolbar-item disabled label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>
`;

const smallToolbarSlot = html`
  <it-toolbar-item active label="Messaggi" icon="it-comment" href="#" active="true"></it-toolbar-item>
  <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
  <it-toolbar-item label="Documenti" icon="it-file" href="#"></it-toolbar-item>
  <it-toolbar-item label="Privacy" icon="it-locked" href="#"></it-toolbar-item>
  <it-toolbar-item label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>
  <it-toolbar-item disabled label="Downloads" icon="it-download" href="#"></it-toolbar-item>
`;

const meta = {
  title: 'Componenti/Toolbar',
  tags: ['a11y-ok', 'web-component', 'new'],
  component: 'it-toolbar',
  args: {
    size: 'lg',
    orientation: 'horizontal',
    itAriaLabel: 'Toolbar',
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

export const ToolbarConDivisori: Story = {
  name: 'Toolbar con divisori',
  render: (args) =>
    html`${renderComponent(
      args,
      html` <it-toolbar-item label="Messaggi" icon="it-comment" href="#" active="true"></it-toolbar-item>
        <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
        <it-toolbar-item divider></it-toolbar-item>
        <it-toolbar-item label="Documenti" icon="it-file" href="#"></it-toolbar-item>
        <it-toolbar-item label="Privacy" icon="it-locked" href="#"></it-toolbar-item>
        <it-toolbar-item divider></it-toolbar-item>
        <it-toolbar-item disabled label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>`,
    )}`,
};

export const ToolbarConBadge: Story = {
  name: 'Toolbar con badge',
  render: (args) =>
    html`${renderComponent(
      args,
      html` <it-toolbar-item
          label="Messaggi"
          icon="it-comment"
          href="#"
          badge="1"
          active="true"
          label-extended="da leggere"
        ></it-toolbar-item>
        <it-toolbar-item
          label="Documenti"
          icon="it-file"
          href="#"
          badge="42"
          label-extended="da esaminare"
        ></it-toolbar-item>
        <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
        <it-toolbar-item label="Privacy" icon="it-locked" href="#"></it-toolbar-item>
        <it-toolbar-item disabled label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>`,
    )}`,
};

export const ToolbarMediaSmallConBadge: Story = {
  name: 'Toolbar media e piccola con badge',
  tags: ['!dev'],
  args: {
    size: 'md',
  },
  render: (args) =>
    html`${renderComponent(
      args,
      html` <it-toolbar-item
          label="Messaggi"
          icon="it-comment"
          href="#"
          badge="1"
          active="true"
          label-extended="c'è 1 nuovo messaggio dal leggere"
        ></it-toolbar-item>
        <it-toolbar-item
          label="Documenti"
          icon="it-file"
          href="#"
          badge="42"
          label-extended="ci sono 42 documenti da esaminare"
        ></it-toolbar-item>
        <it-toolbar-item label="Immagini" icon="it-camera" href="#"></it-toolbar-item>
        <it-toolbar-item label="Privacy" icon="it-locked" href="#"></it-toolbar-item>
        <it-toolbar-item label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>
        <it-toolbar-item disabled label="Download" icon="it-download" href="#"></it-toolbar-item>`,
    )} `,
};

const renderWithDropdown = (args: ToolbarProps) => {
  return html`${renderComponent(
    args,
    html` <it-toolbar-item
        dropdown
        active
        label="Messaggi"
        icon="it-comment"
        badge="1"
        active="true"
        label-extended="da leggere"
      >
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>
      <it-toolbar-item dropdown label="Immagini" icon="it-camera" badge="42" label-extended="da visualizzare">
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>
      <it-toolbar-item divider></it-toolbar-item>
      <it-toolbar-item dropdown label="Documenti" icon="it-file">
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>
      <it-toolbar-item dropdown label="Privacy" icon="it-locked">
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>
      <it-toolbar-item dropdown disabled label="Preferiti" icon="it-star-outline"></it-toolbar-item>
      <it-toolbar-item dropdown label="Altro" icon="it-more-actions" class="no-expand">
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>`,
  )}`;
};

export const ToolbarDropdown: Story = {
  name: 'Toolbar con dropdown',
  render: (args) => renderWithDropdown(args),
};

export const ToolbarMediumDropdown: Story = {
  name: 'Toolbar media con dropdown',
  tags: ['!dev'],
  args: {
    size: 'md',
  },
  render: (args) => renderWithDropdown(args),
};

export const ToolbarSmallDropdown: Story = {
  name: 'Toolbar piccola con dropdown',
  tags: ['!dev'],
  args: {
    size: 'sm',
  },
  render: (args) => renderWithDropdown(args),
};

const renderVerticalToolbar = (args) =>
  html`${renderComponent(
    args,
    html` <it-toolbar-item
        active
        label="Messaggi"
        icon="it-comment"
        badge="42"
        href="#"
        active="true"
        label-extended="da leggere"
      ></it-toolbar-item>
      <it-toolbar-item dropdown label="Immagini" icon="it-camera" badge="1" label-extended="da visualizzare">
        <it-dropdown-item slot="items" href="#">Azione 1</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 2</it-dropdown-item>
        <it-dropdown-item slot="items" href="#">Azione 3</it-dropdown-item>
      </it-toolbar-item>
      <it-toolbar-item divider></it-toolbar-item>
      <it-toolbar-item label="Documenti" icon="it-file" href="#"></it-toolbar-item>
      <it-toolbar-item label="Privacy" icon="it-locked"></it-toolbar-item>
      <it-toolbar-item disabled label="Preferiti" icon="it-star-outline" href="#"></it-toolbar-item>`,
  )}`;

export const ToolbarVertical: Story = {
  name: 'Toolbar verticale',
  args: {
    orientation: 'vertical',
  },

  render: (args) => renderVerticalToolbar(args),
};

export const ToolbarMediumVertical: Story = {
  name: 'Toolbar media verticale',
  tags: ['!dev'],
  args: {
    orientation: 'vertical',
    size: 'md',
  },
  render: (args) => renderVerticalToolbar(args),
};

export const ToolbarSmallVertical: Story = {
  name: 'Toolbar piccola verticale',
  tags: ['!dev'],
  args: {
    orientation: 'vertical',
    size: 'sm',
  },
  render: (args) => renderVerticalToolbar(args),
};
