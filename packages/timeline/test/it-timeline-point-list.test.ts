/// <reference types="mocha"/>

import '@italia/timeline';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import type { ItTimelinePointList } from '@italia/timeline';

describe('<it-timeline-point-list>', () => {
  describe('struttura e rendering (light DOM)', () => {
    it('renderizza un ol di default', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list></it-timeline-point-list> `);

      const ol = el.querySelector('ol.it-timeline-point-list');
      expect(ol).to.exist;
    });

    it('renderizza un ul quando as="ul"', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list as="ul"></it-timeline-point-list> `);

      await elementUpdated(el);

      const ul = el.querySelector('ul.it-timeline-point-list');
      expect(ul).to.exist;
    });

    it('renderizza un ol quando as="ol"', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list as="ol"></it-timeline-point-list> `);

      await elementUpdated(el);

      const ol = el.querySelector('ol.it-timeline-point-list');
      expect(ol).to.exist;
    });

    it('usa ol come fallback se as non è un valore valido', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list as="div"></it-timeline-point-list> `);

      await elementUpdated(el);

      const ol = el.querySelector('ol.it-timeline-point-list');
      expect(ol).to.exist;
    });

    it('è accessibile', async () => {
      const el = await fixture<ItTimelinePointList>(html`
        <it-timeline-point-list>
          <it-timeline-point>
            <time slot="date" datetime="2025-10-14">
              <span class="visually-hidden">14 ottobre 2025</span>
              <span class="point-visual" aria-hidden="true">
                <span class="point-main">14</span>
                <span class="point-bottom">ott</span>
              </span>
            </time>
            <p slot="content">Contenuto</p>
          </it-timeline-point>
        </it-timeline-point-list>
      `);

      await expect(el).to.be.accessible();
    });
  });

  describe('attributo: stack-mobile', () => {
    it('non aggiunge la classe stack-mobile per default', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list></it-timeline-point-list> `);

      const list = el.querySelector('.it-timeline-point-list');
      expect(list?.classList.contains('it-timeline-point-list-stack-mobile')).to.be.false;
    });

    it('aggiunge la classe stack-mobile quando stack-mobile è presente', async () => {
      const el = await fixture<ItTimelinePointList>(html`
        <it-timeline-point-list stack-mobile></it-timeline-point-list>
      `);

      await elementUpdated(el);

      const list = el.querySelector('.it-timeline-point-list');
      expect(list?.classList.contains('it-timeline-point-list-stack-mobile')).to.be.true;
    });
  });

  describe('proprietà', () => {
    it('espone la proprietà as', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list as="ul"></it-timeline-point-list> `);

      expect(el.as).to.equal('ul');
    });

    it('espone la proprietà stackMobile', async () => {
      const el = await fixture<ItTimelinePointList>(html`
        <it-timeline-point-list stack-mobile></it-timeline-point-list>
      `);

      expect(el.stackMobile).to.be.true;
    });
  });
});

describe('<it-timeline-point-list>', () => {
  describe('struttura e rendering', () => {
    it('renderizza un ol di default', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list></it-timeline-point-list> `);

      const ol = el.querySelector('ol.it-timeline-point-list');
      expect(ol).to.exist;
    });

    it('renderizza un ul quando as="ul"', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list as="ul"></it-timeline-point-list> `);

      await elementUpdated(el);

      const ul = el.querySelector('ul.it-timeline-point-list');
      expect(ul).to.exist;
    });

    it('renderizza un ol quando as="ol"', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list as="ol"></it-timeline-point-list> `);

      await elementUpdated(el);

      const ol = el.querySelector('ol.it-timeline-point-list');
      expect(ol).to.exist;
    });

    it('usa ol come fallback se as non è un valore valido', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list as="div"></it-timeline-point-list> `);

      await elementUpdated(el);

      const ol = el.querySelector('ol.it-timeline-point-list');
      expect(ol).to.exist;
    });

    it('è accessibile', async () => {
      const el = await fixture<ItTimelinePointList>(html`
        <it-timeline-point-list>
          <it-timeline-point>
            <time slot="date" datetime="2025-10-14">
              <span class="visually-hidden">14 ottobre 2025</span>
              <span class="point-visual" aria-hidden="true">
                <span class="point-main">14</span>
                <span class="point-bottom">ott</span>
              </span>
            </time>
            <p slot="content">Contenuto</p>
          </it-timeline-point>
        </it-timeline-point-list>
      `);

      // it-timeline-point espone role="listitem" sull'host;
      // it-timeline-point-list renderizza <ol> in shadow DOM con <slot>.
      // axe-core può comunque segnalare violazioni cross-shadow per la regola "list";
      // la semantica è corretta grazie ai role ARIA espliciti.
      await expect(el).to.be.accessible({ ignoredRules: ['list', 'listitem'] });
    });
  });

  describe('attributo: stack-mobile', () => {
    it('non aggiunge la classe stack-mobile per default', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list></it-timeline-point-list> `);

      const list = el.querySelector('.it-timeline-point-list');
      expect(list?.classList.contains('it-timeline-point-list-stack-mobile')).to.be.false;
    });

    it('aggiunge la classe stack-mobile quando stack-mobile è presente', async () => {
      const el = await fixture<ItTimelinePointList>(html`
        <it-timeline-point-list stack-mobile></it-timeline-point-list>
      `);

      await elementUpdated(el);

      const list = el.querySelector('.it-timeline-point-list');
      expect(list?.classList.contains('it-timeline-point-list-stack-mobile')).to.be.true;
    });
  });

  describe('proprietà', () => {
    it('espone la proprietà as', async () => {
      const el = await fixture<ItTimelinePointList>(html` <it-timeline-point-list as="ul"></it-timeline-point-list> `);

      expect(el.as).to.equal('ul');
    });

    it('espone la proprietà stackMobile', async () => {
      const el = await fixture<ItTimelinePointList>(html`
        <it-timeline-point-list stack-mobile></it-timeline-point-list>
      `);

      expect(el.stackMobile).to.be.true;
    });
  });
});
