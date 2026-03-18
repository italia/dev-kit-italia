import { fixture, html, expect } from '@open-wc/testing';
import type { ItProgress } from '../src/it-progress.js';
import '../src/it-progress.js';

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
    const el = await fixture<ItProgress>(html`<it-progress type="donut" value="0.33"></it-progress>`);
    const donut = el.shadowRoot?.querySelector('.progress-donut') as HTMLElement;

    expect(donut.getAttribute('aria-valuenow')).to.equal('33');
  });
});
