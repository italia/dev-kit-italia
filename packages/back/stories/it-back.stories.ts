import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../src/it-back.ts';

const meta = {
  title: 'Componenti/Back',
  component: 'it-back',
  tags: ['new', 'web-component', 'a11y-ok'],
  parameters: {
    docs: {
      description: {
        component: `
    <Description>Elemento di navigazione per tornare alla pagina o alla schermata precedente</Description>
            `.trim(),
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Link: Story = {
  render: () => html`
    <it-back>
      <a href="#" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
        <span>Torna indietro</span>
      </a>
    </it-back>
  `,
};

export const Pulsante: Story = {
  decorators: [
    (story) => html` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${story()}<!-- Fine esempi --></div> `,
  ],
  render: () => html`
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
        <span>Torna indietro</span>
      </it-button>
    </it-back>
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
        <span>Torna indietro</span>
      </it-button>
    </it-back>
  `,
};

export const NavigazionePersonalizzata: Story = {
  name: 'Navigazione personalizzata',
  parameters: {
    docs: {
      description: {
        story: `L'evento \`it-back-navigate\` è **cancelable**. Chiamando \`event.preventDefault()\` impedisci \`window.history.back()\` e puoi gestire la navigazione indietro secondo il router del tuo framework.

In questo esempio la navigazione di default viene intercettata e sostituita da un messaggio (così la storia non lascia la pagina di Storybook).`,
      },
      source: {
        code: `<it-back id="back-custom">
  <a href="#" class="go-back">
    <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
    <span>Torna indietro</span>
  </a>
</it-back>

<script type="module">
  const back = document.getElementById('back-custom');
  back.addEventListener('it-back-navigate', (e) => {
    e.preventDefault(); // impedisce window.history.back()
    // ...naviga indietro secondo il router del tuo framework...
    console.log('Navigazione indietro gestita dal framework');
  });
</script>`,
      },
    },
  },
  render: () => html`
    <it-back
      @it-back-navigate=${(e: Event) => {
        e.preventDefault();
        const status = document.getElementById('back-custom-status');
        if (status) status.textContent = 'Navigazione indietro intercettata: la gestisce il tuo router.';
      }}
    >
      <a href="#" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
        <span>Torna indietro</span>
      </a>
    </it-back>
    <p id="back-custom-status" class="mt-3" style="font-size:0.9rem" role="status" aria-live="polite"></p>
  `,
};

export const PulsanteSolaIcona: Story = {
  name: 'Pulsante con sola icona',

  decorators: [
    (story) => html` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${story()}<!-- Fine esempi --></div> `,
  ],
  render: () => html`
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
        <span class="visually-hidden">Torna indietro</span>
      </it-button>
    </it-back>
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
        <span class="visually-hidden">Torna indietro</span>
      </it-button>
    </it-back>
  `,
};
