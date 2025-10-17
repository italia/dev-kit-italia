import '@italia/input';
import { expect, fixture, html } from '@open-wc/testing';

import { type ItInput } from '@italia/input';

describe('<it-input>', () => {
  // Il componente è accessibile di default
  it('should be accessible', async () => {
    const el = await fixture<ItInput>(html`<it-input name="test"><span slot="label">Test label</span></it-input>`);
    await expect(el).to.be.accessible();
  });

  // Imposta e riflette il valore correttamente
  it('should reflect the initial value', async () => {
    const el = await fixture<ItInput>(
      html`<it-input value="ciao" name="test"><span slot="label">Test</span></it-input>`,
    );
    expect(el.value).to.equal('ciao');
    expect(el.shadowRoot?.querySelector('input')?.value).to.equal('ciao');
  });

  // Validazione (required)
  it('should mark the input as invalid if required and empty', async () => {
    const el = await fixture<ItInput>(
      html`<it-input name="req-field" required><span slot="label">Required field</span></it-input>`,
    );
    const input = el.shadowRoot?.querySelector('input')!;
    input.focus();
    input.blur(); // trigger blur e checkValidity

    expect(el.validationMessage).to.equal('Questo campo è obbligatorio.');
  });

  // Validazione personalizzata (setCustomValidity)
  it('should show a custom validity message', async () => {
    const el = await fixture<ItInput>(
      html`<it-input name="custom" validity-message="Errore personalizzato" custom-validation
        ><span slot="label">Custom validation</span></it-input
      >`,
    );

    await el.updateComplete;

    expect(el.validationMessage).to.equal('Errore personalizzato');
  });

  // Reset del messaggio di validazione dopo input valido

  it('should clear the validity message after valid input', async () => {
    const el = await fixture<ItInput>(
      html`<it-input required name="test"><span slot="label">Required field</span></it-input>`,
    );
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
          <it-input name="email" type="email" value="test@example.com"><span slot="label">Email</span></it-input>
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
    expect(formData.get('email')).to.equal('test@example.com');
  });

  it('update FormData on input value change', async () => {
    // 1. Setup iniziale
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form id="test-form">
          <it-input name="username" value="initialValue"><span slot="label">Username</span></it-input>
        </form>
      </div>
    `);

    const form = container.querySelector('form')!;
    const itInput = form.querySelector('it-input')!;

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
