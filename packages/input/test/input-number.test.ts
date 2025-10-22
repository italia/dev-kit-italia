import '@italia/input';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';

describe('<it-input type="number">', () => {
  let el: HTMLElement & any;
  let inputEl: HTMLInputElement;

  beforeEach(async () => {
    // Monta il componente con tipo number e impostazioni
    el = await fixture(html` <it-input type="number" min="0" max="100" step="10" value="20"></it-input> `);
    // accedi all’input interno (assumendo sia nel shadowRoot con il selettore)
    inputEl = el.shadowRoot!.querySelector('input[type="number"]')!;
  });

  it('inizializza con il valore specificato', () => {
    expect(inputEl.value).to.equal('20');
  });

  it('incrementa di step quando clicchi il bottone add', async () => {
    const addBtn = el.shadowRoot!.querySelector('.input-number-add')!;

    // ascolta l’evento change o input che il componente dovrebbe emettere
    const changePromise = oneEvent(el, 'it-change');

    addBtn.click();
    const ev = await changePromise; // attende che venga emesso

    expect(inputEl.value).to.equal('30');
    expect(ev).to.exist;
    // puoi anche verificare che ev.detail (se l’evento lo porta) contenga il valore aggiornato
  });

  it('decrementa di step quando clicchi il bottone sub', async () => {
    const subBtn = el.shadowRoot!.querySelector('.input-number-sub')!;
    const changePromise = oneEvent(el, 'it-change');

    subBtn.click();
    const ev = await changePromise;

    expect(inputEl.value).to.equal('10');
    expect(ev).to.exist;
  });

  it('non supera il `max` quando incrementi oltre il limite', () => {
    // imposta un valore vicino al max
    inputEl.value = '100';
    // eventualmente dispatch event interno
    el.shadowRoot!.querySelector('.input-number-add')!.click();

    expect(inputEl.value).to.equal('100');
  });

  it('non scende sotto `min` quando decrementi oltre il limite', () => {
    inputEl.value = '0';
    el.shadowRoot!.querySelector('.input-number-sub')!.click();
    expect(inputEl.value).to.equal('0');
  });

  it('annuncia il valore tramite aria-live o meccanismo interno quando cambia valore', async () => {
    const addBtn = el.shadowRoot!.querySelector('.input-number-add')!;
    // trova l’elemento live region interno
    const live = el.shadowRoot!.querySelector('[aria-live]') as HTMLElement;
    expect(live).to.exist;

    addBtn.click();
    // attendi microtasks / rendering
    await el.updateComplete;

    expect(live.textContent).to.contain('30');
  });

  it('gestisce valori decimali o floating point con arrotondamento corretto', async () => {
    // imposta un valore decimale se è permesso
    inputEl.value = '3.51';
    inputEl.dispatchEvent(new Event('input', { bubbles: true }));
    await el.updateComplete;

    const addBtn = el.shadowRoot!.querySelector('.input-number-add')!;
    const changePromise = oneEvent(el, 'it-change');
    addBtn.click();
    await changePromise;

    const val = parseFloat(inputEl.value);
    expect(val).to.be.equal(13.51);
  });
});
