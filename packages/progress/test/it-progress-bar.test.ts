import { fixture, html, expect } from '@open-wc/testing';
import type { ItProgress } from '../src/it-progress.js';
import '../src/it-progress.js';

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

  it('renders label when show-label is true', async () => {
    const el = await fixture<ItProgress>(html`<it-progress type="bar" value="35" show-label></it-progress>`);
    const label = el.shadowRoot?.querySelector('.progress-bar-label');
    expect(label).to.exist;
    expect(label?.textContent).to.include('35%');
  });

  it('renders custom label from default slot when show-label is true', async () => {
    const el = await fixture<ItProgress>(html`<it-progress type="bar" value="35" show-label>Completato</it-progress>`);
    const label = el.shadowRoot?.querySelector('.progress-bar-label');

    expect(label).to.exist;
    expect(label?.textContent).to.include('Completato');
  });
});
