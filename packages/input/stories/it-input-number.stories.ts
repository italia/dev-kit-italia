import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { type InputType, INPUT_SIZES, type Sizes } from '../src/types.js';
import '@italia/input';

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
  min?: number;
  max?: number;
  step?: number;
}

// Renderizza il wc it-input configurato per input numerico
const renderNumberInput = (params: any) =>
  html`<it-input
    id="${ifDefined(params.id || undefined)}"
    label="${ifDefined(params.label || undefined)}"
    type="number"
    name="${ifDefined(params.name || undefined)}"
    ?disabled="${params.disabled}"
    ?invalid="${params.invalid}"
    ?required="${params.required}"
    ?readonly="${params.readonly}"
    ?plaintext="${params.plaintext}"
    validity-message="${ifDefined(params.validityMessage || undefined)}"
    placeholder="${ifDefined(params.placeholder || undefined)}"
    support-text="${ifDefined(params.supportText || undefined)}"
    value="${ifDefined(params.value || undefined)}"
    size="${ifDefined(params.size || undefined)}"
    min="${ifDefined(params.min || undefined)}"
    max="${ifDefined(params.max || undefined)}"
    step="${ifDefined(params.step || undefined)}"
    ?custom-validation="${params.customValidation}"
  ></it-input>`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Input Numerico',
  tags: ['autodocs'],
  component: 'it-input',
  args: {
    id: '',
    label: 'Input Number',
    type: 'number',
    name: 'inputNumber',
    disabled: false,
    invalid: false,
    required: false,
    validityMessage: '',
    customValidation: false,
    placeholder: '',
    supportText: '',
    value: '100',
    size: undefined,
    readonly: false,
    plaintext: false,
    min: undefined,
    max: undefined,
    step: undefined,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Etichetta del campo',
    },
    type: {
      control: 'select',
      options: ['number'],
      fixed: true,
      table: { defaultValue: { summary: 'number' } },
    },
    name: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    validityMessage: {
      name: 'validity-message',
      control: 'text',
      description: 'Messaggio che viene mostrato quando il campo è invalido',
    },
    customValidation: {
      name: 'custom-validation',
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description:
        'Se la validazione del campo è fatta esternamente (lato server o con plugin js), impostare questo attributo a `true`.',
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
    value: {
      control: 'text',
      description: 'Valore del campo',
    },
    size: {
      control: 'select',
      options: INPUT_SIZES,
      description: "Dimensione del campo: 'sm' | (stringa vuota) | 'lg' ",
      table: { defaultValue: { summary: undefined } },
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
    min: {
      control: 'number',
      description: 'Valore minimo consentito',
    },
    max: {
      control: 'number',
      description: 'Valore massimo consentito',
    },
    step: {
      control: 'number',
      description: 'Incremento per ogni step (utilizzato dai pulsanti +/-)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Campi input con pulsanti per incrementare/decrementare valori numerici.</Description>

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`aria-*\` passati a \`<it-input>\` vengono applicati all'input generato.
</p></div></div>
`,
      },
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
    html`${renderNumberInput({
      ...params,
      label: 'Input Numerico',
      name: 'inputNumber',
      id: 'exampleInputNumber',
    })}`,
};

export const Esempi: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `
La larghezza del campo predefinita è quella del suo contenitore, per limitare la larghezza alle dimensioni del valore contenuto utilizzare il ridimensionamento adattivo.
`,
      },
    },
  },
  args: {
    value: '100',
  },
  render: (params) => html`
    <div class="w-100">
      ${renderNumberInput({
        ...params,
        label: 'Input Numerico inserito in una colonna a tutta larghezza',
        name: 'inputNumberFull',
        id: 'inputNumberFull',
      })}
    </div>
    <div class="w-50">
      ${renderNumberInput({
        ...params,
        label: 'Input Numerico inserito in una colonna di larghezza 50%',
        name: 'inputNumberHalf',
        id: 'inputNumberHalf',
      })}
    </div>
  `,
};

export const LimitiEStep: Story = {
  ...meta,
  name: 'Limiti e Step',
  parameters: {
    docs: {
      description: {
        story: `
Aggiungendo gli attributi HTML \`min=""\`, \`max=""\` e \`step=""\` all'input è possibile limitare il valore minimo e massimo del campo e decidere di quanto varierà a ogni click sui pulsanti.
`,
      },
    },
  },
  args: {
    value: '100',
    min: 0,
    max: 200,
    step: 10,
  },
  render: (params) => html`
    ${renderNumberInput({
      ...params,
      label: 'Min, Max & Step',
      name: 'inputNumberLimits',
      id: 'inputNumberLimits',
    })}
  `,
};

export const Valuta: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `
Per anteporre il simbolo della valuta in Euro, aggiungere la classe \`.input-symbol-label\` all'elemento \`<label>\`.
`,
      },
    },
  },
  args: {
    value: '3.50',
    step: 0.01,
    min: 0,
  },
  render: (params) => html`
    <style>
      .input-symbol-label::before {
        content: '€ ';
        font-weight: normal;
      }
    </style>
    ${renderNumberInput({
      ...params,
      label: 'Currency',
      name: 'inputNumberCurrency',
      id: 'inputNumberCurrency',
    })}
    <script>
      // Aggiungi la classe input-symbol-label alla label
      document.addEventListener('DOMContentLoaded', function () {
        const label = document.querySelector('label[for="inputNumberCurrency"]');
        if (label) {
          label.classList.add('input-symbol-label');
        }
      });
    </script>
  `,
};

export const Percentuale: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `
Per anteporre il simbolo percentuale, aggiungere la classe \`.input-symbol-label\` all'elemento \`<label>\`.

Si consiglia di impostare gli attributi \`min=0\` e \`max="100"\`.
`,
      },
    },
  },
  args: {
    value: '50',
    step: 10,
    min: 0,
    max: 100,
  },
  render: (params) => html`
    <style>
      .input-symbol-label-percent::before {
        content: '% ';
        font-weight: normal;
      }
    </style>
    ${renderNumberInput({
      ...params,
      label: 'Percentage',
      name: 'inputNumberPercent',
      id: 'inputNumberPercent',
    })}
    <script>
      // Aggiungi la classe input-symbol-label alla label
      document.addEventListener('DOMContentLoaded', function () {
        const label = document.querySelector('label[for="inputNumberPercent"]');
        if (label) {
          label.classList.add('input-symbol-label-percent');
        }
      });
    </script>
  `,
};

export const Disabilitato: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `
Per disabilitare un Input number, aggiungere la classe \`.disabled\` al wrapper \`.input-number\`. Aggiungere anche l'attributo \`disabled\` al campo e ai pulsanti.
`,
      },
    },
  },
  args: {
    value: '50',
    disabled: true,
  },
  render: (params) => html`
    ${renderNumberInput({
      ...params,
      label: 'Disabled',
      name: 'inputNumberDisabled',
      id: 'inputNumberDisabled',
    })}
  `,
};

export const Readonly: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `
Per rendere un Input number \`readonly\`, aggiungere l'attributo \`readonly\` al campo e \`disabled\` ai pulsanti.
`,
      },
    },
  },
  args: {
    value: '50',
    readonly: true,
  },
  render: (params) => html`
    ${renderNumberInput({
      ...params,
      label: 'Contenuto in sola lettura',
      name: 'inputNumberReadonly',
      id: 'inputNumberReadonly',
    })}
  `,
};

export const Ridimensionamento: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `
È possibile far sì che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Per ottenere questo comportamento, è sufficiente aggiungere la classe \`input-number-adaptive\`.
`,
      },
    },
  },
  args: {
    value: '99999',
  },
  render: (params) => html`
    <style>
      .input-number-adaptive {
        width: auto !important;
        max-width: fit-content;
      }
    </style>
    ${renderNumberInput({
      ...params,
      label: 'Adattivo',
      name: 'inputNumberAdaptive',
      id: 'inputNumberAdaptive',
    })}
    <script>
      // Aggiungi la classe input-number-adaptive al wrapper
      document.addEventListener('DOMContentLoaded', function () {
        const inputContainer = document.querySelector('#inputNumberAdaptive').shadowRoot?.querySelector('.form-group');
        if (inputContainer) {
          inputContainer.classList.add('input-number-adaptive');
        }
      });
    </script>
  `,
};
