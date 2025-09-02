import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type HeadingLevels } from '../src/types.js';
import '@italia/accordion';
import '@italia/button';
import '@italia/icon';

interface AccordionProps {
  multiple?: boolean;
  backgroundActive?: boolean;
  backgroundHover?: boolean;
  leftIcon?: boolean;
}

interface AccordionItemProps {
  label: string;
  content: string;
  defaultOpen?: boolean;
  as?: HeadingLevels;
}

const renderAccordionItem = (params: AccordionItemProps) => html`
  <it-accordion-item label="${params.label}" as="${ifDefined(params.as)}" ?default-open="${params.defaultOpen}">
    <div slot="content">${params.content}</div>
  </it-accordion-item>
`;

const renderComponent = (params: AccordionProps, items: AccordionItemProps[] = []) => html`
  <it-accordion
    ?multiple="${params.multiple}"
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
    multiple: false,
    backgroundActive: false,
    backgroundHover: false,
    leftIcon: false,
  },
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Se abilitato, più elementi accordion possono essere aperti contemporaneamente',
      table: { defaultValue: { summary: 'false' } },
    },
    backgroundActive: {
      control: 'boolean',
      description: 'Applica sfondo primario agli header attivi (quando il contenuto è visibile)',
      table: { defaultValue: { summary: 'false' } },
    },
    backgroundHover: {
      control: 'boolean',
      description: 'Applica sfondo primario agli header al passaggio del mouse',
      table: { defaultValue: { summary: 'false' } },
    },
    leftIcon: {
      control: 'boolean',
      description: 'Mostra icone plus/minus a sinistra invece della freccia a destra (Bootstrap Italia)',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
<Description>Costruisci accordion collassabili verticalmente basati.</Description>
Per ottimizzare l'ingombro dei contenuti di una pagina a volte è necessario usare degli elementi richiudibili (in gergo definiti collassabili o collapse), che possono essere attivati indipendentemente l'uno dall'altro oppure in modo esclusivo con l'attivazione di solo un blocco alla volta (in gergo definiti fisarmoniche o accordion).

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
L'accordion implementa le specifiche ARIA per garantire piena accessibilità:\n
• Navigazione da tastiera con tasti freccia per spostarsi tra gli elementi\n
• Supporto per <code>Space</code> ed <code>Enter</code> per attivare/disattivare elementi\n
• Attributi ARIA appropriati per comunicare lo stato agli screen reader\n
• Heading semantici configurabili per una corretta struttura del documento\n
</p></div></div>
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

export const PersonalizzazioneDegliStili: Story = {
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
      description: {
        story: `
Per la personalizzazione degli stili si possono usare i selettori \`::part\` sui seguenti elementi:
- \`::part(accordion)\` per il contenitore principale
- \`::part(accordion-item)\` per ogni elemento accordion
- \`::part(button)\` per il pulsante di attivazione
- \`::part(accordion-content)\` per il contenuto collassabile

[Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const ComportamentoMultiplo: Story = {
  name: 'Comportamento multiplo',
  args: {
    multiple: true,
  },
  argTypes: {
    multiple: {
      table: { disable: true },
    },
  },
  parameters: {
    docs: {
      description: {
        story: `
Quando l'attributo \`multiple\` è abilitato, più elementi accordion possono essere aperti contemporaneamente. Per default (\`multiple: false\`) solo un elemento può essere aperto alla volta.
`,
      },
    },
  },
  render: (args) => renderComponent(args, defaultItems),
};

export const HeadingPersonalizzati: Story = {
  name: 'Heading personalizzati',
  argTypes: {
    multiple: {
      table: { disable: true },
    },
  },
  parameters: {
    docs: {
      description: {
        story: `
È possibile configurare il livello di heading per ogni elemento accordion utilizzando l'attributo \`as\`. Questo è importante per mantenere una corretta struttura semantica del documento.
`,
      },
    },
  },
  render: () => html`
    <it-accordion>
      <it-accordion-item label="Heading H2" as="h2"> Contenuto con heading di livello H2 </it-accordion-item>
      <it-accordion-item label="Heading H3" as="h3"> Contenuto con heading di livello H3 </it-accordion-item>
      <it-accordion-item label="Heading H4" as="h4"> Contenuto con heading di livello H4 </it-accordion-item>
    </it-accordion>
  `,
};

export const IconeASinistra: Story = {
  name: 'Icone a sinistra (Bootstrap Italia)',
  args: {
    leftIcon: true,
    backgroundActive: true,
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
Quando l'attributo \`left-icon\` è abilitato, le icone plus/minus vengono mostrate a sinistra del testo invece della freccia a destra. Questa variante è specifica per Bootstrap Italia.

L'icona cambia dinamicamente:
- ➕ **Plus** quando l'elemento è chiuso
- ➖ **Minus** quando l'elemento è aperto

Combinato con \`background-active\`, le icone diventano bianche quando l'elemento è attivo per mantenere il giusto contrasto.
`,
      },
    },
  },
  render: (args) => renderComponent(args, defaultItems),
};

export const SfondoPrimario: Story = {
  name: 'Sfondo primario',
  argTypes: {
    multiple: { table: { disable: true } },
    backgroundActive: { table: { disable: true } },
    backgroundHover: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        story: `
Applicando proprietà aggiuntive al componente \`it-accordion\` è possibile utilizzare il colore primario come sfondo degli header.
`,
      },
    },
  },
  render: () => html`
    <div class="mb-4">
      <h4>Header attivi</h4>
      <p>
        Aggiungere la proprietà <code>background-active</code> a <code>it-accordion</code> per ottenere header con
        sfondo di colore primario quando questi sono attivi e il contenuto relativo è visibile.
      </p>

      <it-accordion background-active>
        <it-accordion-item label="Elemento Accordion #1" default-open>
          <p slot="content">
            Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
            facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.</p>
          </p></it-accordion-item
        >
        <it-accordion-item label="Elemento Accordion #2">
          <p slot="content">
            Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
            facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.</p>
          </p></it-accordion-item
        >
        <it-accordion-item label="Elemento Accordion #3">
          <p slot="content">
            Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
            facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.</p>
          </p></it-accordion-item
        >
      </it-accordion>
    </div>

    <div class="mb-4">
      <h4>Hover degli Header</h4>
      <p>
        Aggiungere la proprietà <code>background-hover</code> a <code>it-accordion</code> per ottenere header con sfondo
        di colore primario all'hover.
      </p>

      <it-accordion background-hover>
        <it-accordion-item label="Elemento Accordion #1" default-open>
          <p slot="content">Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.</p>
        </it-accordion-item>
        <it-accordion-item label="Elemento Accordion #2">
          <p slot="content">Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.</p>
        </it-accordion-item>
        <it-accordion-item label="Elemento Accordion #3">
          <p slot="content">Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.</p>
        </it-accordion-item>
      </it-accordion>
    </div>
  `,
};

export const CollapseMultipleTriggers: Story = {
  name: 'Collapse multipli trigger',
  parameters: {
    docs: {
      description: {
        story: `
Tre esempi di \`it-collapse\` con tipi diversi di trigger:

- **it-button**
- **button** nativo
- **a[role="button"]** link attivabile come pulsante

Ciascuno gestisce animazione, aria-expanded e preferenze per reduced-motion.
        `,
      },
    },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px;">
      <it-collapse>
        <it-button slot="trigger">Trigger con it-button</it-button>
        <div slot="content" style="padding: 16px; border: 1px solid blue; margin-top: 1rem;">
          <p>Contenuto del collapse con it-button come trigger.</p>
        </div>
      </it-collapse>

      <it-collapse>
        <button slot="trigger">Trigger con button nativo</button>
        <div slot="content" style="padding: 16px; border: 1px solid blue; margin-top: 1rem;">
          <p>Contenuto del collapse con button nativo come trigger.</p>
        </div>
      </it-collapse>

      <it-collapse>
        <a slot="trigger" role="button" href="#">Trigger con a[role="button"]</a>
        <div slot="content" style="padding: 16px; border: 1px solid blue; margin-top: 1rem;">
          <p>Contenuto del collapse con a[role="button"] come trigger.</p>
        </div>
      </it-collapse>
    </div>
  `,
};
