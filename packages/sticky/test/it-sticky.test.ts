/// <reference types="mocha"/>

import { elementUpdated, expect, fixture, html, nextFrame } from '@open-wc/testing';
import { ItSticky } from '../src/it-sticky.js';
import '../src/index.js';

function scrollToPosition(y: number) {
  window.scrollTo(0, y);
  window.dispatchEvent(new Event('scroll'));
}

async function waitForFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(resolve);
  });
}

describe('<it-sticky> component', () => {
  describe('accessibility', () => {
    it('is accessible by default', async () => {
      const el = await fixture<ItSticky>(html`
        <it-sticky>
          <div>Sticky content</div>
        </it-sticky>
      `);
      await expect(el).to.be.accessible();
    });

    it('is accessible with custom attributes', async () => {
      const el = await fixture<ItSticky>(html`
        <it-sticky padding-top="20" sticky-class-name="custom-sticky" stackable>
          <div>Sticky content</div>
        </it-sticky>
      `);
      await expect(el).to.be.accessible();
    });

    it('is accessible when using fixed position', async () => {
      const el = await fixture<ItSticky>(html`
        <it-sticky position-type="fixed" padding-top="10">
          <div>Fixed sticky content</div>
        </it-sticky>
      `);
      await expect(el).to.be.accessible();
    });
  });

  describe('attributes and properties', () => {
    it('reflects default property values', async () => {
      const el = await fixture<ItSticky>(html`<it-sticky></it-sticky>`);
      expect(el.paddingTop).to.equal(0);
      expect(el.stackable).to.equal(false);
      expect(el.stickyClassName).to.be.undefined;
      expect(el.positionType).to.equal('sticky');
    });

    it('sets padding-top correctly', async () => {
      const el = await fixture<ItSticky>(html`<it-sticky padding-top="20"></it-sticky>`);
      expect(el.paddingTop).to.equal('20');
      expect(el.getAttribute('padding-top')).to.equal('20');
    });

    it('sets sticky-class-name correctly', async () => {
      const el = await fixture<ItSticky>(html`<it-sticky sticky-class-name="foo bar"></it-sticky>`);
      expect(el.stickyClassName).to.equal('foo bar');
    });

    it('sets position-type correctly', async () => {
      const el = await fixture<ItSticky>(html`<it-sticky position-type="fixed"></it-sticky>`);
      expect(el.positionType).to.equal('fixed');
    });

    it('enables stackable when attribute is present', async () => {
      const el = await fixture<ItSticky>(html`<it-sticky stackable></it-sticky>`);
      expect(el.stackable).to.equal(true);
    });
  });

  describe('sticky behavior', () => {
    it('applies sticky class when scrolled past element', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div style="height: 2000px;">
          <div style="height: 500px;"></div>
          <it-sticky sticky-class-name="custom">
            <div style="height: 50px;">Sticky content</div>
          </it-sticky>
        </div>
      `);

      const el = container.querySelector('it-sticky') as ItSticky;
      const rect = el.getBoundingClientRect();
      const scrollTarget = window.scrollY + rect.top + 5;

      scrollToPosition(scrollTarget);
      await waitForFrame();

      await elementUpdated(el); // Public hook for tests
      expect(el.classList.contains('bs-is-sticky')).to.be.true;
    });

    it('removes sticky class when scrolling back above', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div style="height: 2000px;">
          <div style="height: 500px;"></div>
          <it-sticky sticky-class-name="custom">
            <div style="height: 50px;">Sticky content</div>
          </it-sticky>
        </div>
      `);

      const el = container.querySelector('it-sticky') as ItSticky;

      // Simulate sticky state
      scrollToPosition(1000);
      await waitForFrame();
      await elementUpdated(el);
      expect(el.classList.contains('bs-is-sticky')).to.be.true;

      // Scroll back
      scrollToPosition(0);
      await waitForFrame();
      await elementUpdated(el);
      expect(el.classList.contains('bs-is-sticky')).to.be.false;
    });
    it('applies custom class when defined', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div style="height: 2000px;">
          <div style="height: 500px;"></div>
          <it-sticky sticky-class-name="custom-class">
            <div style="height: 50px;">Sticky content custom class</div>
          </it-sticky>
        </div>
      `);

      const el = container.querySelector('it-sticky') as ItSticky;
      const rect = el.getBoundingClientRect();
      const scrollTarget = window.scrollY + rect.top + 50;

      scrollToPosition(scrollTarget);
      await waitForFrame();
      await elementUpdated(el);

      expect(el.classList.contains('bs-is-sticky')).to.be.true;
      expect(el.classList.contains('custom-class')).to.be.true;
    });
    it('removes custom class when scrolling back above', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div style="height: 2000px;">
          <div style="height: 500px;"></div>
          <it-sticky sticky-class-name="custom-class">
            <div style="height: 50px;">Sticky content custom class</div>
          </it-sticky>
        </div>
      `);

      const el = container.querySelector('it-sticky') as ItSticky;

      // Scroll down to trigger sticky
      scrollToPosition(1000);
      await waitForFrame();
      await elementUpdated(el);
      expect(el.classList.contains('custom-class')).to.be.true;

      // Scroll back up
      scrollToPosition(0);
      await waitForFrame();
      await elementUpdated(el);

      expect(el.classList.contains('custom-class')).to.be.false;
    });
    it('updates top when content height changes', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div style="height: 2000px;">
          <it-sticky stackable sticky-class-name="a">
            <div style="height: 50px;" id="content">First sticky</div>
          </it-sticky>
          <div style="height: 100px;"></div>
          <it-sticky stackable sticky-class-name="b">
            <div style="height: 50px;" id="content2">Second sticky</div>
          </it-sticky>
        </div>
      `);

      const [first, second] = container.querySelectorAll('it-sticky') as NodeListOf<ItSticky>;

      // Scroll per attivare gli stickies
      scrollToPosition(200);
      await waitForFrame();
      await elementUpdated(first);
      await elementUpdated(second);

      const oldSecondTop = parseInt(second.style.top || '0', 10);

      // Cambia altezza del contenuto del primo sticky
      const firstContent = first.querySelector('#content') as HTMLElement;
      firstContent.style.height = '150px';

      // Aspetta che ResizeObserver faccia effetto
      await waitForFrame();
      await waitForFrame(); // due frame per sicurezza su WebKit
      await elementUpdated(second);

      const newSecondTop = parseInt(second.style.top || '0', 10);

      expect(newSecondTop).to.be.greaterThanOrEqual(oldSecondTop);
    });
    it('update padding top reactively', async () => {
      const el = await fixture<ItSticky>(html`
        <it-sticky padding-top="10">
          <div id="content" style="height: 50px;">Sticky</div>
        </it-sticky>
      `);

      scrollToPosition(200);
      await waitForFrame();
      await elementUpdated(el);

      expect(el.style.top).to.equal('10px');

      el.setAttribute('padding-top', '30');
      await elementUpdated(el);
      await nextFrame();

      expect(el.style.top).to.equal('30px');
    });
  });

  describe('fixed position behavior', () => {
    it('applies fixed class when scrolled past element', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div style="height: 2000px;">
          <div style="height: 500px;"></div>
          <it-sticky position-type="fixed" sticky-class-name="custom-fixed">
            <div style="height: 50px;">Fixed sticky content</div>
          </it-sticky>
        </div>
      `);

      const el = container.querySelector('it-sticky') as ItSticky;
      const rect = el.getBoundingClientRect();
      const scrollTarget = window.scrollY + rect.top + 5;

      scrollToPosition(scrollTarget);
      await waitForFrame();
      await elementUpdated(el);

      expect(el.classList.contains('bs-is-fixed')).to.be.true;
      expect(el.classList.contains('custom-fixed')).to.be.true;
    });

    it('removes fixed class when scrolling back above', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div style="height: 2000px;">
          <div style="height: 500px;"></div>
          <it-sticky position-type="fixed" sticky-class-name="custom-fixed">
            <div style="height: 50px;">Fixed sticky content</div>
          </it-sticky>
        </div>
      `);

      const el = container.querySelector('it-sticky') as ItSticky;

      // Scroll down to trigger sticky
      scrollToPosition(1000);
      await waitForFrame();
      await elementUpdated(el);
      expect(el.classList.contains('bs-is-fixed')).to.be.true;

      // Scroll back up
      scrollToPosition(0);
      await waitForFrame();
      await elementUpdated(el);

      expect(el.classList.contains('bs-is-fixed')).to.be.false;
      expect(el.classList.contains('custom-fixed')).to.be.false;
    });
  });

  describe('stackable behavior', () => {
    it('stacks multiple sticky elements with offset', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div style="height: 2000px;">
          <it-sticky stackable sticky-class-name="a">
            <div style="height: 50px;">First sticky</div>
          </it-sticky>
          <div style="height: 100px;"></div>
          <it-sticky stackable sticky-class-name="b">
            <div style="height: 50px;">Second sticky</div>
          </it-sticky>
        </div>
      `);

      const [first, second] = container.querySelectorAll('it-sticky') as NodeListOf<ItSticky>;

      // Scroll sufficiente per attivare gli stickies
      scrollToPosition(500);
      await waitForFrame();
      await elementUpdated(first);
      await elementUpdated(second);

      // Su WebKit serve un piccolo delay perché ResizeObserver e style.top vengano applicati
      await new Promise((resolve) => {
        setTimeout(resolve, 50);
      });
      await elementUpdated(first);
      await elementUpdated(second);

      const firstTop = parseInt(first.style.top || '0', 10);
      const secondTop = parseInt(second.style.top || '0', 10);

      expect(secondTop).to.be.greaterThan(firstTop);
    });
  });
  describe('<it-sticky> custom events (scroll activation)', () => {
    it('fires it-sticky-on and it-sticky-off events on scroll', async () => {
      // Create a tall container to allow scrolling
      const el = await fixture<HTMLDivElement>(html`
        <div style="height: 2000px; position: relative;">
          <it-sticky id="sticky" style="display: block;">
            <div id="content" style="height: 50px; background: #eee;">Sticky content</div>
          </it-sticky>
          <div style="height: 1500px;"></div>
        </div>
      `);

      const sticky = el.querySelector('it-sticky')!;
      let stickyOn = false;

      sticky.addEventListener('it-sticky-on', () => {
        stickyOn = true;
      });
      sticky.addEventListener('it-sticky-off', () => {
        stickyOn = false;
      });
      // Scroll so the sticky should activate
      scrollToPosition(200);
      await nextFrame();
      await elementUpdated(sticky);

      expect(stickyOn).to.be.true;

      scrollToPosition(0);
      await nextFrame();
      await elementUpdated(sticky);

      expect(stickyOn).to.be.false;
    });
  });
});
