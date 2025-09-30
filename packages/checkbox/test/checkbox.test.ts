import '@italia/input';
import { expect, fixture, html } from '@open-wc/testing';

import { type ItCheckbox } from '@italia/checkbox';

describe('<it-checkbox>', () => {
  // Il componente è accessibile di default
  it('should be accessible', async () => {
    const el = await fixture<ItCheckbox>(html`<it-checkbox label="Test label" name="test"></it-checkbox>`);
    await expect(el).to.be.accessible();
  });

  // Imposta e riflette il valore correttamente
  it('should reflect the initial value', async () => {
    const el = await fixture<ItCheckbox>(html`<it-checkbox value="ciao" label="Test" name="test"></it-checkbox>`);
    expect(el.value).to.equal('ciao');
    expect(el.shadowRoot?.querySelector('input')?.value).to.equal('ciao');
  });

  // Validazione (required)
  it('should mark the input as invalid if required and empty', async () => {
    const el = await fixture<ItCheckbox>(
      html`<it-checkbox label="Required field" name="req-field" required></it-checkbox>`,
    );
    const input = el.shadowRoot?.querySelector('input')!;
    input.focus();
    input.blur(); // trigger blur e checkValidity

    expect(el.validationMessage).to.equal('Questo campo è obbligatorio.');
  });

  // Validazione personalizzata (setCustomValidity)
  it('should show a custom validity message', async () => {
    const el = await fixture<ItCheckbox>(
      html`<it-checkbox
        label="Custom validation"
        name="custom"
        validity-message="Errore personalizzato"
        custom-validation
      ></it-checkbox>`,
    );

    await el.updateComplete;

    expect(el.validationMessage).to.equal('Errore personalizzato');
  });

  // Reset del messaggio di validazione dopo input valido

  it('should clear the validity message after valid input', async () => {
    const el = await fixture<ItCheckbox>(html`<it-checkbox required label="Required field" name="test"></it-checkbox>`);
    el.blur();
    el.value = 'ok';
    el.checkValidity();
    await el.updateComplete;

    expect(el.validationMessage).to.equal('');
  });

  it('send right value to FormData', async () => {
    // 1. Setup: inseriamo il form nel DOM
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form id="test-form">
          <it-checkbox name="email" type="email" value="test@example.com" label="Email"></it-checkbox>
          <button type="submit">Invia</button>
        </form>
      </div>
    `);

    const form = container.querySelector('form')!;
    const itInput = form.querySelector('it-checkbox')!;

    // 2. Aspettiamo il rendering completo (necessario per Shadow DOM)
    await itInput.updateComplete;

    // 3. Usiamo direttamente `new FormData(form)` per simulare la submit
    const formData = new FormData(form);

    // 4. Assert: il valore è incluso correttamente
    expect(formData.get('email')).to.equal('test@example.com');
  });

  it('update FormData on input value change', async () => {
    // 1. Setup iniziale
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form id="test-form">
          <it-checkbox name="username" value="initialValue" label="Username"></it-checkbox>
        </form>
      </div>
    `);

    const form = container.querySelector('form')!;
    const itInput = form.querySelector('it-checkbox')!;

    // 2. Aspetta che il componente sia completamente aggiornato
    await itInput.updateComplete;

    // 3. Cambia dinamicamente il valore via proprietà
    itInput.value = 'newValue';

    // 4. Aspetta che Lit aggiorni il DOM interno
    await itInput.updateComplete;

    // 5. Crea un nuovo FormData per simulare la submit
    const formData = new FormData(form);

    // 6. Verifica che il nuovo valore sia stato registrato
    expect(formData.get('username')).to.equal('newValue');
  });
});
