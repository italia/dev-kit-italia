/// <reference types="mocha"/>

import { expect, fixture, html } from '@open-wc/testing';
import type { ItCalloutMore } from '@italia/callout';
import '@italia/callout';

describe('ItCalloutMore', () => {
  describe('accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<ItCalloutMore>(html`
        <it-callout-more>
          <span slot="label">Leggi tutto</span>
          <div slot="content">Contenuto richiudibile</div>
        </it-callout-more>
      `);
      await expect(el).to.be.accessible();
    });

    it('is accessible with extra slot', async () => {
      const el = await fixture<ItCalloutMore>(html`
        <it-callout-more>
          <span slot="label">Leggi tutto</span>
          <div slot="content">Contenuto richiudibile</div>
          <a slot="extra" href="#">Download PDF</a>
        </it-callout-more>
      `);
      await expect(el).to.be.accessible();
    });
  });

  describe('properties & attributes', () => {
    it('has sensible defaults', async () => {
      const el = await fixture<ItCalloutMore>(html`<it-callout-more></it-callout-more>`);
      expect(el.variant).to.equal('primary');
      expect(el.size).to.equal(null);
      expect(el.outline).to.equal(false);
      expect(el.as).to.equal('button');
      expect(el.defaultOpen).to.equal(false);
    });

    it('reflects variant attribute', async () => {
      const el = await fixture<ItCalloutMore>(html`<it-callout-more variant="success"></it-callout-more>`);
      expect(el.variant).to.equal('success');
    });

    it('reflects outline attribute', async () => {
      const el = await fixture<ItCalloutMore>(html`<it-callout-more outline></it-callout-more>`);
      expect(el.outline).to.equal(true);
    });

    it('reflects default-open attribute', async () => {
      const el = await fixture<ItCalloutMore>(html`<it-callout-more default-open></it-callout-more>`);
      expect(el.defaultOpen).to.equal(true);
    });

    it('reflects size attribute', async () => {
      const el = await fixture<ItCalloutMore>(html`<it-callout-more size="sm"></it-callout-more>`);
      expect(el.size).to.equal('sm');
    });
  });

  describe('rendering & structure', () => {
    it('renders wrapper and collapse component', async () => {
      const el = await fixture<ItCalloutMore>(html`
        <it-callout-more>
          <span slot="label">Label</span>
          <div slot="content">Content</div>
        </it-callout-more>
      `);
      await el.updateComplete;
      const root = el.shadowRoot!;
      expect(root.querySelector('.callout-more')).to.exist;
      expect(root.querySelector('it-callout-more-collapse')).to.exist;
    });

    it('passes props to collapse component', async () => {
      const el = await fixture<ItCalloutMore>(html`
        <it-callout-more variant="danger" size="lg" outline default-open>
          <span slot="label">Label</span>
        </it-callout-more>
      `);
      await el.updateComplete;
      const collapse = el.shadowRoot!.querySelector('it-callout-more-collapse');
      expect(collapse?.getAttribute('variant')).to.equal('danger');
      expect(collapse?.getAttribute('size')).to.equal('lg');
      expect(collapse?.hasAttribute('outline')).to.be.true;
      expect(collapse?.hasAttribute('default-open')).to.be.true;
    });
  });

  describe('slots', () => {
    it('forwards label slot to collapse', async () => {
      const el = await fixture<ItCalloutMore>(html`
        <it-callout-more>
          <span slot="label">Test Label</span>
        </it-callout-more>
      `);
      await el.updateComplete;
      const labelSlot = el.querySelector('[slot="label"]');
      expect(labelSlot?.textContent).to.equal('Test Label');
    });

    it('forwards content slot to collapse', async () => {
      const el = await fixture<ItCalloutMore>(html`
        <it-callout-more>
          <div slot="content">Test Content</div>
        </it-callout-more>
      `);
      await el.updateComplete;
      const contentSlot = el.querySelector('[slot="content"]');
      expect(contentSlot?.textContent).to.equal('Test Content');
    });

    it('forwards extra slot to collapse', async () => {
      const el = await fixture<ItCalloutMore>(html`
        <it-callout-more>
          <a slot="extra" href="#">Extra Link</a>
        </it-callout-more>
      `);
      await el.updateComplete;
      const extraSlot = el.querySelector('[slot="extra"]');
      expect(extraSlot?.textContent).to.equal('Extra Link');
    });
  });
});
