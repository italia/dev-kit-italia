import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../src/it-forward.ts';

const meta = {
  title: 'Componenti/Forward',
  component: 'it-forward',
  tags: ['new', 'web-component', 'a11y-ok'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const EsempioBase: Story = {
  ...meta,
  name: 'Esempio base',
  parameters: {
    docs: {
      story: {
        iframeHeight: 1000,
      },
      description: {
        story: `Per attivare lo scorrimento automatico è sufficiente avvolgere nel componente \`<it-forward>\` un link con la classe \`.forward\` e l'attributo \`href\` impostato all'àncora di destinazione. Il comportamento di scorrimento è gestito di default dal componente.

<div class="mt-5" style="font-size:0.9rem">Scorri il contenuto dell'esempio qui sotto per vedere l'effetto del forward.</div>
`,
      },
      source: {
        code: `
<script type="module">
  import '@italia/forward/it-forward.js';
</script>

<it-forward>
  <a href="#sezione-di-esempio" class="forward" aria-label="Vai a: Sezione di esempio">
    <it-icon name="it-expand" size="lg" color="primary"></it-icon>
  </a>
</it-forward>

<div id="sezione-di-esempio">
  <h2>Sezione di esempio</h2>
  <p>Et et consectetur ipsum labore excepteur...</p>
</div>`,
      },
    },
  },
  render: () => html`
    <div style="max-height: 500px; overflow-y: auto; border: 1px solid #ddd;">
      <div class="container my-4">
        <p class="mb-3">Clicca sull'icona per scorrere alla sezione di esempio:</p>
        <it-forward>
          <a href="#sezione-di-esempio" class="forward" aria-label="Vai a: Sezione di esempio">
            <it-icon name="it-expand" size="lg" color="primary"></it-icon>
          </a>
        </it-forward>
      </div>

      <div style="height: 400px; background-color: #f0f6fc; padding: 2rem;">
        <h3>Contenuto intermedio</h3>
        <p>
          Questo è un contenuto che separa il link Forward dalla sezione di destinazione. L'animazione scorrerà
          automaticamente fino alla sezione target.
        </p>
      </div>

      <div id="sezione-di-esempio" class="container my-4 py-4">
        <h2>Sezione di esempio</h2>
        <p>
          Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.
          Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim.
        </p>
        <p>
          Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim
          occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit.
        </p>
      </div>
    </div>
  `,
};

export const NavigazionePersonalizzata: Story = {
  name: 'Navigazione personalizzata',
  parameters: {
    docs: {
      description: {
        story: `L'evento \`it-forward-navigate\` è **cancelable**. Chiamando \`event.preventDefault()\` puoi intercettare lo scorrimento e gestire la navigazione in autonomia (ad esempio integrandola con il routing di un framework), richiamando poi \`navigateTo(target)\` quando opportuno.

Clicca sull'icona: in questo esempio la navigazione viene intercettata, viene mostrato un messaggio e solo dopo viene eseguito lo scorrimento.`,
      },
      source: {
        code: `<it-forward id="forward-custom">
  <a href="#sezione-target" class="forward" aria-label="Vai a: Sezione di esempio">
    <it-icon name="it-expand" size="lg" color="primary"></it-icon>
  </a>
</it-forward>

<script type="module">
  const forward = document.getElementById('forward-custom');
  forward.addEventListener('it-forward-navigate', (e) => {
    e.preventDefault(); // impedisce lo scorrimento di default
    console.log('Navigazione verso', e.detail.href);
    // ...logica personalizzata (es. routing del framework)...
    if (e.detail.target) forward.navigateTo(e.detail.target);
  });
</script>`,
      },
    },
  },
  render: () => html`
    <div style="max-height: 500px; overflow-y: auto; border: 1px solid #ddd;">
      <div class="container my-4">
        <p class="mb-3">Clicca sull'icona: la navigazione viene intercettata prima di scorrere.</p>
        <it-forward
          @it-forward-navigate=${(e: CustomEvent<{ href: string; target: HTMLElement | null }>) => {
            e.preventDefault();
            const status = document.getElementById('forward-custom-status');
            if (status) status.textContent = `Navigazione intercettata verso "${e.detail.href}". Scorro io…`;
            if (e.detail.target) {
              (e.currentTarget as HTMLElement & { navigateTo: (t: HTMLElement) => void }).navigateTo(e.detail.target);
            }
          }}
        >
          <a href="#sezione-target" class="forward" aria-label="Vai a: Sezione di esempio">
            <it-icon name="it-expand" size="lg" color="primary"></it-icon>
          </a>
        </it-forward>
        <p id="forward-custom-status" class="mt-3" style="font-size:0.9rem" role="status" aria-live="polite"></p>
      </div>

      <div style="height: 400px; background-color: #f0f6fc; padding: 2rem;">
        <h3>Contenuto intermedio</h3>
        <p>Questo contenuto separa il link Forward dalla sezione di destinazione.</p>
      </div>

      <div id="sezione-target" class="container my-4 py-4">
        <h2>Sezione di esempio</h2>
        <p>
          Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.
        </p>
      </div>
    </div>
  `,
};
