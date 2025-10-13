import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';

import '@italia/radio';

interface RadioProps {
  id: string;
  label: string; // Solo per le stories, viene usato nello slot
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
  >
    <span slot="label">${params.label || ''}</span>
  </it-radio>`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Radio',
  tags: ['autodocs'],
  component: 'it-radio',
  args: {
    id: '',
    label: 'Etichetta radio',
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
      description: 'Etichetta del radio button. Viene inserita nello slot di default.',
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
Tutti gli attributi \`it-aria-*\` passati a \`<it-radio>\` vengono applicati al radio generato. È importante fornire una label chiara per ogni radio button per garantire l'accessibilità. L'uso di \`<it-radio-group>\` garantisce inoltre che gli screen reader annuncino correttamente la posizione di ogni opzione nel gruppo.
</p></div></div>

## Definizione della Label

La label del radio button viene definita tramite lo slot \`label\`:

\`\`\`html
<it-radio name="gruppo" value="opzione1">
  <span slot="label">Label del radio button</span>
</it-radio>
\`\`\`

È possibile utilizzare anche HTML all'interno dello slot per creare label più complesse:

\`\`\`html
<it-radio name="gruppo" value="opzione2">
  <span slot="label"><strong>Label</strong> con <em>formattazione</em></span>
</it-radio>
\`\`\`
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
      <it-radio-group name="gruppo1">
        ${renderComponent({
          ...params,
          id: 'radio1',
          label: 'Radio di esempio 1',
          name: 'gruppo1',
          value: 'opzione1',
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
      </it-radio-group>
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
      <it-radio-group name="gruppo-support">
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
      </it-radio-group>
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
      <it-radio-group name="gruppo-inline">
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
      </it-radio-group>
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
      <it-radio-group name="gruppo-disabled">
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
      </it-radio-group>
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
          <it-radio-group name="gruppo-visual">
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
          </it-radio-group>
        </fieldset>
        <fieldset class="col-12 col-md-6">
          <legend>Gruppo di radio</legend>
          <it-radio-group name="gruppo-visual2">
            ${renderComponent({
              ...params,
              id: 'radio-group4',
              label: 'Opzione 1',
              supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
              name: 'gruppo-visual2',
              value: 'opzione1',
              group: true,
              checked: true,
            })}
            ${renderComponent({
              ...params,
              id: 'radio-group5',
              label: 'Opzione 2',
              supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
              name: 'gruppo-visual2',
              value: 'opzione2',
              group: true,
            })}
            ${renderComponent({
              ...params,
              id: 'radio-group6',
              label: 'Opzione 3',
              supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
              name: 'gruppo-visual2',
              value: 'opzione3',
              group: true,
            })}
          </it-radio-group>
        </fieldset>
      </div>
    </div>
  `,
};

export const MetodiEPropPubblici: Story = {
  ...StoryFormControlMethodAndProps('', `|\`click()\`| Triggera l'evento di click sull'input reale | - |`),
  tags: ['!dev'],
};

export const RadioGroupRequired: Story = {
  name: 'Radio Group con Validazione',
  parameters: {
    docs: {
      description: {
        story: `Usando \`<it-radio-group>\` con l'attributo \`required\` è possibile sfruttare la validazione nativa HTML.

L'uso di \`<it-radio-group>\` garantisce anche che gli screen reader annuncino correttamente la posizione di ogni opzione nel gruppo (es. "1 di 3", "2 di 3", "3 di 3").`,
      },
    },
  },
  render: () => html`
    <form id="demo-form">
      <fieldset>
        <legend>Seleziona un'opzione <span class="text-danger">*</span></legend>
        <it-radio-group name="scelta" required>
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
      </fieldset>
      <button type="submit" class="btn btn-primary mt-3">Invia</button>
      <p class="form-text mt-2">Prova a inviare il form senza selezionare nulla per vedere la validazione.</p>
    </form>
    <script>
      document.getElementById('demo-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Form inviato! Valore: ', Object.fromEntries(formData.entries()));
      });
    </script>
  `,
};
