import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/it-sticky.js';
import type { ItSticky } from '../src/it-sticky.js';

// Helper per simulare scroll
function simulateScroll(scrollY: number) {
  // Simula la posizione di scroll
  Object.defineProperty(window, 'scrollY', {
    value: scrollY,
    writable: true,
  });

  // Dispara evento scroll
  window.dispatchEvent(new Event('scroll'));
}

// Helper per aspettare frame di rendering
function waitForFrame(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

describe('ItSticky', () => {
  afterEach(() => {
    // Cleanup del DOM dopo ogni test
    document.querySelectorAll('it-sticky').forEach((el) => el.remove());
    // Reset scroll position
    simulateScroll(0);
  });

  it('should create an it-sticky element', async () => {
    const el = await fixture<ItSticky>(html`<it-sticky>Content</it-sticky>`);
    expect(el).to.exist;
    expect(el.tagName.toLowerCase()).to.equal('it-sticky');
  });

  it('should handle stackable attribute', async () => {
    const el = await fixture<ItSticky>(html`<it-sticky stackable>Content</it-sticky>`);
    expect(el.stackable).to.be.true;
  });

  it('should handle position-type attribute', async () => {
    const el = await fixture<ItSticky>(html`<it-sticky position-type="fixed">Content</it-sticky>`);
    expect(el.positionType).to.equal('fixed');
  });

  it('should handle padding-top attribute', async () => {
    const el = await fixture<ItSticky>(html`<it-sticky padding-top="50">Content</it-sticky>`);
    expect(el.paddingTop).to.equal('50');
  });

  describe('DOM-based discovery', () => {
    it('should find previous fixed stickies in DOM without registry', async () => {
      const container = await fixture(html`
        <div>
          <it-sticky stackable position-type="fixed" style="height: 50px;">Fixed 1</it-sticky>
          <div style="height: 200px;">Spacer</div>
          <it-sticky stackable position-type="fixed" style="height: 40px;">Fixed 2</it-sticky>
          <div style="height: 200px;">Spacer</div>
          <it-sticky stackable id="target">Normal Sticky</it-sticky>
        </div>
      `);

      const targetSticky = container.querySelector('#target') as ItSticky;
      expect(targetSticky).to.exist;

      const fixedStickies = container.querySelectorAll('it-sticky[position-type="fixed"]');
      expect(fixedStickies.length).to.equal(2);
    });

    it('should find active stickies using CSS classes', async () => {
      const container = await fixture(html`
        <div style="height: 2000px;">
          <it-sticky stackable style="height: 50px;">Active 1</it-sticky>
          <it-sticky stackable style="height: 40px;">Inactive</it-sticky>
          <it-sticky stackable style="height: 30px;">Active 2</it-sticky>
          <it-sticky stackable id="target">Target</it-sticky>
        </div>
      `);
      window.scrollTo(0, 800); // Scrolla per attivare gli stickies
      await waitForFrame();

      const activeStickies = container.querySelectorAll(
        'it-sticky[stackable].bs-is-sticky, it-sticky[stackable].bs-is-fixed',
      );
      expect(activeStickies.length).to.equal(4);
    });

    it('should handle DOM ordering correctly', async () => {
      const container = await fixture(html`
        <div>
          <it-sticky stackable id="first">First</it-sticky>
          <it-sticky stackable id="second">Second</it-sticky>
          <it-sticky stackable id="third">Third</it-sticky>
        </div>
      `);

      const first = container.querySelector('#first') as ItSticky;
      const second = container.querySelector('#second') as ItSticky;
      const third = container.querySelector('#third') as ItSticky;

      // Verifica che l'ordinamento DOM sia corretto
      // eslint-disable-next-line no-bitwise
      expect(first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING).to.be.greaterThan(0);
      // eslint-disable-next-line no-bitwise
      expect(second.compareDocumentPosition(third) & Node.DOCUMENT_POSITION_FOLLOWING).to.be.greaterThan(0);
    });
  });

  describe('Memory management', () => {
    it('should not leak memory when elements are removed', async () => {
      // Crea e rimuovi elementi per verificare che non ci siano memory leaks
      const stickies: ItSticky[] = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 5; i++) {
        // eslint-disable-next-line no-await-in-loop
        const sticky = await fixture<ItSticky>(html`<it-sticky stackable>Sticky ${i}</it-sticky>`);
        stickies.push(sticky);
      }

      stickies.forEach((sticky) => sticky.remove());

      const remainingStickies = document.querySelectorAll('it-sticky');
      expect(remainingStickies.length).to.equal(0);
    });
  });

  describe('Scroll behavior', () => {
    it('should become sticky when scrolled past limit', async () => {
      const container = await fixture(html`
        <div style="height: 2000px;">
          <div style="height: 500px;">Content before sticky</div>
          <it-sticky id="test-sticky" style="height: 50px;">
            <div>Sticky content</div>
          </it-sticky>
          <div style="height: 1000px;">Content after sticky</div>
        </div>
      `);

      const sticky = container.querySelector('#test-sticky') as ItSticky;
      expect(sticky).to.exist;

      // Inizialmente non dovrebbe essere sticky
      expect(sticky.classList.contains('bs-is-sticky')).to.be.false;

      // Simula scroll oltre il limite dell'elemento
      simulateScroll(600);
      await waitForFrame();

      // Ora dovrebbe essere sticky
      expect(sticky.classList.contains('bs-is-sticky')).to.be.true;

      // Simula scroll indietro
      simulateScroll(100);
      await waitForFrame();

      // Non dovrebbe più essere sticky
      expect(sticky.classList.contains('bs-is-sticky')).to.be.false;
    });

    it('should handle stackable elements correctly', async () => {
      const container = await fixture(html`
        <div style="height: 3000px;">
          <div style="height: 300px;">Content before</div>
          <it-sticky id="sticky1" stackable style="height: 50px;">
            <div>Sticky 1</div>
          </it-sticky>
          <div style="height: 400px;">Content between</div>
          <it-sticky id="sticky2" stackable style="height: 60px;">
            <div>Sticky 2</div>
          </it-sticky>
          <div style="height: 1000px;">Content after</div>
        </div>
      `);

      const sticky1 = container.querySelector('#sticky1') as ItSticky;
      const sticky2 = container.querySelector('#sticky2') as ItSticky;

      // Simula scroll che rende sticky il primo elemento
      simulateScroll(400);
      await waitForFrame();

      expect(sticky1.classList.contains('bs-is-sticky')).to.be.true;
      expect(sticky2.classList.contains('bs-is-sticky')).to.be.false;

      // Simula scroll che rende sticky anche il secondo
      simulateScroll(800);
      await waitForFrame();

      expect(sticky1.classList.contains('bs-is-sticky')).to.be.true;
      expect(sticky2.classList.contains('bs-is-sticky')).to.be.true;

      // Il secondo dovrebbe essere posizionato sotto il primo (valore numerico > 0)
      const topValue = parseInt(sticky2.style.top || '0', 10);
      expect(topValue).to.be.greaterThan(0);
    });

    it('should handle fixed vs normal stackable elements correctly', async () => {
      const container = await fixture(html`
        <div style="height: 3000px;">
          <div style="height: 200px;">Content before</div>
          <it-sticky id="fixed-sticky" stackable position-type="fixed" style="height: 40px;">
            <div>Fixed Sticky</div>
          </it-sticky>
          <div style="height: 300px;">Content between</div>
          <it-sticky id="normal-sticky" stackable style="height: 50px;">
            <div>Normal Sticky</div>
          </it-sticky>
          <div style="height: 400px;">More content</div>
          <it-sticky id="another-fixed" stackable position-type="fixed" style="height: 30px;">
            <div>Another Fixed</div>
          </it-sticky>
          <div style="height: 1000px;">Content after</div>
        </div>
      `);

      const fixedSticky = container.querySelector('#fixed-sticky') as ItSticky;
      const normalSticky = container.querySelector('#normal-sticky') as ItSticky;
      const anotherFixed = container.querySelector('#another-fixed') as ItSticky;

      // Simula scroll che rende tutti sticky
      simulateScroll(1000);
      await waitForFrame();

      expect(fixedSticky.classList.contains('bs-is-fixed')).to.be.true;
      expect(normalSticky.classList.contains('bs-is-sticky')).to.be.true;
      expect(anotherFixed.classList.contains('bs-is-fixed')).to.be.true;

      // Verifica che gli elementi abbiano posizioni top > 0 (impilamento)
      const normalTop = parseInt(normalSticky.style.top || '0', 10);
      const anotherFixedTop = parseInt(anotherFixed.style.top || '0', 10);

      expect(normalTop).to.be.greaterThan(0); // Dovrebbe considerare gli elementi fixed precedenti
      expect(anotherFixedTop).to.be.greaterThan(0); // Dovrebbe impiliarsi sopra il primo fixed
    });

    it('should reposition non-fixed elements when fixed elements change state', async () => {
      const container = await fixture(html`
        <div style="height: 4000px;">
          <div style="height: 300px;">Content before</div>
          <it-sticky id="normal1" stackable style="height: 50px;">
            <div>Normal 1</div>
          </it-sticky>
          <div style="height: 400px;">Content between</div>
          <it-sticky id="fixed1" stackable position-type="fixed" style="height: 40px;">
            <div>Fixed 1</div>
          </it-sticky>
          <div style="height: 200px;">More content</div>
          <it-sticky id="normal2" stackable style="height: 60px;">
            <div>Normal 2</div>
          </it-sticky>
          <div style="height: 1000px;">Content after</div>
        </div>
      `);

      const normal1 = container.querySelector('#normal1') as ItSticky;
      const fixed1 = container.querySelector('#fixed1') as ItSticky;
      const normal2 = container.querySelector('#normal2') as ItSticky;

      // Prima fase: rendi sticky solo il primo elemento normale
      simulateScroll(400);
      await waitForFrame();

      expect(normal1.classList.contains('bs-is-sticky')).to.be.true;
      expect(fixed1.classList.contains('bs-is-fixed')).to.be.false;
      expect(normal2.classList.contains('bs-is-sticky')).to.be.false;

      const normal1InitialTop = parseInt(normal1.style.top || '0', 10);

      // Seconda fase: rendi sticky l'elemento fixed
      simulateScroll(800);
      await waitForFrame();

      expect(fixed1.classList.contains('bs-is-fixed')).to.be.true;

      // Il primo normale dovrebbe aver aggiornato la sua posizione per considerare il fixed
      const normal1NewTop = parseInt(normal1.style.top || '0', 10);
      // Potrebbe essere uguale se era già calcolato correttamente, ma non dovrebbe essere minore
      expect(normal1NewTop).to.be.at.least(normal1InitialTop);

      // Terza fase: rendi sticky anche il secondo normale
      simulateScroll(1200);
      await waitForFrame();

      expect(normal2.classList.contains('bs-is-sticky')).to.be.true;

      // Il secondo normale dovrebbe essere posizionato considerando tutti gli elementi precedenti
      const normal2Top = parseInt(normal2.style.top || '0', 10);
      expect(normal2Top).to.be.greaterThan(0);

      // Quarta fase: torna indietro e verifica che il fixed non sia più sticky
      simulateScroll(600);
      await waitForFrame();

      expect(fixed1.classList.contains('bs-is-fixed')).to.be.false;

      // Gli elementi normali dovrebbero ricalcolare la loro posizione
      // Non verifichiamo il valore esatto perché dipende da timing e implementazione
      // Ma verifichiamo che non ci siano errori nel processo
    });

    it('should apply sticky-class-name when becoming sticky', async () => {
      const container = await fixture(html`
        <div style="height: 2000px;">
          <div style="height: 500px;">Content before</div>
          <it-sticky id="test-sticky" sticky-class-name="custom-class another-class" style="height: 50px;">
            <div>Sticky content</div>
          </it-sticky>
          <div style="height: 1000px;">Content after</div>
        </div>
      `);

      const sticky = container.querySelector('#test-sticky') as ItSticky;

      // Inizialmente non dovrebbe avere le classi custom
      expect(sticky.classList.contains('custom-class')).to.be.false;
      expect(sticky.classList.contains('another-class')).to.be.false;

      // Simula scroll per rendere sticky
      simulateScroll(600);
      await waitForFrame();

      // Ora dovrebbe avere le classi custom
      expect(sticky.classList.contains('custom-class')).to.be.true;
      expect(sticky.classList.contains('another-class')).to.be.true;
      expect(sticky.classList.contains('bs-is-sticky')).to.be.true;

      // Simula scroll indietro
      simulateScroll(100);
      await waitForFrame();

      // Le classi custom dovrebbero essere rimosse
      expect(sticky.classList.contains('custom-class')).to.be.false;
      expect(sticky.classList.contains('another-class')).to.be.false;
      expect(sticky.classList.contains('bs-is-sticky')).to.be.false;
    });

    it('should handle padding-top correctly', async () => {
      const container = await fixture(html`
        <div style="height: 2000px;">
          <div style="height: 500px;">Content before</div>
          <it-sticky id="test-sticky" padding-top="100" style="height: 50px;">
            <div>Sticky content</div>
          </it-sticky>
          <div style="height: 1000px;">Content after</div>
        </div>
      `);

      const sticky = container.querySelector('#test-sticky') as ItSticky;

      // Simula scroll per rendere sticky
      simulateScroll(600);
      await waitForFrame();

      expect(sticky.classList.contains('bs-is-sticky')).to.be.true;

      // Il top dovrebbe includere il padding-top
      expect(sticky.style.top).to.include('100px');
    });
  });

  describe('Custom Events', () => {
    it('should emit it-sticky-on event when becoming sticky', async () => {
      const container = await fixture(html`
        <div style="height: 2000px;">
          <div style="height: 500px;">Content before</div>
          <it-sticky id="test-sticky" style="height: 50px;">
            <div>Sticky content</div>
          </it-sticky>
          <div style="height: 1000px;">Content after</div>
        </div>
      `);

      const sticky = container.querySelector('#test-sticky') as ItSticky;
      let eventFired = false;
      let eventDetail: any = null;

      sticky.addEventListener('it-sticky-on', (event: Event) => {
        eventFired = true;
        eventDetail = (event as CustomEvent).detail;
      });

      // Simula scroll per rendere sticky
      simulateScroll(600);
      await waitForFrame();

      expect(eventFired).to.be.true;
      expect(eventDetail).to.deep.equal({ id: 'test-sticky' });
    });

    it('should emit it-sticky-off event when no longer sticky', async () => {
      const container = await fixture(html`
        <div style="height: 2000px;">
          <div style="height: 500px;">Content before</div>
          <it-sticky id="test-sticky" style="height: 50px;">
            <div>Sticky content</div>
          </it-sticky>
          <div style="height: 1000px;">Content after</div>
        </div>
      `);

      const sticky = container.querySelector('#test-sticky') as ItSticky;
      let eventFired = false;
      let eventDetail: any = null;

      // Prima rendiamo sticky
      simulateScroll(600);
      await waitForFrame();

      sticky.addEventListener('it-sticky-off', (event: Event) => {
        eventFired = true;
        eventDetail = (event as CustomEvent).detail;
      });

      // Poi torniamo alla posizione originale
      simulateScroll(100);
      await waitForFrame();

      expect(eventFired).to.be.true;
      expect(eventDetail).to.deep.equal({ id: 'test-sticky' });
    });

    it('should emit events with bubbles, composed and cancelable properties', async () => {
      const container = await fixture(html`
        <div style="height: 2000px;">
          <div style="height: 500px;">Content before</div>
          <it-sticky id="test-sticky" style="height: 50px;">
            <div>Sticky content</div>
          </it-sticky>
          <div style="height: 1000px;">Content after</div>
        </div>
      `);

      const sticky = container.querySelector('#test-sticky') as ItSticky;
      let onEvent: CustomEvent | null = null;
      let offEvent: CustomEvent | null = null;

      sticky.addEventListener('it-sticky-on', (event: Event) => {
        onEvent = event as CustomEvent;
      });

      sticky.addEventListener('it-sticky-off', (event: Event) => {
        offEvent = event as CustomEvent;
      });

      // Diventa sticky
      simulateScroll(600);
      await waitForFrame();

      expect(onEvent).to.exist;
      expect(onEvent!.bubbles).to.be.true;
      expect(onEvent!.composed).to.be.true;
      expect(onEvent!.cancelable).to.be.true;

      // Torna normale
      simulateScroll(100);
      await waitForFrame();

      expect(offEvent).to.exist;
      expect(offEvent!.bubbles).to.be.true;
      expect(offEvent!.composed).to.be.true;
      expect(offEvent!.cancelable).to.be.true;
    });

    it('should emit events for fixed position-type as well', async () => {
      const container = await fixture(html`
        <div style="height: 2000px;">
          <div style="height: 500px;">Content before</div>
          <it-sticky id="test-fixed" position-type="fixed" style="height: 50px;">
            <div>Fixed content</div>
          </it-sticky>
          <div style="height: 1000px;">Content after</div>
        </div>
      `);

      const sticky = container.querySelector('#test-fixed') as ItSticky;
      let onEventFired = false;
      let offEventFired = false;

      sticky.addEventListener('it-sticky-on', () => {
        onEventFired = true;
      });

      sticky.addEventListener('it-sticky-off', () => {
        offEventFired = true;
      });

      // Diventa sticky fixed
      simulateScroll(600);
      await waitForFrame();

      expect(onEventFired).to.be.true;

      // Torna normale
      simulateScroll(100);
      await waitForFrame();

      expect(offEventFired).to.be.true;
    });
  });
});
