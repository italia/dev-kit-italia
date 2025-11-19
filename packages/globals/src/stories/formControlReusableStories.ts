/* eslint-disable arrow-body-style */
import { html } from 'lit';

export const StoryFormControlMethodAndProps = ({
  otherProps = '',
  otherMethods = '',
  otherEvents = '',
  componentName = 'it-input',
}) => {
  return {
    name: 'Proprietà, Metodi, ed Eventi accessibili via js',
    tags: ['!dev'],
    render: () => html`<div class="hide-preview"></div>`,
    parameters: {
      viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
      docs: {
        description: {
          story: `
Il componente espone delle proprietà, metodi, ed eventi, utili per eventuali interazioni via js.

\`\`\`html
<${componentName} ... id="myinput"></${componentName}>
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
<h4>Proprietà accessibili dall'esterno</h4>
| Nome | Descrizione |
|------|-------------|
|\`validity\`| Ritorna l'oggetto di validazione effettuata dal browser.|
|\`validationMessage\`| Ritorna il messaggio di errore in caso di validazione fallita.|
${otherProps}

<h4>Metodi</h4>
| Nome | Descrizione | Argomenti |
|------|-------------|-----------|
|\`getForm()\`| Ritorna l'elemento del DOM corrispondente alla form di riferimento dell'input. | - |
|\`checkValidity()\`| Triggera la validazione nativa del browser sul campo, e restituisce true o false a seconda che l'input sia valido o meno. | - |
|\`reportValidity()\`| Controlla se l'elemento è valido secondo le regole di validazione del browser. Se non è valido, mostra un messaggio di errore (tooltip nativo del browser) e restituisce \`false\`. Se è valido, restituisce \`true\`. | - |
|\`setCustomValidity('')\`| Permette di impostare un messaggio di errore personalizzato passato come parametro. Se il messaggio non è vuoto, rende invalido l'elemento. Se invece il messaggio è vuoto (''), rende valido l'elemento. | message: String |
${otherMethods}


<h4>Eventi</h4>
| Nome | Descrizione |
|------|-------------|
|\`it-input-ready\`| Quando il componente è montato e l'elemento input interno è pronto. |
|\`it-input\`| Ogni volta che il valore di input cambia per interazione da parte dell'utente |
|\`it-blur\`| Quando l'input perde il focus (blur) |
|\`it-focus\`| Quando l'input riceve il focus (focus) |
|\`it-click\`| Quando l'utente fa click sull'input |
|\`it-change\`| Quando il valore dell’input viene modificato e il browser emette \`change\` |
|\`invalid\`| Emesso dal browser quando la validazione fallisce.|
${otherEvents}`,
        },
      },
    },
  };
};
