import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@italia/sticky';

const meta: Meta = {
  title: 'Esempi/Sticky',
  tags: ['!autodocs', '!dev'],
  decorators: [
    (Story, context) => html`
      ${context.parameters.heading ? html`<h1 style="margin:0 0 2rem 0">${context.parameters.heading}</h1>` : ''}
      ${context.parameters.description ? html`<p style="margin:0 0 2rem 0">${context.parameters.description}</p>` : ''}
      <div style="container-type: inline-size;">
        <div class="container" style="height: 4000px; background: linear-gradient(#eee, #ccc);">${Story()}</div>
      </div>
      <style>
        #storybook-root {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin: 0;
          width: 100%;
        }
        .l-0 {
          left: 0 !important;
        }
        .container {
          padding: 0;
        }

        @container (min-width: 1200px) {
          .container {
            width: 1140px;
          }
        }

        @container (min-width: 992px) and (max-width: 1199px) {
          .container {
            width: 960px;
          }
        }

        @container (min-width: 768px) and (max-width: 991px) {
          .container {
            width: 720px;
          }
        }

        @container (max-width: 767px) {
          .container {
            padding: 0 1rem;
          }
        }
        /* Media query globali per resize finestra */
        @media (min-width: 1200px) {
          .container {
            width: 1140px;
          }
        }
        @media (min-width: 992px) and (max-width: 1199px) {
          .container {
            width: 960px;
          }
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .container {
            width: 720px;
          }
        }
        @media (max-width: 767px) {
          .container {
            padding: 0 1rem;
          }
        }
      </style>
    `,
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const SingleSticky: StoryObj = {
  parameters: {
    heading: 'Esempio componente it-sticky',
    description: "Scrollare la pagina per vedere l'effetto sticky",
  },
  render: () => html`
    <it-sticky class="w-100 bg-primary p-2 text-white">
      <div class="w-100">Elemento sticky</div>
    </it-sticky>
  `,
};
export const PaddedSticky: StoryObj = {
  parameters: {
    heading: 'Esempio componente it-sticky: position-top offset',
    description: "Scrollare la pagina per vedere l'effetto sticky con offset",
  },
  render: () => html`
    <it-sticky class="w-100 bg-primary p-2 text-white" padding-top="50">
      <div class="w-100">Elemento sticky con top offset</div>
    </it-sticky>
  `,
};
export const FixedSticky: StoryObj = {
  parameters: {
    heading: 'Esempio componente it-sticky: position-type fixed',
    description:
      "Scrollare la pagina per vedere l'effetto sticky: vedrai applicate la classi bg-warning w-100 l-0 fornite a sticky-class-name",
  },
  render: () => html`
    <it-sticky sticky-class-name="bg-warning w-100 l-0" position-type="fixed" class="w-100 bg-primary p-2 text-white">
      <div class="w-100">Elemento sticky Fixed</div>
    </it-sticky>
  `,
};
export const StackableSticky: StoryObj = {
  parameters: {
    heading: 'Esempio componente it-sticky: stackable',
    description:
      "Scrollare la pagina per vedere l'effetto sticky: vedrai il componenti impilarsi uno sopra l'altro, e l'ultimo mantenere il suo top offset di 50px",
  },
  render: () => html`
    <it-sticky class="bg-primary p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    <div style="height: 500px;"></div>
    <it-sticky class="bg-success p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    <div style="height: 500px;"></div>
    <it-sticky class="bg-danger p-2 text-white w-100" stackable>
      <div>Elemento sticky stackable</div>
    </it-sticky>
    <div style="height: 500px;"></div>
    <it-sticky class="bg-warning p-2 text-white w-100" stackable padding-top="50">
      <div>Elemento sticky stackable con top offset 50px</div>
    </it-sticky>
  `,
};
export const StackableStickyResize: StoryObj = {
  parameters: {
    heading: 'Sticky impilabili con resize',
    description: `
Questo esempio mostra più componenti it-sticky con attributo stackable e la gestione dei resize del suo contenitore (ie media query).
Utilizza il selettore per modificare la larghezza del contenitore: al variare della dimensione,
gli elementi interni cambiano altezza grazie alle container query e rimangono comunque
correttamente impilati uno sopra l’altro durante lo scroll.
  `,
  },
  render: () => html`
    <div id="wrapper" style="container-type: inline-size; height:100%; transition: width 0.3s; padding:1rem;">
      <label for="size">Seleziona la larghezza del contenuto:</label>
      <select
        id="size"
        name="size"
        @change=${(e: Event) => {
          const target = e.target as HTMLSelectElement;
          // trova la .container definita nel decorator (il blocco grigio)
          const outerContainer = document.querySelector('.container') as HTMLElement | null;
          if (outerContainer) {
            outerContainer.style.width = `${target.value}px`;
            // forza reflow per render immediato delle container query
            outerContainer.getBoundingClientRect();
          } else {
            // fallback: imposta il wrapper locale
            const wrapper = document.getElementById('wrapper') as HTMLDivElement | null;
            if (wrapper) {
              wrapper.style.width = `${target.value}px`;
              wrapper.getBoundingClientRect();
            }
          }
        }}
      >
        <option value="1200">1200px</option>
        <option value="1000">1000px</option>
        <option value="800">800px</option>
        <option value="600">600px</option>
        <option value="400">400px</option>
      </select>

      <div style="padding: 1rem;">
        CSS per il ridimensionamento del contenuto:
        <pre style="background: #333; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto;">
            .resizable-content {
              height: 40px;
              transition: height 0.3s;
            }

            /* Container queries */
            @container (max-width: 1200px) {
              .resizable-content {
                height: 40px;
              }
            }
            @container (max-width: 1000px) {
              .resizable-content {
                height: 60px;
              }
            }
            @container (max-width: 800px) {
              .resizable-content {
                height: 80px;
              }
            }
            @container (max-width: 500px) {
              .resizable-content {
                height: 100px;
              }
            }
          </pre
        >
      </div>

      <it-sticky class="bg-primary p-2 text-white w-100" stackable>
        <div class="resizable-content">Sticky Stackable 1</div>
      </it-sticky>

      <div style="height: 500px;"></div>

      <it-sticky class="bg-success p-2 text-white w-100" stackable>
        <div class="resizable-content">Sticky Stackable 2</div>
      </it-sticky>

      <div style="height: 500px;"></div>

      <it-sticky class="bg-danger p-2 text-white w-100" stackable>
        <div class="resizable-content">Sticky Stackable 3</div>
      </it-sticky>

      <style>
        .resizable-content {
          height: 40px;
          transition: height 0.3s;
        }

        /* Container queries */
        @container (max-width: 1200px) {
          .resizable-content {
            height: 40px;
          }
        }
        @container (max-width: 1000px) {
          .resizable-content {
            height: 60px;
          }
        }
        @container (max-width: 800px) {
          .resizable-content {
            height: 80px;
          }
        }
        @container (max-width: 500px) {
          .resizable-content {
            height: 100px;
          }
        }
      </style>
    </div>
  `,
};
