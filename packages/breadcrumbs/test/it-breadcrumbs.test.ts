/// <reference types="mocha"/>

import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import '@italia/breadcrumbs';

describe('it-breadcrumb component', () => {
  describe('structure and rendering', () => {
    it('renders nav element with breadcrumb class', async () => {
      const el = await fixture(html`
        <it-breadcrumb>
          <it-breadcrumb-item>Test</it-breadcrumb-item>
        </it-breadcrumb>
      `);

      await elementUpdated(el);

      const nav = el.shadowRoot?.querySelector('nav');
      expect(nav).to.exist;
      expect(nav?.classList.contains('breadcrumb-container')).to.be.true;
    });

    it('renders breadcrumb list with correct classes', async () => {
      const el = await fixture(html`
        <it-breadcrumb>
          <it-breadcrumb-item>Test</it-breadcrumb-item>
        </it-breadcrumb>
      `);
      await elementUpdated(el);
      const ol = el.shadowRoot?.querySelector('ol');
      expect(ol).to.exist;
      expect(ol?.classList.contains('breadcrumb')).to.be.true;
    });

    it('passes aria-label to nav element', async () => {
      const el = await fixture(html`
        <it-breadcrumb label="Navigation breadcrumb">
          <it-breadcrumb-item>Test</it-breadcrumb-item>
        </it-breadcrumb>
      `);
      await elementUpdated(el);
      const nav = el.shadowRoot?.querySelector('nav');
      expect(nav?.getAttribute('aria-label')).to.equal('Navigation breadcrumb');
    });

    it('renders slotted breadcrumb items', async () => {
      const el = await fixture(html`
        <it-breadcrumb>
          <it-breadcrumb-item href="/home">Home</it-breadcrumb-item>
          <it-breadcrumb-item href="/library">Library</it-breadcrumb-item>
          <it-breadcrumb-item>Data</it-breadcrumb-item>
        </it-breadcrumb>
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
        <it-breadcrumb>
          <it-breadcrumb-item href="/home">Home</it-breadcrumb-item>
          <it-breadcrumb-item>Current Page</it-breadcrumb-item>
        </it-breadcrumb>
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
        <it-breadcrumb separator="&gt;">
          <it-breadcrumb-item href="/home">Home</it-breadcrumb-item>
          <it-breadcrumb-item href="/library">Library</it-breadcrumb-item>
        </it-breadcrumb>
      `);
      await elementUpdated(el);
      const items = Array.from(el.querySelectorAll('it-breadcrumb-item'));
      const firstItem = items[0];

      const separator = firstItem.shadowRoot?.querySelector('.separator slot');
      expect(separator?.textContent?.trim()).to.equal('>');
    });

    it('applies dark mode styles when dark attribute is set', async () => {
      const el = await fixture(html`
        <it-breadcrumb dark>
          <it-breadcrumb-item href="/home">Home</it-breadcrumb-item>
        </it-breadcrumb>
      `);
      await elementUpdated(el);
      const ol = el.shadowRoot?.querySelector('ol');
      expect(ol?.classList.contains('dark')).to.be.true;
    });
  });
});
