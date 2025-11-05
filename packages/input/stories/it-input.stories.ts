import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';

import { INPUT_TYPES, type InputType, INPUT_SIZES, type Sizes } from '../src/types.js';
import i18nIT from '../src/locales/it.js';

import '@italia/icon';
import '@italia/button';
import '@italia/input';

interface InputProps {
  id: string;
  label: string;
  type: InputType;
  name: string;
  value: string;
  disabled?: boolean;

  form: string;
  customValidation: boolean;
  validityMessage: string;

  pattern?: string;
  min?: number | string | Date;
  max?: number | string | Date;
  step?: number | 'any';
  minlength: number;
  maxlength: number;
  required: boolean;

  readonly: boolean;
  plaintext: boolean;
  placeholder: string;
  supportText: string;
  labelHidden: boolean;
  size: Sizes;
  adaptive: boolean;

  strengthMeter: boolean;
  suggestions: boolean;
}

// Renderizza il wc it-input di default
const renderComponent = (params: any) =>
  html`<it-input
    id="${ifDefined(params.id || undefined)}"
    type="${ifDefined(params.type || undefined)}"
    name="${ifDefined(params.name || undefined)}"
    value="${ifDefined(params.value || undefined)}"
    ?disabled="${params.disabled}"
    form="${ifDefined(params.form || undefined)}"
    ?custom-validation="${params.customValidation}"
    validity-message="${ifDefined(params.validityMessage || undefined)}"
    pattern="${ifDefined(params.pattern || undefined)}"
    min="${ifDefined(params.min || undefined)}"
    max="${ifDefined(params.max || undefined)}"
    step="${ifDefined(params.step || undefined)}"
    minlength="${ifDefined(params.minlength) || undefined}"
    maxlength="${ifDefined(params.maxlength) || undefined}"
    ?required="${params.required}"
    ?readonly="${params.readonly}"
    ?plaintext="${params.plaintext}"
    placeholder="${ifDefined(params.placeholder || undefined)}"
    support-text="${ifDefined(params.supportText || undefined)}"
    ?label-hidden="${params.labelHidden}"
    size="${ifDefined(params.size || undefined)}"
    ?adaptive="${params.adaptive}"
    ?strength-meter="${params.strengthMeter}"
    ?suggestions="${params.suggestions}"
    ><span slot="label">${params.label}</span>${ifDefined(params.children || undefined)}</it-input
  >`;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Form/Input',
  tags: ['autodocs', 'a11y-ok', 'web-component'],
  component: 'it-input',
  args: {
    id: '',
    label: 'Nome',
    type: 'text',
    name: 'nome',
    value: '',
    disabled: false,

    form: '',
    customValidation: false,
    validityMessage: '',

    pattern: undefined,
    min: undefined,
    max: undefined,
    step: undefined,
    minlength: undefined,
    maxlength: undefined,
    required: false,

    readonly: false,
    plaintext: false,
    placeholder: '',
    supportText: '',
    labelHidden: false,
    size: undefined,
    adaptive: false,

    strengthMeter: false,
    suggestions: false,
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
    type: {
      control: 'select',
      options: INPUT_TYPES,
      table: { defaultValue: { summary: 'text' } },
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
      description: 'Valore del campo',
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
    pattern: {
      control: 'text',
      description: 'Pattern di validazione del campo',
    },
    min: {
      control: 'text',
      description: 'Valore minimo consentito per un campo di tipo numerico o di tipo data',
    },
    max: {
      control: 'text',
      description: 'Valore massimo consentito per un campo di tipo numerico o di tipo data',
    },
    step: {
      control: 'number',
      description:
        'Incremento per ogni step (tramite i pulsanti +/-) nel caso di input di tipo numerico o di tipo data',
    },
    minlength: {
      type: 'number',
      description: 'Lunghezza minima del valore da inserire. Usato anche per validare la robustezza della password',
      table: { defaultValue: { summary: 'undefined. Se type="password": 8' } },
    },
    maxlength: {
      type: 'number',
      description: 'Lunghezza massima del valore da inserire.',
    },
    required: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },

    readonly: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    plaintext: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description:
        "Se il campo è readonly, con l'attributo 'plaintext' il campo assume l'aspetto di testo normalizzato.",
    },
    placeholder: {
      control: 'text',
      description: 'Testo segnaposto',
    },
    supportText: {
      name: 'support-text',
      control: 'text',
      description: 'Testo di supporto',
    },
    labelHidden: {
      name: 'label-hidden',
      control: 'boolean',
      type: 'boolean',
      description: 'Se si vuole nascondere la label. Risulterà comunque accessibile per i lettori di schermo.',
      table: { defaultValue: { summary: 'false' } },
    },
    size: {
      control: 'select',
      options: INPUT_SIZES,
      description: "Dimensione del campo: 'sm' | (stringa vuota) | 'lg' ",
      table: { defaultValue: { summary: undefined } },
    },
    adaptive: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description:
        'Se il campo è `type="number"`, con l\'attributo `adaptive` il campo assume adatta la sua larghezza al contenuto',
    },

    strengthMeter: {
      name: 'strength-meter',
      control: 'boolean',
      type: 'boolean',
      description: "Se si vuole mostrare o meno il misuratore di robustezza della password nel caso di type='password'",
      table: { defaultValue: { summary: 'false' } },
    },
    suggestions: {
      name: 'suggestions',
      control: 'boolean',
      type: 'boolean',
      description: "Se si vogliono mostrare i suggerimenti per l'insderimento di una password sicura.",
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Input accessibile e responsivo.</Description>

Per il corretto funzionamento degli elementi di tipo \`<it-input>\` è di fondamentale importanza l’utilizzo uno degli appositi attributi \`type\` (ad esempio, "email" per l’inserimento di indirizzi email o "number" per informazioni numeriche), in modo da sfruttare i controlli nativi dei browser più recenti come la verifica dell’email, l’utilizzo di metodo di input numerico ed altro.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`it-aria-*\` passati a \`<it-input>\` vengono applicati all'input generato.
</p></div></div>
`,
      },
    },
  },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<InputProps>;

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
      type: 'text',
      label: 'Campo di testo',
      name: 'testo',
      id: 'exampleInputText',
    })}
    ${renderComponent({
      ...params,
      type: 'email',
      label: 'Campo email',
      name: 'email',
      id: 'exampleInputEmail',
    })}
    ${renderComponent({
      ...params,
      type: 'number',
      label: 'Campo numerico',
      name: 'number',
      id: 'exampleInputNumber',
    })}
    ${renderComponent({
      ...params,
      type: 'tel',
      label: 'Campo telefonico',
      name: 'telefono',
      id: 'exampleInputTel',
    })}
    ${renderComponent({
      ...params,
      type: 'time',
      label: 'Campo orario',
      name: 'orario',
      id: 'exampleInputTime',
    })}`,
};

export const Placeholder: Story = {
  ...meta,
  name: 'Testo segnaposto',
  args: {
    type: 'text',
    placeholder: 'Testo segnaposto',
    label: 'Etichetta',
    name: 'placeholder-example',
    id: 'placeholder-example',
  },

  parameters: {
    docs: {
      description: {
        story: `
È possibile abbinare al componente \`<it-input>\` un testo segnaposto (placeholder) per fornire indicazioni sul tipo di contenuto atteso. Questo testo non sostituisce l’etichetta, ma fornisce informazioni aggiuntive.
`,
      },
    },
  },
  render: (params) => html`
    ${renderComponent({
      ...params,
    })}
  `,
};

export const TestoDiSupporto: Story = {
  ...meta,
  name: 'Testo di supporto',
  args: {
    type: 'text',
    label: 'Etichetta',
    placeholder: 'Testo segnaposto',
    name: 'supportText-example',
    id: 'supportText-example',
    supportText: 'Testo di supporto',
  },

  parameters: {
    docs: {
      description: {
        story: `In caso di necessità, è anche possibile utilizzare un ulteriore contenuto testuale sotto il campo di testo, indicando nell'attributo \`support-text\` il testo da visualizzare.`,
      },
    },
  },
  render: (params) => html`
    ${renderComponent({
      ...params,
    })}
  `,
};

export const LabelHidden: Story = {
  ...meta,
  name: 'Etichetta nascosta',
  args: { placeholder: 'Cerca...', label: 'Cerca nel sito', labelHidden: true },

  parameters: {
    docs: {
      description: {
        story: `Se si vuole nascondere l'etichetta, come ad esempio nei campi di ricerca, è sufficiente passare l'attributo \`label-hidden\`.`,
      },
    },
  },
  render: (params) => html`
    ${renderComponent({
      ...params,
    })}
  `,
};

export const IconeOPulsanti: Story = {
  ...meta,
  name: 'Icone o pulsanti',
  args: {
    placeholder: 'Icone o pulsanti',
    type: 'text',
    label: 'Campo con icona',
    name: 'field-icon-example',
    id: 'field-icon-example',
    supportText: 'Testo di supporto',
  },
  parameters: {
    docs: {
      description: {
        story: `<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità delle icone</span></div><p>Nel caso in cui l’icona è semanticamente rilevante e non spiegata dal testo che la segue, occorre passare al componente \`<it-icon>\` l'attributo \`label\` che ne spieghi il significato (nel formato \`<it-icon .... label="Significato dell'icona"/>\`)</p></div></div>`,
      },
    },
  },

  render: (params) => html`
    ${renderComponent({
      ...params,
      children: html`<it-icon name="it-pencil" slot="prepend" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`,
    })}
  `,
};

export const Dimensioni: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `L'input di base ha una dimensione media che non necessita di alcuna classe aggiuntiva.

Per modificare questa dimensione, è possiible utilizzare l'attributo \`size\` il cui valore può essere \`sm\` oppure \`lg\`.

Per modificare invece la dimensione dell’icona, è possibile utilizzare l'attributo \`size\` sull'icona in questo modo:
<table>
<thead>
  <tr><th>Dimensione input</th><th>Attributo size (di it-input)</th><th>Dimensione icona</th></tr>
</thead>
<tbody>
  <tr><td>Grande</td><td>\`lg\`</td><td>\`md\`</td></tr>
  <tr><td>Base (default)</td><td></td><td>\`sm\`</td></tr>
  <tr><td>Piccola</td><td>\`sm\`</td><td>\`xs\`</td></tr>
</tbody>
</table>
`,
      },
    },
  },
  args: {
    type: 'text',
    placeholder: 'Testo segnaposto',
  },
  render: (params) => html`
    ${renderComponent({
      ...params,
      label: 'Campo di dimensione grande',
      name: 'field-big-example',
      id: 'field-big-example',
      size: 'lg',
      children: html`<it-icon name="it-pencil" slot="prepend" size="md"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`,
    })}
    ${renderComponent({
      ...params,
      label: 'Campo di dimensione base',
      name: 'field-sizebase-example',
      id: 'field-sizebase-example',
      placeholder: 'Testo segnaposto',
      children: html`<it-icon name="it-pencil" slot="prepend" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`,
    })}
    ${renderComponent({
      ...params,
      label: 'Campo di dimensione piccola',
      name: 'field-small-example',
      id: 'field-small-example',
      size: 'sm',
      children: html`<it-icon name="it-pencil" slot="prepend" size="xs"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`,
    })}
  `,
};

export const Disabilitato: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `Aggiungi l’attributo \`disabled\` ad un \`<it-input>\` per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti.`,
      },
    },
  },
  args: {
    type: 'text',
    label: 'Campo disabilitato',
    name: 'field-disabled-example',
    id: 'field-disabled-example',
    disabled: true,
  },
  render: (params) => html`
    ${renderComponent({
      ...params,
    })}
  `,
};

export const Readonly: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `Aggiungi l’attributo \`readonly\` ad un \`<it-input>\` per impedire la modifica del valore contenuto.
<br/><br/><h4>Readonly normalizzato</h4>Se per qualche motivo vuoi avere gli elementi input readonly nella forma stilizzata come testo, aggiungi l'attributo \`plaintext\` a \`<it-input>\`.`,
      },
    },
  },
  args: { type: 'text', readonly: true, value: 'Contenuto in sola lettura' },
  render: (params) => html`
    ${renderComponent({
      ...params,
      label: 'Campo readonly',
      name: 'field-readonly-example',
      id: 'field-readonly-example',
    })}
    ${renderComponent({
      ...params,
      label: 'Campo readonly normalizzato come plaintext',
      name: 'field-readonlyplaintext-example',
      id: 'field-readonlyplaintext-example',
      plaintext: true,
    })}
  `,
};

export const Password: Story = {
  ...meta,
  parameters: {
    docs: {
      description: {
        story: `Per semplificare l’inserimento della password, il componente \`<it-input>\` di tipo password include un pulsante che mostra i caratteri digitati.
        È inoltre possibile aggiungere un testo di supporto che aiuti nella compilazione, attraverso l’attributo \`support-text\`.
        <br/><br/>
        <h4>Misuratore sicurezza e suggerimenti</h4>
Nel caso di un campo per la scelta di una nuova password, è possibile abbinare controlli per segnalare quanto la password che si sta inserendo segua alcuni suggerimenti di sicurezza, come la lunghezza minima o l’uso di caratteri speciali, attraverso gli attributi \`strength-meter="true"\` e \`minlength\` per modificare la lunghezza minima richiesta per la password.

Inoltre, è possibile restituire all’utente una lista dei suggerimenti, con indicati quelli che sono stati soddisfatti, attraverso l’attributo \`suggestions="true"\`.
`,
      },
    },
  },
  args: {
    type: 'password',
    label: 'Campo password',
    supportText: 'Inserisci almeno 8 caratteri e alcuni caratteri speciali.',
    minlength: 8,
  },
  render: (params) => html`
    ${renderComponent({
      ...params,
      name: 'field-password-example',
      id: 'field-password-example',
    })}
    ${renderComponent({
      ...params,
      name: 'field-password-strength-example',
      id: 'field-password-strength-example',
      strengthMeter: true,
      suggestions: true,
    })}
  `,
};

export const Textarea: Story = {
  ...meta,
  name: 'Area di testo',
  parameters: {
    docs: {
      description: {
        story: `Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento \`<it-input>\` con \`type="textarea"\`.`,
      },
    },
  },
  args: {
    type: 'textarea',
    label: 'Area di testo',
    name: 'textarea-example',
    id: 'textarea-example',
    placeholder: 'Testo segnaposto',
  },
  render: (params) => html`
    ${renderComponent({
      ...params,
    })}
  `,
};

export const GestioneErrori: Story = {
  ...meta,
  name: 'Validazione e gestione degli errori',
  parameters: {
    docs: {
      description: {
        story: `Se non è stata impostata la validazione custom tramite l'attributo \`custom-validation\`, e sono stati impostati uno di questi attributi <ul><li>\`required\`</li><li>\`pattern\`</li><li>\`min\`</li><li>\`max\`</li><li>\`step\`</li><li>\`minlength\`</li><li>\`maxlength\`</li></ul> viene effettuata una validazione interna utilizzando la validazione nativa del browser.
 <br/><br/><h4>Personalizzazione dei messaggi di errore</h4>E' possibile personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione):
        <ul><li>\`validityRequired\`: messaggio che viene mostrato quando il campo è required e non è compilato</li>
        <li>\`validityPattern\`: messaggio che viene mostrato quando il campo non rispetta il pattern indicato</li>
        <li>\`validityMinlength\`: messaggio che viene mostrato quando la lunghezza del valore del campo è troppo corta rispetto al valore passatto nell'attributo \`min-length\`</li>
         <li>\`validityMaxlength\`: messaggio che viene mostrato quando la lunghezza del valore del campo è troppo lunga rispetto al valore passatto nell'attributo \`max-length\`</li>
      </ul>
      Per gli altri errori di validazione non indicati, verranno mostrati i messsaggi di errore nativi del browser.
      <h4>Validazione esterna (validazione custom)</h4>
        E' inoltre possibile validare il campo esternamente (via js ad esempio, o lato server), impostando l' attributo \`custom-validation="true"\`. In questo modo la validazione di default del browser effettuata internamente al componente è disabilitata.
        <br/><br/><h5>Campo invalido</h5>Nel caso il campo non sia valido, è necessario invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo \`validity-message="Messaggio di errore"\`.
        <br/><br/><h5>Campo valido</h5>Per riportare il campo ad uno stato 'valido', è sufficiente impostare il messaggio di errore a vuoto: \`validity-message=""\`.`,
      },
    },
  },
  args: { type: 'text', placeholder: 'Testo segnaposto' },
  render: (params) => html`
    ${renderComponent({
      ...params,
      label: 'Campo obbligatorio',
      name: 'required-example',
      id: 'required-example',
      required: true,
    })}
    ${renderComponent({
      ...params,
      label: 'Validazione esterna',
      name: 'external-validation-example',
      id: 'external-validation-example',
      validityMessage: 'Questo campo è obbligatorio!!!',
      customValidation: true,
      required: undefined,
    })}
  `,
};

export const GestioneEventi: Story = {
  ...meta,
  name: 'Gestione degli eventi',
  parameters: {
    docs: {
      description: {
        story: `E' possibile gestire gli eventi di \`it-input\`, \`it-blur\`, \`it-change\`, \`it-focus\`, \`it-click\` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.
        <br/><br/>
        È sufficiente aggiungere un event listener al componente \`<it-input>\` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di input, è possibile utilizzare il seguente codice:

\`\`\`js
document.querySelector('it-input#event-input-example').addEventListener('it-input', (event) => {
  console.log('Input event:', event);
  alert('Input event);
});
\`\`\`

Il componente, emette anche un evento di tipo \`it-input-ready\` quando l'input è pronto e caricato nel DOM:

\`\`\`js
document.querySelector('it-input#event-input-example').addEventListener('it-input-ready', (event) => {
  console.log('Input ready:', event);
});
\`\`\`
      `,
      },
    },
  },
  args: {
    type: 'text',
    label: 'Prova evento di input',
    name: 'event-input-example',
    id: 'event-input-example',
    placeholder: 'Testo segnaposto',
  },
  render: (params) => html`
    <script>
      document.querySelector('it-input#event-input-example').addEventListener('it-input', (event) => {
        console.log('Input event:', event);
        alert('Input event');
      });
      document.querySelector('it-input#event-input-example').addEventListener('it-input-ready', (event) => {
        console.log('Input ready:', event);
      });
    </script>
    ${renderComponent({
      ...params,
    })}
  `,
};

export const MetodiEPropPubblici: Story = { ...StoryFormControlMethodAndProps({}), tags: ['!dev'] };

export const I18n: Story = {
  name: 'i18n',
  tags: ['!dev'],
  render: () => html`<div class="hide-preview"></div>`,
  parameters: {
    viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
    docs: {
      description: {
        story: `
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = {
  ${JSON.stringify(i18nIT).replaceAll('{"', '"').replaceAll('",', '",\n\t').replaceAll('"}', '"')}
}
\`\`\`
`,
      },
    },
  },
};
