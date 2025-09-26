import { html } from 'lit';

export const StoryFormControlMethodAndProps = {
  name: 'Metodi e proprietà accessibili via js',
  tags: ['!dev'],
  render: () => html`<div class="hide-preview"></div>`,
  parameters: {
    viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
    docs: {
      description: {
        story: `Il componente espone delle proprietà e dei metodi pubblici, utili per eventuali interazioni via js.

\`\`\`html
<it-input ... id="myinput"></it-input>
\`\`\`

\`\`\`js
const myInput = document.getElementById("myInput");
const validity = myInput.validity;
const validationMessage = myInput.validationMessage;

const form = myInput.getForm();
myInput.checkValidity();
myInput.reportValidity();
myInput.setCustomValidity("Messaggio di errore");
\`\`\`

<br/>
<h4>Proprietà</h4>
- \`validity\`: Ritorna l'oggetto di validazione effettuata dal browser.
- \`validationMessage\`: ritorna il messaggio di errore in caso di validazione fallita.

<h4>Metodi</h4>
- \`getForm()\`: ritorna l'elemento del dom corrispondente alla form di riferimento dell'input.
- \`checkValidity()\`: triggera la validazione nativa del browser sul campo, e restituisce true o false a seconda che l'input sia valido o meno.
- \`reportValidity()\`: controlla se l'elemento è valido secondo le regole di validazione del browser. Se non è valido, mostra un messaggio di errore (tooltip nativo del browser) e restituisce false. Se è valido, restituisce true.
- \`setCustomValidity('')\`: permette di impostare un messaggio di errore personalizzato passato come parametro. Se il messaggio non è vuoto, rende invalido l'elemento. Se invece il messaggio è vuoto (''), rende valido l'elemento.
      `,
      },
    },
  },
};
