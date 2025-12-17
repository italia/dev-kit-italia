import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { SELECT_SIZES, type Sizes } from '../src/types.js';

interface SelectProps {
  id: string;
  label: string;
  name: string;
  disabled?: boolean;
  invalid: boolean;
  required: boolean;
  validityMessage: string;
  customValidation: boolean;
  readonly: boolean;
  placeholder: string;
  supportText: string;
  value: string;
  size: Sizes;
}

// Renderizza il wc it-select
const renderSelect = (params: any) =>
  html`<it-select
    id="${ifDefined(params.id || undefined)}"
    name="${ifDefined(params.name || undefined)}"
    value="${ifDefined(params.value || undefined)}"
    ?disabled="${params.disabled}"
    ?custom-validation="${params.customValidation}"
    validity-message="${ifDefined(params.validityMessage || undefined)}"
    ?required="${params.required}"
    ?readonly="${params.readonly}"
    placeholder="${ifDefined(params.placeholder || undefined)}"
    support-text="${ifDefined(params.supportText || undefined)}"
    size="${ifDefined(params.size || undefined)}"
  >
    <span slot="label">${params.label}</span>
    ${ifDefined(params.children || undefined)}
  </it-input>`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Select',
  tags: ['a11y-ok', 'web-component', 'beta'],
  component: 'it-select',
  args: {
    id: '',
    label: 'Etichetta',
    name: 'select-input',
    value: undefined,
    disabled: false,
    customValidation: false,
    validityMessage: '',
    required: false,
    readonly: false,
    placeholder: "Seleziona un'opzione",
    supportText: '',
    size: undefined,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Etichetta del campo',
    },
    name: {
      control: 'text',
    },

    value: {
      control: 'text',
      description: 'Valore del campo',
      type: 'string',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    customValidation: {
      name: 'custom-validation',
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description:
        'Se la validazione del campo è fatta esternamente (lato server o con plugin js), impostare questo attributo a `true`.',
    },
    validityMessage: {
      name: 'validity-message',
      control: 'text',
      description:
        "Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido.",
    },
    required: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    readonly: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      control: 'text',
      description: 'Testo segnaposto',
    },
    supportText: {
      name: 'support-text',
      control: 'text',
      description: 'Testo di supporto',
    },
    size: {
      control: { type: 'select', labels: { undefined: '(non definito)', sm: 'sm', lg: 'lg' } },
      options: SELECT_SIZES,
      description: "Dimensione del campo: 'sm' | (non definito) | 'lg' ",
      table: { defaultValue: { summary: undefined } },
      type: 'string',
    },
  },
} satisfies Meta<SelectProps>;

export default meta;
type Story = StoryObj<SelectProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: (params) =>
    html`${renderSelect({
      ...params,
      children: html`<option value="Value 1">Opzione 1</option>
        <option value="Value 2">Opzione 2</option>
        <option value="Value 3">Opzione 3</option>
        <option value="Value 4">Opzione 4</option>
        <option value="Value 5">Opzione 5</option>`,
    })}`,
};
