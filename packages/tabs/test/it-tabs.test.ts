/* eslint-disable no-bitwise */
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

  it('placement="start" aggiunge classe .nav-tabs-vertical', async () => {
    const el = await fixture<ItTabs>(html`
      <it-tabs placement="start" label="Test">
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

// ─── Dismissible — ARIA e comportamento ──────────────────────────────────────

function dismissibleTabs() {
  return html`
    <it-tabs cards dismissible label="Dismissible test">
      <it-tab slot="tab" panel="d1">Tab 1</it-tab>
      <it-tab slot="tab" panel="d2">Tab 2</it-tab>
      <it-tab slot="tab" panel="d3">Tab 3</it-tab>
      <it-tab-panel name="d1">Panel 1</it-tab-panel>
      <it-tab-panel name="d2">Panel 2</it-tab-panel>
      <it-tab-panel name="d3">Panel 3</it-tab-panel>
    </it-tabs>
  `;
}

describe('it-tabs — dismissible ARIA', () => {
  it('imposta aria-keyshortcuts="Delete Backspace" su ogni tab dismissibile', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);
    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];
    await Promise.all(tabs.map((t) => elementUpdated(t)));

    for (const tab of tabs) {
      expect(tab.getAttribute('aria-keyshortcuts')).to.equal('Delete Backspace');
    }
  });

  it('imposta aria-description solo sul tab attivo', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);
    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];
    await Promise.all(tabs.map((t) => elementUpdated(t)));

    // Solo il primo (attivo) deve avere aria-description
    expect(tabs[0].hasAttribute('aria-description')).to.be.true;
    expect(tabs[0].getAttribute('aria-description')).to.be.a('string').and.not.empty;
    expect(tabs[1].hasAttribute('aria-description')).to.be.false;
    expect(tabs[2].hasAttribute('aria-description')).to.be.false;
  });

  it('sposta aria-description sul nuovo tab attivo dopo cambio selezione', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);
    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];

    // Seleziona il secondo tab
    tabs[1].click();
    await elementUpdated(el);
    await Promise.all(tabs.map((t) => elementUpdated(t)));

    expect(tabs[0].hasAttribute('aria-description')).to.be.false;
    expect(tabs[1].hasAttribute('aria-description')).to.be.true;
    expect(tabs[2].hasAttribute('aria-description')).to.be.false;
  });

  it('non imposta aria-keyshortcuts né aria-description su tab non dismissibili', async () => {
    const el = await fixture<ItTabs>(basicTabs());
    await elementUpdated(el);
    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];
    await Promise.all(tabs.map((t) => elementUpdated(t)));

    for (const tab of tabs) {
      expect(tab.hasAttribute('aria-keyshortcuts')).to.be.false;
      expect(tab.hasAttribute('aria-description')).to.be.false;
    }
  });
});

describe('it-tabs — click su tab attivo dismissibile (mobile SR)', () => {
  it('click sul tab attivo emette it-tab-close (default action rimuove tab)', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);
    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];

    let closeDetail: { panel: string } | null = null;
    el.addEventListener('it-tab-close', (e) => {
      closeDetail = (e as CustomEvent).detail;
    });

    // Simula doppio tap touch SR mobile: pointerdown(touch) + click
    tabs[0].dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true, pointerType: 'touch' }));
    tabs[0].click();
    await elementUpdated(el);

    expect(closeDetail).to.not.be.null;
    expect((closeDetail as any).panel).to.equal('d1');
  });

  it('dopo click su tab attivo, il tab viene rimosso dal DOM (default action)', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);
    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];

    // Simula doppio tap touch SR mobile
    tabs[0].dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true, pointerType: 'touch' }));
    tabs[0].click();
    await elementUpdated(el);

    const remaining = [...el.querySelectorAll<ItTab>('it-tab')];
    expect(remaining).to.have.length(2);
    expect(remaining.find((t) => t.getAttribute('panel') === 'd1')).to.be.undefined;
  });

  it('click su tab NON attivo con dismissible non emette it-tab-close', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);
    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];

    let fired = false;
    el.addEventListener('it-tab-close', () => {
      fired = true;
    });

    // Click sul secondo tab (non attivo)
    tabs[1].click();
    await elementUpdated(el);

    expect(fired).to.be.false;
    expect(tabs[1].active).to.be.true;
  });

  it('Space su tab attivo dismissibile NON emette it-tab-close', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);
    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];

    let fired = false;
    el.addEventListener('it-tab-close', () => {
      fired = true;
    });

    // Simula Space sul tab attivo
    tabs[0].dispatchEvent(
      new KeyboardEvent('keydown', {
        key: ' ',
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    await elementUpdated(el);

    expect(fired).to.be.false;
    // il tab non deve essere rimosso
    expect(el.querySelectorAll('it-tab')).to.have.length(3);
  });

  it('Enter su tab attivo dismissibile NON emette it-tab-close', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);
    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];

    let fired = false;
    el.addEventListener('it-tab-close', () => {
      fired = true;
    });

    // Simula Enter sul tab attivo
    tabs[0].dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    await elementUpdated(el);

    expect(fired).to.be.false;
    expect(el.querySelectorAll('it-tab')).to.have.length(3);
  });

  it('click mouse su tab attivo dismissibile NON emette it-tab-close', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);
    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];

    let fired = false;
    el.addEventListener('it-tab-close', () => {
      fired = true;
    });

    // Simula pointerdown mouse + click sull'host del tab attivo
    tabs[0].dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true, pointerType: 'mouse' }));
    tabs[0].click();
    await elementUpdated(el);

    expect(fired).to.be.false;
    expect(el.querySelectorAll('it-tab')).to.have.length(3);
  });

  it('tap touch su tab attivo dismissibile emette it-tab-close', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);
    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];

    let fired = false;
    el.addEventListener('it-tab-close', (e) => {
      e.preventDefault(); // blocca rimozione DOM nel test
      fired = true;
    });

    // Simula pointerdown touch + click (doppio tap SR mobile)
    tabs[0].dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true, pointerType: 'touch' }));
    tabs[0].click();
    await elementUpdated(el);

    expect(fired).to.be.true;
  });
});

describe('it-tabs — metodi pubblici close() e addTab()', () => {
  it('preventDefault blocca la rimozione automatica', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);

    el.addEventListener('it-tab-close', (e) => e.preventDefault());

    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];
    tabs[0].click();
    await elementUpdated(el);

    // Il tab deve essere ancora nel DOM
    expect(el.querySelectorAll('it-tab')).to.have.length(3);
  });

  it('close() rimuove tab e pannello anche dopo preventDefault', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);

    el.addEventListener('it-tab-close', (e) => {
      e.preventDefault();
      el.close((e as CustomEvent).detail.panel);
    });

    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];
    tabs[0].dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, composed: true, pointerType: 'touch' }));
    tabs[0].click();
    await elementUpdated(el);

    expect(el.querySelectorAll('it-tab')).to.have.length(2);
    expect(el.querySelectorAll('it-tab-panel')).to.have.length(2);
  });

  it('close() trasferisce active al tab successivo', async () => {
    const el = await fixture<ItTabs>(dismissibleTabs());
    await elementUpdated(el);

    el.addEventListener('it-tab-close', (e) => {
      e.preventDefault();
      el.close((e as CustomEvent).detail.panel);
    });

    const tabsBefore = [...el.querySelectorAll<ItTab>('it-tab')];
    // Chiudi il primo tab (attivo): il secondo deve diventare attivo
    tabsBefore[0].dispatchEvent(
      new PointerEvent('pointerdown', { bubbles: true, composed: true, pointerType: 'touch' }),
    );
    tabsBefore[0].click();
    await elementUpdated(el);

    const tabsAfter = [...el.querySelectorAll<ItTab>('it-tab')];
    expect(tabsAfter[0].getAttribute('panel')).to.equal('d2');
    expect(tabsAfter[0].active).to.be.true;
  });

  it('close() è noop se dismissible non è attivo', async () => {
    const el = await fixture<ItTabs>(html`
      <it-tabs label="test">
        <it-tab slot="tab" panel="t1">Tab 1</it-tab>
        <it-tab slot="tab" panel="t2">Tab 2</it-tab>
        <it-tab-panel name="t1">Pannello 1</it-tab-panel>
        <it-tab-panel name="t2">Pannello 2</it-tab-panel>
      </it-tabs>
    `);
    await elementUpdated(el);

    el.close('t1');
    await elementUpdated(el);

    expect(el.querySelectorAll('it-tab')).to.have.length(2);
  });

  it('addTab() aggiunge tab e pannello prima dello slot after-tablist', async () => {
    const el = await fixture<ItTabs>(html`
      <it-tabs dismissible label="test">
        <it-tab slot="tab" panel="a1">Tab 1</it-tab>
        <it-tab-panel name="a1">Pannello 1</it-tab-panel>
        <button slot="after-tablist" id="add-btn">+</button>
      </it-tabs>
    `);
    await elementUpdated(el);

    const tab = document.createElement('it-tab') as ItTab;
    tab.setAttribute('slot', 'tab');
    tab.setAttribute('panel', 'a2');
    tab.textContent = 'Tab 2';
    const panel = document.createElement('it-tab-panel') as ItTabPanel;
    panel.setAttribute('name', 'a2');
    panel.textContent = 'Pannello 2';

    el.addTab(tab, panel);
    await elementUpdated(el);

    const tabs = [...el.querySelectorAll<ItTab>('it-tab')];
    expect(tabs).to.have.length(2);
    expect(tabs[1].getAttribute('panel')).to.equal('a2');
    // Il tab deve essere inserito PRIMA del pulsante add
    const addBtn = el.querySelector('#add-btn')!;
    expect(el.compareDocumentPosition(tab) & Node.DOCUMENT_POSITION_PRECEDING).to.equal(0);
    expect(tab.compareDocumentPosition(addBtn) & Node.DOCUMENT_POSITION_FOLLOWING).to.equal(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(el.querySelectorAll('it-tab-panel')).to.have.length(2);
  });
});
