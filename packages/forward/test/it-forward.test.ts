import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/it-forward.js';
import type { ItForward } from '../src/it-forward.js';

const template = html`
  <div>
    <it-forward>
      <a href="#sezione-target" class="forward" aria-label="Vai alla sezione">vai</a>
    </it-forward>
    <div id="sezione-target">Sezione di destinazione</div>
  </div>
`;

describe('ItForward', () => {
  it('renders in light DOM and preserves its child markup', async () => {
    const wrapper = await fixture(template);
    const el = wrapper.querySelector<ItForward>('it-forward')!;
    expect(el.shadowRoot).to.be.null;
    expect(el.querySelector('.forward')).to.exist;
  });

  it('fires a cancelable it-forward-navigate event with href and target', async () => {
    const wrapper = await fixture(template);
    const el = wrapper.querySelector<ItForward>('it-forward')!;
    const target = wrapper.querySelector('#sezione-target');

    let detail: { href: string; target: HTMLElement | null } | null = null;
    let cancelable = false;
    el.addEventListener('it-forward-navigate', (e) => {
      cancelable = e.cancelable;
      detail = (e as CustomEvent).detail;
    });

    el.querySelector<HTMLAnchorElement>('.forward')!.click();

    expect(cancelable).to.be.true;
    expect(detail!.href).to.equal('#sezione-target');
    expect(detail!.target).to.equal(target);
  });

  it('moves focus to the target by default', async () => {
    const wrapper = await fixture(template);
    const el = wrapper.querySelector<ItForward>('it-forward')!;
    const target = wrapper.querySelector<HTMLElement>('#sezione-target')!;

    el.querySelector<HTMLAnchorElement>('.forward')!.click();

    expect(target.getAttribute('tabindex')).to.equal('-1');
    expect(document.activeElement).to.equal(target);
  });

  it('does not move focus when the event is prevented', async () => {
    const wrapper = await fixture(template);
    const el = wrapper.querySelector<ItForward>('it-forward')!;
    const target = wrapper.querySelector<HTMLElement>('#sezione-target')!;
    el.addEventListener('it-forward-navigate', (e) => e.preventDefault());

    el.querySelector<HTMLAnchorElement>('.forward')!.click();

    expect(document.activeElement).to.not.equal(target);
  });
});
