import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ToggleProps {
  id: string;
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;

  form: string;
  customValidation: boolean;
  validityMessage: string;

  required: boolean;
  inline: boolean;
  group: boolean;
  supportText: string;
}

// Renderizza il wc it-toggle di default
const renderComponent = (params: any) =>
  html`<it-toggle
    id="${ifDefined(params.id || undefined)}"
    name="${ifDefined(params.name || undefined)}"
    value="${ifDefined(params.value?.length > 0 ? params.value : undefined)}"
    ?checked="${params.checked}"
    ?disabled="${params.disabled}"
    ?inline="${params.inline}"
    form="${ifDefined(params.form?.length > 0 ? params.form : undefined)}"
    ?custom-validation="${params.customValidation}"
    validity-message="${ifDefined(params.validityMessage || undefined)}"
    ?required="${params.required}"
    support-text="${ifDefined(params.supportText || undefined)}"
    class="${ifDefined(params.className || undefined)}"
  >
    <span slot="label">${params.label}</span>${ifDefined(params.children || undefined)}
  </it-toggle> `;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Toggle',
  tags: ['a11y-ok', 'web-component'],
  component: 'it-toggle',
  args: {
    id: '',
    label: "Label dell'interruttore",
    name: 'toggle-esempio',
    value: undefined,
    checked: false,
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
      description: 'Nome del campo nel form',
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
      description: 'Allinea i toggle orizzontalmente',
      table: { defaultValue: { summary: 'false' } },
    },
    group: {
      control: 'boolean',
      type: 'boolean',
      description: 'Raggruppa visivamente i toggle',
      table: { defaultValue: { summary: 'false' } },
    },
    supportText: {
      name: 'support-text',
      control: 'text',
      description: 'Testo di supporto/aiuto sotto il toggle',
      type: 'string',
    },
  },
} satisfies Meta<ToggleProps>;

export default meta;
type Story = StoryObj<ToggleProps>;

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

export const Attivo: Story = {
  name: 'Attivo (checked)',
  args: { checked: true },
  render: (params) =>
    html`${renderComponent({
      ...params,
      label: 'Interruttore attivo',
    })} `,
};

export const Disabilitato: Story = {
  args: { disabled: true },
  render: (params) => html`
    <div class="mb-3">
      <h6 class="mb-2">Disabilitati</h6>
      ${renderComponent({
        ...params,
        label: 'Interruttore disabilitato (spento)',
      })}
    </div>
    <div class="mb-3">
      ${renderComponent({
        ...params,
        label: 'Interruttore disabilitato (acceso)',
        checked: true,
      })}
    </div>
  `,
};

export const Inline: Story = {
  args: { inline: true, name: 'toggle-inline' },
  render: (params) => html`
    <it-toggle-group name=${params.name} ?required=${params.required} ?group=${params.group} ?inline=${params.inline}>
      <span slot="legend">Gruppo di toggle</span>
      ${renderComponent({
        ...params,
        label: 'Interruttore 1',
        value: 'option1',
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
      })}
      ${renderComponent({
        ...params,
        label: 'Interruttore 2',
        value: 'option2',
        checked: true,
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
      })}
      ${renderComponent({
        ...params,
        label: 'Interruttore 3',
        value: 'option3',
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
      })}
    </it-toggle-group>
  `,
};

export const Raggruppati: Story = {
  name: 'Raggruppati visivamente',
  args: { group: true },
  parameters: { pageLayout: 'w-100' },
  render: (params) => html`
    <it-toggle-group
      name=${params.name}
      ?required=${params.required}
      ?group=${params.group}
      ?inline=${params.inline}
      ?disabled=${params.disabled}
    >
      <span slot="legend">Gruppo di toggle</span>
      ${renderComponent({
        ...params,
        label: 'Interruttore acceso',
        value: 'option1',
        checked: true,
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
      })}
      ${renderComponent({
        ...params,
        label: 'Interruttore spento',
        value: 'option2',
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
      })}
      ${renderComponent({
        ...params,
        label: 'Interruttore disabilitato',
        value: 'option3',
        disabled: true,
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
      })}
    </it-toggle-group>

    <it-toggle-group
      name=${`${params.name}-1`}
      ?required=${params.required}
      ?group=${params.group}
      ?inline=${params.inline}
      ?disabled=${params.disabled}
      style="margin-top: 24px;"
    >
      <span slot="legend">Gruppo di toggle</span>
      ${renderComponent({
        ...params,
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
        label: 'Interruttore acceso',
        value: 'option1',
        checked: true,
        supportText: "Testo descrittivo di supporto per l'opzione selezionabile",
      })}
      ${renderComponent({
        ...params,
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
        label: 'Interruttore spento',
        value: 'option2',
        supportText: "Testo descrittivo di supporto per l'opzione selezionabile",
      })}
      ${renderComponent({
        ...params,
        required: undefined,
        name: undefined,
        group: undefined,
        inline: undefined,
        disabled: true,
        label: 'Interruttore disabilitato',
        value: 'option3',
        supportText: "Testo descrittivo di supporto per l'opzione selezionabile",
      })}
    </it-toggle-group>
  `,
};

export const ConTestoSupporto: Story = {
  name: 'Con testo di supporto',
  args: { supportText: 'Abilita questa funzionalità per migliorare le prestazioni' },
  render: (params) =>
    html`${renderComponent({
      ...params,
      label: 'Abilita modalità prestazioni',
    })} `,
};

export const StatoDefault: Story = {
  name: 'Stato default',
  render: (params) =>
    html`${renderComponent({
      ...params,
      label: "Label dell'interruttore",
    })} `,
};
