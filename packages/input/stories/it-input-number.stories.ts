import type { Meta, StoryObj } from '@storybook/web-components-vite';
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
  adaptive: boolean;
  min?: number;
  max?: number;
  step?: number;
}

// Renderizza il wc it-input configurato per input numerico
const renderNumberInput = (params: any) =>
  html`<it-input
    id="${ifDefined(params.id || undefined)}"
    type="number"
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
    ><span slot="label">${params.label}</span>${ifDefined(params.children || undefined)}</it-input
  >`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Input Numerico',
  tags: ['autodocs', 'a11y-ok', 'web-component'],
  component: 'it-input',
  args: {
    id: '',
    label: 'Input Number',
    type: 'number',
    name: 'inputNumber',
    value: '100',
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
    adaptive: false,
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
      control: 'select',
      options: INPUT_SIZES,
      description: "Dimensione del campo: 'sm' | (stringa vuota) | 'lg' ",
      table: { defaultValue: { summary: undefined } },
    },
    adaptive: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description:
        'Se il campo è `type="number"`, con l\'attributo `adaptive` il campo assume adatta la sua larghezza al contenuto',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Campi input con pulsanti per incrementare/decrementare valori numerici.</Description>


L'input numerico è una variante del componente \`<it-input>\` con l'attributo \`type\` impostato su \`number\`.

Pertanto, per quanto riguarda:

- la **validazione** e la **gestione degli errori**
- la **gestione degli eventi**
- i **metodi e le proprietà** accessibili tramite JavaScript
- il **supporto all’internazionalizzazione (i18n)**


è necessario fare riferimento alla **documentazione principale** del componente \`<it-input>\`.

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
Per anteporre il simbolo della valuta (ad esempio in Euro), utilizza lo slot \`prepend\`.
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
    ${renderNumberInput({
      ...params,
      label: 'Currency',
      name: 'inputNumberCurrency',
      id: 'inputNumberCurrency',
      children: html`<span slot="prepend" class="fw-semibold">&euro;</span> `,
    })}
  `,
};

export const Percentuale: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `
Per anteporre il simbolo percentuale, utilizza lo slot \`prepend\`.

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
    ${renderNumberInput({
      ...params,
      label: 'Percentage',
      name: 'inputNumberPercent',
      id: 'inputNumberPercent',
      children: html`<span slot="prepend" class="fw-semibold">%</span> `,
    })}
  `,
};

export const Disabilitato: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `
Per disabilitare un Input number, aggiungere l'attributo \`disabled\` al componente \`<it-input>\`.
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
Per rendere un Input number \`readonly\`, aggiungere l'attributo \`readonly\` al componente \`<it-input>\`.
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
È possibile far sì che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Per ottenere questo comportamento, è sufficiente aggiungere l'attributo \`adaptive\` al componente \`<it-input>\`.
`,
      },
    },
  },
  args: {
    value: '99999',
    adaptive: true,
  },
  render: (params) => html`
    ${renderNumberInput({
      ...params,
      label: 'Adattivo',
      name: 'inputNumberAdaptive',
      id: 'inputNumberAdaptive',
    })}
  `,
};
