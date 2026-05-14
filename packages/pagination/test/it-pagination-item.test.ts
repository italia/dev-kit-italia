import { expect, fixture, html } from '@open-wc/testing';
import { ItPaginationItem } from '../src/it-pagination-item.js';

describe('it-pagination-item', () => {
  it('is defined', () => {
    const el = document.createElement('it-pagination-item');
    expect(el).to.be.instanceOf(ItPaginationItem);
  });

  it('renders with shadow DOM', async () => {
    const el = await fixture(html`<it-pagination-item></it-pagination-item>`);
    expect(el.shadowRoot).to.exist;
  });

  it('can set the page number', async () => {
    const el = await fixture<ItPaginationItem>(html`<it-pagination-item page="3"></it-pagination-item>`);
    expect(el.page).to.equal('3');
  });

  it('can be set as current', async () => {
    const el = await fixture<ItPaginationItem>(html`<it-pagination-item current></it-pagination-item>`);
    expect(el.current).to.be.true;
  });

  it('can be disabled', async () => {
    const el = await fixture<ItPaginationItem>(html`<it-pagination-item disabled></it-pagination-item>`);
    expect(el.disabled).to.be.true;
  });

  it('sets aria-current on link when current', async () => {
    const el = await fixture(html`
      <it-pagination-item page="1" current>
        <a href="?page=1" class="page-link">1</a>
      </it-pagination-item>
    `);

    await el.updateComplete;
    const link = el.querySelector('a');
    expect(link?.getAttribute('aria-current')).to.equal('page');
  });

  it('removes aria-current when not current', async () => {
    const el = await fixture(html`
      <it-pagination-item page="1">
        <a href="?page=1" class="page-link">1</a>
      </it-pagination-item>
    `);

    await el.updateComplete;
    const link = el.querySelector('a');
    expect(link?.hasAttribute('aria-current')).to.be.false;
  });

  it('sets aria-disabled when disabled', async () => {
    const el = await fixture(html`
      <it-pagination-item page="1" disabled>
        <a href="?page=1" class="page-link">1</a>
      </it-pagination-item>
    `);

    await el.updateComplete;
    const link = el.querySelector('a');
    expect(link?.getAttribute('aria-disabled')).to.equal('true');
    expect(link?.getAttribute('tabindex')).to.equal('-1');
  });

  it('renders li with page-item class', async () => {
    const el = await fixture<ItPaginationItem>(html`<it-pagination-item></it-pagination-item>`);
    const li = el.shadowRoot?.querySelector('li');
    expect(li).to.exist;
    expect(li?.classList.contains('page-item')).to.be.true;
  });

  it('adds active class when current', async () => {
    const el = await fixture<ItPaginationItem>(html`<it-pagination-item current></it-pagination-item>`);
    const li = el.shadowRoot?.querySelector('li');
    expect(li?.classList.contains('active')).to.be.true;
  });

  it('adds disabled class when disabled', async () => {
    const el = await fixture<ItPaginationItem>(html`<it-pagination-item disabled></it-pagination-item>`);
    const li = el.shadowRoot?.querySelector('li');
    expect(li?.classList.contains('disabled')).to.be.true;
  });
});
