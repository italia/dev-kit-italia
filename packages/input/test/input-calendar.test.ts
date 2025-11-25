import '@italia/input';
import { expect, fixture, html } from '@open-wc/testing';

describe('<it-input type="date">', () => {
  let el: HTMLElement & any;
  let inputEl: HTMLInputElement;

  beforeEach(async () => {
    // Monta il componente con tipo number e impostazioni
    el = await fixture(html` <it-input type="date" value="2025-11-12"></it-input> `);
    // accedi all’input interno (assumendo sia nel shadowRoot con il selettore)
    inputEl = el.shadowRoot!.querySelector('input[type="date"]')!;
  });

  it('inizializza con il valore specificato', () => {
    expect(inputEl.value).to.equal('2025-11-12');
  });
});
