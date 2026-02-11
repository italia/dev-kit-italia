import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Componenti/Alert',
  tags: ['alpha', 'a11y-ok', 'documentation'],
  parameters: {
    layout: 'padded',
    docs: {
      source: { excludeDecorators: true },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Esempi: Story = {
  decorators: [(Story) => html`<div style="display:flex;flex-direction:column;gap:1rem">${Story()}</div>`],
  render: () => html`
    <div class="alert alert-primary" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>primary</b>".
    </div>

    <div class="alert alert-secondary" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>info</b>".
    </div>

    <div class="alert alert-success" role="alert">
      <it-icon name="it-check-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>success</b>".
    </div>

    <div class="alert alert-warning" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>warning</b>".
    </div>

    <div class="alert alert-danger" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>danger</b>".
    </div>
  `,
};

export const LinkEvidenziato: Story = {
  render: () => html`
    <div class="alert alert-danger" role="alert">
      Questo è un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.
    </div>
  `,
};

export const ContenutoAggiuntivo: Story = {
  render: () => html`
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Avviso di successo!</h4>
      <p>
        Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più lungo in modo
        da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.
      </p>
      <hr />
      <p class="mb-0">
        Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.
      </p>
    </div>
  `,
};

export const Chiusura: Story = {
  render: () => {
    function handleClose(event: Event) {
      const alertElement = (event.target as HTMLElement).closest('.alert');
      if (alertElement) {
        alertElement.classList.remove('show');
        setTimeout(() => {
          alertElement.remove();
        }, 150);
      }
    }

    return html`
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
        <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso" @click=${handleClose}>
          <it-icon name="it-close"></it-icon>
        </it-button>
      </div>
    `;
  },
};
