import type { StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { SECTION_VARIANTS, type SectionProps } from '../src/types.ts';

const defaultContent = html`
  <div class="container">
    <div class="row mb-3">
      <div class="col-12">
        <h2 id="section-heading">Morbi fermentum amet</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
      </div>
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam
          quis enim. Eu nisl nunc mi ipsum faucibus.
        </p>
      </div>
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum.
          Mattis enim ut tellus elementum sagittis.
        </p>
      </div>
    </div>
  </div>
`;
function renderSection({
  variant,
  image,
  content,
  inverse = false,
}: SectionProps & {
  content?: any;
}) {
  return html`
    <it-section variant="${variant || nothing}" image="${image || nothing}" ?inverse="${ifDefined(inverse)}">
      <!-- contenuto di esempio START -->
      ${content || defaultContent}
      <!-- contenuto di esempio END -->
    </it-section>
  `;
}
const meta = {
  title: 'Componenti/Section',
  tags: ['a11y-ok', 'web-component'],
  component: 'it-section',
  parameters: {
    docs: {
      layout: 'padded',
      description: {
        component: `<Description>Sezione per raggruppare contenuti coerenti e con sfondi dedicati</Description>

Il componente \`<it-section>\` rappresenta un contenitore visivo per introdurre sezioni di contenuto con o senza immagine.

Per indicazioni su come e quando usarlo consulta la [guida del design-system](https://designers.italia.it/design-system/componenti/sections/)


<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità (Draft)</span></div><p>
      Il titolo h2 dello snippet è solo indicativo: assicurati che il contenuto contenga un'intestazione semantica per garantire la corretta navigazione assistiva.
      <br>Il tag it-section contraddistingue una sezione semanticamente riconoscibile, associata all’id del titolo dall’attributo aria-labelledby.

      <br>Gli autori dovrebbero dividere la pagina in sezioni semantiche reali e non per solo scopo decorativo.     <br> Qualora si utilizzino sezioni al solo scopo decorativo sostituire it-section con div ed eliminare l’attributo aria-labelledby.
      <br><br>
      Le immagini fornite tramite l'attributo <code>image</code> sono considerate <strong>decorative</strong>: sono rese con un tag <code>&lt;img&gt;</code> e <code>aria-hidden="true"</code>.
      In questo modo non vengono annunciate dagli screen reader.</p><p class="pt-2">
      </p></div></div>
`,
      },
    },
  },
  args: {
    variant: '',
    image: '',
    inverse: false,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: SECTION_VARIANTS,
      description: 'Variante grafica del componente, corrisponde alle classi di Bootstrap Italia',
      table: { defaultValue: { summary: undefined } },
      type: { name: 'string', required: false },
    },
    image: {
      control: { type: 'text' },
      description: 'URL immagine di sfondo, ad esempio https://picsum.photos/1600/500',
    },

    inverse: {
      control: { type: 'boolean' },
      description:
        "Applica il colore bianco ai testi. È utile quando la sezione ha un'immagine di sfondo scura, così da garantire il corretto contrasto e la leggibilità dei contenuti. Non è necessario con le varianti `emphasis` e `primary`, che applicano già automaticamente il testo bianco.",
      table: { defaultValue: { summary: false } },
    },
  },
};

export default meta;
type Story = StoryObj<SectionProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  render: (args) => html`<div class="p-4" style="background-color: #e9ecef;">${renderSection(args)}</div>`,
};

export const PersonalizzazioneDegliStili: Story = {
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
    docs: {
      canvas: { hidden: true, sourceState: 'none' }, // nasconde solo il canvas nella docs page
      description: {
        story: `
Per la personalizzazione degli stili puoi usare il selettore \`::part\` passando il valore \`section\`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).

Quando si organizzano i contenuti usando le classi della griglia, non serve aggiungere spazio ai lati. Se proprio necessario, puoi aggiungere spazio laterale usando la variabile \`--bs-section-padding-x\`.

Puoi usare la variabile \`--bs-section-image-overlay\` per regolare l'opacità dell'overlay applicato all'immagine.
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};
export const VariantiColore: Story = {
  name: 'Varianti di sfondo',
  render: () => html`
    <div class="d-flex flex-column gap-4 p-4" style="background-color: #e9ecef; min-width:600px;">
      ${(['muted', 'emphasis', 'primary'] as const).map((variant) =>
        renderSection({
          variant,
          content: html`
            <div class="container">
              <h3 id="section-heading-${variant}">Sezione ${variant}</h3>
              <p>Questa sezione usa la variante <code>${variant}</code></p>
            </div>
          `,
        }),
      )}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
Sono disponibili le varianti colore di sfondo per le sezioni, corrispondenti alle classi di Bootstrap italia:

- \`muted\`
- \`emphasis\` - applica automaticamente il testo bianco
- \`primary\` - applica automaticamente il testo bianco

Il componente Section ha, per default, uno sfondo trasparente.
        `,
      },
    },
  },
};

export const VarianteConImmagine: Story = {
  name: 'Sezione con immagine decorativa',
  args: {
    image: 'https://picsum.photos/1280/720?image=81',
    inverse: true,
  },
  render: (params) =>
    renderSection({
      ...params,
    }),
  parameters: {
    docs: {
      description: {
        story: `
Inserisci la URL di un'immagine nell'attributo \`image\` per aggiungerla come sfondo della sezione. Le dimensioni dell'immagine si adattano automaticamente.

Se l'immagine di sfondo è scura, usa l'attributo \`inverse\` per rendere il testo bianco e mantenere una buona leggibilità.
        `,
      },
    },
  },
};

export const SectionConCard: Story = {
  name: 'Sezione con card',
  args: {
    variant: 'muted',
  },
  render: (params) =>
    renderSection({
      ...params,
      content: html`
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 id="section-heading-card" class="mb-4">Morbi fermentum amet</h2>
            </div>
          </div>
          <div class="row gy-3">
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    }),
  parameters: {
    docs: {
      description: {
        story: `
Per aggiungere una serie di card all’interno di una Section si consiglia di utilizzare le griglie per garantire un corretto margine fra gli elementi .
        `,
      },
    },
  },
};
