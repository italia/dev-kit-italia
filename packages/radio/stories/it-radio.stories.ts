import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';

import '@italia/radio';

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
  title: 'Componenti/Form/Radio',
  tags: ['autodocs'],
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
      description: 'Se il singolo componente it-radio è disabilitato',
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
  parameters: {
    docs: {
      description: {
        component: `
<Description>Radio button accessibili e personalizzabili.</Description>

Il componente \`<it-radio-group>\` permette di raggruppare una serie di \`<it-radio>\`, gestendo la selezione di un solo elemento alla volta.\n
Ogni \`<it-radio>\` all'interno del gruppo deve avere un valore unico nell'attributo \`value\`.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Il componente \`<it-radio-group>\` assegna automaticamente l'attributo \`role="radiogroup"\` a se stesso e l'attributo \`role="radio"\` a ciascun \`<it-radio>\` al suo interno, oltre a calcolare e impostare gli attributi \`aria-checked\` e \`aria-disabled\` per ogni radio.</p>
<p>
Al fine di ovviare le limitazioni ad oggi presenti nei WebComponent e ShadowDOM, il componente \`<it-radio-group>\` non utilizza il meccanismo nativo di associazione tra \`<fieldset>\` e \`<legend>\`, ma richiede che la label del gruppo sia fornita tramite lo slot \`label\`. In questo modo, la label viene associata correttamente al gruppo di radio button anche all'interno di uno Shadow DOM.</p>
<p>Inoltre, sempre per queste ragioni, il componente è stato sviluppato seguendo il pattern di design "Radio Group" descritto nelle [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/) e non il pattern nativo dei radio button HTML, che prevede l'uso di \`<input type="radio">\` e \`<label>\`. Questo assicura che gli screen reader annuncino correttamente la posizione di ogni opzione nel gruppo (es. "1 di 3", "2 di 3", "3 di 3").
</p></div></div>

### Definizione della Label

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
    <div style="min-width:450px">
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
  parameters: {
    docs: {
      description: {
        story: `Per allineare orizzontalmente i radio button basterà aggiungere l'attributo \`inline\` a \`<it-radio-group>\`.`,
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: `Aggiungi l'attributo \`disabled\` ad un \`<it-radio>\` per impedire la modifica del valore e non inviare i dati in esso contenuti.
        Se invece intendi disabilitare l'intero gruppo, aggiungi l'attributo \`disabled\` a \`<it-radio-group>\`, in questo modo tutti i radio al suo interno risulteranno disabilitati.`,
      },
    },
  },
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
              id: 'radio-disabled1',
              label: 'Radio selezionato e disabilitato',
              value: 'opzione1',
            })}
            ${renderComponent({
              ...params,
              id: 'radio-disabled2',
              label: 'Radio disabilitato',
              value: 'opzione2',
            })}
            ${renderComponent({
              ...params,
              id: 'radio-disabled3',
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
  parameters: {
    docs: {
      description: {
        story: `Per raggruppare visivamente i radio button occorrerà aggiungere l'attributo \`group\` a \`<it-radio-group>\`. L'elemento grafico di selezione verrà allineato alla destra del contenuto testuale.`,
      },
    },
  },
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
    <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
    <script>
      window.addEventListener('DOMContentLoaded', () => {
        const formEl = document.querySelector('#demo-form');

        // Inizializziamo JustValidate senza selettore, passando il form element
        const validate = new JustValidate(formEl);

        // Funzione helper per leggere valore da <it-input>
        const getItInputValue = (selector) => {
          const el = formEl.querySelector(selector);
          return el?.value || ''; // .value dovrebbe essere esposto dal tuo componente
        };

        // Aggiungiamo regole
        validate.addField('it-radio-group[name="scelta"]', [
          {
            rule: 'required',
            errorMessage: 'Scelta obbligatoria',
          },
          {
            validator: (value) => {
              return Boolean(value);
            },
            errorMessage: 'Seleziona un valore',
          },
        ]);

        validate.onValidate((props) => {
          const { fields } = props;
          console.log('Validating', fields);
          // Rimuovi TUTTI i messaggi creati da JustValidate (questi sono quelli prima del bottone submit)
          document.querySelectorAll('.just-validate-error-label').forEach((el) => el.remove());
          // aggiorna il Web Component
          Object.keys(fields).forEach((k) => {
            const f = fields[k];
            const wc = f.elem;
            console.log('Field', k, f, wc);
            if (wc) {
              wc.validationText = f.isValid ? '' : f.errorMessage;
            }
          });
        });

        // Listen to change events on radio-group to revalidate in real-time
        const radioGroup = formEl.querySelector('it-radio-group[name="scelta"]');
        if (radioGroup) {
          radioGroup.addEventListener('change', () => {
            // Revalidate the field when value changes (clears error if now valid)
            validate.revalidateField('it-radio-group[name="scelta"]');
          });
        }

        formEl.addEventListener('submit', (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          console.log('Form Data! Valori: ', Object.fromEntries(formData.entries()));
          if (validate.isValid) {
            console.log('Form valido!');
            // gestire qui il submit della form
            // fetch('/submit', { method: 'POST', body: ... })
          }
        });
        // oppure
        // validate.onSuccess(( event ) => {
        //  submit della form
        //   event.currentTarget.submit();
        // });
      });
    </script>

    <form id="demo-form">
      <it-radio-group name="scelta" required custom-validation>
        <span slot="label">Esempio con validazione JustValidate</span>
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
      <button type="submit" class="btn btn-primary mt-3">Invia</button>
      <p class="form-text mt-2">Prova a inviare il form senza selezionare nulla per vedere la validazione.</p>
    </form>
    <form id="demo-form2">
      <it-radio-group name="scelta2" required>
        <span slot="label">Esempio con validazione nativa</span>
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
      <button type="submit" class="btn btn-primary mt-3">Invia</button>
      <p class="form-text mt-2">Prova a inviare il form senza selezionare nulla per vedere la validazione.</p>
    </form>
  `,
};
