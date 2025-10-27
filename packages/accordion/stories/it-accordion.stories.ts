import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ACCORDION_MODES, type AccordionMode, type HeadingLevels } from '../src/types.js';
import '@italia/accordion';
import '@italia/button';
import '@italia/icon';

interface AccordionProps {
  mode?: AccordionMode;
  backgroundActive?: boolean;
  backgroundHover?: boolean;
  leftIcon?: boolean;
}

interface AccordionItemProps {
  label: string;
  content: string;
  defaultOpen?: boolean;
  as?: HeadingLevels;
  backgroundActive?: boolean;
  backgroundHover?: boolean;
  leftIcon?: boolean;
}

const renderAccordionItem = (params: AccordionItemProps) => html`
  <it-accordion-item ?default-open="${params.defaultOpen}">
    <span slot="heading">${ifDefined(params.label)}</span>
    <div slot="content">${params.content}</div>
  </it-accordion-item>
`;

const renderComponent = (params: AccordionProps, items: AccordionItemProps[] = []) => html`
  <it-accordion
    mode="${params.mode}"
    ?background-active="${params.backgroundActive}"
    ?background-hover="${params.backgroundHover}"
    ?left-icon="${params.leftIcon}"
  >
    ${items.map((item) => renderAccordionItem(item))}
  </it-accordion>
`;

const defaultItems: AccordionItemProps[] = [
  {
    label: 'Accordion Item #1',
    content:
      'Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.',
    defaultOpen: true,
  },
  {
    label: 'Accordion Item #2',
    content:
      'Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.',
  },
  {
    label: 'Accordion Item #3',
    content:
      'Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.',
  },
];

const meta: Meta<AccordionProps> = {
  title: 'Componenti/Accordion',
  tags: ['autodocs'],
  component: 'it-accordion',
  args: {
    mode: 'multiple',
    backgroundActive: false,
    backgroundHover: false,
    leftIcon: false,
  },
  decorators: [
    (Story, context) =>
      context?.parameters?.useMetaDecorator === false
        ? Story()
        : html`<div style="min-height:350px;display:flex;align-items:center">${Story()}</div>`,
  ],
  argTypes: {
    mode: {
      control: 'select',
      description:
        "Se impostato a single, solo un elemento dell'accordion può essere aperto contemporaneamente. Il default è multiple.",
      options: ACCORDION_MODES,
    },
    backgroundActive: {
      control: 'boolean',
      description: 'Applica sfondo primario agli header attivi (quando il contenuto è visibile)',
      table: { defaultValue: { summary: 'false' } },
      name: 'background-active',
    },
    backgroundHover: {
      control: 'boolean',
      description: 'Applica sfondo primario agli header al passaggio del mouse',
      table: { defaultValue: { summary: 'false' } },
      name: 'background-hover',
    },
    leftIcon: {
      control: 'boolean',
      description: 'Mostra icone plus/minus a sinistra invece della freccia a destra (Bootstrap Italia)',
      table: { defaultValue: { summary: 'false' } },
      name: 'left-icon',
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      source: { excludeDecorators: true },
      description: {
        component: `
<Description>Costruisci accordion collassabili verticalmente.</Description>
Per ottimizzare l'ingombro dei contenuti di una pagina a volte è necessario usare degli elementi richiudibili (in gergo definiti collassabili o collapse), che possono essere attivati indipendentemente l'uno dall'altro oppure in modo esclusivo con l'attivazione di solo un blocco alla volta (in gergo definiti fisarmoniche o accordion).

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
L'accordion implementa le specifiche ARIA [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) per garantire piena accessibilità:\n
• Navigazione da tastiera con tasti freccia per spostarsi tra gli elementi\n
• Supporto per <code>Space</code> ed <code>Enter</code> per attivare/disattivare elementi\n
• Attributi ARIA appropriati per comunicare lo stato agli screen reader\n
• Heading semantici configurabili per una corretta struttura del documento\n
• Rispetto delle preferenze di riduzione del movimento definite dall'utente per le animazioni di apertura/chiusura
</p></div></div>
### Gruppi di elementi richiudibili
Gli elementi richiudibili sono molto spesso mostrati in gruppo, tipicamente usati per approfondire voci o argomenti mostrati nelle singole barre cliccabili.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<AccordionProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: (args) => renderComponent(args, defaultItems),
};

export const AccordionItem = {
  argTypes: {
    label: {
      control: 'text',
      description: "Testo dell'header dell'elemento accordion",
      table: { defaultValue: { summary: 'Accordion Item' } },
      name: 'Intestazione',
    },
    as: {
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      description: "Livello di heading per l'header (h2-h6)",
      table: { defaultValue: { summary: 'h2' } },
    },
    defaultOpen: {
      control: 'boolean',
      description: "Se true, l'elemento è aperto di default (stato iniziale)",
      table: { defaultValue: { summary: 'false' } },
      name: 'default-open',
    },
    backgroundActive: {
      control: 'boolean',
      description: "Se true, applica uno sfondo primario all'header quando l'elemento è aperto",
      table: { defaultValue: { summary: 'false' } },
      name: 'background-active',
    },
    backgroundHover: {
      control: 'boolean',
      description: "Se true, applica uno sfondo primario all'header al passaggio del mouse",
      table: { defaultValue: { summary: 'false' } },
      name: 'background-hover',
    },
    leftIcon: {
      control: 'boolean',
      description: 'Se true, mostra le icone +/- a sinistra invece della freccia a destra',
      table: { defaultValue: { summary: 'false' } },
      name: 'left-icon',
    },
  },
  decorators: [
    (Story) => html`
      <div style="min-height:150px;display:flex;align-items:center">
        <it-accordion>${Story()}</it-accordion>
      </div>
    `,
  ],
  parameters: {
    useMetaDecorator: false,
    docs: {
      source: { excludeDecorators: true },
      description: {
        story: `
Il componente \`it-accordion-item\` rappresenta un singolo elemento accordion che deve essere utilizzato all'interno di un contenitore \`it-accordion\`.

#### Proprietà

- **\`as\`**: Il livello di heading (h2-h6) da utilizzare per l'header (opzionale, default: \`h2\`)
- **\`default-open\`**: Se true, l'elemento viene mostrato espanso (opzionale, default: \`false\`)

#### Contenuto

L'intestazione dell'accordion item va inserita nello slot heading (intestazione dell'elemento).

Il contenuto dell'accordion item va inserito nello slot content (contenuto dell'elemento).
        `,
      },
    },
  },
  render: (args: any) => html`
    <it-accordion-item
      ?default-open="${args.defaultOpen || false}"
      ?background-active="${args.backgroundActive || false}"
      ?background-hover="${args.backgroundHover || false}"
      ?left-icon="${args.leftIcon || false}"
    >
      <span slot="heading">${args.label || 'Accordion Item'}</span>
      <div slot="content">
        Contenuto dell'accordion item. Questo testo è all'interno dello slot "content". Qui puoi inserire qualsiasi
        contenuto HTML: paragrafi, liste, immagini, ecc.
      </div>
    </it-accordion-item>
  `,
  args: {
    label: 'Accordion Item',
    as: 'h2',
    defaultOpen: false,
    backgroundActive: false,
    backgroundHover: false,
    leftIcon: false,
  },
} satisfies Meta<AccordionItemProps>;

export const Single: Story = {
  name: 'Modalità esclusiva',
  args: {
    mode: 'single',
  },
  argTypes: {
    mode: {
      table: { disable: true },
    },
  },
  parameters: {
    docs: {
      description: {
        story: `
In modalità single, può essere aperto un solo elemento alla volta. Aprendo un elemento tutti gli altri si chiudono automaticamente.
`,
      },
    },
  },
  render: (args) => renderComponent(args, defaultItems),
};

export const AccordionAnnidati: Story = {
  name: 'Accordion annidati',
  decorators: [(Story) => html`<div style="min-height:575px;display:flex;align-items:center">${Story()}</div>`],
  parameters: {
    useMetaDecorator: false,
    docs: {
      description: {
        story: `
Più gruppi di accordion possono essere annidati.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità e accordion annidati</span></div>
<p>
Utilizzare questo approccio solo quando strettamente necessario: dal punto di vista dell'accessibilità non si tratta di una soluzione ottimale.
</p></div></div>
        `,
      },
    },
  },
  render: () =>
    html` <it-accordion>
      <it-accordion-item default-open>
        <span slot="heading">Elemento Accordion #1</span>
        <div slot="content">
          <!-- Accordion annidato -->
          <it-accordion>
            <it-accordion-item as="h3" default-open>
              <span slot="heading">Elemento Accordion annidato #1</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento Accordion annidato #2</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento Accordion annidato #3</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
          </it-accordion>
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>`,
};

export const HeaderAttivi: Story = {
  name: 'Stato attivo',
  argTypes: {
    backgroundActive: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
Aggiungere la proprietà <code>background-active</code> a <code>it-accordion</code> per ottenere header con sfondo di colore primario quando questi sono attivi e il contenuto relativo è visibile.
`,
      },
    },
  },
  render: () => html`
    <it-accordion background-active>
      <it-accordion-item default-open>
        <span slot="heading">Elemento Accordion #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  `,
};

export const HoverDegliHeader: Story = {
  name: 'Stato hover',
  argTypes: {
    backgroundHover: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
Aggiungere la proprietà <code>background-hover</code> a <code>it-accordion</code> per ottenere header con sfondo di colore primario all'hover.
`,
      },
    },
  },
  render: () => html`
    <it-accordion background-hover>
      <it-accordion-item default-open>
        <span slot="heading">Elemento Accordion #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  `,
};

export const IconaASinistra: Story = {
  name: 'Icona a sinistra',
  args: {
    leftIcon: true,
  },
  argTypes: {
    leftIcon: {
      table: { disable: true },
    },
    backgroundActive: {
      table: { disable: true },
    },
  },
  parameters: {
    docs: {
      description: {
        story: `
Quando l'attributo \`left-icon\` è abilitato, si ottiene una variante in cui l’icona chevron che indica lo stato di apertura è sostituita da segni meno/più allineati a sinistra del titolo dell’header.
`,
      },
    },
  },
  render: (args) => renderComponent(args, defaultItems),
};

// export const CollapseMultipleTriggers: Story = {
//   name: 'Collapse multipli trigger',
//   parameters: {
//     docs: {
//       description: {
//         story: `
// Tre esempi di \`it-collapse\` con tipi diversi di trigger:

// - **it-button**
// - **button** nativo
// - **a[role="button"]** link attivabile come pulsante

// Ciascuno gestisce animazione, aria-expanded e preferenze per reduced-motion.
//         `,
//       },
//     },
//   },
//   render: () => html`
//     <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px;">
//       <it-collapse>
//         <it-button slot="trigger">Trigger con it-button</it-button>
//         <div slot="content" style="padding: 16px; border: 1px solid blue; margin-top: 1rem;">
//           <p>Contenuto del collapse con it-button come trigger.</p>
//         </div>
//       </it-collapse>

//       <it-collapse>
//         <button slot="trigger">Trigger con button nativo</button>
//         <div slot="content" style="padding: 16px; border: 1px solid blue; margin-top: 1rem;">
//           <p>Contenuto del collapse con button nativo come trigger.</p>
//         </div>
//       </it-collapse>

//       <it-collapse>
//         <a slot="trigger" role="button" href="#href">Trigger con a[role="button"]</a>
//         <div slot="content" style="padding: 16px; border: 1px solid blue; margin-top: 1rem;">
//           <p>Contenuto del collapse con a[role="button"] come trigger.</p>
//         </div>
//       </it-collapse>
//     </div>
//   `,
// };
