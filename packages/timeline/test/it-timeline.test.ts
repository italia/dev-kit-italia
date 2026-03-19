/// <reference types="mocha"/>

import '@italia/timeline';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import type { ItTimeline } from '@italia/timeline';

describe('<it-timeline>', () => {
  // ── variant="classic" (default) ───────────────────────────────────────────
  describe('variant classic (default)', () => {
    it("aggiunge la classe it-timeline-wrapper sull'host", async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline>
          <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
        </it-timeline>
      `);

      expect(el.classList.contains('it-timeline-wrapper')).to.be.true;
    });

    it('renderizza la riga interna con classe row nel light DOM', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline>
          <it-timeline-element date="MAGGIO 2026"></it-timeline-element>
        </it-timeline>
      `);

      const row = el.querySelector('.row');
      expect(row).to.exist;
    });

    it('avvolge ogni figlio it-timeline-element in col-12', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline>
          <it-timeline-element date="GENNAIO 2026"></it-timeline-element>
          <it-timeline-element date="FEBBRAIO 2026"></it-timeline-element>
        </it-timeline>
      `);

      await elementUpdated(el);
      const cols = el.querySelectorAll('.col-12');
      expect(cols.length).to.equal(2);
    });

    it('accetta it-timeline-element come figli diretti', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline>
          <it-timeline-element id="el-1" date="MAGGIO 2026"></it-timeline-element>
        </it-timeline>
      `);

      const child = el.querySelector('#el-1');
      expect(child).to.exist;
    });

    it('è accessibile', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline>
          <it-timeline-element date="MAGGIO 2026">
            <p>Contenuto elemento timeline</p>
          </it-timeline-element>
        </it-timeline>
      `);

      await expect(el).to.be.accessible();
    });
  });

  // ── variant="point-list" ─────────────────────────────────────────────────
  describe('variant point-list', () => {
    it('renderizza una ol con classe it-timeline-point-list', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline variant="point-list">
          <it-timeline-point></it-timeline-point>
        </it-timeline>
      `);

      await elementUpdated(el);
      const list = el.querySelector('ol.it-timeline-point-list');
      expect(list).to.exist;
    });

    it('non aggiunge la classe it-timeline-wrapper in point-list', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline variant="point-list">
          <it-timeline-point></it-timeline-point>
        </it-timeline>
      `);

      expect(el.classList.contains('it-timeline-wrapper')).to.be.false;
    });

    it('sposta i figli dentro ol.it-timeline-point-list', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline variant="point-list">
          <it-timeline-point id="pt-1"></it-timeline-point>
        </it-timeline>
      `);

      await elementUpdated(el);
      const list = el.querySelector('ol.it-timeline-point-list');
      const point = el.querySelector('#pt-1');
      expect(list?.contains(point)).to.be.true;
    });

    it('renderizza una ul quando as="ul"', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline variant="point-list" as="ul">
          <it-timeline-point></it-timeline-point>
        </it-timeline>
      `);

      await elementUpdated(el);
      const list = el.querySelector('ul.it-timeline-point-list');
      expect(list).to.exist;
    });

    it('aggiunge it-timeline-point-list-stack-mobile quando stack-mobile è presente', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline variant="point-list" stack-mobile>
          <it-timeline-point></it-timeline-point>
        </it-timeline>
      `);

      await elementUpdated(el);
      const list = el.querySelector('.it-timeline-point-list');
      expect(list?.classList.contains('it-timeline-point-list-stack-mobile')).to.be.true;
    });
  });
});
