import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@italia/breadcrumbs';
import '@italia/icon';

interface BreadcrumbProps {
  label?: string;
  dark?: boolean;
}

const meta = {
  title: 'Componenti/Breadcrumbs',
  component: 'it-breadcrumb',
  tags: ['autodocs'],
  args: {
    label: 'Percorso di navigazione',
    dark: false,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Testo usato come `aria-label` sul contenitore di navigazione (es. "Percorso di navigazione").',
    },
    dark: {
      control: 'boolean',
      description: 'Imposta la variante a tema scuro.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Componente di navigazione che rappresenta il percorso gerarchico dell'utente all'interno del sito. Utilizzare breadcrumb per fornire contesto e facilitare la navigazione verso livelli superiori.</Description>

Struttura raccomandata (semantica): un elemento di navigazione con
un contenitore per gli elementi breadcrumb; ogni voce può essere un link oppure l'elemento corrente (stato attivo).
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Assicurati di fornire un label descrittivo (es. "Percorso di navigazione").
</p>
<p>Il componente gestisce automaticamente l'attributo \`aria-current="page"\` sull'elemento che rappresenta la pagina corrente, ossia l'ultimo elemento.</p>
<p>Il componente rende il separatore nascosto agli screen reader, settando automaticamente aria-hidden a true.</p>
<p>
Nota: Axe e altri strumenti di analisi statica possono segnalare errori quando analizzano il componente it-breadcrumb.
</p>
<p>
Questi sono falsi positivi dovuti allo scarso supporto di questi sistemi per la tecnologia Web Components: la struttura accessibile effettiva è corretta, come l'annuncio, e questo è confermato sia dall'Accessibility Tree generato che dai test manuali eseguiti.
</p>
</div></div>

`,
      },
    },
  },
} satisfies Meta<BreadcrumbProps>;

export default meta;
type Story = StoryObj<BreadcrumbProps>;

const trail = (items: Array<{ label: string; href?: string; current?: boolean; dark?: boolean }>) => html`
  <it-breadcrumb>
    ${items.map(
      (it) =>
        html` <it-breadcrumb-item
          href="${it.href ?? '#'}"
          ?current="${ifDefined(it.current)}"
          ?dark="${ifDefined(it.dark)}"
          >${it.label}</it-breadcrumb-item
        >`,
    )}
  </it-breadcrumb>
`;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: { docs: { canvas: { sourceState: 'shown' } } },
  render: () => html`
    ${trail([
      { label: 'Home', href: '#' },
      { label: 'Sezione', href: '#' },
      { label: 'Voce corrente', href: '#' },
    ])}
  `,
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
Per la personalizzazione degli stili si può usare il selettore \`::part\` passando i valori:
- \`breadcrumbs-container\`: sul contenitore nav
- \`breadcrumbs\`: sull'elemento ol che contiene le voci breadcrumb
- \`breadcrumb-item\`: su ogni singola voce breadcrumb

[Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const ConLink: Story = {
  name: 'Breadcrumb con link',
  render: () => html`
    ${trail([
      { label: 'Home', href: '#' },
      { label: 'Sezione', href: '#' },
      { label: 'Voce corrente', href: '#' },
    ])}
  `,
  parameters: {
    docs: {
      description: {
        story: `Mostra l'uso tipico: tutte le voci intermedie sono link verso i livelli superiori; l'ultima voce rappresenta la pagina corrente e non dovrebbe essere linkata.`,
      },
    },
  },
};

export const ConIcona: Story = {
  name: 'Con icona',
  render: () => html`
    <it-breadcrumb label="Percorso di navigazione">
      <it-breadcrumb-item href="#">
        <it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>
        Home
      </it-breadcrumb-item>
      <it-breadcrumb-item href="#">
        <it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>
        Sezione
      </it-breadcrumb-item>
      <it-breadcrumb-item href="#">
        <it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>
        Voce corrente
      </it-breadcrumb-item>
    </it-breadcrumb>
  `,
  parameters: {
    docs: {
      description: {
        story: `Per aggiungere un icona all’elemento breadcrumb è sufficiente inserire l'it-icon corrispondente nello slot dell'elementi it-breadcrumb-item.`,
      },
    },
  },
};
export const SeparatorePersonalizzato: Story = {
  name: 'Separatore personalizzato',
  render: () => html`
    <it-breadcrumb label="Percorso di navigazione" separator="&gt;">
      <it-breadcrumb-item href="#">Home</it-breadcrumb-item>
      <it-breadcrumb-item href="#">Sezione</it-breadcrumb-item>
      <it-breadcrumb-item href="#">Voce corrente</it-breadcrumb-item>
    </it-breadcrumb>
    <it-breadcrumb label="Percorso di navigazione 2">
      <it-breadcrumb-item href="#">
        Home
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item href="#">
        Sezione
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item href="#">Voce corrente</it-breadcrumb-item>
    </it-breadcrumb>
    <style>
      .my-separator {
        padding: 0 4px;
      }
    </style>
  `,
  parameters: {
    docs: {
      description: {
        story: `È possibile personalizzare il separatore inserendo un elemento nello slot 'separator' all'interno di ciascun item. Questo permette di usare simboli diversi o icone.`,
      },
    },
  },
};

export const Sfondo: Story = {
  name: 'Sfondo scuro',
  render: () => html`
    <it-breadcrumb label="Percorso di navigazione" dark>
      <it-breadcrumb-item href="#">Home</it-breadcrumb-item>
      <it-breadcrumb-item href="#">Sezione</it-breadcrumb-item>
      <it-breadcrumb-item href="#">Voce corrente</it-breadcrumb-item>
    </it-breadcrumb>
    <it-breadcrumb label="Percorso di navigazione2" dark>
      <it-breadcrumb-item href="#">
        Home
        <it-icon name="it-chevron-right" color="white" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item href="#">
        Sezione
        <it-icon name="it-chevron-right" color="white" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item href="#">Voce corrente</it-breadcrumb-item>
    </it-breadcrumb>
    <it-breadcrumb label="Percorso di navigazione3" dark>
      <it-breadcrumb-item href="#">
        <it-icon name="it-link" color="white" size="sm" class="me-1"></it-icon>
        Home
      </it-breadcrumb-item>
      <it-breadcrumb-item href="#">
        <it-icon name="it-link" color="white" size="sm" class="me-1"></it-icon>
        Sezione
      </it-breadcrumb-item>
      <it-breadcrumb-item href="#">
        <it-icon name="it-link" color="white" size="sm" class="me-1"></it-icon>
        Voce corrente
      </it-breadcrumb-item>
    </it-breadcrumb>
    <style>
      .my-separator {
        padding: 0 4px;
      }
    </style>
  `,
  parameters: {
    docs: {
      description: {
        story: `Per la versione su sfondo scuro delle breadcrumbs è sufficiente aggiungere l'attributo dark. Il colore del testo e del separatore cambieranno automaticamente in base al tema scuro, mentre il colore delle icone e/o contenuti inseriti negli slot separator dovrà essere impostato manualmente`,
      },
    },
  },
};
