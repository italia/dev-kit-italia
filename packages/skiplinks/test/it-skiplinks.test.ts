/// <reference types="mocha"/>

import '@italia/skiplinks';
import { expect, fixture, html } from '@open-wc/testing';

// import { type ItSkiplinks } from '@italia/skiplinks';

describe('ItSkiplinks', () => {
  it('renders a slot and empty nav initially', async () => {
    const el = await fixture(html`<it-skiplinks></it-skiplinks>`);
    const slot = el.shadowRoot!.querySelector('slot');
    const div = el.shadowRoot!.querySelector('div.skiplinks');

    expect(slot).to.exist;
    expect(div).to.exist;
    // inizialmente non ci sono link
    expect(div!.querySelectorAll('a')).to.have.length(0);
  });

  it('renders links from slotted <a> elements', async () => {
    const el = await fixture(html`
      <it-skiplinks>
        <a href="#main">Vai al contenuto</a>
        <a href="#footer">Vai al footer</a>
      </it-skiplinks>
    `);

    const div = el.shadowRoot!.querySelector('div.skiplinks');
    const items = div!.querySelectorAll('a');

    expect(items).to.have.length(2);
    expect(items[0].getAttribute('href')).to.equal('#main');
    expect(items[0].textContent!.trim()).to.equal('Vai al contenuto');
    expect(items[1].getAttribute('href')).to.equal('#footer');
    expect(items[1].textContent!.trim()).to.equal('Vai al footer');
  });

  it('links are hidden initially', async () => {
    const el = await fixture(html`
      <it-skiplinks>
        <a href="#main">Vai al contenuto</a>
      </it-skiplinks>
    `);

    const a = el.shadowRoot!.querySelector('a')!;
    expect(a.classList.contains('visually-hidden-focusable')).to.be.true;
  });

  it('links become visible when focused (simulate Tab)', async () => {
    const el = await fixture(html`
      <it-skiplinks>
        <a href="#main">Vai al contenuto</a>
      </it-skiplinks>
    `);

    const anchor: HTMLElement = el.shadowRoot!.querySelector('a');

    // Simuliamo focus
    anchor?.focus();
    await el.updateComplete;

    // // Dovresti controllare la classe o lo stile che mostra il link
    // // Se `visually-hidden-focusable` utilizza :focus-within, possiamo verificare il focus
    expect(anchor?.parentNode.getBoundingClientRect().width).to.greaterThan(1);
  });

  it('updates links when slot content changes', async () => {
    const el = await fixture(html`<it-skiplinks></it-skiplinks>`);

    const slotEl = document.createElement('a');
    slotEl.setAttribute('href', '#new');
    slotEl.textContent = 'Nuovo link';
    el.appendChild(slotEl);

    // Trigger slotchange manually
    const slot = el.shadowRoot!.querySelector('slot')!;
    slot.dispatchEvent(new Event('slotchange'));

    await el.updateComplete;

    const div = el.shadowRoot!.querySelector('div.skiplinks');
    const links = div!.querySelectorAll('a');

    expect(links).to.have.length(1);
    expect(links[0].getAttribute('href')).to.equal('#new');
    expect(links[0].textContent).to.equal('Nuovo link');
  });

  it('More than 2 skiplinks creates nav', async () => {
    const el = await fixture(
      html`<it-skiplinks it-aria-label="Vai a">
        <a href="#menu">Vai al menu</a>
        <a href="#content">Vai al contenuto</a>
        <a href="#footer">Vai al footer</a></it-skiplinks
      >`,
    );

    const nav = el.shadowRoot!.querySelector('nav.skiplinks');
    const items = nav!.querySelectorAll('li');

    expect(nav).to.exist;
    expect(items.length).to.equal(3);
    expect(nav?.getAttribute('aria-label')).to.equal('Vai a');
  });
});
