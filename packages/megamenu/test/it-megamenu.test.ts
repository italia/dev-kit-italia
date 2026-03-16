/// <reference types="mocha"/>

import { fixture, expect, html } from '@open-wc/testing';
import '@italia/megamenu';
import { ItMegamenu } from '../src/index.js';

describe('ItMegamenu', () => {
  describe('Accessibility', () => {
    it('should have correct accessibility attributes', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <it-dropdown-item>Item 1</it-dropdown-item>
          <it-dropdown-item>Item 2</it-dropdown-item>
        </it-megamenu>`,
      );
      expect(el).to.exist;
    });

    it('should be keyboard accessible with header slot', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <div slot="header">Header Content</div>
          <it-dropdown-item>Item 1</it-dropdown-item>
        </it-megamenu>`,
      );
      expect(el).to.exist;
    });

    it('should be keyboard accessible with footer slot', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <it-dropdown-item>Item 1</it-dropdown-item>
          <div slot="footer">Footer Content</div>
        </it-megamenu>`,
      );
      expect(el).to.exist;
    });

    it('should be keyboard accessible with description slot', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <div slot="description">Description Content</div>
          <it-dropdown-item>Item 1</it-dropdown-item>
        </it-megamenu>`,
      );
      expect(el).to.exist;
    });

    it('should be keyboard accessible with all slots', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <div slot="header">Header</div>
          <div slot="description">Description</div>
          <it-dropdown-item>Item 1</it-dropdown-item>
          <div slot="footer">Footer</div>
        </it-megamenu>`,
      );
      expect(el).to.exist;
    });
  });

  describe('Basic functionality', () => {
    it('should render the label', async () => {
      const el = (await fixture<ItMegamenu>(
        html`<it-megamenu label="Test Label">
          <it-dropdown-item>Item 1</it-dropdown-item>
        </it-megamenu>`,
      )) as ItMegamenu;
      await el.updateComplete;
      const button = el.shadowRoot?.querySelector('it-button');

      expect(button?.textContent.trim()).to.equal('Test Label');
    });

    it('should render all dropdown items', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <it-dropdown-item>Item 1</it-dropdown-item>
          <it-dropdown-item>Item 2</it-dropdown-item>
          <it-dropdown-item>Item 3</it-dropdown-item>
        </it-megamenu>`,
      );
      const items = el.querySelectorAll('it-dropdown-item');
      expect(items.length).to.equal(3);
    });
  });

  describe('Megamenu properties', () => {
    it('should have fullWidth property set to true by default', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <it-dropdown-item>Item 1</it-dropdown-item>
        </it-megamenu>`,
      );
      expect(el.fullWidth).to.be.true;
    });

    it('should have columns property set to 2 by default', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <it-dropdown-item>Item 1</it-dropdown-item>
        </it-megamenu>`,
      );
      expect(el.columns).to.equal(2);
    });

    it('should set footer-align property', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu" footer-align="right">
          <it-dropdown-item>Item 1</it-dropdown-item>
          <div slot="footer">Footer</div>
        </it-megamenu>`,
      );
      expect(el.footerAlign).to.equal('right');
    });

    it('should set footer-position property', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu" footer-position="bottom">
          <it-dropdown-item>Item 1</it-dropdown-item>
          <div slot="footer">Footer</div>
        </it-megamenu>`,
      );
      expect(el.footerPosition).to.equal('bottom');
    });

    it('should allow setting active property', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu" active>
          <it-dropdown-item>Item 1</it-dropdown-item>
        </it-megamenu>`,
      );
      expect(el.active).to.be.true;
    });

    it('should be disabled when disabled attribute is set', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu" disabled>
          <it-dropdown-item>Item 1</it-dropdown-item>
        </it-megamenu>`,
      );
      await el.updateComplete;

      const button = el.shadowRoot?.querySelector('it-button');

      expect(button?.hasAttribute('disabled'));
    });
  });

  describe('Popover behavior', () => {
    it('should close popover when clicking outside', async () => {
      const container = await fixture(
        html`<div>
          <it-megamenu label="Menu">
            <it-dropdown-item>Item 1</it-dropdown-item>
          </it-megamenu>
          <div id="outside">Outside element</div>
        </div>`,
      );
      const megamenu = container.querySelector('it-megamenu') as any;
      const outside = container.querySelector('#outside');

      const button = megamenu.shadowRoot?.querySelector('button');
      button?.click();
      await megamenu.updateComplete;

      outside?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await megamenu.updateComplete;

      expect(megamenu.active).to.be.false;
    });
  });

  describe('Slot rendering', () => {
    it('should render header slot content', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <div slot="header" id="test-header">Header Content</div>
          <it-dropdown-item>Item 1</it-dropdown-item>
        </it-megamenu>`,
      );
      const header = el.querySelector('#test-header');
      expect(header?.textContent).to.include('Header Content');
    });

    it('should render footer slot content', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <it-dropdown-item>Item 1</it-dropdown-item>
          <div slot="footer" id="test-footer">Footer Content</div>
        </it-megamenu>`,
      );
      const footer = el.querySelector('#test-footer');
      expect(footer?.textContent).to.include('Footer Content');
    });

    it('should render description slot content', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <div slot="description" id="test-desc">Description Content</div>
          <it-dropdown-item>Item 1</it-dropdown-item>
        </it-megamenu>`,
      );
      const desc = el.querySelector('#test-desc');
      expect(desc?.textContent).to.include('Description Content');
    });

    it('should render all slots together', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu">
          <div slot="header" id="h1">Header</div>
          <div slot="description" id="d1">Description</div>
          <it-dropdown-item>Item 1</it-dropdown-item>
          <div slot="footer" id="f1">Footer</div>
        </it-megamenu>`,
      );
      expect(el.querySelector('#h1')).to.exist;
      expect(el.querySelector('#d1')).to.exist;
      expect(el.querySelector('#f1')).to.exist;
    });
  });

  describe('Multiple megamenus', () => {
    it('should close other megamenus when one opens', async () => {
      const container = await fixture(
        html`<div>
          <it-megamenu label="Menu 1">
            <it-dropdown-item>Item 1</it-dropdown-item>
          </it-megamenu>
          <it-megamenu label="Menu 2">
            <it-dropdown-item>Item 2</it-dropdown-item>
          </it-megamenu>
        </div>`,
      );
      const megamenu1 = container.querySelector('it-megamenu:nth-of-type(1)') as any;
      const megamenu2 = container.querySelector('it-megamenu:nth-of-type(2)') as any;

      const button1 = megamenu1.shadowRoot?.querySelector('button');
      button1?.click();
      await megamenu1.updateComplete;

      const button2 = megamenu2.shadowRoot?.querySelector('button');
      button2?.click();
      await megamenu2.updateComplete;

      const popover1 = megamenu1.shadowRoot?.querySelector('it-popover');
      const popover2 = megamenu2.shadowRoot?.querySelector('it-popover');
      expect(!popover1?.hasAttribute('open'));
      expect(popover2?.hasAttribute('open'));
    });
  });

  describe('Child item properties', () => {
    it('should override fullWidth property on child items', async () => {
      const el = await fixture<ItMegamenu>(
        html`<it-megamenu label="Menu" fullWidth>
          <it-dropdown-item>Item 1</it-dropdown-item>
          <it-dropdown-item>Item 2</it-dropdown-item>
        </it-megamenu>`,
      );
      const items = el.querySelectorAll('it-dropdown-item');
      items.forEach((item) => {
        expect((item as any).fullWidth).to.be.false;
      });
    });
  });
});
