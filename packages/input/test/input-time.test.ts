import '@italia/input';
import { expect, fixture, html } from '@open-wc/testing';

describe('<it-input type="time">', () => {
  // Imposta e riflette il valore correttamente
  it('should reflect the initial value', async () => {
    const el = await fixture<ItInput>(
      html`<it-input value="10:30" type="time" name="testtime"><span slot="label">Test time</span></it-input>`,
    );
    expect(el.value).to.equal('10:30');
    expect(el.shadowRoot?.querySelector('input')?.value).to.equal('10:30');
  });

  it('send right value to FormData', async () => {
    // 1. Setup: inseriamo il form nel DOM
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form id="test-form">
          <it-input type="time" name="time" value="10:30" min="10:00" max="12:00" step="1800"
            ><span slot="label">time</span></it-input
          >
          <button type="submit">Invia</button>
        </form>
      </div>
    `);

    const form = container.querySelector('form')!;
    const itInput = form.querySelector('it-input')!;

    // 2. Aspettiamo il rendering completo (necessario per Shadow DOM)
    await itInput.updateComplete;

    // 3. Usiamo direttamente `new FormData(form)` per simulare la submit
    const formData = new FormData(form);

    // 4. Assert: il valore è incluso correttamente
    expect(formData.get('time')).to.equal('10:30');
  });

  it('validate value on submit', async () => {
    // 1. Setup: inseriamo il form nel DOM
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form id="test-form">
          <it-input type="time" name="time" value="10:12" min="10:00" max="12:00" step="1800"
            ><span slot="label">time</span></it-input
          >
          <button type="submit">Invia</button>
        </form>
      </div>
    `);

    const form = container.querySelector('form')!;
    const itInput = form.querySelector('it-input')!;
    const button = form.querySelector('button')!;

    // 2. Aspettiamo il rendering completo (necessario per Shadow DOM)
    await itInput.updateComplete;

    button.click();

    await itInput.updateComplete;

    // value should be invalid, because 10:12 is not every 30 minutes (1800 seconds) from 10:00
    expect(itInput.validity.rangeOverflow).to.equal(false);
  });
});
