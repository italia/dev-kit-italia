import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '@italia/icon';
import '@italia/button';

const meta = {
  title: 'Componenti/Navigazione/Torna indietro',
  component: 'it-back',
  tags: ['autodocs'],
  render: () => html`<div class="hide-preview"></div>`,
  parameters: {
    docs: {
      description: {
        component: `
<Description>Consente agli utenti di avere un link o pulsante con un'azione equivalente al "torna indietro" del browser.</Description>

Il componente "Torna indietro" permette di retrocedere di un passo nella cronologia di navigazione, equivalente al tasto "Indietro" del browser.

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/).

**In caso non si stia utilizzando il bundle unico, assicurarsi di avere importato tutti i fogli di stile necessari da \`bootstrap-italia\`.**
        `.trim(),
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const AttivazioneTramiteCodice: Story = {
  name: 'Attivazione tramite codice',
  parameters: {
    docs: {
      description: {
        story: `
La funzionalità "torna indietro" deve essere implementata registrando un event listener sull'elemento desiderato e invocando il metodo \`window.history.back()\` all'interno dell'handler dell'evento.

Questo metodo consente di navigare all'indietro di una singola entry nello stack della cronologia del browser, replicando il comportamento del pulsante "Indietro" nativo del browser.

\`\`\`javascript
const backButton = document.getElementById('backButton');
backButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.history.back();
});

\`\`\`
Gli esempi seguenti implementano questa funzionalità nel loro codice di esempio.

<br/>

        `.trim(),
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const Link: Story = {
  parameters: {
    docs: {
      description: {
        story: `

Quando si utilizza un link (tag \`<a>\`) è necessario aggiungere un valore all'attributo href perché il link sia correttamente navigabile via tastiera.

Utilizzare la classe \`.go-back\` per applicare lo stile appropriato.


\`\`\`
        `.trim(),
      },
    },
  },
  render: () => html`
    <a
      href="#"
      class="go-back"
      @click=${(e: Event) => {
        e.preventDefault();
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-left" size="sm" color="primary" class="me-2"></it-icon>
      <span>Torna indietro</span>
    </a>
  `,
};

export const Pulsante: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Nel caso dell'utilizzo di un pulsante è possibile utilizzare sia \`<button>\` standard che il componente \`<it-button>\`.

Utilizzare la classe \`.go-back\` per applicare lo stile appropriato.


\`\`\`
        `.trim(),
      },
    },
  },
  decorators: [
    (story) => html` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${story()}<!-- Fine esempi --></div> `,
  ],
  render: () => html`
    <button
      type="button"
      class="btn btn-primary go-back"
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-left" size="sm" color="white" class="me-2"></it-icon>
      <span>Torna indietro</span>
    </button>
    <button
      type="button"
      class="btn btn-primary go-back"
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-up" size="sm" color="white" class="me-2"></it-icon>
      <span>Torna indietro</span>
    </button>
    <it-button
      variant="primary"
      class="go-back"
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-left" size="sm" color="white" slot="prefix"></it-icon>
      <span>Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-up" size="sm" color="white" slot="prefix"></it-icon>
      <span>Torna indietro</span>
    </it-button>
  `,
};

export const PulsanteSolaIcona: Story = {
  name: 'Pulsante con sola icona',
  parameters: {
    docs: {
      description: {
        story: `
È possibile creare pulsanti senza testo dotati di sola icona avendo cura di includere il testo alternativo per gli screen reader in un tag \`<span>\` con classe \`.visually-hidden\`.


\`\`\`
        `.trim(),
      },
    },
  },
  decorators: [
    (story) => html` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${story()}<!-- Fine esempi --></div> `,
  ],
  render: () => html`
    <button
      type="button"
      class="btn btn-primary go-back"
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-left" size="sm" color="white"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </button>
    <button
      type="button"
      class="btn btn-primary go-back"
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-up" size="sm" color="white"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </button>
    <it-button
      variant="primary"
      class="go-back"
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-left" size="sm" color="white"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      @click=${() => {
        window.history.back();
      }}
    >
      <it-icon name="it-arrow-up" size="sm" color="white"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
  `,
};
