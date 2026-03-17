/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { TAB_PLACEMENTS, type TabPlacement, type ItTabCloseEventDetail } from '../src/types.js';
import type { ItTabs } from '../src/it-tabs.js';
import type { ItTab } from '../src/it-tab.js';
import type { ItTabPanel } from '../src/it-tab-panel.js';

// Props
interface TabsProps {
  label?: string;
  auto?: boolean;
  hideScrollbar?: boolean;
  verticalBackground?: boolean;
  dark?: boolean;
  cards?: boolean;
  dismissible?: boolean;
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
    ?hide-scrollbar=${props.hideScrollbar}
    ?vertical-background=${props.verticalBackground}
    ?dark=${props.dark}
    ?cards=${props.cards}
    ?dismissible=${props.dismissible}
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
    hideScrollbar: false,
    verticalBackground: false,
    dark: false,
    cards: false,
    dismissible: false,
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
    hideScrollbar: {
      control: 'boolean',
      description:
        "Nasconde visivamente la scrollbar orizzontale su viewport intermedi (≥ 768px, < 1200px). Il meccanismo BSI use `overflow: hidden` sul wrapper e `padding-bottom: 20px` su `.nav-tabs` per spingere il track della scrollbar fuori dall'area visibile. Su mobile e su wide desktop la scrollbar comportamento normale. Ignorato con `cards` o in layout verticali. Si usa tipicamente insieme ad `auto`.",
      name: 'hide-scrollbar',
      if: { arg: 'auto', truthy: true },
      table: { defaultValue: { summary: 'false' } },
    },
    verticalBackground: {
      control: 'boolean',
      description:
        'Sfondo primario chiaro sul tab selezionato (solo in layout verticale: `placement="start"` o `placement="end"`). Corrisponde a `.nav-tabs-vertical-background`.',
      name: 'vertical-background',
      if: { arg: 'placement', eq: 'start' },
      table: { defaultValue: { summary: 'false' } },
    },
    dark: {
      control: 'boolean',
      description:
        'Variante con sfondo scuro per la tablist. Corrisponde alla classe `.nav-dark`. **Ignorato se `cards` è attivo** (le due varianti non sono compatibili).',
      name: 'dark',
      table: { defaultValue: { summary: 'false' } },
    },
    cards: {
      control: 'boolean',
      description: 'Stile "card" per i tab. Corrisponde a `.nav-tabs-cards`.',
      name: 'cards',
      table: { defaultValue: { summary: 'false' } },
    },
    dismissible: {
      control: 'boolean',
      description:
        'Abilita la chiusura dei tab tramite il pulsante × e i tasti Delete/Backspace. Indipendente da `cards`.',
      name: 'dismissible',
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
  decorators: [
    (Story) => html` <div style="min-height:250px; backgrond-color: #ececec; margin: auto;">${Story()}</div> `,
  ],
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

// Tab a tutta larghezza con scrollbar nascosta
export const TabScrollbarNascosta: Story = {
  name: 'Tab con scrollbar nascosta',

  render: () => html`
    <it-tabs auto hide-scrollbar label="Navigazione con scrollbar nascosta">
      <it-tab slot="tab" panel="hs1">Voce di menu 1</it-tab>
      <it-tab slot="tab" panel="hs2">Voce di menu 2</it-tab>
      <it-tab slot="tab" panel="hs3">Voce di menu 3</it-tab>
      <it-tab slot="tab" panel="hs4">Voce di menu 4</it-tab>
      <it-tab slot="tab" panel="hs5">Voce di menu 5</it-tab>
      <it-tab slot="tab" panel="hs6" disabled>Disabilitato</it-tab>
      <it-tab-panel name="hs1">${panelContent(1)}</it-tab-panel>
      <it-tab-panel name="hs2">${panelContent(2)}</it-tab-panel>
      <it-tab-panel name="hs3">${panelContent(3)}</it-tab-panel>
      <it-tab-panel name="hs4">${panelContent(4)}</it-tab-panel>
      <it-tab-panel name="hs5">${panelContent(5)}</it-tab-panel>
      <it-tab-panel name="hs6">${panelContent(6)}</it-tab-panel>
    </it-tabs>
  `,
};

// Tab con icona
export const TabConIcona: Story = {
  name: 'Tab con icona',

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

  render: () => html`
    <it-tabs placement="start" label="Navigazione verticale">
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

  render: () => html`
    <it-tabs placement="start" vertical-background label="Navigazione verticale con sfondo">
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

  render: () => html`
    <it-tabs dark placement="start" icon-text label="Navigazione scura verticale">
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

  decorators: [
    (Story) => html`
      <div style="min-height: 300px; display: flex; flex-direction: column; gap: 2rem; margin: auto;">${Story()}</div>
    `,
  ],
  render: () => html`
    <div>
      <p style="margin-bottom: 0.5rem; font-weight: 600;"><code>--it-tabs-nav-size: 220px</code> — larghezza fissa</p>
      <it-tabs placement="start" label="Nav size fissa" style="--it-tabs-nav-size: 220px;">
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
  render: () => html`
    <it-tabs label="Tab con effetto fade">
      <it-tab slot="tab" panel="f1">Tab 1</it-tab>
      <it-tab slot="tab" panel="f2">Tab 2</it-tab>
      <it-tab slot="tab" panel="f3">Tab 3</it-tab>
      <it-tab-panel fade name="f1">Pannello 1 — contenuto con dissolvenza in entrata.</it-tab-panel>
      <it-tab-panel fade name="f2">Pannello 2 — contenuto con dissolvenza in entrata.</it-tab-panel>
      <it-tab-panel fade name="f3">Pannello 3 — contenuto con dissolvenza in entrata.</it-tab-panel>
    </it-tabs>
  `,
};

// Tab card con pulsanti aggiungi/elimina
export const TabCardConPulsanti: Story = {
  name: 'Tab card con pulsanti aggiungi/elimina',
  args: {
    auto: true,
  },

  render: () => {
    let counter = 5;

    const onAdd = (e: Event) => {
      const addBtn = e.currentTarget as Element;
      const itTabs = addBtn.closest('it-tabs')! as ItTabs;
      const n = counter++;
      const tab = document.createElement('it-tab') as ItTab;
      tab.setAttribute('slot', 'tab');
      tab.setAttribute('panel', `et${n}`);
      tab.textContent = `Tab ${n}`;
      const panel = document.createElement('it-tab-panel') as ItTabPanel;
      panel.setAttribute('name', `et${n}`);
      panel.innerHTML = `Contenuto del pannello <strong>Tab ${n}</strong>`;
      itTabs.addTab(tab, panel);
    };

    return html`
      <it-tabs cards dismissible label="Tab card con pulsanti">
        <it-tab slot="tab" panel="et1">Tab 1</it-tab>
        <it-tab slot="tab" panel="et2">Tab 2</it-tab>
        <it-tab slot="tab" panel="et3">Tab 3</it-tab>
        <it-tab slot="tab" panel="et4" disabled>Tab 4 Disabilitato</it-tab>
        <it-tab-panel name="et1">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
        <it-tab-panel name="et2">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
        <it-tab-panel name="et3">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
        <it-tab-panel name="et4">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>
        <it-button
          slot="after-tablist"
          class="after-tablist"
          variant="link"
          icon
          size="sm"
          it-aria-label="Aggiungi tab"
          @click=${onAdd}
        >
          <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
        </it-button>
      </it-tabs>
    `;
  },
};

// Tab card con pulsanti — chiusura personalizzata (preventDefault)
export const TabCardConPulsantiCustomClose: Story = {
  name: 'Tab card con chiusura personalizzata',

  render: () => {
    let counter = 5;

    const onClose = (e: CustomEvent<ItTabCloseEventDetail>) => {
      e.preventDefault();
      const itTabs = e.currentTarget as ItTabs;
      const label = itTabs.querySelector(`it-tab[panel="${e.detail.panel}"]`)?.textContent?.trim();
      if (confirm(`Chiudere "${label}"?`)) itTabs.close(e.detail.panel);
    };

    const onAdd = (e: Event) => {
      const addBtn = e.currentTarget as Element;
      const itTabs = addBtn.closest('it-tabs')! as ItTabs;
      const n = counter++;
      const tab = document.createElement('it-tab') as ItTab;
      tab.setAttribute('slot', 'tab');
      tab.setAttribute('panel', `cp${n}`);
      tab.textContent = `Tab ${n}`;
      const panel = document.createElement('it-tab-panel') as ItTabPanel;
      panel.setAttribute('name', `cp${n}`);
      panel.innerHTML = `Contenuto del pannello <strong>Tab ${n}</strong>`;
      itTabs.addTab(tab, panel);
    };

    return html`
      <it-tabs cards dismissible label="Tab card con chiusura personalizzata" @it-tab-close=${onClose}>
        <it-tab slot="tab" panel="cp1">Tab 1</it-tab>
        <it-tab slot="tab" panel="cp2">Tab 2</it-tab>
        <it-tab slot="tab" panel="cp3">Tab 3</it-tab>
        <it-tab slot="tab" panel="cp4" disabled>Tab 4 Disabilitato</it-tab>
        <it-tab-panel name="cp1">Contenuto del pannello <strong>Tab 1</strong></it-tab-panel>
        <it-tab-panel name="cp2">Contenuto del pannello <strong>Tab 2</strong></it-tab-panel>
        <it-tab-panel name="cp3">Contenuto del pannello <strong>Tab 3</strong></it-tab-panel>
        <it-tab-panel name="cp4">Contenuto del pannello <strong>Tab 4 Disabilitato</strong></it-tab-panel>
        <it-button
          slot="after-tablist"
          class="after-tablist"
          variant="link"
          icon
          size="sm"
          it-aria-label="Aggiungi tab"
          @click=${onAdd}
        >
          <it-icon name="it-plus-circle" color="primary" size="sm"></it-icon>
        </it-button>
      </it-tabs>
    `;
  },
};
