import type { Meta, StoryObj } from '@storybook/web-components';
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
}

const renderAccordionItem = (params: AccordionItemProps) => html`
  <it-accordion-item label="${params.label}" as="${ifDefined(params.as)}" ?default-open="${params.defaultOpen}">
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

export const AccordionItem = {
  argTypes: {
    label: {
      control: 'text',
      description: "Testo dell'header dell'accordion item",
      table: { defaultValue: { summary: 'Accordion Item' } },
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: "Livello di heading per l'header",
      table: { defaultValue: { summary: 'h2' } },
    },
    'default-open': {
      control: 'boolean',
      description: "Se true, l'item è aperto di default",
      table: { defaultValue: { summary: 'false' } },
    },
    'background-active': {
      control: 'boolean',
      description: "Se true, applica sfondo primario all'header quando attivo",
      table: { defaultValue: { summary: 'false' } },
    },
    'background-hover': {
      control: 'boolean',
      description: "Se true, applica sfondo primario all'header al passaggio del mouse",
      table: { defaultValue: { summary: 'false' } },
    },
    'left-icon': {
      control: 'boolean',
      description: 'Se true, mostra icone plus/minus a sinistra invece della freccia a destra',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        story: `
Il componente \`it-accordion-item\` rappresenta un singolo elemento accordion che può essere utilizzato individualmente o all'interno di un contenitore \`it-accordion\`.

#### Proprietà

- **\`label\`**: Il testo dell'header dell'accordion item
- **\`as\`**: Il livello di heading (h1-h6) da utilizzare per l'header
- **\`default-open\`**: Se true, l'elemento si apre automaticamente

#### Contenuto

Il contenuto dell'accordion item va inserito come slot default (contenuto diretto dell'elemento).
        `,
      },
    },
  },
  render: (args: any) => html`
    <it-accordion-item
      label="${args.label || 'Accordion Item'}"
      as="${args.as || 'h2'}"
      ?default-open="${args['default-open'] || false}"
      ?background-active="${args['background-active'] || false}"
      ?background-hover="${args['background-hover'] || false}"
      ?left-icon="${args['left-icon'] || false}"
    >
      <div slot="content">
        Contenuto dell'accordion item. Questo testo è all'interno dello slot "content". Qui puoi inserire qualsiasi
        contenuto HTML: paragrafi, liste, immagini, ecc.
      </div>
    </it-accordion-item>
  `,
  args: {
    label: 'Accordion Item',
    as: 'h2',
    'default-open': false,
    'background-active': false,
    'background-hover': false,
    'left-icon': false,
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

export const IconaASinistra: Story = {
  name: 'Icona a sinistra',
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


Combinato con \`background-active\`, le icone diventano bianche quando l'elemento è attivo per mantenere il giusto contrasto.
`,
      },
    },
  },
  render: (args) => renderComponent(args, defaultItems),
};

export const HeaderAttivi: Story = {
  name: 'Header attivi',
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
      <it-accordion-item label="Elemento Accordion #1" default-open>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item label="Elemento Accordion #2">
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item label="Elemento Accordion #3">
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  `,
};

export const HoverDegliHeader: Story = {
  name: 'Hover degli Header',
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
      <it-accordion-item label="Elemento Accordion #1" default-open>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item label="Elemento Accordion #2">
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item label="Elemento Accordion #3">
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
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
        <a slot="trigger" role="button" href="#href">Trigger con a[role="button"]</a>
        <div slot="content" style="padding: 16px; border: 1px solid blue; margin-top: 1rem;">
          <p>Contenuto del collapse con a[role="button"] come trigger.</p>
        </div>
      </it-collapse>
    </div>
  `,
};
