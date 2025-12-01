import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { type InputType, INPUT_SIZES, type Sizes } from '../src/types.js';

interface InputCalendarProps {
  id: string;
  label: string;
  type: InputType;
  name: string;
  disabled?: boolean;
  invalid: boolean;
  required: boolean;
  validityMessage: string;
  customValidation: boolean;
  readonly: boolean;
  plaintext: boolean;
  placeholder: string;
  supportText: string;
  value: string;
  size: Sizes;
  min?: string;
  max?: string;
  step?: number;
}

const today = new Date();
const defaultMin = today.toISOString().split('T')[0];
const _defaultMax = new Date(today);
_defaultMax.setDate(today.getDate() + 3);
const defaultMax = _defaultMax.toISOString().split('T')[0];

const dayOfWeek = today.getDay();
const daysUntilNextMonday = (8 - dayOfWeek) % 7 || 7;
const _nextMonday = new Date(today);
_nextMonday.setDate(today.getDate() + daysUntilNextMonday);
const nextMonday = _nextMonday.toISOString().split('T')[0];

// Renderizza il wc it-input configurato per input numerico
const renderCalendarInput = (params: any) =>
  html`<it-input
    id="${ifDefined(params.id || undefined)}"
    type="date"
    name="${ifDefined(params.name || undefined)}"
    value="${ifDefined(params.value || undefined)}"
    ?disabled="${params.disabled}"
    ?custom-validation="${params.customValidation}"
    validity-message="${ifDefined(params.validityMessage || undefined)}"
    min="${ifDefined(params.min || undefined)}"
    max="${ifDefined(params.max || undefined)}"
    step="${ifDefined(params.step || undefined)}"
    ?required="${params.required}"
    ?readonly="${params.readonly}"
    ?plaintext="${params.plaintext}"
    placeholder="${ifDefined(params.placeholder || undefined)}"
    support-text="${ifDefined(params.supportText || undefined)}"
    size="${ifDefined(params.size || undefined)}"
    ?adaptive="${params.adaptive}"
  >
    <span slot="label">${params.label}</span>${ifDefined(params.children || undefined)}
  </it-input>`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Input Calendario',
  tags: ['a11y-ok', 'web-component'],
  component: 'it-input',
  args: {
    id: '',
    label: 'Datepicker',
    type: 'date',
    name: 'inputDate',
    value: undefined,
    disabled: false,
    customValidation: false,
    validityMessage: '',
    min: undefined,
    max: undefined,
    step: undefined,
    required: false,
    readonly: false,
    plaintext: false,
    placeholder: '',
    supportText: '',
    size: undefined,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Etichetta del campo',
    },
    type: {
      control: 'select',
      options: ['date'],
      fixed: true,
      table: { defaultValue: { summary: 'date' } },
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
      description: 'Valore del campo (nel formato YYYY-MM-DD)',
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
    min: {
      control: 'text',
      description: 'Valore minimo consentito (nel formato YYYY-MM-DD)',
      type: 'string',
    },
    max: {
      control: 'text',
      description: 'Valore massimo consentito (nel formato YYYY-MM-DD)',
      type: 'string',
    },
    step: {
      control: 'number',
      description: 'Incremento per ogni step (utilizzato dai pulsanti +/-)',
      type: 'string',
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
    plaintext: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description:
        "Se il campo è readonly, con l'attributo 'plaintext' il campo assume l'aspetto di testo normalizzato.",
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
      options: INPUT_SIZES,
      description: "Dimensione del campo: 'sm' | (non definito) | 'lg' ",
      table: { defaultValue: { summary: undefined } },
      type: 'string',
    },
  },
} satisfies Meta<InputCalendarProps>;

export default meta;
type Story = StoryObj<InputCalendarProps>;

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
    html`${renderCalendarInput({
      ...params,
    })}`,
};

export const MinMax: Story = {
  ...meta,
  name: 'Restringere il periodo di validità',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  args: { ...meta.args, min: defaultMin, max: defaultMax, label: 'Scegli una data nel periodo' },
  render: (params) =>
    html`${renderCalendarInput({
      ...params,
    })}`,
};

export const Step: Story = {
  ...meta,
  name: 'Impostare intervalli di date regolari',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  args: { ...meta.args, min: nextMonday, step: 7, label: 'Scegli una data' },
  render: (params) =>
    html`${renderCalendarInput({
      ...params,
    })}`,
};
