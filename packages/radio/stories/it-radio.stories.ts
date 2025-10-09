import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';

import '@italia/radio';

interface RadioProps {
  id: string;
  label: string;
  name: string;
  value: string;
  checked: boolean;
  disabled?: boolean;
  inline: boolean;
  group: boolean;
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
    label="${ifDefined(params.label || undefined)}"
    name="${ifDefined(params.name || undefined)}"
    value="${ifDefined(params.value || undefined)}"
    ?checked="${params.checked}"
    ?disabled="${params.disabled}"
    ?inline="${params.inline}"
    ?group="${params.group}"
    support-text="${ifDefined(params.supportText || undefined)}"
    form="${ifDefined(params.form || undefined)}"
    ?custom-validation="${params.customValidation}"
    validity-message="${ifDefined(params.validityMessage || undefined)}"
    ?required="${params.required}"
  ></it-radio>`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Radio',
  tags: ['autodocs'],
  component: 'it-radio',
  args: {
    id: '',
    label: 'Radio di esempio',
    name: 'radio',
    value: '',
    checked: false,
    disabled: false,
    inline: false,
    group: false,
    supportText: '',

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
    label: {
      control: 'text',
      description: 'Etichetta del campo',
    },
    name: {
      control: 'text',
      description: 'Nome del campo. I radio dello stesso gruppo devono avere lo stesso name.',
    },
    value: {
      control: 'text',
      description: 'Valore del campo',
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se il radio è selezionato',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se il radio è disabilitato',
      table: { defaultValue: { summary: 'false' } },
    },
    inline: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se i radio devono essere visualizzati in linea',
      table: { defaultValue: { summary: 'false' } },
    },
    group: {
      control: 'boolean',
      type: 'boolean',
      description: 'Se il radio appartiene a un gruppo visivamente distinto',
      table: { defaultValue: { summary: 'false' } },
    },
    supportText: {
      name: 'support-text',
      control: 'text',
      description: 'Testo di supporto',
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
      description: 'Se il campo è obbligatorio',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Radio button accessibili e personalizzabili.</Description>

Per utilizzare i radio button personalizzati è necessario raggruppare gli elementi con lo stesso attributo \`name\` all'interno di un \`<fieldset>\` con una \`<legend>\` che descriva il gruppo.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`aria-*\` passati a \`<it-radio>\` vengono applicati al radio generato. È importante fornire una label chiara per ogni radio button per garantire l'accessibilità.
</p></div></div>
`,
      },
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
  render: (params) => html`
    <fieldset>
      <legend>Gruppo di radio</legend>
      ${renderComponent({
        ...params,
        id: 'radio1',
        label: 'Radio di esempio 1',
        name: 'gruppo1',
        value: 'opzione1',
        checked: true,
      })}
      ${renderComponent({
        ...params,
        id: 'radio2',
        label: 'Radio di esempio 2',
        name: 'gruppo1',
        value: 'opzione2',
      })}
      ${renderComponent({
        ...params,
        id: 'radio3',
        label: 'Radio di esempio 3',
        name: 'gruppo1',
        value: 'opzione3',
      })}
    </fieldset>
  `,
};

export const TestoDiSupporto: Story = {
  ...meta,
  name: 'Testo di supporto',
  parameters: {
    docs: {
      description: {
        story: `In caso di necessità, è possibile utilizzare un contenuto testuale sotto il radio button, indicando nell'attributo \`support-text\` il testo da visualizzare.`,
      },
    },
  },
  render: (params) => html`
    <fieldset>
      <legend>Gruppo di radio con testo di supporto</legend>
      ${renderComponent({
        ...params,
        id: 'radio-support1',
        label: 'Radio con testo di supporto',
        name: 'gruppo-support',
        value: 'opzione1',
        supportText: 'Questo è un testo di supporto per il radio button',
      })}
      ${renderComponent({
        ...params,
        id: 'radio-support2',
        label: 'Altro radio',
        name: 'gruppo-support',
        value: 'opzione2',
      })}
    </fieldset>
  `,
};

export const Inline: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `Per allineare orizzontalmente i radio button basterà aggiungere l'attributo \`inline\` a ciascun \`<it-radio>\`.`,
      },
    },
  },
  render: (params) => html`
    <fieldset>
      <legend>Gruppo di radio</legend>
      ${renderComponent({
        ...params,
        id: 'radio-inline1',
        label: 'Radio inline 1',
        name: 'gruppo-inline',
        value: 'opzione1',
        inline: true,
        checked: true,
      })}
      ${renderComponent({
        ...params,
        id: 'radio-inline2',
        label: 'Radio inline 2',
        name: 'gruppo-inline',
        value: 'opzione2',
        inline: true,
      })}
      ${renderComponent({
        ...params,
        id: 'radio-inline3',
        label: 'Radio inline 3',
        name: 'gruppo-inline',
        value: 'opzione3',
        inline: true,
      })}
    </fieldset>
  `,
};

export const Disabilitato: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `Aggiungi l'attributo \`disabled\` ad un \`<it-radio>\` per impedire la modifica del valore e non inviare i dati in esso contenuti.`,
      },
    },
  },
  render: (params) => html`
    <fieldset>
      <legend>Gruppo di radio</legend>
      ${renderComponent({
        ...params,
        id: 'radio-disabled1',
        label: 'Radio selezionato e disabilitato',
        name: 'gruppo-disabled',
        value: 'opzione1',
        checked: true,
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
    </fieldset>
  `,
};

export const RaggruppatiVisivamente: Story = {
  ...meta,
  name: 'Raggruppati visivamente',
  parameters: {
    docs: {
      description: {
        story: `Per raggruppare visivamente i radio button occorrerà aggiungere l'attributo \`group\` a ciascun \`<it-radio>\`. L'elemento grafico di selezione verrà allineato alla destra del contenuto testuale.`,
      },
    },
  },
  render: (params) => html`
    <div>
      <div class="row">
        <fieldset class="col-12 col-md-6">
          <legend>Gruppo di radio</legend>
          <div>
            ${renderComponent({
              ...params,
              id: 'radio-group1',
              label: 'Opzione 1',
              name: 'gruppo-visual',
              value: 'opzione1',
              group: true,
              checked: true,
            })}
            ${renderComponent({
              ...params,
              id: 'radio-group2',
              label: 'Opzione 2',
              name: 'gruppo-visual',
              value: 'opzione2',
              group: true,
            })}
            ${renderComponent({
              ...params,
              id: 'radio-group3',
              label: 'Opzione 3',
              name: 'gruppo-visual',
              value: 'opzione3',
              group: true,
            })}
          </div>
        </fieldset>
        <fieldset class="col-12 col-md-6">
          <legend>Gruppo di radio</legend>
          <div>
            ${renderComponent({
              ...params,
              id: 'radio-group1',
              supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
              name: 'gruppo-visual',
              value: 'opzione1',
              group: true,
              checked: true,
            })}
            ${renderComponent({
              ...params,
              id: 'radio-group2',
              supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
              name: 'gruppo-visual',
              value: 'opzione2',
              group: true,
            })}
            ${renderComponent({
              ...params,
              id: 'radio-group3',
              supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
              name: 'gruppo-visual',
              value: 'opzione3',
              group: true,
            })}
          </div>
        </fieldset>
      </div>
    </div>
  `,
};

export const GestioneErrori: Story = {
  ...meta,
  name: 'Validazione e gestione degli errori',
  parameters: {
    docs: {
      description: {
        story: `Se è stato impostato l'attributo \`required\` e non è stata impostata la validazione custom tramite l'attributo \`custom-validation\`, viene effettuata una validazione interna utilizzando la validazione nativa del browser.
<br/><br/><h4>Validazione esterna (validazione custom)</h4>
È inoltre possibile validare il campo esternamente (via js ad esempio, o lato server), impostando l'attributo \`custom-validation="true"\`. In questo modo la validazione di default del browser effettuata internamente al componente è disabilitata.
<br/><br/><h5>Campo invalido</h5>Nel caso il campo non sia valido, è necessario invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo \`validity-message="Messaggio di errore"\`.
<br/><br/><h5>Campo valido</h5>Per riportare il campo ad uno stato 'valido', è sufficiente impostare il messaggio di errore a vuoto: \`validity-message=""\`.`,
      },
    },
  },
  render: (params) => html`
    <fieldset>
      <legend>Gruppo di radio obbligatorio</legend>
      ${renderComponent({
        ...params,
        id: 'radio-required1',
        label: 'Radio obbligatorio 1',
        name: 'gruppo-required',
        value: 'opzione1',
        required: true,
      })}
      ${renderComponent({
        ...params,
        id: 'radio-required2',
        label: 'Radio obbligatorio 2',
        name: 'gruppo-required',
        value: 'opzione2',
        required: true,
      })}
    </fieldset>
    <br />
    <fieldset>
      <legend>Validazione esterna</legend>
      ${renderComponent({
        ...params,
        id: 'radio-custom1',
        label: 'Radio con validazione esterna 1',
        name: 'gruppo-custom',
        value: 'opzione1',
        customValidation: true,
        validityMessage: 'Devi selezionare una delle opzioni disponibili',
      })}
      ${renderComponent({
        ...params,
        id: 'radio-custom2',
        label: 'Radio con validazione esterna 2',
        name: 'gruppo-custom',
        value: 'opzione2',
        customValidation: true,
        validityMessage: 'Devi selezionare una delle opzioni disponibili',
      })}
    </fieldset>
  `,
};

export const MetodiEPropPubblici: Story = {
  ...StoryFormControlMethodAndProps('', `|\`click()\`| Triggera l'evento di click sull'input reale | - |`),
  tags: ['!dev'],
};
