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
    ?required="${params.required}"
    support-text="${ifDefined(params.supportText || undefined)}"
    class="${ifDefined(params.className || undefined)}"
  >
    <span slot="label">${params.label}</span>${ifDefined(params.children || undefined)}
  </it-toggle> `;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Toggle',
  tags: ['new', 'a11y-ok', 'web-component'],
  component: 'it-toggle',
  args: {
    id: '',
    label: "Label dell'interruttore",
    name: 'toggle-esempio',
    value: 'on',
    checked: false,
    disabled: false,
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
      description: 'Etichetta del toggle',
      type: 'string',
    },
    name: {
      control: 'text',
      description: 'Nome del campo nel form',
      type: 'string',
    },
    value: {
      control: 'text',
      description: 'Valore del campo quando è selezionato',
      type: 'string',
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description: 'Stato selezionato/attivo del toggle',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description: 'Disabilita il toggle',
    },
    required: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description: 'Rende il campo obbligatorio',
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
    <div class="row">
      <it-toggle-group
        name=${params.name}
        ?required=${params.required}
        ?group=${params.group}
        ?inline=${params.inline}
        ?disabled=${params.disabled}
        class="col-12 col-md-6"
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
        class="col-12 col-md-6"
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
    </div>
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
