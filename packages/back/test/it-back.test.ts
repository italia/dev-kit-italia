import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/it-back.js';
import type { ItBack } from '../src/it-back.js';

const template = html`
  <it-back>
    <a href="#" class="go-back"><span>Torna indietro</span></a>
  </it-back>
`;

describe('ItBack', () => {
  let backCalls: number;
  let originalBack: typeof window.history.back;

  beforeEach(() => {
    backCalls = 0;
    originalBack = window.history.back.bind(window.history);
    window.history.back = () => {
      backCalls += 1;
    };
  });

  afterEach(() => {
    window.history.back = originalBack;
  });

  it('renders in light DOM and preserves its child markup', async () => {
    const el = await fixture<ItBack>(template);
    expect(el.shadowRoot).to.be.null;
    expect(el.querySelector('.go-back')).to.exist;
  });

  it('fires a cancelable it-back-navigate event and calls history.back by default', async () => {
    const el = await fixture<ItBack>(template);
    let cancelable = false;
    el.addEventListener('it-back-navigate', (e) => {
      cancelable = e.cancelable;
    });

    el.querySelector<HTMLAnchorElement>('.go-back')!.click();

    expect(cancelable).to.be.true;
    expect(backCalls).to.equal(1);
  });

  it('does not call history.back when the event is prevented', async () => {
    const el = await fixture<ItBack>(template);
    el.addEventListener('it-back-navigate', (e) => e.preventDefault());

    el.querySelector<HTMLAnchorElement>('.go-back')!.click();

    expect(backCalls).to.equal(0);
  });
});
