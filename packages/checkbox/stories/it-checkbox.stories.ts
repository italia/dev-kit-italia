import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';

import '@italia/checkbox';

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
    label="${ifDefined(params.label || undefined)}"
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
    >${ifDefined(params.children || undefined)}</it-checkbox
  >`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Checkbox',
  tags: ['autodocs'],
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
Tutti gli attributi \`aria-*\` passati a \`<it-checkbox>\` vengono applicati all'input generato.
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
Affinché i campi checkbox risultino disabilitati occorrerà aggiungere l’attributo \`disabled\` al componente \`<it-checkbox>\`.
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

export const Indeterminate: Story = {
  ...meta,
  name: 'Stato indeterminato (mixed)',
  args: { indeterminate: true },

  parameters: {
    docs: {
      description: {
        story: `
Per ottenere lo stato indeterminato di una checkbox, è sufficiente aggiungere l'attributo \`indeterminate\` al componente \`<it-checkbox>\`.
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
Per allineare orizzontalmente le checkbox basterà aggiungere l'attributo \`inline\` a \`<it-checkbox>\`.
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
  name: 'Raggruppate visivamente',
  args: { group: true },

  parameters: {
    docs: {
      description: {
        story: `
Per raggruppare visivamente gli elementi checkbox occorrerà aggiungere al componente \`<it-checkbox>\` l'attributo \`group\`. L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale.
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
          supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
        })}
        ${renderComponent({
          ...params,
          label: 'Checkbox non selezionato',
          supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
        })}
        ${renderComponent({
          ...params,
          disabled: true,
          label: 'Checkbox disabilitato non selezionato',
          supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
        })}
      </fieldset>
    </div>
  `,
};

export const SupportText: Story = {
  ...meta,
  name: 'Testo di supporto',
  args: { supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero' },

  parameters: {
    docs: {
      description: {
        story: `
Per mostrare un testo di supporto alla checkbox, basterà aggiungere l'attributo \`supportText="Testo di supporto"\` a \`<it-checkbox>\`.
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

export const MetodiEPropPubblici: Story = { ...StoryFormControlMethodAndProps, tags: ['!dev'] };
