import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '@italia/icon';
import '@italia/button';

const meta = {
  title: 'Componenti/Torna indietro',
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
      Torna indietro
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
  render: () => html`
    <div class="d-flex gap-3 flex-wrap">
      <button
        type="button"
        class="btn btn-primary go-back"
        @click=${() => {
          window.history.back();
        }}
      >
        <it-icon name="it-arrow-left" size="sm" color="white" class="me-2"></it-icon>
        Torna indietro
      </button>

      <button
        type="button"
        class="btn btn-primary go-back"
        @click=${() => {
          window.history.back();
        }}
      >
        <it-icon name="it-arrow-up" size="sm" color="white" class="me-2"></it-icon>
        Livello superiore
      </button>

      <it-button
        variant="primary"
        class="go-back"
        @click=${() => {
          window.history.back();
        }}
      >
        <it-icon name="it-arrow-left" size="sm" color="white" slot="prefix"></it-icon>
        Torna indietro
      </it-button>

      <it-button
        variant="primary"
        class="go-back"
        @click=${() => {
          window.history.back();
        }}
      >
        <it-icon name="it-arrow-up" size="sm" color="white" slot="prefix"></it-icon>
        Livello superiore
      </it-button>
    </div>
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
  render: () => html`
    <div class="d-flex gap-3 flex-wrap">
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
        <span class="visually-hidden">Livello superiore</span>
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
        <span class="visually-hidden">Livello superiore</span>
      </it-button>
    </div>
  `,
};

export const AttivazioneTramiteCodice: Story = {
  name: 'Attivazione tramite codice',
  parameters: {
    docs: {
      description: {
        story: `
È possibile attivare la funzionalità "torna indietro" tramite JavaScript utilizzando il metodo \`window.history.back()\`.

Questo metodo permette di retrocedere di un passo nella cronologia di navigazione del browser, equivalente al tasto "Indietro" del browser.

\`\`\`javascript
const backButton = document.getElementById('backButton');
backButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.history.back();
});
\`\`\`

        `.trim(),
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};
