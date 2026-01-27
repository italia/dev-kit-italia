import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ACCORDION_MODES, type AccordionMode, type HeadingLevels } from '../src/types.js';

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
    label: 'Elemento richiudibile #1',
    content:
      'Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.',
    defaultOpen: true,
  },
  {
    label: 'Elemento richiudibile #2',
    content:
      'Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.',
  },
  {
    label: 'Elemento richiudibile #3',
    content:
      'Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.',
  },
];

const meta: Meta<AccordionProps> = {
  title: 'Componenti/Accordion',
  tags: ['a11y-ok', 'web-component'],
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
        : html`<div style="min-height:350px;display:flex;align-items:center">
            <div style="flex-grow:1">${Story()}</div>
          </div>`,
  ],
  argTypes: {
    mode: {
      control: 'select',
      description:
        "Se impostato a `single`, solo un elemento dell'accordion può essere aperto contemporaneamente. Il default è `multiple`.",
      table: { defaultValue: { summary: 'multiple' } },
      options: ACCORDION_MODES,
    },
    backgroundActive: {
      control: 'boolean',
      description: 'Applica sfondo primario agli elementi attivi (quando il contenuto è visibile)',
      table: { defaultValue: { summary: 'false' } },
      name: 'background-active',
    },
    backgroundHover: {
      control: 'boolean',
      description: 'Applica sfondo primario agli elementi al passaggio del mouse',
      table: { defaultValue: { summary: 'false' } },
      name: 'background-hover',
    },
    leftIcon: {
      control: 'boolean',
      description: 'Mostra icone plus/minus a sinistra invece della freccia a destra',
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
<Description>Costruisci accordion richiudibili verticalmente.</Description>
Per ottimizzare l'ingombro dei contenuti di una pagina a volte è necessario usare degli elementi richiudibili (in gergo definiti richiudibili o collapse), che possono essere attivati indipendentemente l'uno dall'altro oppure in modo esclusivo con l'attivazione di solo un blocco alla volta (in gergo definiti fisarmoniche o accordion).

Il componente Accordion è basato su [Collapse](?path=/docs/componenti-collapse--documentazione).

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
L'accordion implementa le specifiche ARIA [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) per garantire piena accessibilità:\n
• Navigazione da tastiera con tasti freccia per spostarsi tra gli elementi\n
• Supporto per <code>Space</code> ed <code>Enter</code> per attivare/disattivare elementi\n
• Attributi ARIA appropriati per comunicare lo stato agli screen reader\n
• Heading semantici configurabili per una corretta struttura del documento\n
• Rispetto delle preferenze di riduzione del movimento definite dall'utente per le animazioni di apertura/chiusura
</p></div></div>

### Differenza tra Collapse, Accordion e Tabs

I componenti Accordion, Tabs e Collapse funzionano tutti nascondendo sezioni di contenuto che l’utente può scegliere di visualizzare. Evitare di usare questi componenti l’uno all’interno dell’altro.

Se decidi di usare uno di questi componenti, considera quanto segue:

- L’utente ha bisogno di visualizzare più di una sezione alla volta? L’accordion può mostrare più sezioni contemporaneamente, a differenza dei tabs.

- L’utente deve passare rapidamente tra le sezioni? I tabs permettono di cambiare contenuto senza spostare le altre sezioni nella pagina, a differenza dell’accordion.

- Ci sono molte sezioni di contenuto? L’accordion può contenere più sezioni perché sono disposte verticalmente, mentre i tabs sono disposti orizzontalmente.

- Ci sono solo uno o due contenuti brevi e meno importanti? Il componente Collapse è più adatto perché visivamente più piccolo e meno prominente rispetto a un accordion o ai tabs.

<br/>

| Componente | Contenuti multipli | Visibilità | Esclusività | Uso tipico | Esempi |
|----------|--------------------|-------------|--------------|-------------|---------|
| **Collapse** | No | Singolo contenuto mostrato o nascosto | N/A | Mostrare o nascondere dettagli secondari | “Mostra dettagli”, “Visualizza termini” |
| **Accordion** | Sì | Più sezioni espandibili | Solo una aperta alla volta *(consigliato)* | Raggruppare contenuti correlati in blocchi espandibili | FAQ, elenchi informativi |
| **Tabs** | Sì | Una sezione visibile alla volta | Sempre esclusiva | Organizzare viste equivalenti o alternative | Schede di impostazioni, pannelli di dati |


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
        sourceState: 'hidden',
      },
    },
  },
  render: (args) => renderComponent(args, defaultItems),
};

export const AccordionItem = {
  name: 'Informazioni generali',
  argTypes: {
    mode: { table: { disable: true } },
    backgroundActive: { table: { disable: true } },
    backgroundHover: { table: { disable: true } },
    leftIcon: { table: { disable: true } },
    // Accordion item controls
    label: {
      control: 'text',
      description:
        "Testo dell'header dell'Elemento richiudibile per l'esempio interattivo, inserito nello `slot heading`",
      table: { defaultValue: { summary: 'Elemento richiudibile' } },
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
  },
  decorators: [
    (Story: any) => html`
      <div style="min-height:150px;display:flex;align-items:center">
        <div style="flex-grow:1">
          <it-accordion>${Story()}</it-accordion>
        </div>
      </div>
    `,
  ],
  parameters: {
    useMetaDecorator: false,
    docs: {
      source: { excludeDecorators: true },
    },
  },
  render: (args: any) => html`
    <it-accordion-item as="${args.as || 'h2'}" ?default-open="${args.defaultOpen || false}">
      <span slot="heading">${args.label || 'Elemento richiudibile'}</span>
      <div slot="content">
        Contenuto dell'elemento richiudibile. Questo testo è all'interno dello slot "content". Qui puoi inserire
        qualsiasi contenuto HTML: paragrafi, liste, immagini, ecc.
      </div>
    </it-accordion-item>
  `,
  args: {
    label: 'Elemento richiudibile',
    as: 'h2',
    defaultOpen: false,
  },
};

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
  decorators: [
    (Story) =>
      html`<div style="min-height:575px;display:flex;align-items:center">
        <div style="flex-grow:1">${Story()}</div>
      </div>`,
  ],
  parameters: {
    useMetaDecorator: false,
  },
  render: () =>
    html` <it-accordion>
      <it-accordion-item default-open>
        <span slot="heading">Elemento richiudibile #1</span>
        <div slot="content">
          <!-- Accordion annidato -->
          <it-accordion>
            <it-accordion-item as="h3" default-open>
              <span slot="heading">Elemento richiudibile annidato #1</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento richiudibile annidato #2</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento richiudibile annidato #3</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
          </it-accordion>
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>`,
};

export const HeaderAttivi: Story = {
  name: 'Sfondo degli elementi attivi',
  argTypes: {
    backgroundActive: { table: { disable: true } },
  },
  parameters: {},
  render: () => html`
    <it-accordion background-active>
      <it-accordion-item default-open>
        <span slot="heading">Elemento richiudibile #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  `,
};

export const HoverDegliHeader: Story = {
  name: "Sfondo all'hover degli elementi",
  argTypes: {
    backgroundHover: { table: { disable: true } },
  },
  parameters: {},
  render: () => html`
    <it-accordion background-hover>
      <it-accordion-item default-open>
        <span slot="heading">Elemento richiudibile #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #3</span>
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
  parameters: {},
  render: (args) => renderComponent(args, defaultItems),
};
