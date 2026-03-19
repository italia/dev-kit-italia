/// <reference types="mocha"/>

import '@italia/timeline';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import type { ItTimelineElement } from '@italia/timeline';

describe('<it-timeline-element>', () => {
  describe('struttura e rendering (light DOM)', () => {
    it('renderizza il contenitore timeline-element nel light DOM', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
      `);

      const element = el.querySelector('.timeline-element');
      expect(element).to.exist;
    });

    it('renderizza il pin wrapper con classe it-pin-wrapper', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
      `);

      const pinWrapper = el.querySelector('.it-pin-wrapper');
      expect(pinWrapper).to.exist;
    });

    it('renderizza il pin-text con il contenuto della data', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
      `);

      const pinText = el.querySelector('.pin-text');
      expect(pinText).to.exist;
      expect(pinText?.textContent?.trim()).to.equal('MAGGIO 2026');
    });

    it('non renderizza il pin-text se la data non è fornita', async () => {
      const el = await fixture<ItTimelineElement>(html` <it-timeline-element></it-timeline-element> `);

      const pinText = el.querySelector('.pin-text');
      expect(pinText).to.not.exist;
    });

    it('è accessibile', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026">
          <p>Contenuto elemento timeline</p>
        </it-timeline-element>
      `);

      await expect(el).to.be.accessible();
    });
  });

  describe('attributo: variant', () => {
    it('non aggiunge classi variante se variant è vuoto (default)', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
      `);

      const pinWrapper = el.querySelector('.it-pin-wrapper');
      expect(pinWrapper?.classList.contains('it-now')).to.be.false;
      expect(pinWrapper?.classList.contains('it-evidence')).to.be.false;
    });

    it('aggiunge la classe it-evidence quando variant="it-evidence"', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element variant="it-evidence" date="MAGGIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);

      const pinWrapper = el.querySelector('.it-pin-wrapper');
      expect(pinWrapper?.classList.contains('it-evidence')).to.be.true;
    });

    it('aggiunge la classe it-now quando variant="it-now"', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element variant="it-now" date="LUGLIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);

      const pinWrapper = el.querySelector('.it-pin-wrapper');
      expect(pinWrapper?.classList.contains('it-now')).to.be.true;
    });

    it('usa il valore di default se variant non è valido', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element variant="invalid-variant" date="MAGGIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);
      const pinWrapper = el.querySelector('.it-pin-wrapper');
      expect(pinWrapper).to.exist;
    });
  });

  describe('attributo: heading-level', () => {
    it('usa h3 come heading level di default', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
      `);

      const heading = el.querySelector('h3.it-pin-wrapper');
      expect(heading).to.exist;
    });

    it('usa h2 come heading level quando specificato', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element heading-level="h2" date="MAGGIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);

      const heading = el.querySelector('h2.it-pin-wrapper');
      expect(heading).to.exist;
    });

    it('usa h4 come heading level quando specificato', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element heading-level="h4" date="MAGGIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);

      const heading = el.querySelector('h4.it-pin-wrapper');
      expect(heading).to.exist;
    });

    it('usa h3 come fallback se heading-level non è valido', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element heading-level="h8" date="MAGGIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);

      const heading = el.querySelector('h3.it-pin-wrapper');
      expect(heading).to.exist;
    });
  });

  describe('slot: pin-icon', () => {
    it('renderizza il contenuto del pin-icon slot', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026">
          <span slot="pin-icon" id="pin-icon-content">icona</span>
        </it-timeline-element>
      `);

      await elementUpdated(el);

      const iconEl = el.querySelector('#pin-icon-content');
      expect(iconEl).to.exist;
    });
  });

  describe('slot: default', () => {
    it('renderizza il contenuto nello slot default', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026">
          <p id="content-test">Contenuto test</p>
        </it-timeline-element>
      `);

      const contentEl = el.querySelector('#content-test');
      expect(contentEl).to.exist;
      expect(contentEl?.textContent).to.equal('Contenuto test');
    });
  });
});

describe('<it-timeline-element>', () => {
  describe('struttura e rendering', () => {
    it('renderizza il contenitore timeline-element', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
      `);

      const element = el.querySelector('.timeline-element');
      expect(element).to.exist;
    });

    it('renderizza il pin wrapper con classe it-pin-wrapper', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
      `);

      const pinWrapper = el.querySelector('.it-pin-wrapper');
      expect(pinWrapper).to.exist;
    });

    it('renderizza il pin-text con il contenuto della data', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
      `);

      const pinText = el.querySelector('.pin-text');
      expect(pinText).to.exist;
      expect(pinText?.textContent?.trim()).to.equal('MAGGIO 2026');
    });

    it('non renderizza il pin-text se la data non è fornita', async () => {
      const el = await fixture<ItTimelineElement>(html` <it-timeline-element></it-timeline-element> `);

      const pinText = el.querySelector('.pin-text');
      expect(pinText).to.not.exist;
    });

    it('è accessibile', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026">
          <p>Contenuto elemento timeline</p>
        </it-timeline-element>
      `);

      await expect(el).to.be.accessible();
    });
  });

  describe('attributo: variant', () => {
    it('non aggiunge classi variante se variant è vuoto (default)', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
      `);

      const pinWrapper = el.querySelector('.it-pin-wrapper');
      expect(pinWrapper?.classList.contains('it-now')).to.be.false;
      expect(pinWrapper?.classList.contains('it-evidence')).to.be.false;
    });

    it('aggiunge la classe it-evidence quando variant="it-evidence"', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element variant="it-evidence" date="MAGGIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);

      const pinWrapper = el.querySelector('.it-pin-wrapper');
      expect(pinWrapper?.classList.contains('it-evidence')).to.be.true;
    });

    it('aggiunge la classe it-now quando variant="it-now"', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element variant="it-now" date="LUGLIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);

      const pinWrapper = el.querySelector('.it-pin-wrapper');
      expect(pinWrapper?.classList.contains('it-now')).to.be.true;
    });

    it('usa il valore di default se variant non è valido', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element variant="invalid-variant" date="MAGGIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);
      // Attesa: usa '' (fallback) ma non lancia eccezioni
      const pinWrapper = el.querySelector('.it-pin-wrapper');
      expect(pinWrapper).to.exist;
    });
  });

  describe('attributo: heading-level', () => {
    it('usa h3 come heading level di default', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
      `);

      const heading = el.querySelector('h3.it-pin-wrapper');
      expect(heading).to.exist;
    });

    it('usa h2 come heading level quando specificato', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element heading-level="h2" date="MAGGIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);

      const heading = el.querySelector('h2.it-pin-wrapper');
      expect(heading).to.exist;
    });

    it('usa h4 come heading level quando specificato', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element heading-level="h4" date="MAGGIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);

      const heading = el.querySelector('h4.it-pin-wrapper');
      expect(heading).to.exist;
    });

    it('usa h3 come fallback se heading-level non è valido', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element heading-level="h8" date="MAGGIO 2026"></it-timeline-element>
      `);

      await elementUpdated(el);

      const heading = el.querySelector('h3.it-pin-wrapper');
      expect(heading).to.exist;
    });
  });

  describe('slot: pin-icon', () => {
    it('renderizza il con icon slot fornito', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026">
          <span slot="pin-icon" id="pin-icon-content">icona</span>
        </it-timeline-element>
      `);

      await elementUpdated(el);

      const iconEl = el.querySelector('#pin-icon-content');
      expect(iconEl).to.exist;
    });
  });

  describe('slot: default', () => {
    it('renderizza il contenuto nello slot default', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026">
          <p id="content-test">Contenuto test</p>
        </it-timeline-element>
      `);

      const contentEl = el.querySelector('#content-test');
      expect(contentEl).to.exist;
      expect(contentEl?.textContent).to.equal('Contenuto test');
    });
  });
});
