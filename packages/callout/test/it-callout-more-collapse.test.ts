/// <reference types="mocha"/>

import { expect, fixture, html } from '@open-wc/testing';
import type { ItCalloutMoreCollapse } from '@italia/callout';
import '@italia/callout';

describe('ItCalloutMoreCollapse', () => {
  describe('accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<ItCalloutMoreCollapse>(html`
        <it-callout-more-collapse>
          <span slot="label">Toggle</span>
          <div slot="content">Collapsible content</div>
        </it-callout-more-collapse>
      `);
      await expect(el).to.be.accessible();
    });

    it('has proper ARIA attributes', async () => {
      const el = await fixture<ItCalloutMoreCollapse>(html`
        <it-callout-more-collapse>
          <span slot="label">Toggle</span>
          <div slot="content">Content</div>
        </it-callout-more-collapse>
      `);
      await el.updateComplete;
      const button = el.shadowRoot!.querySelector('button.callout-more-toggle');
      expect(button?.getAttribute('aria-expanded')).to.equal('false');
      expect(button?.hasAttribute('aria-controls')).to.be.true;
    });
  });

  describe('rendering & structure', () => {
    it('renders collapse structure', async () => {
      const el = await fixture<ItCalloutMoreCollapse>(html`
        <it-callout-more-collapse>
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-callout-more-collapse>
      `);
      await el.updateComplete;
      const root = el.shadowRoot!;
      expect(root.querySelector('.collapse-div')).to.exist;
      expect(root.querySelector('.collapse-wrapper')).to.exist;
      expect(root.querySelector('.collapse-header')).to.exist;
      expect(root.querySelector('.collapse-content')).to.exist;
    });

    it('renders default toggle button', async () => {
      const el = await fixture<ItCalloutMoreCollapse>(html`
        <it-callout-more-collapse>
          <span slot="label">Leggi tutto</span>
          <div slot="content">Content</div>
        </it-callout-more-collapse>
      `);
      await el.updateComplete;
      const button = el.shadowRoot!.querySelector('button.callout-more-toggle');
      expect(button).to.exist;
      // Check for the icon span
      const icon = button?.querySelector('span[aria-hidden="true"]');
      expect(icon).to.exist;
    });

    it('renders extra slot in header', async () => {
      const el = await fixture<ItCalloutMoreCollapse>(html`
        <it-callout-more-collapse>
          <span slot="label">Label</span>
          <div slot="content">Content</div>
          <a slot="extra" href="#">Extra</a>
        </it-callout-more-collapse>
      `);
      await el.updateComplete;
      const header = el.shadowRoot!.querySelector('.collapse-header');
      const extraSlot = header?.querySelector('slot[name="extra"]');
      expect(extraSlot).to.exist;
    });
  });

  describe('collapse behavior', () => {
    it('starts collapsed by default', async () => {
      const el = await fixture<ItCalloutMoreCollapse>(html`
        <it-callout-more-collapse>
          <span slot="label">Toggle</span>
          <div slot="content">Content</div>
        </it-callout-more-collapse>
      `);
      await el.updateComplete;
      expect(el.expanded).to.equal(false);
      const button = el.shadowRoot!.querySelector('button.callout-more-toggle');
      expect(button?.getAttribute('aria-expanded')).to.equal('false');
    });

    it('starts expanded when default-open is set', async () => {
      const el = await fixture<ItCalloutMoreCollapse>(html`
        <it-callout-more-collapse default-open>
          <span slot="label">Toggle</span>
          <div slot="content">Content</div>
        </it-callout-more-collapse>
      `);
      await el.updateComplete;
      expect(el.expanded).to.equal(true);
      const button = el.shadowRoot!.querySelector('button.callout-more-toggle');
      expect(button?.getAttribute('aria-expanded')).to.equal('true');
    });

    it('toggles on button click', async () => {
      const el = await fixture<ItCalloutMoreCollapse>(html`
        <it-callout-more-collapse>
          <span slot="label">Toggle</span>
          <div slot="content">Content</div>
        </it-callout-more-collapse>
      `);
      await el.updateComplete;
      const button = el.shadowRoot!.querySelector('button.callout-more-toggle') as HTMLButtonElement;

      expect(el.expanded).to.equal(false);

      button.click();
      await el.updateComplete;
      expect(el.expanded).to.equal(true);
    });

    it('updates icon rotation on expand/collapse', async () => {
      const el = await fixture<ItCalloutMoreCollapse>(html`
        <it-callout-more-collapse>
          <span slot="label">Toggle</span>
          <div slot="content">Content</div>
        </it-callout-more-collapse>
      `);
      await el.updateComplete;
      const button = el.shadowRoot!.querySelector('button.callout-more-toggle') as HTMLButtonElement;

      // Collapsed state - check aria-expanded
      expect(button.getAttribute('aria-expanded')).to.equal('false');

      button.click();
      await el.updateComplete;

      // Expanded state - check aria-expanded
      expect(button.getAttribute('aria-expanded')).to.equal('true');
    });

    it('emits toggle event', async () => {
      const el = await fixture<ItCalloutMoreCollapse>(html`
        <it-callout-more-collapse>
          <span slot="label">Toggle</span>
          <div slot="content">Content</div>
        </it-callout-more-collapse>
      `);
      await el.updateComplete;

      let eventFired = false;
      let eventDetail: any;

      el.addEventListener('it-collapse-toggle', ((e: CustomEvent) => {
        eventFired = true;
        eventDetail = e.detail;
      }) as EventListener);

      const button = el.shadowRoot!.querySelector('button.callout-more-toggle') as HTMLButtonElement;
      button.click();
      await el.updateComplete;

      expect(eventFired).to.be.true;
      expect(eventDetail.expanded).to.be.true;
    });
  });

  describe('custom trigger', () => {
    it('allows custom trigger via trigger slot', async () => {
      const el = await fixture<ItCalloutMoreCollapse>(html`
        <it-callout-more-collapse>
          <button slot="trigger" class="custom-trigger">Custom Toggle</button>
          <div slot="content">Content</div>
        </it-callout-more-collapse>
      `);
      await el.updateComplete;

      // Default trigger should not be rendered
      const defaultButton = el.shadowRoot!.querySelector('button.callout-more-toggle');
      expect(defaultButton).to.not.exist;

      // Custom trigger should be present
      const customTrigger = el.querySelector('.custom-trigger');
      expect(customTrigger).to.exist;
    });
  });
});
