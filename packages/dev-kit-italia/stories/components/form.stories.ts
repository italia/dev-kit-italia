import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Componenti/Form',
  tags: ['documentation'],

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

export const DimensionamentoColonne: Story = {
  ...meta,
  name: 'Dimensionamento delle colonne',

  render: () =>
    html`<form>
      <div class="row">
        <it-input class="col-md-6" id="nome">
          <span slot="label">Nome</span>
        </it-input>
        <it-input class="col-md-6" id="cognome">
          <span slot="label">Cognome</span>
        </it-input>
      </div>
      <div class="row">
        <it-input class="col" id="indirizzo">
          <span slot="label">Indirizzo</span>
        </it-input>
      </div>
      <div class="row">
        <it-input class="col-md-6" id="comune">
          <span slot="label">Comune</span>
        </it-input>
        <it-input class="col-md" id="provincia">
          <span slot="label">Provincia</span>
        </it-input>
        <it-input class="col-md" id="cap">
          <span slot="label">CAP</span>
        </it-input>
      </div>
      <div class="row">
        <it-input class="col-md-6" id="email" type="email">
          <span slot="label">E-mail</span>
        </it-input>
        <it-input class="col-md-6" id="password" type="password">
          <span slot="label">Password</span>
        </it-input>
      </div>
      <div class="row mt-4">
        <div class="form-group col text-center">
          <it-button type="button" variant="primary" outline>Annulla</it-button>
          <it-button type="submit" variant="primary">Conferma</it-button>
        </div>
      </div>
    </form>`,
};

export const Autodimensionamento: Story = {
  ...meta,
  name: 'Auto-dimensionamento',
  render: () =>
    html` <form>
      <div class="row">
        <it-input class="col-md-6 col-lg-auto" id="nome" label-hidden placeholder="Nome e cognome">
          <span slot="label">Nome e cognome</span>
        </it-input>
        <it-input class="col-md-6 col-lg-auto" id="username" label-hidden placeholder="username">
          <span slot="label">Username</span><span slot="icon">@</span>
        </it-input>
        <div class="col-6 col-md-3 col-lg-auto">
          <it-button type="submit" variant="primary">Invia</it-button>
        </div>
      </div>
    </form>`,
};

export const DisabilitazioneCampi: Story = {
  ...meta,
  name: 'Disabilitazione di campi',
  render: () =>
    html` <form>
      <it-input id="nome" label-hidden placeholder="Esempio input disabilitato" disabled>
        <span slot="label">Esempio input disabilitato</span>
      </it-input>
    </form>`,
};

export const Validazione: Story = {
  ...meta,
  render: () =>
    html` <form action="/prova">
      <div class="row">
        <it-input class="col-md-6" id="email" type="email" placeholder="Validazione di default">
          <span slot="label">E-mail</span>
        </it-input>
        <it-input
          class="col-md-6"
          id="username"
          custom-validation
          validity-message="Username obbligatorio"
          required
          placeholder="Validazione custom"
        >
          <span slot="label">Username</span>
        </it-input>
      </div>
    </form>`,
};

export const EsempioJustValidate: Story = {
  ...meta,
  name: 'Esempio di validazione via JS con plugin JustValidate',
  tags: ['!dev'],
  render: () =>
    html`<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          const formEl = document.querySelector('#form-validation-example');

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
                  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(value);
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

      <form id="form-validation-example">
        <it-input id="nome" name="nome">
          <span slot="label">Nome</span>
        </it-input>
        <it-input id="cognome" name="cognome">
          <span slot="label">Cognome</span>
        </it-input>
        <it-input id="email" name="email" type="email" support-text="Inserisci la tua email" custom-validation>
          <span slot="label">E-mail</span>
        </it-input>
        <it-input
          id="messaggio"
          name="messaggio"
          type="textarea"
          support-text="Inserisci il tuo messaggio"
          custom-validation
        >
          <span slot="label">Messaggio</span>
        </it-input>
        <!-- <it-input id="password" type="password" minlength="10" suggestions strength-meter><span slot="label">Password</span></it-input> -->
        <it-button type="submit" variant="primary" block>Invia</it-button>
      </form>`,
};
