/// <reference types="mocha"/>

import '@italia/timeline';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import type { ItTimeline } from '@italia/timeline';

describe('<it-timeline>', () => {
  describe('variant classic (default)', () => {
    it('accetta it-timeline-element come figli diretti', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline>
          <it-timeline-element id="el-1" date="MAGGIO 2026"></it-timeline-element>
        </it-timeline>
      `);

      const child = el.querySelector('#el-1');
      expect(child).to.exist;
    });

    it('è accessibile (classic)', async () => {
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

  describe('variant point-list', () => {
    it('accetta variant="point-list"', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline variant="point-list">
          <it-timeline-point id="pt-1"></it-timeline-point>
        </it-timeline>
      `);

      await elementUpdated(el);
      expect(el.getAttribute('variant')).to.equal('point-list');
    });

    it('accetta as="ul"', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline variant="point-list" as="ul">
          <it-timeline-point></it-timeline-point>
        </it-timeline>
      `);

      await elementUpdated(el);
      expect(el.getAttribute('as')).to.equal('ul');
    });

    it('accetta stack-mobile', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline variant="point-list" stack-mobile>
          <it-timeline-point></it-timeline-point>
        </it-timeline>
      `);

      await elementUpdated(el);
      expect(el.hasAttribute('stack-mobile')).to.be.true;
    });

    it('accetta color attribute', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline variant="point-list" color="success">
          <it-timeline-point></it-timeline-point>
        </it-timeline>
      `);

      await elementUpdated(el);
      expect(el.getAttribute('color')).to.equal('success');
    });

    it('è accessibile (point-list)', async () => {
      const el = await fixture<ItTimeline>(html`
        <it-timeline variant="point-list">
          <it-timeline-point>
            <time slot="date" datetime="2025-10-14">
              <span class="visually-hidden">14 ottobre 2025</span>
            </time>
            <p slot="content">Contenuto</p>
          </it-timeline-point>
        </it-timeline>
      `);

      await expect(el).to.be.accessible();
    });
  });
});
