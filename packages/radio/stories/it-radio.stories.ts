import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';

interface RadioProps {
  id: string;
  name: string;
  value: string;
  inline: boolean;
  grouped: boolean;
  supportText: string;

  form: string;
  customValidation: boolean;
  validityMessage: string;
  required: boolean;
}

// Renderizza il wc it-radio di default
const renderComponent = (params: any) =>
  html`<it-radio
    id="${ifDefined(params.id || undefined)}"
    value="${ifDefined(params.value || undefined)}"
    ?checked="${params.checked}"
    ?disabled="${params.disabled}"
    support-text="${ifDefined(params.supportText || undefined)}"
    form="${ifDefined(params.form || undefined)}"
    ?custom-validation="${params.customValidation}"
    validity-message="${ifDefined(params.validityMessage || undefined)}"
  >
    <span slot="label">${params.label || ''}</span>
  </it-radio>`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Radio button',
  tags: ['alpha', 'a11y-ok', 'web-component'],
  component: 'it-radio-group',
  args: {
    id: '',
    name: 'gruppo1',
    // @ts-ignore these are docs
    disabled: false,
    supportText: '',
    grouped: false,
    inline: false,
    form: '',
    customValidation: false,
    validityMessage: '',
    required: false,
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'ID del campo',
    },

    name: {
      control: 'text',
      description: 'Nome del campo. I radio dello stesso gruppo devono avere lo stesso name.',
    },

    grouped: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se il radio-group deve avere i suoi elementi raggruppati visivamente',
      table: { defaultValue: { summary: 'false' } },
    },
    // @ts-ignore these are docs
    disabled: {
      control: 'boolean',
      type: 'boolean',
      description:
        "Se il gruppo di radio è disabilitato. Per l'omonimo attributo del componente it-radio, vedi la sezione dedicata",
      table: { defaultValue: { summary: 'false' } },
    },
    inline: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se il radio-group deve avere i suoi elementi visualizzati in linea',
      table: { defaultValue: { summary: 'false' } },
    },

    supportText: {
      name: 'support-text',
      control: 'text',
      description: 'Testo di supporto per un singolo componente it-radio',
    },
    form: {
      control: 'text',
      description:
        "ID html del form a cui è associato il componente it-radio-group, se non si trova all'interno di una form ",
    },
    customValidation: {
      name: 'custom-validation',
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description:
        'Se la validazione del radio group è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`.',
    },
    validityMessage: {
      name: 'validity-message',
      control: 'text',
      description:
        "Messaggio da mostrare quando il radio group è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido.",
    },
    required: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se il radio group è obbligatorio',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta<RadioProps>;

export default meta;
type Story = StoryObj<RadioProps>;

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
  decorators: [(Story) => html` <div style="min-width:450px">${Story()}</div>`],
  render: (params) => html`

      <it-radio-group
        name="${params.name}"
        ?inline="${params.inline}"
        ?grouped="${params.grouped}"
        .form="${params.form}"
        ?required="${params.required}"
        ?custom-validation="${params.customValidation}"
        validity-message="${ifDefined(params.validityMessage || undefined)}"
      >
        <span slot="label">Esempio interattivo</span>
        ${renderComponent({
          ...params,
          id: 'radio1',
          label: 'Radio di esempio 1',
          value: 'opzione1',
        })}
        ${renderComponent({
          ...params,
          id: 'radio2',
          label: 'Radio di esempio 2',
          value: 'opzione2',
        })}
        ${renderComponent({
          ...params,
          id: 'radio3',
          label: 'Radio di esempio 3',
          value: 'opzione3',
        })}
      </it-radio-group>
    </div>
  `,
};

export const DefinizioneDellaLabel: Story = {
  ...meta,
  name: "Definizione dell'etichetta",
  render: (params) => html`
    <it-radio-group name="gruppo-label">
      <span slot="label">Gruppo con label formattate</span>
      ${renderComponent({
        ...params,
        id: 'radio-label1',
        label: 'Etichetta semplice',
        value: 'opzione1',
      })}
      <it-radio id="radio-label2" value="opzione2">
        <span slot="label"><strong>Etichetta</strong> con <em>formattazione</em></span>
      </it-radio>
      <it-radio id="radio-label3" value="opzione3">
        <span slot="label">Etichetta semplice</span>
      </it-radio>
    </it-radio-group>
  `,
};

export const TestoDiSupporto: Story = {
  ...meta,
  name: 'Testo di supporto',
  render: (params) => html`
    <it-radio-group name="gruppo-support">
      <span slot="label">Esempio con testo di supporto</span>
      ${renderComponent({
        ...params,
        id: 'radio-support1',
        label: 'Radio con testo di supporto',
        value: 'opzione1',
        supportText: 'Questo è un testo di supporto per il radio button',
      })}
      ${renderComponent({
        ...params,
        id: 'radio-support2',
        label: 'Altro radio',
        value: 'opzione2',
      })}
    </it-radio-group>
  `,
};

export const Inline: Story = {
  ...meta,
  render: (params) => html`
    <it-radio-group name="gruppo-inline" inline>
      <span slot="label">Esempio inline</span>
      ${renderComponent({
        ...params,
        id: 'radio-inline1',
        label: 'Radio inline 1',
        name: 'gruppo-inline',
        value: 'opzione1',
        checked: true,
      })}
      ${renderComponent({
        ...params,
        id: 'radio-inline2',
        label: 'Radio inline 2',
        name: 'gruppo-inline',
        value: 'opzione2',
      })}
      ${renderComponent({
        ...params,
        id: 'radio-inline3',
        label: 'Radio inline 3',
        name: 'gruppo-inline',
        value: 'opzione3',
      })}
    </it-radio-group>
  `,
};

export const Disabilitato: Story = {
  ...meta,
  name: 'Stato disabilitato',
  render: (params) => html`
    <div class="row">
      <div class="col-12 col-md-6">
        <it-radio-group name="gruppo-alcuni-disabled" value="opzione1">
          <span slot="label">Esempio con alcuni disabilitati</span>
          ${renderComponent({
            ...params,
            id: 'radio-disabled1',
            label: 'Radio selezionato e disabilitato',
            value: 'opzione1',
            disabled: true,
          })}
          ${renderComponent({
            ...params,
            id: 'radio-disabled2',
            label: 'Radio disabilitato',
            name: 'gruppo-disabled',
            value: 'opzione2',
            disabled: true,
          })}
          ${renderComponent({
            ...params,
            id: 'radio-disabled3',
            label: 'Radio abilitato',
            name: 'gruppo-disabled',
            value: 'opzione3',
          })}
        </it-radio-group>
        </div>
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-tutti-disabled" value="opzione2" disabled>
            <span slot="label">Esempio con tutti disabilitati</span>
            ${renderComponent({
              ...params,
              id: 'radio-disabled4',
              label: 'Radio selezionato e disabilitato',
              value: 'opzione1',
            })}
            ${renderComponent({
              ...params,
              id: 'radio-disabled5',
              label: 'Radio disabilitato',
              value: 'opzione2',
            })}
            ${renderComponent({
              ...params,
              id: 'radio-disabled6',
              label: 'Radio abilitato',
              value: 'opzione3',
            })}
          </it-radio-group>
        </div>
      </div>
    </div>
  `,
};

export const RaggruppatiVisivamente: Story = {
  ...meta,
  name: 'Raggruppati visivamente',
  render: (params) => html`
    <div>
      <div class="row">
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-visual" grouped>
            <span slot="label">Esempio grouped senza testo di supporto</span>
            ${renderComponent({
              ...params,
              id: 'radio-group1',
              label: 'Opzione 1',
              name: 'gruppo-visual',
              value: 'opzione1',
              checked: true,
            })}
            ${renderComponent({
              ...params,
              id: 'radio-group2',
              label: 'Opzione 2',
              name: 'gruppo-visual',
              value: 'opzione2',
            })}
            ${renderComponent({
              ...params,
              id: 'radio-group3',
              label: 'Opzione 3',
              name: 'gruppo-visual',
              value: 'opzione3',
            })}
          </it-radio-group>
        </div>
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-visual2" grouped>
            <span slot="label">Esempio grouped con testo di supporto</span>
            ${renderComponent({
              ...params,
              id: 'radio-group4',
              label: 'Opzione 1',
              supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
              name: 'gruppo-visual2',
              value: 'opzione1',
              checked: true,
            })}
            ${renderComponent({
              ...params,
              id: 'radio-group5',
              label: 'Opzione 2',
              supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
              name: 'gruppo-visual2',
              value: 'opzione2',
            })}
            ${renderComponent({
              ...params,
              id: 'radio-group6',
              label: 'Opzione 3',
              supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
              name: 'gruppo-visual2',
              value: 'opzione3',
            })}
          </it-radio-group>
        </div>
      </div>
    </div>
  `,
};

export const RadioGroupRequired: Story = {
  name: 'Validazione e gestione degli errori',

  render: () => html`
    <form id="demo-form">
      <it-radio-group name="scelta" required>
        <span slot="label">Esempio con validazione</span>
        <it-radio value="si">
          <span slot="label">Sì, accetto</span>
        </it-radio>
        <it-radio value="no">
          <span slot="label">No, non accetto</span>
        </it-radio>
        <it-radio value="forse">
          <span slot="label">Forse</span>
        </it-radio>
      </it-radio-group>
      <it-button type="submit" class="mt-3" variant="primary">Invia</it-button>
      <p class="form-text mt-2">Prova a inviare il form senza selezionare nulla per vedere la validazione.</p>
    </form>
  `,
};

export const MetodiEPropPubblici: Story = {
  ...StoryFormControlMethodAndProps('', `|\`click()\`| Triggera l'evento di click sull'input reale | - |`),
  tags: ['!dev'],
};
