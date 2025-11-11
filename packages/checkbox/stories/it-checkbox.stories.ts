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
    ><span slot="label">${params.label}</span>${ifDefined(params.children || undefined)}</it-checkbox
  >`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Checkbox',
  tags: ['autodocs', 'new', 'a11y-ok', 'web-component'],
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
    },
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
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Casella di controllo accessibile e responsiva, che consente all'utente di attivare o disattivare un'opzione.</Description>


<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`it-aria-*\` passati a \`<it-checkbox>\` vengono applicati all'input generato.
</p></div></div>
`,
      },
    },
  },
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<CheckboxProps>;

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
    html`${renderComponent({
      ...params,
    })} `,
};

export const Disabilitato: Story = {
  ...meta,
  // name: 'Disabilitato',
  args: { disabled: true },

  parameters: {
    docs: {
      description: {
        story: `
Per disabilitare i checkbox, aggiungi l'attributo \`disabled\` al componente \`<it-checkbox>\`.
`,
      },
    },
  },
  render: (params) => html`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      ${renderComponent({
        ...params,
        label: 'Checkbox non selezionato',
        className: 'mb-2',
      })}
      ${renderComponent({
        ...params,
        label: 'Checkbox selezionato',
        checked: true,
      })}
    </fieldset>
  `,
};

export const Indeterminate: Story = {
  ...meta,
  name: 'Indeterminato (mixed)',
  args: { indeterminate: true },

  parameters: {
    docs: {
      description: {
        story: `
Per ottenere lo stato indeterminato di una checkbox, aggiungi l'attributo \`indeterminate\` al componente \`<it-checkbox>\`.
`,
      },
    },
  },
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

  parameters: {
    docs: {
      description: {
        story: `
Per allineare orizzontalmente le checkbox, aggiungi l'attributo \`inline\` a \`<it-checkbox>\`.
`,
      },
    },
  },
  render: (params) => html`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      ${renderComponent({
        ...params,
        label: 'Checkbox non selezionato',
      })}
      ${renderComponent({
        ...params,
        label: 'Checkbox selezionato',
        checked: true,
      })}
    </fieldset>
  `,
};

export const Group: Story = {
  ...meta,
  name: 'Gruppo di checkbox',
  args: { group: true },

  parameters: {
    docs: {
      description: {
        story: `
Per creare un gruppo di checkbox allineati in colonna, occorre aggiungere l'attributo \`group\` al componente \`<it-checkbox>\`. L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale.

In questi casi, se tutti gli elementi \`<it-checkbox>\` hanno lo stesso attributo \`name\`, al submit della form via js, il modo corretto per estrarre il valore è:

\`\`\`js
  const formData = new FormData(document.getElementById('form'));
formData.getAll(field_name) // dove \`field_name\` è il valore dell'attributo \`[name]\`
\`\`\`
`,
      },
    },
  },
  render: (params) => html`
    <div class="row">
      <fieldset class="col-12 col-md-6">
        <legend>Gruppo di checkbox</legend>
        ${renderComponent({
          ...params,
          label: 'Checkbox selezionato',
          checked: true,
        })}
        ${renderComponent({
          ...params,
          label: 'Checkbox non selezionato',
        })}
        ${renderComponent({
          ...params,
          disabled: true,
          label: 'Checkbox disabilitato non selezionato',
        })}
      </fieldset>

      <fieldset class="col-12 col-md-6">
        <legend>Gruppo di checkbox</legend>
        ${renderComponent({
          ...params,
          label: 'Checkbox selezionato',
          checked: true,
          supportText: "Testo descrittivo di supporto per l'opzione selezionabile",
        })}
        ${renderComponent({
          ...params,
          label: 'Checkbox non selezionato',
          supportText: "Testo descrittivo di supporto per l'opzione selezionabile",
        })}
        ${renderComponent({
          ...params,
          disabled: true,
          label: 'Checkbox disabilitato non selezionato',
          supportText: "Testo descrittivo di supporto per l'opzione selezionabile",
        })}
      </fieldset>
    </div>
  `,
};

export const SupportText: Story = {
  ...meta,
  name: 'Testo di supporto',
  args: { supportText: "Testo descrittivo di supporto per l'opzione selezionabile" },

  parameters: {
    docs: {
      description: {
        story: `
Per mostrare un testo di supporto alla checkbox, aggiungi l'attributo \`supportText="Testo di supporto"\` a \`<it-checkbox>\`.
`,
      },
    },
  },
  render: (params) => html`
    ${renderComponent({
      ...params,
      label: 'Checkbox con testo di supporto selezionato',
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
