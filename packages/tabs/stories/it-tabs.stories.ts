import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { LitElement, html } from 'lit';
import { TAB_PLACEMENTS, type TabPlacement } from '../src/types.js';

// ─── Demo element per la story "Tab card con pulsanti" ──────────────────────
// Piccolo LitElement con light DOM per ereditare gli stili BSI globali.
// Registrato una sola volta (guard HMR).
class ItTabsEditableDemo extends LitElement {
  static properties = { _tabs: { state: true } };

  declare _tabs: Array<{ label: string; panel: string; disabled: boolean }>;
  declare _counter: number;

  constructor() {
    super();
    this._tabs = [
      { label: 'Tab 1', panel: 'et1', disabled: false },
      { label: 'Tab 2', panel: 'et2', disabled: false },
      { label: 'Tab 3', panel: 'et3', disabled: false },
      { label: 'Tab 4 Disabilitato', panel: 'et4', disabled: true },
    ];
    this._counter = 5;
  }

  // Light DOM: gli stili BSI globali si propagano dentro questo elemento
  override createRenderRoot() {
    return this;
  }

  private _addTab() {
    const n = this._counter++;
    this._tabs = [...this._tabs, { label: `Tab ${n}`, panel: `et${n}`, disabled: false }];
  }

  // Ascolta l'evento it-tab-close emesso automaticamente dal bottone × iniettato
  // da it-tabs in modalità cards. Non servono più bottoni manuali nei template.
  private _onTabClose(e: CustomEvent<{ panel: string }>) {
    this._tabs = this._tabs.filter((t) => t.panel !== e.detail.panel);
  }

  override render() {
    return html`
      <it-tabs cards label="Tab card con pulsanti" @it-tab-close=${this._onTabClose}>
        ${this._tabs.map(
          (t) => html`
            <it-tab slot="tab" panel=${t.panel} ?disabled=${t.disabled}>${t.label}</it-tab>
            <it-tab-panel name=${t.panel}>Contenuto del pannello <strong>${t.label}</strong></it-tab-panel>
          `,
        )}
        <it-button
          slot="after-tablist"
          variant="primary"
          outline
          icon
          size="sm"
          it-aria-label="Aggiungi tab"
          @click=${() => this._addTab()}
        >
          <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
        </it-button>
      </it-tabs>
    `;
  }
}

if (!customElements.get('it-tabs-editable-demo')) {
  customElements.define('it-tabs-editable-demo', ItTabsEditableDemo);
}

// Props
interface TabsProps {
  label?: string;
  auto?: boolean;
  vertical?: boolean;
  verticalBackground?: boolean;
  dark?: boolean;
  cards?: boolean;
  iconText?: boolean;
  placement?: TabPlacement;
}

// Helper render
const panelContent = (n: number) =>
  `Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis.
   Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis. (Pannello ${n})`;

const renderTabs = (props: TabsProps, tabs: { label: string; panel: string; disabled?: boolean }[]) => html`
  <it-tabs
    label=${props.label ?? 'Navigazione principale'}
    ?auto=${props.auto}
    ?vertical=${props.vertical}
    ?vertical-background=${props.verticalBackground}
    ?dark=${props.dark}
    ?cards=${props.cards}
    ?icon-text=${props.iconText}
    placement=${props.placement ?? 'top'}
  >
    ${tabs.map(
      (t, i) => html`
        <it-tab slot="tab" panel=${t.panel} ?disabled=${t.disabled ?? false}>${t.label}</it-tab>
        <it-tab-panel name=${t.panel}>${panelContent(i + 1)}</it-tab-panel>
      `,
    )}
  </it-tabs>
`;

const defaultTabs = [
  { label: 'Tab 1 Attivo', panel: 'tab1' },
  { label: 'Tab 2', panel: 'tab2' },
  { label: 'Tab 3', panel: 'tab3' },
  { label: 'Tab 4 Disabilitato', panel: 'tab4', disabled: true },
];

// Meta
const meta: Meta<TabsProps> = {
  title: 'Componenti/Tabs',
  tags: ['a11y-ok', 'web-component'],
  component: 'it-tabs',
  args: {
    label: 'Navigazione principale',
    auto: false,
    vertical: false,
    verticalBackground: false,
    dark: false,
    cards: false,
    iconText: false,
    placement: 'top',
  },
  argTypes: {
    label: {
      control: 'text',
      description:
        "Testo dell'`aria-label` per la tablist. Obbligatorio quando non è presente un'intestazione visiva adiacente al componente.",
      name: 'label',
      table: { defaultValue: { summary: '' } },
    },
    auto: {
      control: 'boolean',
      description:
        "Se `true`, i tab si espandono per occupare l'intera larghezza disponibile (classe `.auto` su `.nav-tabs`).",
      name: 'auto',
      table: { defaultValue: { summary: 'false' } },
    },
    vertical: {
      control: 'boolean',
      description: 'Se `true`, la tablist è orientata verticalmente.',
      name: 'vertical',
      table: { defaultValue: { summary: 'false' } },
    },
    verticalBackground: {
      control: 'boolean',
      description:
        'Sfondo primario chiaro sul tab selezionato (solo con `vertical`). Corrisponde a `.nav-tabs-vertical-background`.',
      name: 'vertical-background',
      table: { defaultValue: { summary: 'false' } },
    },
    dark: {
      control: 'boolean',
      description: 'Variante con sfondo scuro per la tablist. Corrisponde alla classe `.nav-dark`.',
      name: 'dark',
      table: { defaultValue: { summary: 'false' } },
    },
    cards: {
      control: 'boolean',
      description: 'Stile "card" per i tab. Corrisponde a `.nav-tabs-cards`.',
      name: 'cards',
      table: { defaultValue: { summary: 'false' } },
    },
    iconText: {
      control: 'boolean',
      description: 'Ottimizza i margini per la combinazione icona + testo. Corrisponde a `.nav-tabs-icon-text`.',
      name: 'icon-text',
      table: { defaultValue: { summary: 'false' } },
    },
    placement: {
      control: 'select',
      options: TAB_PLACEMENTS,
      description:
        'Posizione della tablist rispetto ai pannelli. `start`/`end` attivano automaticamente il layout verticale.',
      name: 'placement',
      table: { defaultValue: { summary: 'top' } },
    },
  },
  parameters: {
    layout: 'padded',
    pageLayout: 'w-100',
  },
  decorators: [(Story) => html` <div style="min-height:250px; margin: auto;">${Story()}</div> `],
};

export default meta;
type Story = StoryObj<TabsProps>;

// Storia interattiva
export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: { canvas: { sourceState: 'hidden' } },
  },
  render: (args) => renderTabs(args, defaultTabs),
};

// Tab orizzontali
export const TabOrizzontale: Story = {
  name: 'Tab orizzontali',
  parameters: {
    docs: {
      description: {
        story: 'I tab sono dimensionati in base al contenuto. Variante di default senza attributi aggiuntivi.',
      },
    },
  },
  render: () => html`
    <it-tabs label="Navigazione principale">
      <it-tab slot="tab" panel="o1">Tab 1</it-tab>
      <it-tab slot="tab" panel="o2">Tab 2</it-tab>
      <it-tab slot="tab" panel="o3">Tab 3</it-tab>
      <it-tab slot="tab" panel="o4" disabled>Tab 4 Disabilitato</it-tab>
      <it-tab-panel name="o1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="o2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="o3">${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="o4">${panelContent(4)}</it-tab-panel>
    </it-tabs>
  `,
};

// Tab a tutta larghezza
export const TabATuttaLarghezza: Story = {
  name: 'Tab a tutta larghezza',
  parameters: {
    docs: {
      description: {
        story:
          "Con l'attributo `auto`, i tab si espandono per occupare l'intera larghezza della tablist. Su schermi piccoli è attivato lo scrolling orizzontale automatico.",
      },
    },
  },
  render: () => html`
    <it-tabs auto label="Navigazione a tutta larghezza">
      <it-tab slot="tab" panel="a1">Tab 1 Attivo</it-tab>
      <it-tab slot="tab" panel="a2">Link</it-tab>
      <it-tab slot="tab" panel="a3">Link</it-tab>
      <it-tab slot="tab" panel="a4" disabled>Disabilitato</it-tab>
      <it-tab-panel name="a1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="a2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="a3">${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="a4">${panelContent(4)}</it-tab-panel>
    </it-tabs>
  `,
};

// Tab con icona
export const TabConIcona: Story = {
  name: 'Tab con icona',
  parameters: {
    docs: {
      description: {
        story:
          'Le etichette dei tab possono contenere icone. Inserire sempre un testo con classe `.visually-hidden` per gli screen reader.',
      },
    },
  },
  render: () => html`
    <it-tabs label="Navigazione con icona">
      <it-tab slot="tab" panel="i1">
        <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
        <span class="visually-hidden">Tab titolo 1</span>
      </it-tab>
      <it-tab slot="tab" panel="i2">
        <it-icon name="it-mail" class="icon icon-sm"></it-icon>
        <span class="visually-hidden">Tab titolo 2</span>
      </it-tab>
      <it-tab slot="tab" panel="i3">
        <it-icon name="it-settings" class="icon icon-sm"></it-icon>
        <span class="visually-hidden">Tab titolo 3</span>
      </it-tab>
      <it-tab slot="tab" panel="i4" disabled>
        <it-icon name="it-close" class="icon icon-sm"></it-icon>
        <span class="visually-hidden">Tab titolo 4 (disabilitato)</span>
      </it-tab>
      <it-tab-panel name="i1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="i2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="i3">${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="i4">${panelContent(4)}</it-tab-panel>
    </it-tabs>
  `,
};

// Tab con testo e icona
export const TabConTestoEIcona: Story = {
  name: 'Tab con testo e icona',
  parameters: {
    docs: {
      description: {
        story:
          "Con l'attributo `icon-text` su `it-tabs` il margine tra icona e testo viene ottimizzato. L'allineamento verticale dei due elementi è automatico.",
      },
    },
  },
  render: () => html`
    <it-tabs icon-text label="Navigazione con icona e testo">
      <it-tab slot="tab" panel="it1">
        <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
        Tab 1
      </it-tab>
      <it-tab slot="tab" panel="it2">
        <it-icon name="it-mail" class="icon icon-sm"></it-icon>
        Tab 2
      </it-tab>
      <it-tab slot="tab" panel="it3">
        <it-icon name="it-settings" class="icon icon-sm"></it-icon>
        Tab 3
      </it-tab>
      <it-tab slot="tab" panel="it4" disabled>
        <it-icon name="it-close" class="icon icon-sm"></it-icon>
        Tab 4 Disabilitato
      </it-tab>
      <it-tab-panel name="it1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="it2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="it3">${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="it4">${panelContent(4)}</it-tab-panel>
    </it-tabs>
  `,
};

// Tab verticali
export const TabVerticale: Story = {
  name: 'Tab verticali',
  parameters: {
    docs: {
      description: {
        story:
          "Con l'attributo `vertical`, i tab si orientano verticalmente. La navigazione da tastiera usa le frecce Su/Giù invece di Sinistra/Destra.",
      },
    },
  },
  render: () => html`
    <it-tabs vertical label="Navigazione verticale">
      <it-tab slot="tab" panel="v1">Tab 1</it-tab>
      <it-tab slot="tab" panel="v2">Tab 2</it-tab>
      <it-tab slot="tab" panel="v3">Tab 3</it-tab>
      <it-tab-panel name="v1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="v2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="v3">${panelContent(3)}</it-tab-panel>
    </it-tabs>
  `,
};

// Tab verticali con sfondo
export const TabVerticaleConSfondo: Story = {
  name: 'Tab verticali con sfondo',
  parameters: {
    docs: {
      description: {
        story:
          "Con l'attributo `vertical-background`, il tab selezionato mostra uno sfondo primario chiaro (corrisponde a `.nav-tabs-vertical-background` di Bootstrap Italia).",
      },
    },
  },
  render: () => html`
    <it-tabs vertical vertical-background label="Navigazione verticale con sfondo">
      <it-tab slot="tab" panel="vb1">Tab 1</it-tab>
      <it-tab slot="tab" panel="vb2">Tab 2</it-tab>
      <it-tab slot="tab" panel="vb3">Tab 3</it-tab>
      <it-tab-panel name="vb1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="vb2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="vb3">${panelContent(3)}</it-tab-panel>
    </it-tabs>
  `,
};

// Tab tipo card
export const TabCard: Story = {
  name: 'Tab tipo card',
  parameters: {
    docs: {
      description: {
        story:
          'Con l\'attributo `cards`, i tab assumono un design "card" con bordi su tutti e tre i lati del tab attivo e bordo grigio in basso per gli inattivi.',
      },
    },
  },
  render: () => html`
    <it-tabs cards label="Navigazione card">
      <it-tab slot="tab" panel="c1">Tab 1</it-tab>
      <it-tab slot="tab" panel="c2">Tab 2</it-tab>
      <it-tab slot="tab" panel="c3">Tab 3</it-tab>
      <it-tab slot="tab" panel="c4" disabled>Tab 4 Disabilitato</it-tab>
      <it-tab-panel name="c1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="c2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="c3">${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="c4">${panelContent(4)}</it-tab-panel>
    </it-tabs>
  `,
};

// Tab con sfondo scuro
export const TabScuro: Story = {
  name: 'Tab con sfondo scuro',
  parameters: {
    docs: {
      description: {
        story:
          "Con l'attributo `dark`, la tablist ottiene sfondo scuro e testo chiaro (corrisponde a `.nav-dark` di Bootstrap Italia).",
      },
    },
  },
  render: () => html`
    <it-tabs dark auto label="Navigazione scura">
      <it-tab slot="tab" panel="d1">Tab 1 Attivo</it-tab>
      <it-tab slot="tab" panel="d2">Tab 2</it-tab>
      <it-tab slot="tab" panel="d3">Tab 3</it-tab>
      <it-tab slot="tab" panel="d4" disabled>Tab 4 Disabilitato</it-tab>
      <it-tab-panel name="d1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="d2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="d3">${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="d4">${panelContent(4)}</it-tab-panel>
    </it-tabs>
  `,
};
export const TabScuroVerticale: Story = {
  name: 'Tab scuri verticali',
  parameters: {
    docs: {
      description: {
        story: 'Combinazione `dark` + `vertical` con icone e testo.',
      },
    },
  },
  render: () => html`
    <it-tabs dark vertical icon-text label="Navigazione scura verticale">
      <it-tab slot="tab" panel="dv1">
        <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
        Tab 1
      </it-tab>
      <it-tab slot="tab" panel="dv2">
        <it-icon name="it-mail" class="icon icon-sm"></it-icon>
        Tab 2
      </it-tab>
      <it-tab slot="tab" panel="dv3">
        <it-icon name="it-settings" class="icon icon-sm"></it-icon>
        Tab 3
      </it-tab>
      <it-tab-panel name="dv1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="dv2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="dv3">${panelContent(3)}</it-tab-panel>
    </it-tabs>
  `,
};

// Posizionamento
export const PosizionamentoBasso: Story = {
  name: 'Tab in basso',
  parameters: {
    docs: {
      description: {
        story:
          'Con `placement="bottom"`, la tablist si posiziona sotto il contenuto. Il bordo attivo si sposta dal basso verso l\'alto.',
      },
    },
  },
  render: () => html`
    <it-tabs placement="bottom" label="Navigazione in basso">
      <it-tab slot="tab" panel="b1">Tab 1</it-tab>
      <it-tab slot="tab" panel="b2">Tab 2</it-tab>
      <it-tab slot="tab" panel="b3">Tab 3</it-tab>
      <it-tab slot="tab" panel="b4" disabled>Disabilitato</it-tab>
      <it-tab-panel name="b1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="b2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="b3">${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="b4">${panelContent(4)}</it-tab-panel>
    </it-tabs>
  `,
};

export const PosizionamentoSinistra: Story = {
  name: 'Tab a sinistra',
  parameters: {
    docs: {
      description: {
        story: 'Con `placement="start"`, la tablist verticale si posiziona a sinistra del contenuto.',
      },
    },
  },
  render: () => html`
    <it-tabs placement="start" label="Navigazione a sinistra">
      <it-tab slot="tab" panel="s1">Tab 1</it-tab>
      <it-tab slot="tab" panel="s2">Tab 2</it-tab>
      <it-tab slot="tab" panel="s3">Tab 3</it-tab>
      <it-tab-panel name="s1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="s2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="s3">${panelContent(3)}</it-tab-panel>
    </it-tabs>
  `,
};

export const PosizionamentoDestra: Story = {
  name: 'Tab a destra',
  parameters: {
    docs: {
      description: {
        story:
          'Con `placement="end"`, la tablist verticale si posiziona a destra del contenuto. Il bordo attivo si sposta dal lato destro al lato sinistro.',
      },
    },
  },
  render: () => html`
    <it-tabs placement="end" label="Navigazione a destra">
      <it-tab slot="tab" panel="e1">
        <it-icon name="it-star-outline" class="icon icon-sm"></it-icon>
        Tab 1
      </it-tab>
      <it-tab slot="tab" panel="e2">
        <it-icon name="it-mail" class="icon icon-sm"></it-icon>
        Tab 2
      </it-tab>
      <it-tab slot="tab" panel="e3">
        <it-icon name="it-settings" class="icon icon-sm"></it-icon>
        Tab 3
      </it-tab>
      <it-tab-panel name="e1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="e2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="e3">${panelContent(3)}</it-tab-panel>
    </it-tabs>
  `,
};

export const LarghezzaTablistVerticale: Story = {
  name: 'Larghezza tablist verticale (--it-tabs-nav-size)',
  parameters: {
    docs: {
      description: {
        story: `La custom property CSS \`--it-tabs-nav-size\` controlla la larghezza (flex-basis) della tablist
nei layout verticali (\`vertical\`, \`placement="start"\`, \`placement="end"\`).

Accetta qualsiasi valore CSS valido per \`flex-basis\` (es. \`200px\`, \`25%\`, \`12rem\`).
Non ha effetto nei layout orizzontali.

\`\`\`css
/* width fissa */
it-tabs { --it-tabs-nav-size: 220px; }

/* proporzionale */
it-tabs { --it-tabs-nav-size: 30%; }
\`\`\``,
      },
    },
  },
  decorators: [
    (Story) => html`
      <div style="min-height: 300px; display: flex; flex-direction: column; gap: 2rem; margin: auto;">
        ${Story()}
      </div>
    `,
  ],
  render: () => html`
    <div>
      <p style="margin-bottom: 0.5rem; font-weight: 600;">
        <code>--it-tabs-nav-size: 220px</code> — larghezza fissa
      </p>
      <it-tabs vertical label="Nav size fissa" style="--it-tabs-nav-size: 220px;">
        <it-tab slot="tab" panel="ns1">Tab 1</it-tab>
        <it-tab slot="tab" panel="ns2">Tab 2</it-tab>
        <it-tab slot="tab" panel="ns3">Tab 3</it-tab>
        <it-tab-panel name="ns1">${panelContent(1)}</it-tab-panel>
        <it-tab-panel name="ns2">${panelContent(2)}</it-tab-panel>
        <it-tab-panel name="ns3">${panelContent(3)}</it-tab-panel>
      </it-tabs>
    </div>
    <div>
      <p style="margin-bottom: 0.5rem; font-weight: 600;">
        <code>--it-tabs-nav-size: 30%</code> — larghezza proporzionale (placement start)
      </p>
      <it-tabs placement="start" label="Nav size proporzionale" style="--it-tabs-nav-size: 30%;">
        <it-tab slot="tab" panel="np1">Tab 1 con etichetta lunga</it-tab>
        <it-tab slot="tab" panel="np2">Tab 2</it-tab>
        <it-tab slot="tab" panel="np3">Tab 3</it-tab>
        <it-tab-panel name="np1">${panelContent(1)}</it-tab-panel>
        <it-tab-panel name="np2">${panelContent(2)}</it-tab-panel>
        <it-tab-panel name="np3">${panelContent(3)}</it-tab-panel>
      </it-tabs>
    </div>
  `,
};

// Tab con effetto fade
export const TabFade: Story = {
  name: 'Effetto fade',
  parameters: {
    docs: {
      description: {
        story: `Aggiungendo l\'attributo \`fade\` a ogni \`it-tab-panel\`, il contenuto appare con
an\'animazione di dissolvenza al cambio tab (transizione \`opacity\` di 150 ms).

Il primo pannello è visibile di default appena il componente si inizializza.`,
      },
    },
  },
  render: () => html`
    <it-tabs label="Tab con effetto fade">
      <it-tab slot="tab" panel="f1">Tab 1</it-tab>
      <it-tab slot="tab" panel="f2">Tab 2</it-tab>
      <it-tab slot="tab" panel="f3">Tab 3</it-tab>
      <it-tab-panel fade name="f1"
        >Pannello 1 — contenuto con dissolvenza in entrata.</it-tab-panel
      >
      <it-tab-panel fade name="f2"
        >Pannello 2 — contenuto con dissolvenza in entrata.</it-tab-panel
      >
      <it-tab-panel fade name="f3"
        >Pannello 3 — contenuto con dissolvenza in entrata.</it-tab-panel
      >
    </it-tabs>
  `,
};

// Tab card con pulsanti aggiungi/elimina
export const TabCardConPulsanti: Story = {
  name: 'Tab card con pulsanti aggiungi/elimina',
  parameters: {
    docs: {
      description: {
        story: `Le \`it-tabs\` in modalità \`cards\` iniettano automaticamente un pulsante ×
(\`<a class="it-tab-close" role="button">\` con \`<it-icon name="it-close">\`) in ogni \`it-tab\`.

Quando l'utente clicca il ×, \`it-tabs\` emette l'evento \`it-tab-close\` con \`detail.panel\`.
L'effettiva rimozione del tab rimane responsabilità dell'applicazione:

\`\`\`js
document.querySelector('it-tabs').addEventListener('it-tab-close', (e) => {
  document.querySelector(\`it-tab[panel="\${e.detail.panel}"]\`)?.remove();
  document.querySelector(\`it-tab-panel[name="\${e.detail.panel}"]\`)?.remove();
});
\`\`\`

Il pulsante aggiungi va in \`slot="after-tablist"\`:

\`\`\`html
<it-button slot="after-tablist" variant="primary" outline icon size="sm" it-aria-label="Aggiungi tab">
  <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
</it-button>
\`\`\``,
      },
    },
  },
  render: () => html`<it-tabs-editable-demo></it-tabs-editable-demo>`,
};
