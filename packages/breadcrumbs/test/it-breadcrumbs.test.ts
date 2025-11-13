/// <reference types="mocha"/>

import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import '@italia/breadcrumbs';

describe('it-breadcrumbs component', () => {
  describe('structure and rendering', () => {
    it('renders nav element with breadcrumb class', async () => {
      const el = await fixture(html`
        <it-breadcrumbs>
          <it-breadcrumb-item>Test</it-breadcrumb-item>
        </it-breadcrumbs>
      `);

      await elementUpdated(el);

      const nav = el.shadowRoot?.querySelector('nav');
      expect(nav).to.exist;
      expect(nav?.classList.contains('breadcrumb-container')).to.be.true;
    });

    it('renders breadcrumb list with correct classes', async () => {
      const el = await fixture(html`
        <it-breadcrumbs>
          <it-breadcrumb-item>Test</it-breadcrumb-item>
        </it-breadcrumbs>
      `);
      await elementUpdated(el);
      const ol = el.shadowRoot?.querySelector('ol');
      expect(ol).to.exist;
      expect(ol?.classList.contains('breadcrumb')).to.be.true;
    });

    it('renders links in light DOM for progressive enhancement', async () => {
      const el = await fixture(html`
        <it-breadcrumbs>
          <it-breadcrumb-item><a href="/home">Home</a></it-breadcrumb-item>
          <it-breadcrumb-item><a href="/library">Library</a></it-breadcrumb-item>
        </it-breadcrumbs>
      `);
      await elementUpdated(el);

      const firstItem = el.querySelector('it-breadcrumb-item');
      const link = firstItem?.querySelector('a');
      expect(link).to.exist;
      expect(link?.getAttribute('href')).to.equal('/home');
      expect(link?.textContent).to.equal('Home');
    });

    it('passes aria-label to nav element', async () => {
      const el = await fixture(html`
        <it-breadcrumbs it-aria-label="Navigation breadcrumb">
          <it-breadcrumb-item>Test</it-breadcrumb-item>
        </it-breadcrumbs>
      `);
      await elementUpdated(el);
      const nav = el.shadowRoot?.querySelector('nav');
      expect(nav?.getAttribute('aria-label')).to.equal('Navigation breadcrumb');
    });

    it('renders slotted breadcrumb items', async () => {
      const el = await fixture(html`
        <it-breadcrumbs>
          <it-breadcrumb-item><a href="/home">Home</a></it-breadcrumb-item>
          <it-breadcrumb-item><a href="/library">Library</a></it-breadcrumb-item>
          <it-breadcrumb-item>Data</it-breadcrumb-item>
        </it-breadcrumbs>
      `);
      await elementUpdated(el);
      const slot = el.shadowRoot?.querySelector('slot');
      expect(slot).to.exist;

      const items = Array.from(el.querySelectorAll('it-breadcrumb-item'));
      expect(items.length).to.equal(3);
    });
  });

  describe('breadcrumb interactions', () => {
    it('handles breadcrumb item current state', async () => {
      const el = await fixture(html`
        <it-breadcrumbs>
          <it-breadcrumb-item><a href="/home">Home</a></it-breadcrumb-item>
          <it-breadcrumb-item>Current Page</it-breadcrumb-item>
        </it-breadcrumbs>
      `);
      await elementUpdated(el);
      const items = Array.from(el.querySelectorAll('it-breadcrumb-item'));
      const currentItem = items[1];

      // Set the current state
      currentItem.setCurrent(true);
      await currentItem.updateComplete;

      const listItem = currentItem.shadowRoot?.querySelector('li');
      expect(listItem?.classList.contains('active')).to.be.true;
      expect(listItem?.getAttribute('aria-current')).to.equal('page');
    });

    it('handles custom separators', async () => {
      const el = await fixture(html`
        <it-breadcrumbs separator="&gt;">
          <it-breadcrumb-item><a href="/home">Home</a></it-breadcrumb-item>
          <it-breadcrumb-item><a href="/library">Library</a></it-breadcrumb-item>
          <it-breadcrumb-item>Current</it-breadcrumb-item>
        </it-breadcrumbs>
      `);
      await elementUpdated(el);
      const items = Array.from(el.querySelectorAll('it-breadcrumb-item'));
      const firstItem = items[0];

      const separator = firstItem.shadowRoot?.querySelector('.separator slot');
      expect(separator?.textContent?.trim()).to.equal('>');
    });

    it('applies dark mode styles when dark attribute is set', async () => {
      const el = await fixture(html`
        <it-breadcrumbs dark>
          <it-breadcrumb-item><a href="/home">Home</a></it-breadcrumb-item>
          <it-breadcrumb-item>Current</it-breadcrumb-item>
        </it-breadcrumbs>
      `);
      await elementUpdated(el);
      const ol = el.shadowRoot?.querySelector('ol');
      expect(ol?.classList.contains('dark')).to.be.true;
    });
  });
});
