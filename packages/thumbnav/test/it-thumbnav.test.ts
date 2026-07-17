/// <reference types="mocha"/>

import { html, fixture, expect, elementUpdated } from '@open-wc/testing';
import '../src/index.js';

describe('ItThumbnav', () => {
  describe('structure', () => {
    it('is registered and renders ul with thumb-nav class', async () => {
      const el = await fixture(html`
        <it-thumbnav>
          <it-thumbnav-item><a href="#">Test</a></it-thumbnav-item>
        </it-thumbnav>
      `);
      expect(customElements.get('it-thumbnav')).to.be.a('function');
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul).to.exist;
      expect(ul?.classList.contains('thumb-nav')).to.be.true;
    });

    it('renders slotted it-thumbnav-item children', async () => {
      const el = await fixture(html`
        <it-thumbnav>
          <it-thumbnav-item><a href="#">Item 1</a></it-thumbnav-item>
          <it-thumbnav-item><a href="#">Item 2</a></it-thumbnav-item>
        </it-thumbnav>
      `);
      const items = Array.from(el.querySelectorAll('it-thumbnav-item'));
      expect(items.length).to.equal(2);
    });
  });

  describe('it-thumbnav-item', () => {
    it('is registered and renders li', async () => {
      const el = await fixture(html`
        <it-thumbnav-item>
          <a href="#"><img src="test.jpg" alt="test" /></a>
        </it-thumbnav-item>
      `);
      expect(customElements.get('it-thumbnav-item')).to.be.a('function');
      const li = el.shadowRoot?.querySelector('li');
      expect(li).to.exist;
    });

    it('renders slotted anchor', async () => {
      const el = await fixture(html`
        <it-thumbnav-item>
          <a href="https://example.com" class="ratio ratio-3x2"><img src="test.jpg" alt="test" /></a>
        </it-thumbnav-item>
      `);
      const link = el.querySelector('a');
      expect(link).to.exist;
      expect(link?.getAttribute('href')).to.equal('https://example.com');
    });
  });

  describe('properties', () => {
    it('applies small class when small=true', async () => {
      const el = await fixture(html` <it-thumbnav small></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-small')).to.be.true;
    });

    it('applies vertical class when vertical=true', async () => {
      const el = await fixture(html` <it-thumbnav vertical></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-vertical')).to.be.true;
    });

    it('applies fixed class when fixed=true', async () => {
      const el = await fixture(html` <it-thumbnav fixed></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-fixed')).to.be.true;
    });

    it('applies hover="nozoom" class', async () => {
      const el = await fixture(html` <it-thumbnav hover="nozoom"></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-nozoom')).to.be.true;
    });

    it('applies hover="black" class', async () => {
      const el = await fixture(html` <it-thumbnav hover="black"></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-black')).to.be.true;
    });

    it('applies hover="primary" class', async () => {
      const el = await fixture(html` <it-thumbnav hover="primary"></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-primary')).to.be.true;
    });

    it('applies auto and auto-2 classes when auto=2', async () => {
      const el = await fixture(html` <it-thumbnav auto="2"></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-auto')).to.be.true;
      expect(ul?.classList.contains('thumb-nav-auto-2')).to.be.true;
    });

    it('applies auto and auto-3 classes when auto=3', async () => {
      const el = await fixture(html` <it-thumbnav auto="3"></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-auto')).to.be.true;
      expect(ul?.classList.contains('thumb-nav-auto-3')).to.be.true;
    });

    it('applies position="bottom" class', async () => {
      const el = await fixture(html` <it-thumbnav position="bottom"></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-bottom')).to.be.true;
    });

    it('applies position="left" class for vertical overlay', async () => {
      const el = await fixture(html` <it-thumbnav position="left"></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-left')).to.be.true;
    });

    it('auto-applies thumb-nav-vertical when position="left"', async () => {
      const el = await fixture(html` <it-thumbnav position="left"></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-vertical')).to.be.true;
    });

    it('auto-applies thumb-nav-vertical when position="right"', async () => {
      const el = await fixture(html` <it-thumbnav position="right"></it-thumbnav> `);
      await elementUpdated(el);
      const ul = el.shadowRoot?.querySelector('ul');
      expect(ul?.classList.contains('thumb-nav-vertical')).to.be.true;
      expect(ul?.classList.contains('thumb-nav-right')).to.be.true;
    });
  });

  describe('accessibility', () => {
    it('uses semantic ul/li structure for screen readers', async () => {
      const el = await fixture(html`
        <it-thumbnav>
          <it-thumbnav-item><a href="#">Link</a></it-thumbnav-item>
        </it-thumbnav>
      `);
      const ul = el.shadowRoot?.querySelector('ul');
      const li = el.querySelector('it-thumbnav-item')?.shadowRoot?.querySelector('li');
      expect(ul?.tagName).to.equal('UL');
      expect(li?.tagName).to.equal('LI');
    });

    it('exposes role="listitem" on the item host and role="presentation" on the inner li', async () => {
      const el = await fixture(html`
        <it-thumbnav>
          <it-thumbnav-item><a href="#">Link</a></it-thumbnav-item>
        </it-thumbnav>
      `);
      await elementUpdated(el);
      const item = el.querySelector('it-thumbnav-item');
      expect(item?.getAttribute('role')).to.equal('listitem');
      const li = item?.shadowRoot?.querySelector('li');
      expect(li?.getAttribute('role')).to.equal('presentation');
    });
  });
});
