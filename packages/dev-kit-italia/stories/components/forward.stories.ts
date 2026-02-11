import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Componenti/Forward',
  tags: ['alpha', 'documentation', 'a11y-ok'],
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
        story: `Per attivare lo scorrimento automatico è sufficiente aggiungere a un link la classe \`.forward\` e impostare l'attributo \`href\` con l'àncora di destinazione.

<div class="mt-5" style="font-size:0.9rem">Scorri il contenuto dell'esempio qui sotto per vedere l'effetto del forward.</div>
`,
      },
      source: {
        code: `
<script type="module">
  document.querySelectorAll('a.forward').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        targetElement.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    });
  });
</script>

<a href="#sezione-di-esempio" class="forward" aria-label="Vai a: Sezione di esempio">
  <it-icon name="it-expand" size="lg" color="primary"></it-icon>
</a>

<div id="sezione-di-esempio">
  <h2>Sezione di esempio</h2>
  <p>Et et consectetur ipsum labore excepteur...</p>
</div>`,
      },
    },
  },
  render: () => {
    setTimeout(() => {
      document.querySelectorAll('a.forward').forEach((link) => {
        const newLink = link.cloneNode(true);
        link.parentNode?.replaceChild(newLink, link);
        newLink.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = newLink.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            targetElement.scrollIntoView({
              behavior: prefersReducedMotion ? 'auto' : 'smooth',
              block: 'start',
            });
          }
        });
      });
    }, 100);

    return html`
      <div style="max-height: 500px; overflow-y: auto; border: 1px solid #ddd;">
        <div class="container my-4">
          <p class="mb-3">Clicca sull'icona per scorrere alla sezione di esempio:</p>
          <a href="#sezione-di-esempio" class="forward" aria-label="Vai a: Sezione di esempio">
            <it-icon name="it-expand" size="lg" color="primary"></it-icon>
          </a>
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
            Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non
            minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui
            sit.
          </p>
        </div>
      </div>
    `;
  },
};
