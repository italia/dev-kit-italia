import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type DropdownProps = {
  label?: string;
  disabled?: boolean;
  alignment?:
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
  variant?: string;
  size?: string;
  'it-role'?: string;
  dark?: boolean;
  'full-width'?: boolean;
  'it-aria-label'?: string;
};
type Story = StoryObj<DropdownProps>;

const containerStyle = 'height:200px;display:flex;align-items:flex-start;';

const meta = {
  title: 'Componenti/Dropdown',
  component: 'it-dropdown',
  tags: ['a11y-ok', 'web-component'],
  args: {
    label: 'Apri dropdown',
    disabled: false,
    alignment: undefined,
    variant: 'primary',
    size: undefined,
    'it-role': undefined,
    dark: false,
    'full-width': false,
    'it-aria-label': undefined,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Testo del pulsante che apre il dropdown',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabilita il dropdown',
      table: { defaultValue: { summary: 'false' } },
    },
    alignment: {
      control: 'select',
      description: 'Posizionamento del menu rispetto al pulsante',
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
      type: 'string',
      table: { defaultValue: { summary: 'bottom-start' } },
    },
    variant: {
      control: 'select',
      description: 'Variante grafica del pulsante',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'light', 'link'],
      type: 'string',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      description: 'Dimensione del pulsante',
      options: ['sm', 'lg'],
      type: 'string',
      table: {},
    },
    'it-role': {
      control: 'select',
      description: 'Ruolo del pulsante (vedi la sezione Accessibilità)',
      options: ['menu', 'list'],
      type: 'string',
      table: { defaultValue: { summary: 'menu' } },
    },
    dark: {
      control: 'boolean',
      description: 'Stile scuro per il menu dropdown',
      table: { defaultValue: { summary: 'false' } },
    },
    'full-width': {
      control: 'boolean',
      description: 'Imposta la larghezza del menu dropdown al 100% del contenitore',
      table: { defaultValue: { summary: 'false' } },
    },
    'it-aria-label': {
      control: 'text',
      description:
        "Valore per l'attributo `aria-label` del pulsante (obbligatorio per accessibilità se `label` è vuoto)",
      type: 'string',
    },
  },
  parameters: {
    docs: {
      source: { excludeDecorators: true },
    },
  },
} satisfies Meta<DropdownProps>;

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
    <it-dropdown
      label=${args.label}
      ?disabled=${args.disabled}
      alignment=${ifDefined(args.alignment)}
      size=${ifDefined(args.size)}
      variant=${args.variant}
      it-role=${ifDefined(args['it-role'])}
      ?dark=${args.dark}
      ?full-width=${args['full-width']}
      it-aria-label=${ifDefined(args['it-aria-label'])}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,
  tags: ['!autodocs', '!dev'],
  decorators: [(Story) => html`<div style="height:200px">${Story()}</div>`],
};

export const Varianti: Story = {
  render: () => html`
    <it-dropdown label="Apri dropdown" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,
  decorators: [(Story) => html`<div style="${containerStyle}gap:0.5rem;flex-wrap:wrap">${Story()}</div>`],
  argTypes: { ...disabledControls() },
};

export const Posizionamento: Story = {
  render: () => html`
    <it-dropdown label="Apri dropdown" alignment="bottom-start" style="grid-column:2">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropup" alignment="top-start" style="grid-row:3;grid-column:2">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropstart" alignment="left" style="grid-row:2;grid-column:3">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropend" alignment="right" style="grid-row:2;grid-column:1">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,
  decorators: [(Story) => html`<div style="display:grid;gap:.5rem;grid:1fr 1fr 1fr/1fr 1fr 1fr;">${Story()}</div>`],
  argTypes: { ...disabledControls() },
};

export const MenuVociAttive: Story = {
  render: (args) => html`
    <it-dropdown label=${args.label} variant=${args.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  `,
  argTypes: { ...disabledControls(['label', 'variant']) },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
};

export const MenuDisabilitato: Story = {
  args: { disabled: true },
  render: (args) => html`
    <it-dropdown label=${args.label} ?disabled=${args.disabled} variant=${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,
  argTypes: { ...disabledControls(['label', 'variant']) },
};

export const MenuVociDisabilitate: Story = {
  render: (args) => html`
    <it-dropdown label=${args.label} variant=${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,
  argTypes: { ...disabledControls(['label', 'variant']) },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
};

export const MenuIntestazioniSeparatori: Story = {
  render: (args) => html`
    <it-dropdown label="Apri dropdown" variant=${args.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
    </it-dropdown>
  `,
  argTypes: { ...disabledControls(['variant']) },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
};

export const MenuVociGrandi: Story = {
  render: (args) => html`
    <it-dropdown label=${args.label} variant=${args.variant}>
      <it-dropdown-item href="#" large>Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 3</it-dropdown-item>
    </it-dropdown>
  `,
  argTypes: { ...disabledControls(['label', 'variant']) },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
};

export const MenuATuttaLarghezza: Story = {
  args: { 'full-width': true },
  render: (args) => html`
    <it-dropdown
      label=${args.label}
      ?disabled=${args.disabled}
      alignment=${ifDefined(args.alignment)}
      size=${ifDefined(args.size)}
      variant=${ifDefined(args.variant)}
      it-role=${ifDefined(args['it-role'])}
      ?dark=${args.dark}
      ?full-width=${args['full-width']}
      style="width: 100%;"
      it-aria-label=${ifDefined(args['it-aria-label'])}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,
  decorators: [(Story) => html`<div style="${containerStyle}height:100px;min-width:300px">${Story()}</div>`],
};

export const MenuIconaDestra: Story = {
  render: (args) => html`
    <it-dropdown label=${args.label} variant=${args.variant}>
      <it-dropdown-item href="#">
        Azione 1
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 2
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 3
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
    </it-dropdown>
  `,
  argTypes: { ...disabledControls(['label', 'variant']) },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
};

export const MenuIconaSinistra: Story = {
  render: (args) => html`
    <it-dropdown label=${args.label} variant=${args.variant}>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 1
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 2
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 3
      </it-dropdown-item>
    </it-dropdown>
  `,
  argTypes: { ...disabledControls(['label', 'variant']) },
  decorators: [(Story) => html`<div style=${containerStyle}>${Story()}</div>`],
};

export const MenuScuro: Story = {
  args: { dark: true },
  render: (args) => html`
    <it-dropdown label=${args.label} variant=${args.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,
  argTypes: { ...disabledControls(['label', 'variant']) },
  decorators: [(Story) => html`<div style="${containerStyle}height:220px">${Story()}</div>`],
};
