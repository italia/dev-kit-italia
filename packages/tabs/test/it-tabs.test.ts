/// <reference types="mocha"/>

import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import '../src/index.js';
import type { ItTabs } from '../src/it-tabs.js';
import type { ItTab } from '../src/it-tab.js';
import type { ItTabPanel } from '../src/it-tab-panel.js';

// ─── Helpers ────────────────────────────────────────────────────────────────

function basicTabs() {
  return html`
    <it-tabs label="Test tabs">
      <it-tab slot="tab" panel="p1">Tab 1</it-tab>
      <it-tab slot="tab" panel="p2">Tab 2</it-tab>
      <it-tab slot="tab" panel="p3">Tab 3</it-tab>
      <it-tab-panel name="p1">Contenuto pannello 1</it-tab-panel>
      <it-tab-panel name="p2">Contenuto pannello 2</it-tab-panel>
      <it-tab-panel name="p3">Contenuto pannello 3</it-tab-panel>
    </it-tabs>
  `;
}

// ─── Registrazione elementi ─────────────────────────────────────────────────

describe('it-tabs — registrazione', () => {
  it('registra it-tabs, it-tab e it-tab-panel', () => {
    expect(customElements.get('it-tabs')).to.be.a('function');
    expect(customElements.get('it-tab')).to.be.a('function');
    expect(customElements.get('it-tab-panel')).to.be.a('function');
  });
});

// ─── Stato iniziale ─────────────────────────────────────────────────────────

describe('it-tabs — stato iniziale', () => {
  it('attiva il primo tab non disabilitato di default', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const tabs = el.querySelectorAll<ItTab>('it-tab');
    expect(tabs[0].active).to.be.true;
    expect(tabs[1].active).to.be.false;
    expect(tabs[2].active).to.be.false;
  });

  it('mostra il pannello corrispondente al primo tab', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const panels = el.querySelectorAll<ItTabPanel>('it-tab-panel');
    expect(panels[0].active).to.be.true;
    expect(panels[1].active).to.be.false;
    expect(panels[2].active).to.be.false;
  });

  it('imposta aria-selected correttamente sull host del tab', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const tabs = el.querySelectorAll<ItTab>('it-tab');

    // aria-selected è sull'host it-tab (light DOM), non nel shadow button.
    expect(tabs[0].getAttribute('aria-selected')).to.equal('true');
    expect(tabs[1].getAttribute('aria-selected')).to.equal('false');
  });

  it('il tab attivo ha tabindex=0, gli altri tabindex=-1', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];
    await Promise.all(tabs.map((t) => elementUpdated(t)));

    // Il roving tabindex è sull'host it-tab direttamente (no button shadow).
    expect(tabs[0].tabIndex).to.equal(0);
    expect(tabs[1].tabIndex).to.equal(-1);
    expect(tabs[2].tabIndex).to.equal(-1);
  });

  it('skippa i tab disabilitati nella selezione iniziale', async () => {
    const el = await fixture<ItTabs>(html`
      <it-tabs label="Test">
        <it-tab slot="tab" panel="p1" disabled>Tab disabilitato</it-tab>
        <it-tab slot="tab" panel="p2">Tab abilitato</it-tab>
        <it-tab-panel name="p1">Panel 1</it-tab-panel>
        <it-tab-panel name="p2">Panel 2</it-tab-panel>
      </it-tabs>
    `);
    await elementUpdated(el);

    const tabs = el.querySelectorAll<ItTab>('it-tab');
    expect(tabs[0].active).to.be.false;
    expect(tabs[1].active).to.be.true;
  });
});

// ─── Selezione tramite click ─────────────────────────────────────────────────

describe('it-tabs — selezione tramite click', () => {
  it('seleziona il tab cliccato e mostra il pannello corrispondente', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const tabs = el.querySelectorAll<ItTab>('it-tab');
    const panels = el.querySelectorAll<ItTabPanel>('it-tab-panel');

    // Click sul secondo tab
    tabs[1].click();
    await elementUpdated(el);
    await elementUpdated(tabs[1]);
    await elementUpdated(panels[1]);

    expect(tabs[0].active).to.be.false;
    expect(tabs[1].active).to.be.true;
    expect(panels[0].active).to.be.false;
    expect(panels[1].active).to.be.true;
  });

  it('non seleziona un tab disabilitato al click', async () => {
    const el = await fixture<ItTabs>(html`
      <it-tabs label="Test">
        <it-tab slot="tab" panel="p1">Tab 1</it-tab>
        <it-tab slot="tab" panel="p2" disabled>Tab 2 (disabilitato)</it-tab>
        <it-tab-panel name="p1">Panel 1</it-tab-panel>
        <it-tab-panel name="p2">Panel 2</it-tab-panel>
      </it-tabs>
    `);
    await elementUpdated(el);

    const tabs = el.querySelectorAll<ItTab>('it-tab');
    tabs[1].click();
    await elementUpdated(el);

    // Il tab disabilitato non deve diventare attivo
    expect(tabs[0].active).to.be.true;
    expect(tabs[1].active).to.be.false;
  });

  it('emette evento it-tabs-change con il nome del pannello', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const tabs = el.querySelectorAll<ItTab>('it-tab');

    let receivedPanel = '';
    el.addEventListener('it-tabs-change', (e) => {
      receivedPanel = (e as CustomEvent).detail.panel;
    });

    tabs[2].click();
    await elementUpdated(el);

    expect(receivedPanel).to.equal('p3');
  });
});

// ─── Navigazione da tastiera ─────────────────────────────────────────────────

describe('it-tabs — navigazione da tastiera', () => {
  it('ArrowRight sposta al tab successivo', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const tabs = el.querySelectorAll<ItTab>('it-tab');

    // Simula focus e ArrowRight dal primo tab
    el.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );

    // L'evento deve sembrare provenire dall'host it-tab (composeadPath).
    tabs[0].dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    await elementUpdated(el);

    expect(tabs[1].active).to.be.true;
    expect(tabs[0].active).to.be.false;
  });

  it('ArrowLeft dal primo tab va all ultimo (wrap-around)', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const tabs = el.querySelectorAll<ItTab>('it-tab');

    tabs[0].dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    await elementUpdated(el);

    expect(tabs[2].active).to.be.true;
    expect(tabs[0].active).to.be.false;
  });

  it('Home va al primo tab', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const tabs = el.querySelectorAll<ItTab>('it-tab');

    // Prima selezioniamo il terzo tab
    tabs[2].click();
    await elementUpdated(el);

    // Poi premiamo Home
    tabs[2].dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Home',
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    await elementUpdated(el);

    expect(tabs[0].active).to.be.true;
    expect(tabs[2].active).to.be.false;
  });

  it('End va all ultimo tab', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const tabs = el.querySelectorAll<ItTab>('it-tab');

    tabs[0].dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'End',
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    await elementUpdated(el);

    expect(tabs[2].active).to.be.true;
    expect(tabs[0].active).to.be.false;
  });
});

// ─── Varianti e attributi ────────────────────────────────────────────────────

describe('it-tabs — varianti', () => {
  it('attributo auto aggiunge classe .auto alla tablist', async () => {
    const el = await fixture<ItTabs>(html`
      <it-tabs auto label="Test">
        <it-tab slot="tab" panel="p1">Tab 1</it-tab>
        <it-tab-panel name="p1">Panel 1</it-tab-panel>
      </it-tabs>
    `);
    await elementUpdated(el);

    const tablist = el.shadowRoot?.querySelector('[role="tablist"]');
    expect(tablist?.classList.contains('auto')).to.be.true;
  });

  it('attributo vertical aggiunge classe .nav-tabs-vertical', async () => {
    const el = await fixture<ItTabs>(html`
      <it-tabs vertical label="Test">
        <it-tab slot="tab" panel="p1">Tab 1</it-tab>
        <it-tab-panel name="p1">Panel 1</it-tab-panel>
      </it-tabs>
    `);
    await elementUpdated(el);

    const tablist = el.shadowRoot?.querySelector('[role="tablist"]');
    expect(tablist?.classList.contains('nav-tabs-vertical')).to.be.true;
    expect(tablist?.getAttribute('aria-orientation')).to.equal('vertical');
  });

  it('attributo dark aggiunge classe .nav-dark', async () => {
    const el = await fixture<ItTabs>(html`
      <it-tabs dark label="Test">
        <it-tab slot="tab" panel="p1">Tab 1</it-tab>
        <it-tab-panel name="p1">Panel 1</it-tab-panel>
      </it-tabs>
    `);
    await elementUpdated(el);

    const tablist = el.shadowRoot?.querySelector('[role="tablist"]');
    expect(tablist?.classList.contains('nav-dark')).to.be.true;
  });

  it('attributo cards aggiunge classe .nav-tabs-cards', async () => {
    const el = await fixture<ItTabs>(html`
      <it-tabs cards label="Test">
        <it-tab slot="tab" panel="p1">Tab 1</it-tab>
        <it-tab-panel name="p1">Panel 1</it-tab-panel>
      </it-tabs>
    `);
    await elementUpdated(el);

    const tablist = el.shadowRoot?.querySelector('[role="tablist"]');
    expect(tablist?.classList.contains('nav-tabs-cards')).to.be.true;
  });

  it('placement="bottom" aggiunge classe tabs-wrapper--bottom', async () => {
    const el = await fixture<ItTabs>(html`
      <it-tabs placement="bottom" label="Test">
        <it-tab slot="tab" panel="p1">Tab 1</it-tab>
        <it-tab-panel name="p1">Panel 1</it-tab-panel>
      </it-tabs>
    `);
    await elementUpdated(el);

    const wrapper = el.shadowRoot?.querySelector('.tabs-wrapper');
    expect(wrapper?.classList.contains('tabs-wrapper--bottom')).to.be.true;
  });
});

// ─── Accessibilità ───────────────────────────────────────────────────────────

describe('it-tabs — accessibilità', () => {
  it('imposta id sull host di it-tab-panel uguale al name', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const panels = el.querySelectorAll<ItTabPanel>('it-tab-panel');
    expect(panels[0].id).to.equal('p1');
    expect(panels[1].id).to.equal('p2');
    expect(panels[2].id).to.equal('p3');
  });

  it('imposta aria-controls sul host del tab puntando al name del pannello', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const tabs = el.querySelectorAll<ItTab>('it-tab');
    // aria-controls è sull'host it-tab (light DOM), non nel shadow button.
    expect(tabs[0].getAttribute('aria-controls')).to.equal('p1');
  });

  it('role="tablist" presente sulla tablist con aria-orientation corretto', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);

    const tablist = el.shadowRoot?.querySelector('[role="tablist"]');
    expect(tablist).to.exist;
    expect(tablist?.getAttribute('aria-orientation')).to.equal('horizontal');
  });
});

