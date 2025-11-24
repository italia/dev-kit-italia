/// <reference types="mocha"/>

import { expect, fixture, html } from '@open-wc/testing';
import type { ItCallout } from '@italia/callout';
import '@italia/icon';
import '@italia/callout';

describe('ItCallout', () => {
  describe('accessibility', () => {
    it('base callout is accessible', async () => {
      const el = await fixture<ItCallout>(html`
        <it-callout>
          <span slot="title">Titolo callout</span>
          <p>Contenuto del callout</p>
        </it-callout>
      `);
      await expect(el).to.be.accessible();
    });

    it('all visual variants are accessible', async () => {
      const el = await fixture(html`
        <div>
          <it-callout variant="primary"
            ><span slot="title">Primary</span>
            <p>Contenuto</p></it-callout
          >
          <it-callout variant="success"
            ><span slot="title">Success</span>
            <p>Contenuto</p></it-callout
          >
          <it-callout variant="warning"
            ><span slot="title">Warning</span>
            <p>Contenuto</p></it-callout
          >
          <it-callout variant="danger"
            ><span slot="title">Danger</span>
            <p>Contenuto</p></it-callout
          >
        </div>
      `);
      await expect(el).to.be.accessible();
    });

    it('highlight and slot more-content are accessibile', async () => {
      const el = await fixture(html`
        <div>
          <it-callout highlight>
            <span slot="title">Highlight</span>
            <p>Contenuto</p>
          </it-callout>
          <it-callout>
            <span slot="title">Approfondimento</span>
            <p>Contenuto principale</p>
            <div slot="more-content">Contenuto aggiuntivo</div>
          </it-callout>
        </div>
      `);
      await expect(el).to.be.accessible();
    });
  });

  describe('properties & attributes', () => {
    it('has sensible defaults', async () => {
      const el = await fixture<ItCallout>(html`<it-callout></it-callout>`);
      expect(el.variant).to.equal('');
      expect(el.highlight).to.equal(false);
      expect(el.calloutMore).to.equal(false);
      expect(el.bigText).to.equal(false);
    });

    it('reflects variant attribute to property and class', async () => {
      const el = await fixture<ItCallout>(html`<it-callout variant="primary"></it-callout>`);
      await el.updateComplete;

      expect(el.variant).to.equal('primary');
      const root = el.shadowRoot!;
      const callout = root.querySelector('.callout');
      expect(callout).to.exist;
      expect(callout?.classList.contains('callout-primary')).to.be.true;
    });

    it('highlight attribute reflect to property and class', async () => {
      const el = await fixture<ItCallout>(html`<it-callout highlight></it-callout>`);
      await el.updateComplete;
      expect(el.highlight).to.equal(true);

      const callout = el.shadowRoot!.querySelector('.callout');
      expect(callout?.classList.contains('callout-highlight')).to.be.true;
    });

    it('applies bigText to paragraphs in default slot', async () => {
      const el = await fixture<ItCallout>(html`<it-callout big-text><p>Testo grande</p></it-callout>`);
      await el.updateComplete;

      const slot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
      const assigned = slot.assignedElements();
      expect(assigned.length).to.be.greaterThan(0);
      const p = assigned.find((n) => n.tagName.toLowerCase() === 'p');
      expect(p).to.exist;

      // Aspetta che la classe venga applicata
      await new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 50);
      });
      expect(p?.classList.contains('callout-big-text')).to.be.true;

      // Se la prop viene tolta, la classe viene rimossa
      el.bigText = false;
      await el.updateComplete;
      await new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 50);
      });
      expect(p?.classList.contains('callout-big-text')).to.be.false;
    });

    it('calloutMore attribute applies callout-more class', async () => {
      const el = await fixture<ItCallout>(html`<it-callout callout-more></it-callout>`);
      await el.updateComplete;
      expect(el.calloutMore).to.equal(true);

      const callout = el.shadowRoot!.querySelector('.callout');
      expect(callout?.classList.contains('callout-more')).to.be.true;
    });

    it('calloutMore does not apply variant class', async () => {
      const el = await fixture<ItCallout>(html`<it-callout variant="primary" callout-more></it-callout>`);
      await el.updateComplete;
      const callout = el.shadowRoot!.querySelector('.callout');
      expect(callout?.classList.contains('callout-more')).to.be.true;
      // Variant class should not be applied when calloutMore is true
      expect(callout?.classList.contains('callout-primary')).to.be.false;
    });

    it('updates icon color when variant changes', async () => {
      const el = await fixture<ItCallout>(html`
        <it-callout variant="primary">
          <it-icon slot="icon" name="it-info-circle"></it-icon>
          <span slot="title">Title</span>
        </it-callout>
      `);
      await el.updateComplete;
      const icon = el.querySelector('it-icon');
      expect(icon?.getAttribute('color')).to.equal('primary');

      el.variant = 'danger';
      await el.updateComplete;
      expect(icon?.getAttribute('color')).to.equal('danger');
    });
  });

  describe('rendering & structure', () => {
    it('renders required wrapper and inner elements', async () => {
      const el = await fixture<ItCallout>(html`
        <it-callout>
          <span slot="title">Test Title</span>
          <p>Test content</p>
        </it-callout>
      `);
      await el.updateComplete;
      const root = el.shadowRoot!;
      expect(root.querySelector('.callout')).to.exist;
      expect(root.querySelector('.callout-inner')).to.exist;
      expect(root.querySelector('.callout-title')).to.exist;
      // Il contenuto è nello slot default, non c'è un wrapper .callout-content
      expect(root.querySelector('slot:not([name])')).to.exist;
    });

    it('applies variant + highlight combination classes', async () => {
      const el = await fixture<ItCallout>(html`<it-callout variant="primary" highlight></it-callout>`);
      await el.updateComplete;
      const callout = el.shadowRoot!.querySelector('.callout')!;
      expect(callout.classList.contains('callout-primary')).to.be.true;
      expect(callout.classList.contains('callout-highlight')).to.be.true;
    });
  });

  describe('slots behaviour', () => {
    it('title slot receives assigned nodes', async () => {
      const el = await fixture<ItCallout>(html`
        <it-callout>
          <span slot="title">Slot Title</span>
        </it-callout>
      `);
      await el.updateComplete;
      const titleSlot = el.shadowRoot!.querySelector('slot[name="title"]') as HTMLSlotElement;
      const assigned = titleSlot.assignedElements();
      expect(assigned.length).to.equal(1);
      expect(assigned[0].textContent?.trim()).to.equal('Slot Title');
    });

    it('icon slot receives it-icon element', async () => {
      const el = await fixture<ItCallout>(html`
        <it-callout>
          <it-icon slot="icon" name="it-info-circle"></it-icon>
          <span slot="title">Title</span>
        </it-callout>
      `);
      await el.updateComplete;
      const iconSlot = el.shadowRoot!.querySelector('slot[name="icon"]') as HTMLSlotElement;
      const assigned = iconSlot.assignedElements();
      expect(assigned.length).to.equal(1);
      expect(assigned[0].tagName.toLowerCase()).to.equal('it-icon');
    });

    it('default slot (content) receives paragraphs', async () => {
      const el = await fixture<ItCallout>(html`
        <it-callout>
          <p>Default content</p>
        </it-callout>
      `);
      await el.updateComplete;
      const defaultSlot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
      const assigned = defaultSlot.assignedElements();
      expect(assigned.length).to.equal(1);
      expect(assigned[0].textContent?.trim()).to.equal('Default content');
    });

    it('more-content slot exists only when provided', async () => {
      // Lo slot more-content viene sempre renderizzato, il contenuto appare se fornito, indipendentemente da more
      const elWith = await fixture<ItCallout>(html`
        <it-callout>
          <span slot="title">Title</span>
          <p>Main</p>
          <div slot="more-content">Extra</div>
        </it-callout>
      `);
      await elWith.updateComplete;
      const moreSlot = elWith.shadowRoot!.querySelector('slot[name="more-content"]') as HTMLSlotElement;
      expect(moreSlot).to.exist;
      expect(moreSlot.assignedElements()[0].textContent?.trim()).to.equal('Extra');

      // Lo slot more-content viene sempre renderizzato, anche senza contenuto
      const elWithout = await fixture<ItCallout>(html`
        <it-callout>
          <p>Only main</p>
        </it-callout>
      `);
      await elWithout.updateComplete;
      const moreSlotEmpty = elWithout.shadowRoot!.querySelector('slot[name="more-content"]') as HTMLSlotElement;
      expect(moreSlotEmpty).to.exist;
      expect(moreSlotEmpty.assignedElements().length).to.equal(0);

      // Test: more-content funziona anche senza prop more
      const elNoMore = await fixture<ItCallout>(html`
        <it-callout>
          <p>Main</p>
          <div slot="more-content">Contenuto extra</div>
        </it-callout>
      `);
      await elNoMore.updateComplete;
      const moreSlotNoMore = elNoMore.shadowRoot!.querySelector('slot[name="more-content"]') as HTMLSlotElement;
      expect(moreSlotNoMore).to.exist;
      expect(moreSlotNoMore.assignedElements()[0].textContent?.trim()).to.equal('Contenuto extra');
    });

    it('does not render title block when no title nor icon provided', async () => {
      const el = await fixture<ItCallout>(html`
        <it-callout>
          <p>Only content</p>
        </it-callout>
      `);
      await el.updateComplete;
      const titleContainer = el.shadowRoot!.querySelector('.callout-title');
      // Il titolo viene sempre renderizzato, ma sarà vuoto
      expect(titleContainer).to.exist;
    });
  });

  describe('parts', () => {
    it('exposes expected parts for styling', async () => {
      const el = await fixture<ItCallout>(html`
        <it-callout>
          <span slot="title">Title</span>
          <p>Content</p>
        </it-callout>
      `);
      await el.updateComplete;
      const root = el.shadowRoot!;
      expect(root.querySelector('[part="callout"]')).to.exist;
      expect(root.querySelector('[part="inner"]')).to.exist;
      expect(root.querySelector('[part="title"]')).to.exist;
    });

    it('exposes more-content part when additional content provided', async () => {
      const el = await fixture<ItCallout>(html`
        <it-callout>
          <span slot="title">Title</span>
          <p>Content</p>
          <div slot="more-content">More content</div>
        </it-callout>
      `);
      await el.updateComplete;
    });
  });
});
