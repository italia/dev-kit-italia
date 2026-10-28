import { fixture, html, expect, oneEvent, aTimeout } from '@open-wc/testing';
import '@italia/progress';
import type { ItProgress } from '../src/index.js';

// The donut is drawn asynchronously by progressbar.js, after a dynamic import.
const donutPath = async (el: ItProgress) => {
  for (let i = 0; i < 50; i += 1) {
    const paths = el.shadowRoot?.querySelectorAll<SVGPathElement>('.progress-donut svg path');
    if (paths?.length) return paths[paths.length - 1];
    // eslint-disable-next-line no-await-in-loop
    await aTimeout(20);
  }
  throw new Error('donut path was never rendered');
};

// Bootstrap Italia tokens are not loaded in the test page: stand-in values are set on the host
// so that the variant -> token mapping resolves to something observable.
const tokens = [
  '--bsi-color-background-secondary: rgb(92, 111, 130)',
  '--bsi-color-background-success: rgb(0, 128, 85)',
  '--bsi-color-background-warning: rgb(153, 92, 0)',
  '--bsi-color-background-danger: rgb(204, 51, 77)',
].join(';');

describe('it-progress (donut)', () => {
  it('renders donut wrapper', async () => {
    const el = await fixture<ItProgress>(html`<it-progress type="donut" value="0.5"></it-progress>`);
    const donut = el.shadowRoot?.querySelector('.progress-donut') as HTMLElement;

    expect(donut).to.exist;
    expect(donut.getAttribute('role')).to.equal('progressbar');
  });

  it('updates value via set()', async () => {
    const el = await fixture<ItProgress>(html`<it-progress type="donut" value="0"></it-progress>`);

    el.set(0.75);
    await el.updateComplete;

    expect(el.value).to.equal(0.75);
  });

  it('reflects aria-valuenow', async () => {
    const el = await fixture<ItProgress>(html`<it-progress type="donut" value="33"></it-progress>`);

    const eventPromise = oneEvent(el, 'it-donut-updated') as Promise<CustomEvent<{ value: string | number }>>;

    await el.updateComplete;

    const event = await eventPromise;

    const value = el.shadowRoot?.querySelector('.progress-donut')?.getAttribute('aria-valuenow');
    expect(event.detail.value).to.equal(33);
    expect(value).to.equal('33');
  });

  describe('color variants', () => {
    const cases: Array<[string, string]> = [
      ['success', 'rgb(0, 128, 85)'],
      ['warning', 'rgb(153, 92, 0)'],
      ['danger', 'rgb(204, 51, 77)'],
      ['info', 'rgb(92, 111, 130)'],
      ['default', 'rgb(92, 111, 130)'],
    ];

    cases.forEach(([color, expected]) => {
      it(`applies the ${color} token to the progress stroke`, async () => {
        const el = await fixture<ItProgress>(
          html`<it-progress type="donut" value="50" color="${color}" style="${tokens}"></it-progress>`,
        );
        const path = await donutPath(el);

        expect(getComputedStyle(path).stroke).to.equal(expected);
      });
    });

    it('falls back to the default token when no color is set', async () => {
      const el = await fixture<ItProgress>(html`<it-progress type="donut" value="50" style="${tokens}"></it-progress>`);
      const path = await donutPath(el);

      expect(getComputedStyle(path).stroke).to.equal('rgb(92, 111, 130)');
    });

    it('renders each semantic variant with a distinct color', async () => {
      const strokes = await Promise.all(
        ['default', 'success', 'warning', 'danger'].map(async (color) => {
          const el = await fixture<ItProgress>(
            html`<it-progress type="donut" value="50" color="${color}" style="${tokens}"></it-progress>`,
          );
          return getComputedStyle(await donutPath(el)).stroke;
        }),
      );

      expect(new Set(strokes).size).to.equal(strokes.length);
    });

    it('lets --it-progress-donut-color override a variant from outside the shadow DOM', async () => {
      const el = await fixture<ItProgress>(
        html`<it-progress
          type="donut"
          value="50"
          color="success"
          style="${tokens};--it-progress-donut-color: rgb(1, 2, 3)"
        ></it-progress>`,
      );
      const path = await donutPath(el);

      expect(getComputedStyle(path).stroke).to.equal('rgb(1, 2, 3)');
    });

    it('lets a page stylesheet rule override a variant', async () => {
      const style = document.createElement('style');
      style.textContent = 'it-progress.donut-override { --it-progress-donut-color: rgb(7, 8, 9); }';
      document.head.appendChild(style);

      try {
        const el = await fixture<ItProgress>(
          html`<it-progress
            class="donut-override"
            type="donut"
            value="50"
            color="success"
            style="${tokens}"
          ></it-progress>`,
        );
        const path = await donutPath(el);

        expect(getComputedStyle(path).stroke).to.equal('rgb(7, 8, 9)');
      } finally {
        style.remove();
      }
    });

    it('follows an override of the underlying Bootstrap Italia token', async () => {
      const el = await fixture<ItProgress>(
        html`<it-progress
          type="donut"
          value="50"
          color="success"
          style="${tokens};--bsi-color-background-success: rgb(4, 5, 6)"
        ></it-progress>`,
      );
      const path = await donutPath(el);

      expect(getComputedStyle(path).stroke).to.equal('rgb(4, 5, 6)');
    });

    it('still honors an arbitrary CSS color', async () => {
      const el = await fixture<ItProgress>(
        html`<it-progress type="donut" value="50" color="#ff0000" style="${tokens}"></it-progress>`,
      );
      const path = await donutPath(el);

      expect(getComputedStyle(path).stroke).to.equal('rgb(255, 0, 0)');
    });
  });
});
