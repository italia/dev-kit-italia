/// <reference types="mocha"/>

import '@italia/skiplinks';
import { expect, fixture, html } from '@open-wc/testing';

// import { type ItSkiplinks } from '@italia/skiplinks';

describe('ItSkiplinks', () => {
  it('renders a slot and empty nav initially', async () => {
    const el = await fixture(html`<it-skiplinks></it-skiplinks>`);
    const slot = el.shadowRoot!.querySelector('slot');
    const nav = el.shadowRoot!.querySelector('nav.skiplinks');

    expect(slot).to.exist;
    expect(nav).to.exist;
    // inizialmente non ci sono link
    expect(nav!.querySelectorAll('li')).to.have.length(0);
  });

  it('renders links from slotted <a> elements', async () => {
    const el = await fixture(html`
      <it-skiplinks>
        <a href="#main">Vai al contenuto</a>
        <a href="#footer">Vai al footer</a>
      </it-skiplinks>
    `);

    const nav = el.shadowRoot!.querySelector('nav.skiplinks');
    const listItems = nav!.querySelectorAll('li');

    expect(listItems).to.have.length(2);
    expect(listItems[0].querySelector('a')!.getAttribute('href')).to.equal('#main');
    expect(listItems[0].textContent!.trim()).to.equal('Vai al contenuto');
    expect(listItems[1].querySelector('a')!.getAttribute('href')).to.equal('#footer');
    expect(listItems[1].textContent!.trim()).to.equal('Vai al footer');
  });

  it('links are hidden initially', async () => {
    const el = await fixture(html`
      <it-skiplinks>
        <a href="#main">Vai al contenuto</a>
      </it-skiplinks>
    `);

    const li = el.shadowRoot!.querySelector('li')!;
    expect(li.classList.contains('visually-hidden-focusable')).to.be.true;
  });

  it('links become visible when focused (simulate Tab)', async () => {
    const el = await fixture(html`
      <it-skiplinks>
        <a href="#main">Vai al contenuto</a>
      </it-skiplinks>
    `);

    const anchor: HTMLElement = el.shadowRoot!.querySelector('li a');

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

    const nav = el.shadowRoot!.querySelector('nav.skiplinks');
    const links = nav!.querySelectorAll('li a');

    expect(links).to.have.length(1);
    expect(links[0].getAttribute('href')).to.equal('#new');
    expect(links[0].textContent).to.equal('Nuovo link');
  });
});
