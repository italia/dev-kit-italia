import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { type InputType, INPUT_SIZES, type Sizes } from '../src/types.js';

interface InputNumberProps {
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

// Renderizza il wc it-input configurato per input numerico
const renderTimeInput = (params: any) =>
  html` <it-input
    id="${ifDefined(params.id || undefined)}"
    type="time"
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
  >
    <span slot="label">${params.label}</span>${ifDefined(params.children || undefined)}
  </it-input>`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Input Ora',
  tags: ['autodocs', 'a11y-ok', 'web-component'],
  component: 'it-input',
  args: {
    id: '',
    label: 'Input Ora',
    type: 'time',
    name: 'timepicker',
    value: '',
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
      options: ['time'],
      fixed: true,
      table: { defaultValue: { summary: 'time' } },
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
      description: 'Valore del campo',
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
      description: 'Valore minimo consentito nel formato HH:MM. Es: 08:00',
      type: 'string',
    },
    max: {
      control: 'text',
      description: 'Valore massimo consentito nel formato HH:MM. Es: 15:30',
      type: 'string',
    },
    step: {
      control: 'number',
      description: 'Incremento per ogni step (utilizzato dai pulsanti +/-), in secondi',
      type: 'number',
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
        "Se il campo è `readonly`, con l'attributo 'plaintext' il campo assume l'aspetto di testo normalizzato.",
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
} satisfies Meta<InputNumberProps>;

export default meta;
type Story = StoryObj<InputNumberProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: (params) =>
    html`${renderTimeInput({
      ...params,
      label: 'Input Ora',
      name: 'timepicker',
      id: 'exampleTimepicker',
      value: '10:00',
    })}`,
};

export const LimitiEStep: Story = {
  ...meta,
  name: 'Limiti e Step',
  parameters: {
    docs: {
      description: {
        story: `
Aggiungendo gli attributi HTML \`min=""\`, \`max=""\` o \`step=""\` all'input, puoi limitare il valore minimo e massimo del campo e decidere un intervallo orario valido.

Questi attributi sono utili solo ai fini della validazione, e non modificano l'interfaccia del selettore.

Gli attributi \`min=""\`, \`max=""\` accettano valori nel formato HH:MM.

L'attributo \`step=""\` prevede l'inserimento di un intervallo in secondi.
`,
      },
    },
  },
  args: {
    value: '10:00',
    min: '09:00',
    max: '12:00',
    step: 1800,
  },
  render: (params) => html`
    ${renderTimeInput({
      ...params,
      label: 'Min, Max & Step',
      name: 'inputTimeLimits',
      id: 'inputTimeLimits',
    })}
  `,
};

// export const Disabilitato: Story = {
//   ...meta,
//   parameters: {
//     docs: {
//       description: {
//         story: `
// Per disabilitare un Input Ora, aggiungi l'attributo \`disabled\` al componente \`<it-input>\`.
// `,
//       },
//     },
//   },
//   args: {
//     value: '11:00',
//     disabled: true,
//   },
//   render: (params) => html`
//     ${renderTimeInput({
//       ...params,
//       label: 'Disabled',
//       name: 'inputTimeDisabled',
//       id: 'inputTimeDisabled',
//     })}
//   `,
// };

// export const Readonly: Story = {
//   ...meta,
//   parameters: {
//     docs: {
//       description: {
//         story: `
// Per rendere un Input Ora \`readonly\`, aggiungi l'attributo \`readonly\` al componente \`<it-input>\`.
// `,
//       },
//     },
//   },
//   args: {
//     value: '12:30',
//     readonly: true,
//   },
//   render: (params) => html`
//     ${renderTimeInput({
//       ...params,
//       label: 'Contenuto in sola lettura',
//       name: 'inputTimeReadonly',
//       id: 'inputTimeReadonly',
//     })}
//   `,
// };
