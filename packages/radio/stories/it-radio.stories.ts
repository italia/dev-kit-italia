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
  title: 'Componenti/Form/Radio',
  tags: ['autodocs', 'new', 'a11y-ok', 'web-component'],
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
  parameters: {
    docs: {
      description: {
        component: `
<Description>Radio button accessibili e personalizzabili.</Description>

Il componente \`<it-radio-group>\` permette di raggruppare una serie di \`<it-radio>\`, gestendo la selezione di un solo elemento alla volta.\n
Ogni \`<it-radio>\` all'interno del gruppo deve avere un valore unico nell'attributo \`value\`.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Il componente implementa completamente le specifiche ARIA per i gruppi di radio button: \`<it-radio-group>\` gestisce automaticamente gli attributi \`role="radiogroup"\` e \`aria-labelledby\`, mentre ogni \`<it-radio>\` riceve gli attributi \`role="radio"\`, \`aria-checked\` e \`aria-disabled\` in base al proprio stato.</p>
<p>
A causa delle limitazioni architetturali dei Web Components e del Shadow DOM, non è possibile utilizzare il meccanismo nativo HTML basato su \`<fieldset>\` e \`<legend>\`. Questo approccio, pur essendo standard, presenta notevoli problematiche di compatibilità cross-browser con gli screen reader: test approfonditi hanno dimostrato comportamenti inconsistenti tra diverse combinazioni di browser, sistemi operativi e tecnologie assistive. In alcuni casi la \`<legend>\` non viene annunciata, in altri il gruppo non viene riconosciuto come tale, mentre in altri ancora mancano informazioni sulla posizione delle opzioni all'interno del gruppo. Per superare queste limitazioni e garantire un'esperienza uniforme e accessibile su tutte le piattaforme, il componente richiede che l'etichetta del gruppo venga fornita tramite lo slot \`label\`, assicurando così la corretta associazione semantica anche all'interno dello Shadow DOM.</p>
<p>L'implementazione si conforma al pattern "Radio Group" definito nelle [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/), adottando la gestione della tastiera e degli stati prevista dalle linee guida di accessibilità. Questo approccio garantisce che le tecnologie assistive, in particolare gli screen reader, comunichino correttamente la posizione di ogni opzione nel gruppo (es. "1 di 3", "2 di 3", "3 di 3"), migliorando significativamente l'esperienza utente per le persone con disabilità.
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
export const PersonalizzazioneDegliStili: Story = {
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
      description: {
        story: `
Per la personalizzazione degli stili del componente \`<it-radio>\` si può usare il selettore \`::part\` con i seguenti valori:

| Part | Descrizione |
|------|-------------|
| \`input\` | Il contenitore dell'input nascosto |
| \`button\` | Il cerchio del radio button visibile |
| \`input-wrapper\` | Il wrapper principale che contiene il radio control e il testo di supporto |
| \`radio-control\` | Il contenitore che racchiude il button e la label |
| \`label\` | L'etichetta del radio button |

[Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).

Esempio di personalizzazione:

\`\`\`css
it-radio::part(button) {
  border-color: #0066cc;
}

it-radio::part(label) {
  font-weight: bold;
  color: #333;
}
\`\`\`
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const ComeUsareItRadio: Story = {
  ...meta,
  name: 'Utilizzo',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
      description: {
        story: `
Il componente \`<it-radio>\` deve essere sempre utilizzato all'interno di un \`<it-radio-group>\` e richiede obbligatoriamente:

- Un **attributo \`value\`** univoco per identificare l'opzione
- Una **etichetta definita tramite slot** \`<span slot="label">Testo dell'etichetta</span>\`

#### Proprietà principali

| Proprietà | Tipo | Descrizione |
|-----------|------|-------------|
| \`value\` | \`string\` | Valore univoco del radio button (obbligatorio) |
| \`disabled\` | \`boolean\` | Se \`true\`, disabilita il singolo radio button |
| \`support-text\` | \`string\` | Testo di supporto visualizzato sotto l'etichetta (obbligatorio) |
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const DefinizioneDellaLabel: Story = {
  ...meta,
  name: "Definizione dell'etichetta",
  parameters: {
    docs: {
      description: {
        story: `

Sia \`<it-radio-group>\` che \`<it-radio>\` espongono uno slot \`label\` per definire le rispettive etichette.

L'etichetta del gruppo \`<it-radio-group>\` viene definita tramite lo slot \`label\` dell'elemento \`<it-radio-group>\` e identifica l'intero gruppo di radio button. È possibile utilizzare HTML all'interno dello slot per creare etichette formattate.

Ogni \`<it-radio>\` richiede obbligatoriamente un'etichetta definita tramite il proprio slot \`label\`. L'etichetta identifica la singola opzione all'interno del gruppo. È possibile utilizzare anche HTML all'interno dello slot per creare etichette più complesse con formattazione o altri elementi.
`,
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: `In caso di necessità, è possibile utilizzare un contenuto testuale sotto il radio button tramite l'attributo \`support-text\` del componente \`<it-radio>\`.`,
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
  name: 'Stato disabilitato',
  parameters: {
    docs: {
      description: {
        story: `

#### Radio singolo disabilitato

Aggiungi l'attributo \`disabled\` ad un singolo \`<it-radio>\` per disabilitare quell'opzione.

#### Gruppo di radio disabilitato

Se invece intendi disabilitare l'intero gruppo, aggiungi l'attributo \`disabled\` a \`<it-radio-group>\`. In questo modo tutti i radio al suo interno risulteranno disabilitati automaticamente.
`,
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

export const RadioGroupRequired: Story = {
  name: 'Validazione e gestione degli errori',
  parameters: {
    docs: {
      description: {
        story: `
Se non è stata impostata la validazione custom tramite l'attributo \`custom-validation\`, e sono stati impostati attributi come \`required\`, viene effettuata una validazione interna utilizzando la validazione nativa del browser.
Verranno mostrati i messaggi di errore nativi, e i componenti \`<it-radio-group>\` e \`<it-radio>\` riceveranno l'attributo \`aria-invalid="true"\` quando non validi.

\`\`\`html
<form>
  <it-radio-group name="scelta" required>
    <span slot="label">Seleziona un'opzione (obbligatorio)</span>
    <it-radio value="si">
      <span slot="label">Sì, accetto</span>
    </it-radio>
    <it-radio value="no">
      <span slot="label">No, non accetto</span>
    </it-radio>
  </it-radio-group>
  <it-button type="submit" variant="primary">Invia</it-button>
</form>
\`\`\`

<br/>
### Personalizzazione dei messaggi di errore

E' possibile personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione):
<ul>
  <li>\`validityRequired\`: messaggio che viene mostrato quando il radio group è obbligatorio e nessuna opzione è stata selezionata</li>
</ul>

Non esistono altre possibili validazioni native per questo tipo di input. Per validazioni custom dovrai fornire i tuoi messaggi di errore.


`,
      },
    },
  },
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
