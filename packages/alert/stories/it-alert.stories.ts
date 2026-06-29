import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../src/it-alert.ts';

const meta = {
  title: 'Componenti/Alert',
  component: 'it-alert',
  tags: ['new', 'web-component', 'a11y-ok'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Esempi: Story = {
  decorators: [(Story) => html`<div style="display:flex;flex-direction:column;gap:1rem">${Story()}</div>`],
  render: () => html`
    <it-alert variant="primary">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>primary</b>".
      </div>
    </it-alert>

    <it-alert variant="secondary">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>secondary</b>".
      </div>
    </it-alert>

    <it-alert variant="success">
      <div class="alert">
        <it-icon name="it-check-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>success</b>".
      </div>
    </it-alert>

    <it-alert variant="warning">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>warning</b>".
      </div>
    </it-alert>

    <it-alert variant="danger">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>danger</b>".
      </div>
    </it-alert>
  `,
};

export const LinkEvidenziato: Story = {
  render: () => html`
    <it-alert variant="danger">
      <div class="alert">Questo è un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.</div>
    </it-alert>
  `,
};

export const ContenutoAggiuntivo: Story = {
  render: () => html`
    <it-alert variant="success">
      <div class="alert">
        <h4 class="alert-heading">Avviso di successo!</h4>
        <p>
          Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più lungo in
          modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.
        </p>
        <hr />
        <p class="mb-0">
          Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.
        </p>
      </div>
    </it-alert>
  `,
};

export const Chiusura: Story = {
  render: () => html`
    <it-alert variant="warning">
      <div class="alert alert-dismissible fade show">
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
        <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso">
          <it-icon name="it-close"></it-icon>
        </it-button>
      </div>
    </it-alert>
  `,
};

export const ChiusuraConLogicaPersonalizzata: Story = {
  name: 'Chiusura con logica personalizzata',
  parameters: {
    docs: {
      description: {
        story: `L'evento \`it-alert-close\` è cancelable. Chiamando \`event.preventDefault()\` puoi
intercettare la chiusura ed eseguire una logica personalizzata (ad esempio una conferma),
richiamando poi il metodo pubblico \`close()\` quando opportuno.`,
      },
    },
  },
  render: () => html`
    <it-alert
      variant="warning"
      @it-alert-close=${(e: Event) => {
        e.preventDefault();
        // eslint-disable-next-line no-alert
        if (window.confirm('Vuoi davvero chiudere questo avviso?')) {
          (e.currentTarget as HTMLElement & { close: () => void }).close();
        }
      }}
    >
      <div class="alert alert-dismissible fade show">
        <strong>Attenzione</strong> La chiusura richiede conferma.
        <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso">
          <it-icon name="it-close"></it-icon>
        </it-button>
      </div>
    </it-alert>
  `,
};
