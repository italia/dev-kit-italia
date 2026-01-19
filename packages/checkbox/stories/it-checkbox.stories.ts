import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';

interface CheckboxProps {
  id: string;
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;

  form: string;
  customValidation: boolean;
  validityMessage: string;

  required: boolean;

  inline: boolean;
  group: boolean;
  supportText: string;
}

// Renderizza il wc it-checkbox di default
const renderComponent = (params: any) =>
  html`<it-checkbox
    id="${ifDefined(params.id || undefined)}"
    name="${ifDefined(params.name || undefined)}"
    value="${ifDefined(params.value?.length > 0 ? params.value : undefined)}"
    ?checked="${params.checked}"
    ?indeterminate="${params.indeterminate}"
    ?disabled="${params.disabled}"
    ?inline="${params.inline}"
    form="${ifDefined(params.form?.length > 0 ? params.form : undefined)}"
    ?custom-validation="${params.customValidation}"
    validity-message="${ifDefined(params.validityMessage || undefined)}"
    ?required="${params.required}"
    support-text="${ifDefined(params.supportText || undefined)}"
    ?group="${params.group}"
    class="${ifDefined(params.className || undefined)}"
  >
    <span slot="label">${params.label}</span>${ifDefined(params.children || undefined)}
  </it-checkbox> `;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Checkbox',
  tags: ['new', 'a11y-ok', 'web-component'],
  component: 'it-checkbox',
  args: {
    id: '',
    label: 'Checkbox di esempio',
    name: 'esempio',
    value: undefined,
    checked: false,
    indeterminate: false,
    disabled: false,

    form: undefined,
    customValidation: false,
    validityMessage: '',

    required: false,

    inline: false,
    group: false,
    supportText: '',
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'ID del campo',
      type: 'string',
    },
    label: {
      control: 'text',
      description: 'Etichetta del campo',
      type: 'string',
    },
    name: {
      control: 'text',
      type: 'string',
    },
    value: {
      control: 'text',
      description: 'Valore del campo',
      type: 'string',
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    indeterminate: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    form: {
      control: 'text',
      type: 'string',
      description: "ID html del form a cui è associato il campo, se il campo non si trova all'interno di una form ",
    },
    customValidation: {
      name: 'custom-validation',
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description:
        'Se la validazione del campo è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`.',
    },
    validityMessage: {
      name: 'validity-message',
      control: 'text',
      type: 'string',
      description:
        "Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido.",
    },
    required: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    inline: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se si vogliono mostrare più checkbox affiancate orizzontalmente',
      table: { defaultValue: { summary: 'false' } },
    },
    group: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se si vogliono mostrare più checkbox raggruppate visivamente',
      table: { defaultValue: { summary: 'false' } },
    },
    supportText: {
      name: 'support-text',
      control: 'text',
      description: 'Testo di supporto',
      type: 'string',
    },
  },
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<CheckboxProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: (params) =>
    html`${renderComponent({
      ...params,
    })} `,
};

export const Disabilitato: Story = {
  ...meta,
  // name: 'Disabilitato',
  args: { disabled: true },
  render: (params) => html`
    <it-checkbox-group name=${params.name} ?required=${params.required} ?disabled=${params.disabled}>
      <span slot="legend">Gruppo di checkbox</span>
      ${renderComponent({
        ...params,
        required: undefined,
        disabled: undefined,
        label: 'Checkbox non selezionato',
        className: 'mb-2',
      })}
      ${renderComponent({
        ...params,
        required: undefined,
        disabled: undefined,
        label: 'Checkbox selezionato',
        checked: true,
      })}
    </it-checkbox-group>
  `,
};

export const Indeterminate: Story = {
  ...meta,
  name: 'Indeterminato (mixed)',
  args: { indeterminate: true },
  render: (params) => html`
    ${renderComponent({
      ...params,
      label: 'Checkbox indeterminato',
    })}
  `,
};

export const Inline: Story = {
  ...meta,
  // name: 'Inline',
  args: { inline: true },
  argTypes: {
    ...Object.fromEntries(
      Object.entries(meta.argTypes).map(([key, value]) =>
        key !== 'inline' ? [key, { ...value, table: { ...value.table, disable: true } }] : [key, { ...value }],
      ),
    ),
  },
  render: (params) => html`
    <it-checkbox-group name=${params.name} ?required=${params.required} ?group=${params.group} ?inline=${params.inline}>
      <span slot="legend">Gruppo di checkbox</span>
      ${renderComponent({
        ...params,
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
        label: 'Checkbox non selezionato',
      })}
      ${renderComponent({
        ...params,
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
        label: 'Checkbox selezionato',
        checked: true,
      })}
    </it-checkbox-group>
  `,
};

export const Group: Story = {
  ...meta,
  name: 'Gruppo di checkbox',
  args: { group: true },
  render: (params) => html`
    <div class="row">
      <it-checkbox-group
        name=${params.name}
        ?required=${params.required}
        ?group=${params.group}
        ?inline=${params.inline}
        ?disabled=${params.disabled}
        class="col-12 col-md-6"
      >
        <span slot="legend">Gruppo di checkbox</span>
        ${renderComponent({
          ...params,
          required: undefined,
          name: undefined,
          group: undefined,
          inline: undefined,
          label: 'Checkbox selezionato',
          checked: true,
        })}
        ${renderComponent({
          ...params,
          required: undefined,
          name: undefined,
          group: undefined,
          inline: undefined,
          label: 'Checkbox non selezionato',
        })}
        ${renderComponent({
          ...params,
          required: undefined,
          name: undefined,
          group: undefined,
          inline: undefined,
          disabled: true,
          label: 'Checkbox disabilitato non selezionato',
        })}
      </it-checkbox-group>

      <it-checkbox-group
        name=${params.name}
        ?required=${params.required}
        ?group=${params.group}
        ?inline=${params.inline}
        ?disabled=${Group.disabled}
        class="col-12 col-md-6"
      >
        <span slot="legend">Gruppo di checkbox</span>
        ${renderComponent({
          ...params,
          required: undefined,
          name: undefined,
          group: undefined,
          inline: undefined,
          label: 'Checkbox selezionato',
          checked: true,
          supportText: "Testo descrittivo di supporto per l'opzione selezionabile",
        })}
        ${renderComponent({
          ...params,
          required: undefined,
          name: undefined,
          group: undefined,
          inline: undefined,
          label: 'Checkbox non selezionato',
          supportText: "Testo descrittivo di supporto per l'opzione selezionabile",
        })}
        ${renderComponent({
          ...params,
          required: undefined,
          name: undefined,
          group: undefined,
          inline: undefined,
          disabled: true,
          label: 'Checkbox disabilitato non selezionato',
          supportText: "Testo descrittivo di supporto per l'opzione selezionabile",
        })}
      </it-checkbox-group>
    </div>
  `,
};

export const GroupInitValue: Story = {
  ...meta,
  name: 'Valore iniziale del gruppo',
  args: { group: true, name: 'checkboxgroup' },
  render: (params) => html`
    <it-checkbox-group
      name=${params.name}
      ?required=${params.required}
      ?group=${params.group}
      ?inline=${params.inline}
      ?disabled=${params.disabled}
      value='["opt_1","opt_3"]'
    >
      <span slot="legend">Gruppo di checkbox</span>
      ${renderComponent({
        ...params,
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
        disabled: undefined,
        label: 'Opzione numero 1',
        value: 'opt_1',
      })}
      ${renderComponent({
        ...params,
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
        disabled: undefined,
        label: 'Opzione numero 2',
        value: 'opt_2',
      })}
      ${renderComponent({
        ...params,
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
        disabled: undefined,
        label: 'Opzione numero 3',
        value: 'opt_3',
      })}
    </it-checkbox-group>
  `,
};

export const SupportText: Story = {
  ...meta,
  name: 'Testo di supporto',
  args: { supportText: "Testo descrittivo di supporto per l'opzione selezionabile" },
  render: (params) => html`
    ${renderComponent({
      ...params,
      label: 'Checkbox con testo di supporto selezionato',
    })}
  `,
};

export const ValidazioneNativa: Story = {
  ...meta,
  name: 'Validazione nativa',
  args: { required: true },
  render: (params) => html`
    <form>
      <div class="row mb-4">
        <div class="col-md-6 d-flex align-items-center">
          ${renderComponent({
            ...params,
            label: 'Checkbox singola obbligatoria',
            name: 'single-required-example',
            id: 'single-required-example',
          })}
        </div>
        <div class="col-md-6">
          <it-checkbox-group
            name="multiple-required-example"
            ?required=${params.required}
            ?group=${params.group}
            ?inline=${params.inline}
            ?disabled=${params.disabled}
          >
            <span slot="legend">Gruppo di checkbox obbligatorio</span>
            ${renderComponent({
              ...params,
              required: undefined,
              name: undefined,
              group: undefined,
              inline: undefined,
              disabled: undefined,
              label: 'Valore 1',
              value: 'valore_1',
            })}
            ${renderComponent({
              ...params,
              required: undefined,
              name: undefined,
              group: undefined,
              inline: undefined,
              disabled: undefined,
              label: 'Valore 2',
              value: 'valore_2',
            })}
            ${renderComponent({
              ...params,
              required: undefined,
              name: undefined,
              group: undefined,
              inline: undefined,
              disabled: undefined,
              label: 'Valore 3',
              value: 'valore_3',
            })}
          </it-checkbox-group>
        </div>
      </div>
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
      <div class="row">
        <div class="col-md-6 d-flex align-items-center">
          ${renderComponent({
            ...params,
            required: undefined,
            label: 'Checkbox singola obbligatoria',
            name: 'external-validation-single-example',
            id: 'external-validation-single-example',
          })}
        </div>
        <div class="col-md-6">
          <it-checkbox-group
            name="external-validation-multiple-example"
            ?group=${params.group}
            ?inline=${params.inline}
            ?disabled=${params.disabled}
            ?custom-validation=${params.customValidation}
            validity-message="${ifDefined(params.validityMessage || undefined)}"
          >
            <span slot="legend">Gruppo di checkbox obbligatorio</span>
            ${renderComponent({
              ...params,
              required: undefined,
              name: undefined,
              group: undefined,
              inline: undefined,
              disabled: undefined,
              customValidation: undefined,
              validityMessage: undefined,
              label: 'Valore 1',
              value: 'valore_1',
            })}
            ${renderComponent({
              ...params,
              required: undefined,
              name: undefined,
              group: undefined,
              inline: undefined,
              disabled: undefined,
              customValidation: undefined,
              validityMessage: undefined,
              label: 'Valore 2',
              value: 'valore_2',
            })}
            ${renderComponent({
              ...params,
              required: undefined,
              name: undefined,
              group: undefined,
              inline: undefined,
              disabled: undefined,
              customValidation: undefined,
              validityMessage: undefined,
              label: 'Valore 3',
              value: 'valore_3',
            })}
          </it-checkbox-group>
        </div>
      </div>
    </form>
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
È sufficiente aggiungere un event listener al componente \`<it-checkbox>\` o al componente \`<it-checkbox-group>\` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di change, è possibile utilizzare il seguente codice:

\`\`\`js
document.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-change', (event) => {
  console.log('Checkbox event:', event);
  alert('Checkbox event');
});
\`\`\`

Il componente, emette anche un evento di tipo \`it-input-ready\` quando l'input è pronto e caricato nel DOM:

\`\`\`js
document.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-input-ready', (event) => {
  console.log('Checkbox ready:', event);
});
\`\`\`
      `,
      },
    },
  },
  args: {
    type: 'text',
    label: 'Prova evento di change',
    name: 'event-checkbox-example',
    id: 'event-checkbox-example',
  },
  render: (params) => html`
    <script>
      document.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-change', (event) => {
        console.log('Checkbox event:', event);
        alert('Checkbox event');
      });
      document.querySelector('it-checkbox#event-checkbox-example').addEventListener('it-input-ready', (event) => {
        console.log('Checkbox ready:', event);
      });
    </script>
    ${renderComponent({
      ...params,
    })}
  `,
};

export const MetodiEPropPubblici: Story = {
  ...StoryFormControlMethodAndProps({
    componentName: 'it-checkbox',
    otherMethods: `|\`click()\`| Triggera l'evento di click sull'input reale | - |`,
  }),
  tags: ['!dev'],
};
