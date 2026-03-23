/// <reference types="mocha"/>

import '@italia/timeline';
import { fixture, html, expect } from '@open-wc/testing';
import type { ItTimelineElement } from '@italia/timeline';

describe('<it-timeline-element>', () => {
  describe('attributo: date', () => {
    it('accetta date attribute', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026">
          <p>Contenuto</p>
        </it-timeline-element>
      `);

      expect(el.getAttribute('date')).to.equal('MAGGIO 2026');
    });
  });

  describe('attributo: variant', () => {
    it('accetta variant attribute', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element variant="past" date="MAGGIO 2026"></it-timeline-element>
      `);

      expect(el.getAttribute('variant')).to.equal('past');
    });

    it('accetta variant="current"', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element variant="current" date="MAGGIO 2026"></it-timeline-element>
      `);

      expect(el.getAttribute('variant')).to.equal('current');
    });
  });

  describe('attributo: heading-level', () => {
    it('accetta heading-level attribute', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element heading-level="h2" date="MAGGIO 2026"></it-timeline-element>
      `);

      expect(el.getAttribute('heading-level')).to.equal('h2');
    });
  });

  describe('slot: default', () => {
    it('accetta contenuto nel slot default', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026">
          <p id="content-el">Contenuto timeline element</p>
        </it-timeline-element>
      `);

      const content = el.querySelector('#content-el');
      expect(content).to.exist;
    });
  });

  describe('slot: pin-icon', () => {
    it('accetta contenuto nello slot pin-icon', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026">
          <it-icon slot="pin-icon" name="it-file" id="icon-el"></it-icon>
          <p>Contenuto</p>
        </it-timeline-element>
      `);

      const icon = el.querySelector('#icon-el');
      expect(icon).to.exist;
    });
  });

  describe('accessibilità', () => {
    it('è accessibile', async () => {
      const el = await fixture<ItTimelineElement>(html`
        <it-timeline-element date="MAGGIO 2026">
          <p>Contenuto elemento timeline</p>
        </it-timeline-element>
      `);

      await expect(el).to.be.accessible();
    });
  });
});
