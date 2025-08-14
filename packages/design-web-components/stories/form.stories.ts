import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '@italia/input';
import '@italia/button';

const meta = {
  title: 'Componenti/Form',
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component: `
Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/form/).
`,
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ElementiEStili: Story = {
  name: 'Elementi e stili per la creazione di form accessibili e responsivi.',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
    docs: {
      canvas: { hidden: true, sourceState: 'none' }, // nasconde solo il canvas nella docs page
      description: {
        story: `
Nella visualizzazione predefinita di un form gli elementi sono distribuiti verticalmente, ma è possibile utilizzare classi aggiuntive per variare questo tipo di layout.

Bootstrap Italia applica automaticamente a tutti i form \`display: block\` e \`width: 100%\`.
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const DimensionamentoColonne: Story = {
  ...meta,
  name: 'Dimensionamento delle colonne',

  render: () =>
    html` <form>
      <div class="row">
        <it-input class="col-md-6" label="Nome" id="nome"></it-input>
        <it-input class="col-md-6" label="Cognome" id="cognome"></it-input>
      </div>
      <div class="row">
        <it-input class="col" label="Indirizzo" id="indirizzo"></it-input>
      </div>
      <div class="row">
        <it-input class="col-md-6" label="Comune" id="comune"></it-input>
        <it-input class="col-md" label="Provincia" id="provincia"></it-input>
        <it-input class="col-md" label="CAP" id="cap"></it-input>
      </div>
      <div class="row">
        <it-input class="col-md-6" label="E-mail" id="email" type="email"></it-input>
        <it-input class="col-md-6" label="Password" id="password" type="password"></it-input>
      </div>
      <div class="row mt-4">
        <div class="form-group col text-center">
          <it-button type="button" variant="primary" outline>Annulla</it-button>
          <it-button type="submit" variant="primary">Conferma</button>
        </div>
      </div>
    </form>`,
};

export const Autodimensionamento: Story = {
  ...meta,
  name: 'Auto-dimensionamento',
  parameters: {
    docs: {
      description: {
        story: `
L’esempio seguente usa una delle [utilità di flexbox](https://italia.github.io/bootstrap-italia/docs/organizzare-gli-spazi/flex/) per centrare verticalmente dal breakpoint \`lg\` in su il contenuto e cambiando \`.col\` con \`.col-auto\` in modo che le colonne occupino solo lo spazio necessario.
In altre parole, la colonna si dimensiona in base al contenuto.

È possibile usarlo anche quando sono presenti altre colonne con dimensioni specifiche (es.: \`col-sm-3\`).`,
      },
    },
  },
  render: () =>
    html` <form>
      <div class="row align-itmes-center">
        <it-input class="col-md-6 col-lg-auto" label="Nome" id="nome" label-hidden placeholder="Nome e cognome"></it-input>
        <it-input class="col-md-6 col-lg-auto" label="Username" id="username" label-hidden placeholder="username" slotted><span slot="icon">@</span></it-input>
        <div class="col-6 col-md-3 col-lg-auto d-flex justify-content-end">
          <it-button type="submit" variant="primary">Invia</button>
        </div>

    </form>`,
};

export const DisabilitazioneCampi: Story = {
  ...meta,
  name: 'Disabilitazione di campi',
  parameters: {
    docs: {
      description: {
        story: `
Aggiungi l’attributo booleano \`disabled\` su un widget per impedire le interazioni dell’utente e renderlo più chiaro.`,
      },
    },
  },
  render: () =>
    html` <form>
      <it-input
        label="Esempio input disabilitato"
        id="nome"
        label-hidden
        placeholder="Esempio input disabilitato"
        disabled
      ></it-input>
    </form>`,
};

export const DisabilitazioneForm: Story = {
  ...meta,
  name: 'Disabilitazione di un intero form o gruppo di campi',
  parameters: {
    docs: {
      description: {
        story: `
Aggiungi l’attributo booleano \`disabled\` al \`fieldset\` e, poichè il browser non è in grado di propagare in autonomia lo stato disabilitato agli elementi contenuti nel \`fieldset\`, devi propagare tu l'attributo \`disabled\` (o \`aria-disabled\` per i bottoni) su tutti gli elementi in esso contenuti.

Puoi gestirlo anche via JS, in questo modo:

\`\`\`js
if (fieldset.disabled) {
  myInput.disabled = true;
}
\`\`\`

`,
      },
    },
  },
  render: () =>
    html` <form>
      <fieldset disabled aria-label="Form disabilitato">
        <div class="row">
          <it-input disabled class="col-md-6" label="Nome" id="nome" placeholder="input disabilitato"></it-input>
          <it-input disabled class="col-md-6" label="Cognome" id="cognome" placeholder="input disabilitato"></it-input>
        </div>
        <div class="row>
          <div class="col">
           <it-button aria-disabled type="submit" id="submit" variant="primary">Pulsante disabilitato</button>
          </div>
        </div>
      </fieldset>
    </form>`,
};

export const Validazione: Story = {
  ...meta,

  parameters: {
    docs: {
      description: {
        story: `
Non c'è una libreria specifica che funziona bene per la validazione dei form con i web-components.

Di base, il componente \`<it-input>\` fornisce la validazione standard del browser a seconda del tipo di campo e/o degli attributi \`minlength\`, \`maxlength\`, \`pattern\` e \`required\`.

#### Validazione custom

In alternativa, è possibile eseguire una propria validazione (lato server, o con js), impostando l' attributo \`custom-validation="true"\`. In questo modo la validazione di default effettuata internamente al componente è disabilitata.

Nel caso il campo non sia valido, è necessario invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo \`validity-message="Messaggio di errore"\`.
`,
      },
    },
  },
  render: () =>
    html` <form>
      <div class="row">
        <it-input
          class="col-md-6"
          label="Email"
          id="email"
          type="email"
          placeholder="Validazione di default"
        ></it-input>
        <it-input
          class="col-md-6"
          label="Username"
          id="username"
          custom-validation
          validity-message="Username obbligatorio"
          required
          placeholder="Validazione custom"
        ></it-input>
      </div>
    </form>`,
};

export const ValidazioneJS: Story = {
  ...meta,
  name: 'Validazione via JS',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
    docs: {
      canvas: { hidden: true, sourceState: 'none' }, // nasconde solo il canvas nella docs page
      description: {
        story: `
E' possibile implementare una propria validazione via JS, intercettando gli eventi emessi dai componenti:

\`\`\`js
 window.addEventListener('DOMContentLoaded', () => {
      const form = document.querySelector('#form');
      const all_input = form.querySelectorAll('it-input');

      // evento scatenato quando il web-component ha effettutato il primo render, e l'input è disonibile nel DOM
      all_input.forEach(input=>{
        input.addEventListener('input-ready', (event) => {
          const input = event.detail.el;
          // il tuo codice qui.
        });
      });

      // evento scatenato quando l'input riceve l'evento di 'on-input' (ad esempio, durante l'inserimento di testo da parte dell'utente)
      all_input.forEach(i=>{
        i.addEventListener('on-input', (event) => {
          const input = event.detail.el;
          // il tuo codice qui.
        });
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // il tuo codice qui.
      });
    });
\`\`\`
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const EsempioJustValidate: Story = {
  ...meta,
  name: 'Esempio di validazione via JS con plugin JustValidate',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
    docs: {
      canvas: { hidden: true, sourceState: 'none' }, // nasconde solo il canvas nella docs page
      description: {
        story: `
Ecco qui un esempio di implementazione della validazione con il plugin [JustValidate](https://just-validate.dev/).
`,
      },
    },
  },
  render: () =>
    html`<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          const formEl = document.querySelector('#form');

          // Inizializziamo JustValidate senza selettore, passando il form element
          const validate = new JustValidate(formEl);

          // Funzione helper per leggere valore da <it-input>
          const getItInputValue = (selector) => {
            const el = formEl.querySelector(selector);
            return el?.value || ''; // .value dovrebbe essere esposto dal tuo componente
          };

          // Aggiungiamo regole
          validate
            .addField('it-input[id="email"]', [
              {
                rule: 'required',
                errorMessage: 'Email obbligatoria',
              },
              {
                validator: () => {
                  const value = getItInputValue('it-input[id="email"]');
                  return /^[^s@]+@[^s@]+.[^s@]+$/.test(value);
                },
                errorMessage: 'Formato email non valido',
              },
            ])
            .addField('it-input[id="messaggio"]', [
              {
                validator: () => {
                  const value = getItInputValue('it-input[id="messaggio"]');
                  return value.length > 10;
                },
                errorMessage: 'Inserire almeno 10 caratteri',
              },
            ]);

          validate.onValidate((props) => {
            const { fields } = props;

            // Rimuovi TUTTI i messaggi creati da JustValidate (questi sono quelli prima del bottone submit)
            document.querySelectorAll('.just-validate-error-label').forEach((el) => el.remove());
            // aggiorna il Web Component
            Object.keys(fields).forEach((k) => {
              const f = fields[k];
              const wc = f.elem;
              if (wc) {
                wc.validationText = f.isValid ? '' : f.errorMessage;
              }
            });
          });

          formEl.addEventListener('submit', (e) => {
            e.preventDefault();
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

      <form id="form">
        <it-input id="nome" name="nome" label="Nome"></it-input>
        <it-input id="cognome" name="cognome" label="Cogome"></it-input>
        <it-input id="email" name="email" label="E-mail" type="email" support-text="Inserisci la tua email"
          custom-validation></it-input>
        <it-input id="messaggio" name="messaggio" label="Messaggio" type="textarea"
          support-text="Inserisci il tuo messaggio" custom-validation></it-input>
        <!-- <it-input id="password"  label="Password" type="password" minlength="10" suggestions strength-meter></it-input> -->
        <it-button type="submit" variant="primary" block>Invia</it-button></form>
      </form>`,
};

export const SingoliCampi: Story = {
  name: 'Tipologie di campi',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
    docs: {
      canvas: { hidden: true, sourceState: 'none' }, // nasconde solo il canvas nella docs page
      description: {
        story: `
I singoli campi di tipo \`<it-input>\`, \`<it-checkbox>\`, \`<it-radio>\`, \`<it-toggle>\`, ecc. sono trattati in pagine separate della documentazione.
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};
