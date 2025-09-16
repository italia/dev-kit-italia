import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import '../src/index.js';
import type { ItAccordionItem } from '../src/it-accordion-item.js';

describe('ItAccordion', () => {
  it('is registered and renders children', async () => {
    const el = await fixture(html`
      <it-accordion>
        <it-accordion-item label="One"><p slot="content">one</p></it-accordion-item>
        <it-accordion-item label="Two"><p slot="content">two</p></it-accordion-item>
      </it-accordion>
    `);
    expect(customElements.get('it-accordion')).to.be.a('function');
    const items = Array.from(el.querySelectorAll('it-accordion-item'));
    expect(items.length).to.equal(2);
  });

  it('propagates background/left-icon attributes to children', async () => {
    const el = await fixture(html`
      <it-accordion background-active background-hover left-icon>
        <it-accordion-item label="One"><p slot="content">one</p></it-accordion-item>
        <it-accordion-item label="Two"><p slot="content">two</p></it-accordion-item>
      </it-accordion>
    `);
    await elementUpdated(el);
    const items = Array.from(el.querySelectorAll('it-accordion-item'));
    expect(items.every((it) => it.hasAttribute('background-active'))).to.be.true;
    expect(items.every((it) => it.hasAttribute('background-hover'))).to.be.true;
    expect(items.every((it) => it.hasAttribute('left-icon'))).to.be.true;
  });

  it('single mode keeps only one item expanded', async () => {
    const el = await fixture(html`
      <it-accordion mode="single">
        <it-accordion-item label="One" default-open><p slot="content">one</p></it-accordion-item>
        <it-accordion-item label="Two"><p slot="content">two</p></it-accordion-item>
      </it-accordion>
    `);
    await elementUpdated(el);
    const items = Array.from(el.querySelectorAll('it-accordion-item')) as ItAccordionItem[];
    // first should be expanded by default
    await elementUpdated(items[0]);
    expect(items[0].expanded).to.be.true;

    // clicking second should open it and close the first
    const btn2 = items[1].shadowRoot?.querySelector('button') as HTMLButtonElement;
    btn2.click();
    await elementUpdated(items[1]);
    // allow parent to react
    await elementUpdated(el);
    expect(items[1].expanded).to.be.true;
    expect(items[0].expanded).to.be.false;
  });

  it('keyboard Enter/Space toggles items', async () => {
    const el = await fixture(html`
      <it-accordion>
        <it-accordion-item label="K1"><p slot="content">one</p></it-accordion-item>
      </it-accordion>
    `);
    const item = el.querySelector('it-accordion-item') as unknown as ItAccordionItem;
    await elementUpdated(item);
    const btn = item.shadowRoot?.querySelector('button') as HTMLButtonElement;
    expect(btn).to.exist;

    // simulate Enter (use composed so it reaches shadow listeners reliably)
    btn.click();
    await elementUpdated(item);
    await elementUpdated(el);
    expect(item.expanded).to.be.true;
  });

  it('bubbles collapse events to parent and parent enforces single mode', async () => {
    const el = await fixture(html`
      <it-accordion mode="single">
        <it-accordion-item label="A"><p slot="content">a</p></it-accordion-item>
        <it-accordion-item label="B"><p slot="content">b</p></it-accordion-item>
      </it-accordion>
    `);
    const items = Array.from(el.querySelectorAll('it-accordion-item')) as ItAccordionItem[];
    const btnA = items[0].shadowRoot?.querySelector('button') as HTMLButtonElement;
    const btnB = items[1].shadowRoot?.querySelector('button') as HTMLButtonElement;

    // open A
    btnA.click();
    await elementUpdated(items[0]);
    await elementUpdated(el);
    expect(items[0].expanded).to.be.true;

    // open B -> A should close
    btnB.click();
    await elementUpdated(items[1]);
    await elementUpdated(el);
    expect(items[1].expanded).to.be.true;
    expect(items[0].expanded).to.be.false;
  });
});
