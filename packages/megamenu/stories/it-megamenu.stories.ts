import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type MegamenuProps = {
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
type Story = StoryObj<MegamenuProps>;

const meta = {
  title: 'Componenti/Megamenu',
  component: 'it-megamenu',
  parameters: { pageLayout: 'w-100' },
  tags: ['a11y-ok', 'web-component', 'alpha'],
  args: {
    label: 'Megamenu',
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
      description: 'Testo del pulsante che apre il dropdown del megamenu',
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
} satisfies Meta<MegamenuProps>;

export default meta;

export const Base: Story = {
  render: (args) => html`
    <it-megamenu
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
};
