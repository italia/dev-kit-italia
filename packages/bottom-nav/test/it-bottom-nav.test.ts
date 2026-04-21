/// <reference types="mocha"/>

import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import '@italia/bottom-nav';

describe('it-bottom-nav component', () => {
  afterEach(() => {
    document.querySelectorAll('it-bottom-nav').forEach((el) => el.remove());
  });

  describe('structure and rendering', () => {
    it('renders nav element with bottom-nav class', async () => {
      const el = await fixture(html`
        <it-bottom-nav>
          <it-bottom-nav-item><a href="#">Test</a></it-bottom-nav-item>
        </it-bottom-nav>
      `);

      await elementUpdated(el);

      const nav = el.shadowRoot?.querySelector('nav');
      expect(nav).to.exist;
      expect(nav?.classList.contains('bottom-nav')).to.be.true;
    });

    it('renders a ul inside the nav', async () => {
      const el = await fixture(html`
        <it-bottom-nav>
          <it-bottom-nav-item><a href="#">Test</a></it-bottom-nav-item>
        </it-bottom-nav>
      `);
      await elementUpdated(el);

      const ul = el.shadowRoot?.querySelector('nav ul');
      expect(ul).to.exist;
    });

    it('renders links in light DOM for progressive enhancement', async () => {
      const el = await fixture(html`
        <it-bottom-nav>
          <it-bottom-nav-item><a href="/home">Home</a></it-bottom-nav-item>
          <it-bottom-nav-item><a href="/docs">Documenti</a></it-bottom-nav-item>
        </it-bottom-nav>
      `);
      await elementUpdated(el);

      const items = el.querySelectorAll('it-bottom-nav-item');
      const firstLink = items[0].querySelector('a');
      expect(firstLink).to.exist;
      expect(firstLink?.getAttribute('href')).to.equal('/home');
      expect(firstLink?.textContent).to.equal('Home');
    });

    it('passes aria-label to nav element', async () => {
      const el = await fixture(html`
        <it-bottom-nav it-aria-label="Navigazione mobile">
          <it-bottom-nav-item><a href="#">Test</a></it-bottom-nav-item>
        </it-bottom-nav>
      `);
      await elementUpdated(el);

      const nav = el.shadowRoot?.querySelector('nav');
      expect(nav?.getAttribute('aria-label')).to.equal('Navigazione mobile');
    });

    it('renders slotted items', async () => {
      const el = await fixture(html`
        <it-bottom-nav>
          <it-bottom-nav-item><a href="#">Uno</a></it-bottom-nav-item>
          <it-bottom-nav-item><a href="#">Due</a></it-bottom-nav-item>
          <it-bottom-nav-item><a href="#">Tre</a></it-bottom-nav-item>
        </it-bottom-nav>
      `);
      await elementUpdated(el);

      const items = el.querySelectorAll('it-bottom-nav-item');
      expect(items.length).to.equal(3);
    });
  });

  describe('fixed positioning via StickyController', () => {
    it('has bs-is-fixed-bottom class immediately on connect', async () => {
      const el = await fixture(html`
        <it-bottom-nav>
          <it-bottom-nav-item><a href="#">Test</a></it-bottom-nav-item>
        </it-bottom-nav>
      `);
      await elementUpdated(el);

      expect(el.classList.contains('bs-is-fixed-bottom')).to.be.true;
    });

    it('removes bs-is-fixed-bottom when disconnected', async () => {
      const el = await fixture(html`
        <it-bottom-nav>
          <it-bottom-nav-item><a href="#">Test</a></it-bottom-nav-item>
        </it-bottom-nav>
      `);
      await elementUpdated(el);

      expect(el.classList.contains('bs-is-fixed-bottom')).to.be.true;
      el.remove();

      // Allow disconnectedCallback to run
      await new Promise((resolve) => requestAnimationFrame(resolve));
      expect(el.classList.contains('bs-is-fixed-bottom')).to.be.false;
    });

    it('stacks two bottom-nav elements upward when both present', async () => {
      const nav1 = document.createElement('it-bottom-nav') as HTMLElement;
      nav1.innerHTML = '<it-bottom-nav-item><a href="#">A</a></it-bottom-nav-item>';
      const nav2 = document.createElement('it-bottom-nav') as HTMLElement;
      nav2.innerHTML = '<it-bottom-nav-item><a href="#">B</a></it-bottom-nav-item>';

      document.body.appendChild(nav1);
      document.body.appendChild(nav2);
      await new Promise((resolve) => requestAnimationFrame(resolve));

      expect(nav1.classList.contains('bs-is-fixed-bottom')).to.be.true;
      expect(nav2.classList.contains('bs-is-fixed-bottom')).to.be.true;

      // nav2 connects after nav1, so it must be pushed upward
      const nav2Bottom = parseInt((nav2 as HTMLElement).style.bottom || '0', 10);
      expect(nav2Bottom).to.be.greaterThanOrEqual(0);

      nav1.remove();
      nav2.remove();
    });
  });

  describe('it-bottom-nav-item', () => {
    it('renders a li element', async () => {
      const item = await fixture(html`
        <it-bottom-nav-item><a href="#">Test</a></it-bottom-nav-item>
      `);
      await elementUpdated(item);

      const li = item.shadowRoot?.querySelector('li');
      expect(li).to.exist;
    });

    it('sets aria-current="page" on slotted link when active', async () => {
      const item = await fixture(html`
        <it-bottom-nav-item active><a href="#">Home</a></it-bottom-nav-item>
      `);
      await elementUpdated(item);

      const link = item.querySelector('a');
      expect(link?.getAttribute('aria-current')).to.equal('page');
    });

    it('removes aria-current when active is false', async () => {
      const item = await fixture(html`
        <it-bottom-nav-item><a href="#">Home</a></it-bottom-nav-item>
      `);
      await elementUpdated(item);

      const link = item.querySelector('a');
      expect(link?.hasAttribute('aria-current')).to.be.false;
    });

    it('updates aria-current reactively when active changes', async () => {
      const item = await fixture<HTMLElement & { active: boolean }>(html`
        <it-bottom-nav-item><a href="#">Home</a></it-bottom-nav-item>
      `);
      await elementUpdated(item);

      const link = item.querySelector('a');
      expect(link?.hasAttribute('aria-current')).to.be.false;

      (item as any).active = true;
      await elementUpdated(item);

      expect(link?.getAttribute('aria-current')).to.equal('page');

      (item as any).active = false;
      await elementUpdated(item);

      expect(link?.hasAttribute('aria-current')).to.be.false;
    });

    it('reflects active attribute on the host element', async () => {
      const item = await fixture(html`
        <it-bottom-nav-item active><a href="#">Test</a></it-bottom-nav-item>
      `);
      await elementUpdated(item);

      expect(item.hasAttribute('active')).to.be.true;
    });

    it('exposes syncAriaOnLink as a public method', async () => {
      const item = await fixture(html`
        <it-bottom-nav-item><a href="#">Test</a></it-bottom-nav-item>
      `);
      await elementUpdated(item);

      expect(typeof (item as any).syncAriaOnLink).to.equal('function');
    });

    it('works with complex link structure (icon + label)', async () => {
      const item = await fixture(html`
        <it-bottom-nav-item active>
          <a href="#">
            <it-icon name="it-comment"></it-icon>
            <span class="bottom-nav-label">messaggi</span>
          </a>
        </it-bottom-nav-item>
      `);
      await elementUpdated(item);

      const link = item.querySelector('a');
      expect(link?.getAttribute('aria-current')).to.equal('page');
      expect(link?.querySelector('it-icon')).to.exist;
      expect(link?.querySelector('.bottom-nav-label')).to.exist;
    });

    it('syncs aria-current when slot content changes', async () => {
      const item = await fixture<HTMLElement>(html`
        <it-bottom-nav-item active><a href="#">Old</a></it-bottom-nav-item>
      `);
      await elementUpdated(item);

      let link = item.querySelector('a');
      expect(link?.getAttribute('aria-current')).to.equal('page');

      // Replace slot content
      item.innerHTML = '<a href="#">New</a>';
      await elementUpdated(item);

      link = item.querySelector('a');
      expect(link?.getAttribute('aria-current')).to.equal('page');
    });

    it('handles multiple links in slot (sets aria-current on first anchor)', async () => {
      const item = await fixture(html`
        <it-bottom-nav-item active>
          <a href="#1">Link 1</a>
          <span>Text</span>
          <a href="#2">Link 2</a>
        </it-bottom-nav-item>
      `);
      await elementUpdated(item);

      const links = item.querySelectorAll('a');
      expect(links[0]?.getAttribute('aria-current')).to.equal('page');
      expect(links[1]?.hasAttribute('aria-current')).to.be.false;
    });

    it('renders li with part="bottom-nav-item" for styling', async () => {
      const item = await fixture(html`
        <it-bottom-nav-item><a href="#">Test</a></it-bottom-nav-item>
      `);
      await elementUpdated(item);

      const li = item.shadowRoot?.querySelector('li');
      expect(li?.getAttribute('part')).to.equal('bottom-nav-item');
    });

    it('slot change event triggers aria sync', async () => {
      const item = await fixture<HTMLElement>(html`
        <it-bottom-nav-item active></it-bottom-nav-item>
      `);
      await elementUpdated(item);

      // Add content after render
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = 'Dynamic';
      item.appendChild(link);

      await elementUpdated(item);
      await new Promise((resolve) => requestAnimationFrame(resolve));

      expect(link.getAttribute('aria-current')).to.equal('page');
    });

    it('active attribute can be set and removed dynamically', async () => {
      const item = await fixture<HTMLElement & { active: boolean }>(html`
        <it-bottom-nav-item><a href="#">Test</a></it-bottom-nav-item>
      `);
      await elementUpdated(item);

      expect(item.hasAttribute('active')).to.be.false;

      item.setAttribute('active', '');
      await elementUpdated(item);
      expect(item.hasAttribute('active')).to.be.true;

      item.removeAttribute('active');
      await elementUpdated(item);
      expect(item.hasAttribute('active')).to.be.false;
    });

    it('works correctly within it-bottom-nav parent', async () => {
      const parent = await fixture(html`
        <it-bottom-nav>
          <it-bottom-nav-item active>
            <a href="#home">Home</a>
          </it-bottom-nav-item>
          <it-bottom-nav-item>
            <a href="#docs">Docs</a>
          </it-bottom-nav-item>
        </it-bottom-nav>
      `);
      await elementUpdated(parent);

      const items = parent.querySelectorAll('it-bottom-nav-item');
      const firstLink = items[0].querySelector('a');
      const secondLink = items[1].querySelector('a');

      expect(firstLink?.getAttribute('aria-current')).to.equal('page');
      expect(secondLink?.hasAttribute('aria-current')).to.be.false;
    });

    it('does not set aria-current on non-anchor elements', async () => {
      const item = await fixture(html`
        <it-bottom-nav-item active>
          <span>Not a link</span>
          <div>Other content</div>
        </it-bottom-nav-item>
      `);
      await elementUpdated(item);

      const span = item.querySelector('span');
      const div = item.querySelector('div');

      expect(span?.hasAttribute('aria-current')).to.be.false;
      expect(div?.hasAttribute('aria-current')).to.be.false;
    });

    it('progressively enhances: link is functional without JavaScript', async () => {
      const item = await fixture(html`
        <it-bottom-nav-item active>
          <a href="/home">Home Page</a>
        </it-bottom-nav-item>
      `);
      await elementUpdated(item);

      const link = item.querySelector('a') as HTMLAnchorElement;
      expect(link?.href).to.include('/home');
      expect(link?.textContent).to.equal('Home Page');
    });
  });
});
