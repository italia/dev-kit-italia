import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';
import { SELECT_SIZES, type Sizes } from '../src/types.js';

interface SelectProps {
  id: string;
  label: string;
  name: string;
  multiple?: boolean;
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
    ?multiple="${params.multiple}"
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
  </it-select>`;

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
    multiple: false,
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
    multiple: {
      control: 'boolean',
      description: 'Abilita la selezione di più valori',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
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

const DefaultChildren = html`<option value="Value 1">Opzione 1</option>
  <option value="Value 2">Opzione 2</option>
  <option value="Value 3">Opzione 3</option>
  <option value="Value 4">Opzione 4</option>
  <option value="Value 5">Opzione 5</option>`;

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
      children: DefaultChildren,
    })}`,
};

export const Multiple: Story = {
  ...meta,
  name: 'Select multipla',
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
      multiple: true,
      placeholder: 'Seleziona una o più opzioni',
      children: DefaultChildren,
    })}`,
};

export const Disabled: Story = {
  ...meta,
  name: 'Select disabilitata',
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
      disabled: true,
      children: DefaultChildren,
    })}`,
};

export const Groups: Story = {
  ...meta,
  name: 'Select con gruppi',
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
      children: html`<optgroup label="Gruppo 1">
          <option value="1">Opzione 1</option>
          <option value="2">Opzione 2</option>
        </optgroup>
        <optgroup label="Gruppo 2">
          <option value="3">Opzione 3</option>
          <option value="4">Opzione 4</option>
        </optgroup>`,
    })}`,
};

export const SupportText: Story = {
  ...meta,
  name: 'Select con testo di supporto',
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
      supportText: 'Questo è un testo di supporto alla select',
      children: DefaultChildren,
    })}`,
};

export const ValidazioneNativa: Story = {
  ...meta,
  name: 'Validazione nativa',
  args: { required: true },
  render: (params) => html`
    <form>
      ${renderSelect({
        ...params,
        label: 'Select obbligatoria',
        name: 'required-example',
        id: 'required-example',
        children: DefaultChildren,
      })}

      <div class="text-center">
        <it-button type="submit" variant="primary">Invia</it-button>
      </div>
    </form>
  `,
};

export const ValidazioneCustom: Story = {
  ...meta,
  name: 'Validazione custom',
  args: { customValidation: true, validityMessage: 'Questo campo è obbligatorio!!!' },
  render: (params) => html`
    ${renderSelect({
      ...params,
      required: undefined,
      label: 'Select obbligatoria',
      name: 'external-validation-example',
      id: 'external-validation-example',
      children: DefaultChildren,
    })}
  `,
};

export const GestioneEventi: Story = {
  ...meta,
  name: 'Gestione degli eventi',
  parameters: {
    docs: {
      description: {
        story: `È possibile gestire gli eventi di \`it-input\`, \`it-blur\`, \`it-change\`, \`it-focus\`, \`it-click\` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.
<br/><br/>
È sufficiente aggiungere un event listener al componente \`<it-select>\` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di change, è possibile utilizzare il seguente codice:

\`\`\`js
document.querySelector('it-select#event-select-example').addEventListener('it-change', (event) => {
  console.log('Select event:', event);
  alert('Select event');
});
\`\`\`

Il componente, emette anche un evento di tipo \`it-input-ready\` quando l'input è pronto e caricato nel DOM:

\`\`\`js
document.querySelector('it-select#event-select-example').addEventListener('it-input-ready', (event) => {
  console.log('Select ready:', event);
});
\`\`\`
      `,
      },
    },
  },
  args: {
    label: 'Prova evento di change',
    name: 'event-select-example',
    id: 'event-select-example',
  },
  render: (params) => html`
    <script>
      document.querySelector('it-select#event-select-example').addEventListener('it-change', (event) => {
        console.log('Select event:', event);
        alert('Select event');
      });
      document.querySelector('it-select#event-select-example').addEventListener('it-input-ready', (event) => {
        console.log('Select ready:', event);
      });
    </script>
    ${renderSelect({
      ...params,
      children: DefaultChildren,
    })}
  `,
};

export const MetodiEPropPubblici: Story = {
  ...StoryFormControlMethodAndProps({
    componentName: 'it-select',
  }),
  tags: ['!dev'],
};
