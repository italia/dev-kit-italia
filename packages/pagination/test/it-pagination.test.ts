import { expect, fixture, html } from '@open-wc/testing';
import { ItPagination } from '../src/it-pagination.js';
import '../src/it-pagination-item.js';

describe('it-pagination', () => {
  it('is defined', () => {
    const el = document.createElement('it-pagination');
    expect(el).to.be.instanceOf(ItPagination);
  });

  it('renders with shadow DOM', async () => {
    const el = await fixture(html`<it-pagination></it-pagination>`);
    expect(el.shadowRoot).to.exist;
  });

  it('has default value of "1"', async () => {
    const el = await fixture<ItPagination>(html`<it-pagination></it-pagination>`);
    expect(el.value).to.equal('1');
  });

  it('has default disableResponsive false', async () => {
    const el = await fixture<ItPagination>(html`<it-pagination></it-pagination>`);
    expect(el.disableResponsive).to.equal(false);
  });

  it('renders pagination items', async () => {
    const el = await fixture(html`
      <it-pagination value="2">
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3">3</a>
        </it-pagination-item>
      </it-pagination>
    `);

    const items = el.querySelectorAll('it-pagination-item');
    expect(items.length).to.equal(3);
  });

  it('sets aria-current on the current page', async () => {
    const el = await fixture(html`
      <it-pagination value="2">
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3">3</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;

    const items = el.querySelectorAll('it-pagination-item');
    const links = Array.from(items).map((item) => item.querySelector('a'));

    expect(links[0]?.hasAttribute('aria-current')).to.be.false;
    expect(links[1]?.getAttribute('aria-current')).to.equal('page');
    expect(links[2]?.hasAttribute('aria-current')).to.be.false;
  });

  it('updates aria-current when value changes', async () => {
    const el = await fixture<ItPagination>(html`
      <it-pagination value="1">
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3">3</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;

    // Change to page 3
    el.value = '3';
    await el.updateComplete;
    await new Promise((resolve) => {
      setTimeout(resolve, 50);
    });

    const items = el.querySelectorAll('it-pagination-item');
    const links = Array.from(items).map((item) => item.querySelector('a'));

    expect(links[0]?.hasAttribute('aria-current')).to.be.false;
    expect(links[1]?.hasAttribute('aria-current')).to.be.false;
    expect(links[2]?.getAttribute('aria-current')).to.equal('page');
  });

  it('supports different alignments', async () => {
    const elCenter = await fixture<ItPagination>(html`<it-pagination align="center"></it-pagination>`);
    const elEnd = await fixture<ItPagination>(html`<it-pagination align="end"></it-pagination>`);
    const elStart = await fixture<ItPagination>(html`<it-pagination align="start"></it-pagination>`);

    expect(elCenter.align).to.equal('center');
    expect(elEnd.align).to.equal('end');
    expect(elStart.align).to.equal('start');
  });

  it('can enable disable-responsive mode', async () => {
    const el = await fixture<ItPagination>(html`<it-pagination></it-pagination>`);
    el.disableResponsive = true;
    await el.updateComplete;
    expect(el.disableResponsive).to.be.true;
  });

  it('has nav tag with aria-label', async () => {
    const el = await fixture<ItPagination>(
      html`<it-pagination it-aria-label="Navigazione della pagina"></it-pagination>`,
    );
    const nav = el.shadowRoot?.querySelector('nav');
    expect(nav).to.exist;
    expect(nav?.getAttribute('aria-label')).to.equal('Navigazione della pagina');
  });

  it('supports custom aria-label', async () => {
    const el = await fixture<ItPagination>(html`<it-pagination it-aria-label="Paginazione"></it-pagination>`);
    const nav = el.shadowRoot?.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).to.equal('Paginazione');
  });

  it('supports prev and next slots', async () => {
    const el = await fixture(html`
      <it-pagination value="2">
        <a href="?page=1" slot="prev">Precedente</a>
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2">2</a>
        </it-pagination-item>
        <a href="?page=3" slot="next">Successiva</a>
      </it-pagination>
    `);

    const prevSlot = el.querySelector('[slot="prev"]');
    const nextSlot = el.querySelector('[slot="next"]');

    expect(prevSlot).to.exist;
    expect(nextSlot).to.exist;
  });

  it('can set total pages', async () => {
    const el = await fixture<ItPagination>(html`<it-pagination total="10"></it-pagination>`);
    expect(el.getAttribute('total')).to.equal('10');
  });

  it('disables prev button on first page', async () => {
    const el = await fixture(html`
      <it-pagination value="1" total="5">
        <a href="?page=0" slot="prev">Prev</a>
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2">2</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;

    const prevButton = el.querySelector('[slot="prev"]');
    expect(prevButton?.getAttribute('aria-disabled')).to.equal('true');
    expect(prevButton?.classList.contains('disabled')).to.be.true;
  });

  it('enables prev button when not on first page', async () => {
    const el = await fixture(html`
      <it-pagination value="2" total="5">
        <a href="?page=1" slot="prev">Prev</a>
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2">2</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;

    const prevButton = el.querySelector('[slot="prev"]');
    expect(prevButton?.hasAttribute('aria-disabled')).to.be.false;
    expect(prevButton?.classList.contains('disabled')).to.be.false;
  });

  it('disables next button on last page', async () => {
    const el = await fixture(html`
      <it-pagination value="5" total="5">
        <a href="?page=4" slot="prev">Prev</a>
        <it-pagination-item page="5">
          <a href="?page=5">5</a>
        </it-pagination-item>
        <a href="?page=6" slot="next">Next</a>
      </it-pagination>
    `);

    await el.updateComplete;

    const nextButton = el.querySelector('[slot="next"]');
    expect(nextButton?.getAttribute('aria-disabled')).to.equal('true');
    expect(nextButton?.classList.contains('disabled')).to.be.true;
  });

  it('enables next button when not on last page', async () => {
    const el = await fixture(html`
      <it-pagination value="3" total="5" it-aria-label="Navigazione della pagina">
        <a href="#" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
        </a>
        <it-pagination-item page="1">
          <a href="?page=3">3</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=3">3</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3">3</a>
        </it-pagination-item>
        <it-pagination-item page="4">
          <a href="?page=3">3</a>
        </it-pagination-item>
        <it-pagination-item page="5">
          <a href="?page=3">3</a>
        </it-pagination-item>
        <it-pagination-item page="6">
          <a href="?page=3">3</a>
        </it-pagination-item>
        <a href="#" slot="next">
          <it-icon name="it-chevron-left"></it-icon>
        </a>
      </it-pagination>
    `);

    await el.updateComplete; // Wait for queryAssignedElements
    await new Promise((resolve) => {
      setTimeout(resolve, 50);
    });

    const nextButton = el.querySelector('[slot="next"]');
    expect(nextButton?.hasAttribute('aria-disabled')).to.be.false;
  });

  it('uses pagination items count as total when total is not specified', async () => {
    const el = await fixture(html`
      <it-pagination value="3">
        <a href="?page=2" slot="prev">Prev</a>
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3">3</a>
        </it-pagination-item>
        <a href="?page=4" slot="next">Next</a>
      </it-pagination>
    `);

    await el.updateComplete;

    const nextButton = el.querySelector('[slot="next"]');
    expect(nextButton?.getAttribute('aria-disabled')).to.equal('true');
  });

  it('emits it-pagination-change event when page changes', async () => {
    const el = await fixture<ItPagination>(html`
      <it-pagination value="1">
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3">3</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;

    let eventFired = false;
    let eventDetail: any;

    el.addEventListener('it-pagination-change', (e: Event) => {
      eventFired = true;
      eventDetail = (e as CustomEvent).detail;
    });

    // Click on page 2
    const items = el.querySelectorAll('it-pagination-item');
    const page2 = items[1];
    page2.dispatchEvent(
      new CustomEvent('it-item-click', {
        detail: { page: '2' },
        bubbles: true,
      }),
    );

    await el.updateComplete;

    expect(eventFired).to.be.true;
    expect(eventDetail.page).to.equal(2);
    expect(el.value).to.equal('2');
  });

  it('does not emit event when clicking current page', async () => {
    const el = await fixture<ItPagination>(html`
      <it-pagination value="2">
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3">3</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;

    let eventFired = false;
    el.addEventListener('it-pagination-change', () => {
      eventFired = true;
    });

    const items = el.querySelectorAll('it-pagination-item');
    const page2 = items[1];
    page2.dispatchEvent(
      new CustomEvent('it-item-click', {
        detail: { page: '2' },
        bubbles: true,
      }),
    );

    await el.updateComplete;
    expect(eventFired).to.be.false;
  });

  it('handles prev button click', async () => {
    const el = await fixture<ItPagination>(html`
      <it-pagination value="3">
        <a href="#" slot="prev">Prev</a>
        <it-pagination-item page="2">
          <a href="?page=2">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3">3</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;

    let eventDetail: any;
    el.addEventListener('it-pagination-change', (e: Event) => {
      eventDetail = (e as CustomEvent).detail;
    });

    const prevButton = el.shadowRoot?.querySelector('.pagination-prev-wrapper');
    prevButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    await el.updateComplete;
    expect(eventDetail.page).to.equal(2);
    expect(el.value).to.equal('2');
  });

  it('handles next button click', async () => {
    const el = await fixture<ItPagination>(html`
      <it-pagination value="3">
        <a href="#" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
        </a>

        <it-pagination-item page="1">
          <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
        </it-pagination-item>
        <it-pagination-item page="4">
          <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
        </it-pagination-item>
        <it-pagination-item page="5">
          <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
        </it-pagination-item>

        <a href="#" slot="next">
          <it-icon name="it-chevron-right"></it-icon>
        </a>
      </it-pagination>
    `);

    await el.updateComplete;
    await el.updateComplete; // Wait for queryAssignedElements

    let eventDetail: any;
    el.addEventListener('it-pagination-change', (e: Event) => {
      eventDetail = (e as CustomEvent).detail;
    });

    const nextButton = el.shadowRoot?.querySelector('.pagination-next-wrapper');
    nextButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    await el.updateComplete;
    await new Promise((resolve) => {
      setTimeout(resolve, 50);
    });

    expect(eventDetail?.page).to.equal(4);
    expect(el.value).to.equal('4');
  });

  it('does not go below page 1 with prev button', async () => {
    const el = await fixture<ItPagination>(html`
      <it-pagination value="1">
        <a href="#" slot="prev">Prev</a>
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;

    let eventFired = false;
    el.addEventListener('it-pagination-change', () => {
      eventFired = true;
    });

    const prevButton = el.shadowRoot?.querySelector('.pagination-prev-wrapper');
    prevButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    await el.updateComplete;
    expect(eventFired).to.be.false;
    expect(el.value).to.equal('1');
  });

  it('does not exceed total with next button', async () => {
    const el = await fixture<ItPagination>(html`
      <it-pagination value="5" total="5">
        <a href="#" slot="next">Next</a>
        <it-pagination-item page="5">
          <a href="?page=5">5</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;

    let eventFired = false;
    el.addEventListener('it-pagination-change', () => {
      eventFired = true;
    });

    const nextButton = el.shadowRoot?.querySelector('.pagination-next-wrapper');
    nextButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    await el.updateComplete;
    expect(eventFired).to.be.false;
    expect(el.value).to.equal('5');
  });

  it('applies responsive classes by default', async () => {
    const el = await fixture<ItPagination>(html`
      <it-pagination value="1">
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3">3</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;

    const items = el.querySelectorAll('it-pagination-item');

    // Current page (1) should not have d-none
    expect(items[0].classList.contains('d-none')).to.be.false;

    // Non-current pages should have d-none d-sm-flex
    expect(items[1].classList.contains('d-none')).to.be.true;
    expect(items[1].classList.contains('d-sm-flex')).to.be.true;
    expect(items[2].classList.contains('d-none')).to.be.true;
    expect(items[2].classList.contains('d-sm-flex')).to.be.true;
  });

  it('supports page-changer slot', async () => {
    const el = await fixture(html`
      <it-pagination value="1">
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <div slot="page-changer">Page size selector</div>
      </it-pagination>
    `);

    const pageChanger = el.querySelector('[slot="page-changer"]');
    expect(pageChanger).to.exist;
    expect(pageChanger?.textContent).to.equal('Page size selector');
  });

  it('supports jump-to-page slot', async () => {
    const el = await fixture(html`
      <it-pagination value="1">
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <div slot="jump-to-page">Jump to page input</div>
      </it-pagination>
    `);

    const jumpToPage = el.querySelector('[slot="jump-to-page"]');
    expect(jumpToPage).to.exist;
    expect(jumpToPage?.textContent).to.equal('Jump to page input');
  });

  it('supports total slot', async () => {
    const el = await fixture(html`
      <it-pagination value="1">
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <span slot="total">di 10 pagine</span>
      </it-pagination>
    `);

    const totalSlot = el.querySelector('[slot="total"]');
    expect(totalSlot).to.exist;
    expect(totalSlot?.textContent).to.equal('di 10 pagine');
  });

  it('adds pagination-total class when total slot has content', async () => {
    const el = await fixture<ItPagination>(html`
      <it-pagination value="1">
        <it-pagination-item page="1">
          <a href="?page=1">1</a>
        </it-pagination-item>
        <span slot="total">di 10 pagine</span>
      </it-pagination>
    `);

    await el.updateComplete;
    const nav = el.shadowRoot?.querySelector('nav');
    expect(nav?.classList.contains('pagination-total')).to.be.true;
  });

  describe('Ellipsis (manual example)', () => {
    it('supports disabled pagination items with span instead of link', async () => {
      const el = await fixture<ItPagination>(html`
        <it-pagination value="26">
          <it-pagination-item page="1">
            <a href="#">1</a>
          </it-pagination-item>
          <it-pagination-item disabled>
            <span class="page-link">…</span>
          </it-pagination-item>
          <it-pagination-item page="26">
            <a href="#">26</a>
          </it-pagination-item>
        </it-pagination>
      `);

      await el.updateComplete;
      const items = el.querySelectorAll('it-pagination-item');

      expect(items.length).to.equal(3);
      expect(items[1].disabled).to.be.true;

      const ellipsisSpan = items[1].querySelector('.page-link');
      expect(ellipsisSpan?.textContent).to.equal('…');
    });
  });

  describe('Simple Mode', () => {
    it('has simpleMode property defaulting to false', async () => {
      const el = await fixture<ItPagination>(html`<it-pagination></it-pagination>`);
      expect(el.simpleMode).to.be.false;
    });

    it('renders current page / total in simple mode', async () => {
      const el = await fixture<ItPagination>(html`
        <it-pagination simple-mode value="3" total="5">
          <it-pagination-item page="1"><a href="#">1</a></it-pagination-item>
          <it-pagination-item page="2"><a href="#">2</a></it-pagination-item>
          <it-pagination-item page="3"><a href="#">3</a></it-pagination-item>
          <it-pagination-item page="4"><a href="#">4</a></it-pagination-item>
          <it-pagination-item page="5"><a href="#">5</a></it-pagination-item>
        </it-pagination>
      `);

      await el.updateComplete;

      const pageItems = el.shadowRoot?.querySelectorAll('.page-item');
      const currentPageSpan = Array.from(pageItems || []).find((item) =>
        item.querySelector('span[aria-current="page"]'),
      );

      expect(currentPageSpan).to.exist;
      expect(currentPageSpan?.textContent?.trim()).to.equal('3');
    });
  });

  describe('More Mode (Ellipsis with visiblePages)', () => {
    it('has visiblePages property defaulting to 5', async () => {
      const el = await fixture<ItPagination>(html`<it-pagination></it-pagination>`);
      expect(el.visiblePages).to.equal(5);
    });

    it('shows ellipsis when total pages exceed visiblePages', async () => {
      const el = await fixture<ItPagination>(html`
        <it-pagination value="25" total="50" visible-pages="5">
          ${Array.from({ length: 50 }, (_, i) => i + 1).map(
            (page) => html`
              <it-pagination-item page="${page}">
                <a href="#">${page}</a>
              </it-pagination-item>
            `,
          )}
        </it-pagination>
      `);

      await el.updateComplete;
      await new Promise((resolve) => {
        setTimeout(resolve, 50);
      });

      const ellipsis = el.shadowRoot?.querySelectorAll('.page-link');
      const ellipsisSpans = Array.from(ellipsis || []).filter((span) => span.textContent?.trim() === '...');

      expect(ellipsisSpans.length).to.be.greaterThan(0);
    });

    it('shows first page link when current page is far from start', async () => {
      const el = await fixture<ItPagination>(html`
        <it-pagination value="25" total="50" visible-pages="5">
          ${Array.from({ length: 50 }, (_, i) => i + 1).map(
            (page) => html`
              <it-pagination-item page="${page}">
                <a href="#">${page}</a>
              </it-pagination-item>
            `,
          )}
        </it-pagination>
      `);

      await el.updateComplete;
      await new Promise((resolve) => {
        setTimeout(resolve, 50);
      });

      const firstPageLink = el.shadowRoot?.querySelector('.page-link[href="#"]');
      expect(firstPageLink).to.exist;
      expect(firstPageLink?.textContent?.trim()).to.equal('1');
    });

    it('hides items not in visible pages range', async () => {
      const el = await fixture<ItPagination>(html`
        <it-pagination value="5" total="20" visible-pages="5">
          ${Array.from({ length: 20 }, (_, i) => i + 1).map(
            (page) => html`
              <it-pagination-item page="${page}">
                <a href="#">${page}</a>
              </it-pagination-item>
            `,
          )}
        </it-pagination>
      `);

      await el.updateComplete;
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
      });

      const items = el.querySelectorAll('it-pagination-item');
      const visibleItems = Array.from(items).filter((item) => !item.classList.contains('d-none'));

      // In more mode with visiblePages=5 and current=5, we should see around 5 items
      expect(visibleItems.length).to.be.at.most(5);
    });
  });
});
