import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import '@italia/progress';
import type { ItProgress } from '../src/index.js';

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
});
