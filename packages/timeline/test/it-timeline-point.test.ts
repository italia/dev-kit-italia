/// <reference types="mocha"/>

import '@italia/timeline';
import { fixture, html, expect } from '@open-wc/testing';
import type { ItTimelinePoint } from '@italia/timeline';

describe('<it-timeline-point>', () => {
  describe('slot: date', () => {
    it('accetta contenuto nello slot date', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14" id="date-el">
            <span class="visually-hidden">14 ottobre 2025</span>
          </time>
          <p slot="content">Contenuto</p>
        </it-timeline-point>
      `);

      const dateEl = el.querySelector('#date-el');
      expect(dateEl).to.exist;
      expect(dateEl?.getAttribute('datetime')).to.equal('2025-10-14');
    });
  });

  describe('slot: milestone', () => {
    it('accetta contenuto nello slot milestone', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <div slot="milestone" id="milestone-el">
            <span class="visually-hidden">Passo 1</span>
          </div>
          <p slot="content">Contenuto</p>
        </it-timeline-point>
      `);

      const milestoneEl = el.querySelector('#milestone-el');
      expect(milestoneEl).to.exist;
    });
  });

  describe('slot: content', () => {
    it('accetta contenuto nello slot content', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content" id="content-el">Testo del contenuto</p>
        </it-timeline-point>
      `);

      const contentEl = el.querySelector('#content-el');
      expect(contentEl).to.exist;
      expect(contentEl?.textContent).to.equal('Testo del contenuto');
    });
  });

  describe('attributo: color', () => {
    it('accetta color attribute', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point color="success">
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      expect(el.color).to.equal('success');
    });
  });

  describe('attributo: align-top', () => {
    it('accetta align-top attribute', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point align-top>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      expect(el.alignTop).to.be.true;
    });
  });

  describe('attributo: compact', () => {
    it('accetta compact attribute', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point compact>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      expect(el.compact).to.be.true;
    });
  });
});
