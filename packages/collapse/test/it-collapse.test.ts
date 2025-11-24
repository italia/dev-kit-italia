/// <reference types="mocha"/>

import '@italia/collapse';
import { expect, fixture, html } from '@open-wc/testing';

import { type ItCollapse } from '@italia/collapse';

describe('Collapse component', () => {
  describe('accessibility', () => {
    it('default is accessible', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse>
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-collapse>
      `);
      await expect(el).to.be.accessible();
    });

    it('expanded is accessible', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse default-open>
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-collapse>
      `);
      await expect(el).to.be.accessible();
    });

    it('with custom trigger is accessible', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse>
          <button slot="trigger">Custom trigger</button>
          <div slot="content">Content</div>
        </it-collapse>
      `);
      await expect(el).to.be.accessible();
    });
    it('with as non button trigger is accessible', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse as="div">
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-collapse>
      `);
      await expect(el).to.be.accessible();
      const el2 = await fixture<ItCollapse>(html`
        <it-collapse as="p">
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-collapse>
      `);
      await expect(el2).to.be.accessible();
      const el3 = await fixture<ItCollapse>(html`
        <it-collapse as="a">
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-collapse>
      `);
      await expect(el3).to.be.accessible();
    });
  });

  describe('functionality', () => {
    it('toggles expanded state on click', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse>
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-collapse>
      `);

      expect(el.expanded).to.be.false;

      const button = el.shadowRoot?.querySelector('button');
      button?.click();

      await el.updateComplete;
      expect(el.expanded).to.be.true;
    });

    it('initializes as open when default-open is set', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse default-open>
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-collapse>
      `);

      expect(el.expanded).to.be.true;
    });

    it('dispatches it-collapse-toggle event', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse>
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-collapse>
      `);

      let eventFired = false;
      el.addEventListener('it-collapse-toggle', () => {
        eventFired = true;
      });

      const button = el.shadowRoot?.querySelector('button');
      button?.click();

      await el.updateComplete;
      expect(eventFired).to.be.true;
    });
  });
  describe('ARIA attributes - DEFAULT trigger', () => {
    it('sets correct aria-expanded on trigger', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse>
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-collapse>
      `);

      const button = el.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('aria-expanded')).to.equal('false');

      button?.click();
      await el.updateComplete;

      expect(button?.getAttribute('aria-expanded')).to.equal('true');
    });

    it('sets aria-controls on trigger', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse>
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-collapse>
      `);

      const button = el.shadowRoot?.querySelector('button');
      const content = el.shadowRoot?.querySelector('.collapse-content');

      expect(button?.getAttribute('aria-controls')).to.equal(content?.id);
    });
  });
  describe('ARIA attributes - CUSTOM trigger', () => {
    it('sets correct aria-expanded on trigger', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse>
          <button slot="trigger">Custom trigger</button>
          <div slot="content">Content</div>
        </it-collapse>
      `);

      const button = el?.querySelector('button');
      expect(button?.getAttribute('aria-expanded')).to.equal('false');

      button?.click();
      await el.updateComplete;

      expect(button?.getAttribute('aria-expanded')).to.equal('true');
    });

    it('sets aria-controls on trigger', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse>
          <button slot="trigger">Custom trigger</button>
          <div slot="content">Content</div>
        </it-collapse>
      `);

      const button = el?.querySelector('button');
      const content = el.shadowRoot?.querySelector('.collapse-content');

      expect(button?.getAttribute('aria-controls')).to.equal(content?.id);
    });
    it('sets aria-controls on trigger', async () => {
      const el = await fixture<ItCollapse>(html`
        <it-collapse>
          <button slot="trigger">Custom trigger</button>
          <div slot="content">Content</div>
        </it-collapse>
      `);

      const button = el?.querySelector('button');
      const content = el.shadowRoot?.querySelector('.collapse-content');

      expect(button?.getAttribute('aria-controls')).to.equal(content?.id);
    });
  });
});
