/// <reference types="mocha"/>

import '@italia/timeline';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import type { ItTimelinePoint } from '@italia/timeline';

describe('<it-timeline-point>', () => {
  describe('struttura e rendering (light DOM)', () => {
    it('renderizza il contenitore con le classi corrette', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14">
            <span class="visually-hidden">14 ottobre 2025</span>
          </time>
          <p slot="content">Contenuto</p>
        </it-timeline-point>
      `);

      const item = el.querySelector('.timeline-point');
      expect(item).to.exist;
    });

    it('renderizza il point-aside con classe predefinita primary', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14">
            <span class="visually-hidden">14 ottobre 2025</span>
          </time>
          <p slot="content">Contenuto</p>
        </it-timeline-point>
      `);

      const aside = el.querySelector('.point-aside');
      expect(aside).to.exist;
      expect(aside?.classList.contains('point-aside-primary')).to.be.true;
    });

    it('renderizza il point-content', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14">
            <span class="visually-hidden">14 ottobre 2025</span>
          </time>
          <p slot="content">Contenuto</p>
        </it-timeline-point>
      `);

      const content = el.querySelector('.point-content');
      expect(content).to.exist;
    });
  });

  describe('attributo: color', () => {
    it('aggiunge la classe point-aside-primary di default', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      const aside = el.querySelector('.point-aside');
      expect(aside?.classList.contains('point-aside-primary')).to.be.true;
    });

    it('aggiunge la classe point-aside-success quando color="success"', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point color="success">
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const aside = el.querySelector('.point-aside');
      expect(aside?.classList.contains('point-aside-success')).to.be.true;
    });

    it('aggiunge la classe point-aside-danger quando color="danger"', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point color="danger">
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const aside = el.querySelector('.point-aside');
      expect(aside?.classList.contains('point-aside-danger')).to.be.true;
    });

    it('aggiunge la classe point-aside-warning quando color="warning"', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point color="warning">
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const aside = el.querySelector('.point-aside');
      expect(aside?.classList.contains('point-aside-warning')).to.be.true;
    });

    it('usa primary come fallback per valori color non validi', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point color="invalid-color">
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const aside = el.querySelector('.point-aside');
      expect(aside?.classList.contains('point-aside-primary')).to.be.true;
    });
  });

  describe('attributo: align-top', () => {
    it('non aggiunge la classe timeline-point-align-top di default', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      const item = el.querySelector('.timeline-point');
      expect(item?.classList.contains('timeline-point-align-top')).to.be.false;
    });

    it('aggiunge timeline-point-align-top quando align-top è presente', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point align-top>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const item = el.querySelector('.timeline-point');
      expect(item?.classList.contains('timeline-point-align-top')).to.be.true;
    });
  });

  describe('attributo: compact', () => {
    it('non aggiunge la classe timeline-point-xs di default', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      const item = el.querySelector('.timeline-point');
      expect(item?.classList.contains('timeline-point-xs')).to.be.false;
    });

    it('aggiunge timeline-point-xs quando compact è presente', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point compact>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const item = el.querySelector('.timeline-point');
      expect(item?.classList.contains('timeline-point-xs')).to.be.true;
    });
  });

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

  describe('proprietà', () => {
    it('espone la proprietà color', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point color="success">
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      expect(el.color).to.equal('success');
    });

    it('espone la proprietà alignTop', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point align-top>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      expect(el.alignTop).to.be.true;
    });

    it('espone la proprietà compact', async () => {
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

describe('<it-timeline-point>', () => {
  describe('struttura e rendering', () => {
    it('renderizza il contenitore con le classi corrette', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14">
            <span class="visually-hidden">14 ottobre 2025</span>
          </time>
          <p slot="content">Contenuto</p>
        </it-timeline-point>
      `);

      const item = el.querySelector('.timeline-point');
      expect(item).to.exist;
    });

    it('renderizza il point-aside con classe predefinita primary', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14">
            <span class="visually-hidden">14 ottobre 2025</span>
          </time>
          <p slot="content">Contenuto</p>
        </it-timeline-point>
      `);

      const aside = el.querySelector('.point-aside');
      expect(aside).to.exist;
      expect(aside?.classList.contains('point-aside-primary')).to.be.true;
    });

    it('renderizza il point-content', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14">
            <span class="visually-hidden">14 ottobre 2025</span>
          </time>
          <p slot="content">Contenuto</p>
        </it-timeline-point>
      `);

      const content = el.querySelector('.point-content');
      expect(content).to.exist;
    });
  });

  describe('attributo: color', () => {
    it('aggiunge la classe point-aside-primary di default', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      const aside = el.querySelector('.point-aside');
      expect(aside?.classList.contains('point-aside-primary')).to.be.true;
    });

    it('aggiunge la classe point-aside-success quando color="success"', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point color="success">
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const aside = el.querySelector('.point-aside');
      expect(aside?.classList.contains('point-aside-success')).to.be.true;
    });

    it('aggiunge la classe point-aside-danger quando color="danger"', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point color="danger">
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const aside = el.querySelector('.point-aside');
      expect(aside?.classList.contains('point-aside-danger')).to.be.true;
    });

    it('aggiunge la classe point-aside-warning quando color="warning"', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point color="warning">
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const aside = el.querySelector('.point-aside');
      expect(aside?.classList.contains('point-aside-warning')).to.be.true;
    });

    it('usa primary come fallback per valori color non validi', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point color="invalid-color">
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const aside = el.querySelector('.point-aside');
      expect(aside?.classList.contains('point-aside-primary')).to.be.true;
    });
  });

  describe('attributo: align-top', () => {
    it('non aggiunge la classe timeline-point-align-top di default', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      const item = el.querySelector('.timeline-point');
      expect(item?.classList.contains('timeline-point-align-top')).to.be.false;
    });

    it('aggiunge timeline-point-align-top quando align-top è presente', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point align-top>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const item = el.querySelector('.timeline-point');
      expect(item?.classList.contains('timeline-point-align-top')).to.be.true;
    });
  });

  describe('attributo: compact', () => {
    it('non aggiunge la classe timeline-point-xs di default', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      const item = el.querySelector('.timeline-point');
      expect(item?.classList.contains('timeline-point-xs')).to.be.false;
    });

    it('aggiunge timeline-point-xs quando compact è presente', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point compact>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      await elementUpdated(el);

      const item = el.querySelector('.timeline-point');
      expect(item?.classList.contains('timeline-point-xs')).to.be.true;
    });
  });

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

  describe('proprietà', () => {
    it('espone la proprietà color', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point color="success">
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      expect(el.color).to.equal('success');
    });

    it('espone la proprietà alignTop', async () => {
      const el = await fixture<ItTimelinePoint>(html`
        <it-timeline-point align-top>
          <time slot="date" datetime="2025-10-14"><span class="visually-hidden">14 ottobre</span></time>
          <p slot="content">Testo</p>
        </it-timeline-point>
      `);

      expect(el.alignTop).to.be.true;
    });

    it('espone la proprietà compact', async () => {
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
