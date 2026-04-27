import { fixture, html, expect } from '@open-wc/testing';
import '@italia/progress';
import type { ItProgress } from '../src/index.js';

describe('it-progress (bar)', () => {
  it('renders progress bar', async () => {
    const el = await fixture<ItProgress>(html`<it-progress type="bar" value="50"></it-progress>`);
    const bar = el.shadowRoot?.querySelector('.progress-bar') as HTMLElement;

    expect(bar).to.exist;
    expect(bar.getAttribute('aria-valuenow')).to.equal('50');
  });

  it('renders indeterminate variant', async () => {
    const el = await fixture<ItProgress>(html`<it-progress type="bar" indeterminate></it-progress>`);
    const wrapper = el.shadowRoot?.querySelector('.progress') as HTMLElement;

    expect(wrapper.classList.contains('progress-indeterminate')).to.equal(true);
  });
});
