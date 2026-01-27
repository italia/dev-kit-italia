import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { type Variants, type Sizes, BUTTON_VARIANTS, BUTTON_SIZES } from '@italia/button';
import { ifDefined } from 'lit/directives/if-defined.js';

interface CollapseProps {
  label: string;
  expanded: boolean;
  defaultOpen: boolean;
  as?: string;
  content?: string;
  variant?: Variants;
  size?: Sizes;
  outline?: boolean;
}
const CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

const renderComponent = (params: Partial<CollapseProps & { slot?: any }>) => html`
  <it-collapse
    ?expanded="${ifDefined(params.expanded)}"
    ?default-open="${params.defaultOpen}"
    variant="${ifDefined(params.variant)}"
    size="${ifDefined(params.size || undefined)}"
    ?outline="${ifDefined(params.outline)}"
    as="${ifDefined(params.as)}"
  >
    ${params.slot}
    <span slot="label">${!params.slot ? params.label || 'Toggle collapse' : ''}</span>
    <div slot="content" style="padding: 1.5rem 1rem; background-color: #fff;">${params.content || CONTENT}</div>
  </it-collapse>
`;

const meta: Meta<CollapseProps> = {
  title: 'Componenti/Collapse',
  tags: ['new', 'component'],
  component: 'it-collapse',
  args: {
    // label: 'Toggle collapse',
    defaultOpen: false,
    content: CONTENT,
    variant: 'primary',
    size: '',
    outline: false,
    as: 'button',
  },
  argTypes: {
    as: {
      control: 'text',
      description:
        'Tipo di elemento HTML da utilizzare come trigger (es. button, a, div). Utilizza solo tag idonei per il ruolo di pulsante.',
      table: { defaultValue: { summary: 'button' } },
    },
    variant: {
      control: 'select',
      description: 'Variante di stile del trigger, basata sulle varianti Bootstrap Italia dei pulsanti.',
      options: BUTTON_VARIANTS,
      type: 'string',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      description: 'Dimensione del trigger, basata sulle dimensioni Bootstrap Italia dei pulsanti.',
      options: BUTTON_SIZES,
      type: 'string',
      table: { defaultValue: { summary: undefined } },
    },
    outline: {
      control: 'boolean',
      description: 'Se true, applica lo stile outline Bootstrap Italia dei pulsanti al trigger.',
      table: { defaultValue: { summary: 'false' } },
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Se true, il collapse è aperto di default al primo rendering',
      table: { defaultValue: { summary: 'false' } },

      name: 'default-open',
    },
    content: {
      control: 'text',
      description: 'Contenuto del collapse (slot content), solo per playground interattivo.',
    },
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [(story) => html`<div style="display:flex;flex-direction:column;gap:1rem">${story()}</div>`],
};

export default meta;
type Story = StoryObj<CollapseProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
    },
  },
  render: (args) => renderComponent(args),
};

export const Comportamento: Story = {
  render: () => html`
    ${renderComponent({
      label: 'Apri sezione (button)',
      as: 'button',
      variant: 'primary',
    })}
    ${renderComponent({
      label: 'Apri sezione (a)',
      as: 'a',
      variant: 'link',
    })}
  `,
};

export const TriggerClassi: Story = {
  name: 'Varianti del trigger',
  render: () => html`
    ${renderComponent({ label: 'Pulsante primary', variant: 'primary', as: 'button' })}
    ${renderComponent({ label: 'Pulsante secondary', variant: 'secondary', as: 'button' })}
    ${renderComponent({ label: 'Pulsante success', variant: 'success', as: 'button' })}
    ${renderComponent({ label: 'Pulsante danger', variant: 'danger', as: 'button' })}
    ${renderComponent({ label: 'Pulsante warning', variant: 'warning', as: 'button' })}
    ${renderComponent({ label: 'Pulsante link', variant: 'link', as: 'button' })}
    ${renderComponent({ label: 'Pulsante outline primary', variant: 'primary', outline: true, as: 'button' })}
    ${renderComponent({ label: 'Pulsante outline secondary', variant: 'secondary', outline: true, as: 'button' })}
    ${renderComponent({ label: 'Pulsante outline success', variant: 'success', outline: true, as: 'button' })}
    ${renderComponent({ label: 'Pulsante outline danger', variant: 'danger', outline: true, as: 'button' })}
    ${renderComponent({ label: 'Pulsante outline warning', variant: 'warning', outline: true, as: 'button' })}
    ${renderComponent({ label: 'Pulsante xs', size: 'xs', variant: 'primary', as: 'button' })}
    ${renderComponent({ label: 'Pulsante default', size: '', variant: 'primary', as: 'button' })}
    ${renderComponent({ label: 'Pulsante lg', size: 'lg', variant: 'primary', as: 'button' })}
  `,
};

export const Aperto: Story = {
  name: 'Stato iniziale aperto',
  render: () => html`
    ${renderComponent({
      label: 'Apri sezione (espansa di default)',
      defaultOpen: true,
      as: 'button',
    })}
    ${renderComponent({
      label: 'Apri sezione',
      as: 'button',
    })}
  `,
};

export const LinkCollapse: Story = {
  name: 'Link come trigger',
  render: () => html`
    ${renderComponent({
      label: 'Link per aprire il collapse',
      as: 'a',
    })}
  `,
};

export const TriggerPersonalizzato: Story = {
  name: 'Trigger personalizzato',
  render: () => html`
    <it-collapse>
      <button class="my-custom-collapse-button" slot="trigger"><span slot="label">Trigger custom</span></button>

      <div slot="content" style="padding: 1.5rem 1rem; background-color: #fff;">${CONTENT}</div>
    </it-collapse>
    <style>
      .my-custom-collapse-button {
        background-color: #e0e0e0;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
      }
      .my-custom-collapse-button:hover {
        background-color: #d5d5d5;
      }
    </style>
  `,
};
