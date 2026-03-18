import { fixture, html, expect } from '@open-wc/testing';
import type { ItProgress } from '../src/it-progress.js';
import '../src/it-progress.js';

describe('it-progress (spinner)', () => {
  it('renders standard spinner', async () => {
    const el = await fixture<ItProgress>(html`<it-progress type="spinner" active></it-progress>`);
    const spinner = el.shadowRoot?.querySelector('.progress-spinner') as HTMLElement;

    expect(spinner).to.exist;
    expect(spinner.classList.contains('progress-spinner-active')).to.equal(true);
  });

  it('renders double spinner variant', async () => {
    const el = await fixture<ItProgress>(html`<it-progress type="spinner" active double></it-progress>`);
    const inner = el.shadowRoot?.querySelectorAll('.progress-spinner-inner');

    expect(inner?.length).to.equal(2);
  });

  it('applies size classes', async () => {
    const el = await fixture<ItProgress>(html`<it-progress type="spinner" size="lg"></it-progress>`);
    const spinner = el.shadowRoot?.querySelector('.progress-spinner') as HTMLElement;

    expect(spinner.classList.contains('size-lg')).to.equal(true);
  });
});
