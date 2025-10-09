import '@italia/radio';
import { expect, fixture, html } from '@open-wc/testing';
import { type ItRadio } from '@italia/radio';

describe('<it-radio>', () => {
  // Il componente è accessibile di default
  it('should be accessible', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Test label" name="test"></it-radio>`);
    await expect(el).to.be.accessible();
  });

  // Verifica che il radio sia renderizzato correttamente
  it('should render with label', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Test Radio" name="test"></it-radio>`);
    const label = el.shadowRoot?.querySelector('label');
    expect(label?.textContent?.trim()).to.equal('Test Radio');
  });

  // Verifica che il radio abbia il type corretto
  it('should have type="radio"', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Test" name="test"></it-radio>`);
    const input = el.shadowRoot?.querySelector('input');
    expect(input?.type).to.equal('radio');
  });

  // Imposta e riflette lo stato checked correttamente
  it('should reflect the checked state', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Test" name="test" checked></it-radio>`);
    expect(el.checked).to.be.true;
    expect(el.shadowRoot?.querySelector('input')?.checked).to.be.true;
  });

  // Verifica che il radio possa essere selezionato
  it('should be checkable when clicked', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Test" name="test"></it-radio>`);
    const input = el.shadowRoot?.querySelector('input')!;

    expect(el.checked).to.be.false;

    input.click();
    await el.updateComplete;

    expect(el.checked).to.be.true;
  });

  // Verifica che un radio già selezionato non venga deselezionato al click
  it('should remain checked when clicked again', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Test" name="test" checked></it-radio>`);
    const input = el.shadowRoot?.querySelector('input')!;

    expect(el.checked).to.be.true;

    input.click();
    await el.updateComplete;

    expect(el.checked).to.be.true;
  });

  // Verifica il comportamento del gruppo: solo un radio può essere selezionato
  it('should uncheck other radios with the same name when one is selected', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <it-radio id="radio1" label="Option 1" name="group1" checked></it-radio>
        <it-radio id="radio2" label="Option 2" name="group1"></it-radio>
        <it-radio id="radio3" label="Option 3" name="group1"></it-radio>
      </div>
    `);

    const radio1 = container.querySelector<ItRadio>('#radio1')!;
    const radio2 = container.querySelector<ItRadio>('#radio2')!;
    const radio3 = container.querySelector<ItRadio>('#radio3')!;

    await radio1.updateComplete;
    await radio2.updateComplete;
    await radio3.updateComplete;

    // Inizialmente solo radio1 è selezionato
    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
    expect(radio3.checked).to.be.false;

    // Clicca radio2
    const input2 = radio2.shadowRoot?.querySelector('input')!;
    input2.click();
    await radio2.updateComplete;
    await radio1.updateComplete;

    // Ora solo radio2 è selezionato
    expect(radio1.checked).to.be.false;
    expect(radio2.checked).to.be.true;
    expect(radio3.checked).to.be.false;

    // Clicca radio3
    const input3 = radio3.shadowRoot?.querySelector('input')!;
    input3.click();
    await radio3.updateComplete;
    await radio2.updateComplete;

    // Ora solo radio3 è selezionato
    expect(radio1.checked).to.be.false;
    expect(radio2.checked).to.be.false;
    expect(radio3.checked).to.be.true;
  });

  // Verifica che radio con nomi diversi non si influenzino
  it('should not uncheck radios with different names', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <it-radio id="radio1" label="Group 1 - Option 1" name="group1" checked></it-radio>
        <it-radio id="radio2" label="Group 2 - Option 1" name="group2" checked></it-radio>
      </div>
    `);

    const radio1 = container.querySelector<ItRadio>('#radio1')!;
    const radio2 = container.querySelector<ItRadio>('#radio2')!;

    await radio1.updateComplete;
    await radio2.updateComplete;

    // Entrambi possono essere selezionati perché hanno nomi diversi
    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.true;
  });

  // Verifica lo stato disabilitato
  it('should be disabled when disabled attribute is set', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Disabled" name="test" disabled></it-radio>`);
    expect(el.disabled).to.be.true;
    expect(el.shadowRoot?.querySelector('input')?.disabled).to.be.true;
  });

  // Verifica che un radio disabilitato non possa essere selezionato
  it('should not be checkable when disabled', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Disabled" name="test" disabled></it-radio>`);
    const input = el.shadowRoot?.querySelector('input')!;

    expect(el.checked).to.be.false;

    input.click();
    await el.updateComplete;

    expect(el.checked).to.be.false;
  });

  // Verifica l'attributo inline
  it('should apply inline class when inline attribute is set', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Inline" name="test" inline></it-radio>`);
    expect(el.inline).to.be.true;
  });

  // Verifica l'attributo group
  it('should apply group class when group attribute is set', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Group" name="test" group></it-radio>`);
    const wrapper = el.shadowRoot?.querySelector('.form-check');
    expect(wrapper?.classList.contains('form-check-group')).to.be.true;
  });

  // Verifica il testo di supporto
  it('should display support text when provided', async () => {
    const el = await fixture<ItRadio>(
      html`<it-radio label="Test" name="test" support-text="This is a help text"></it-radio>`,
    );
    const supportText = el.shadowRoot?.querySelector('small.form-text');
    expect(supportText).to.exist;
    expect(supportText?.textContent?.trim()).to.equal('This is a help text');
  });

  // Validazione (required)
  it('should mark the radio as invalid if required and not checked', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Required field" name="req-field" required></it-radio>`);
    const input = el.shadowRoot?.querySelector('input')!;
    input.focus();
    input.blur();
    await el.updateComplete;

    expect(el.validationMessage).to.not.be.empty;
  });

  // Validazione personalizzata
  it('should show a custom validity message', async () => {
    const el = await fixture<ItRadio>(
      html`<it-radio
        label="Custom validation"
        name="custom"
        validity-message="Errore personalizzato"
        custom-validation
      ></it-radio>`,
    );

    await el.updateComplete;

    expect(el.validationMessage).to.equal('Errore personalizzato');
  });

  // Reset del messaggio di validazione dopo selezione
  it('should clear the validity message when checked', async () => {
    const el = await fixture<ItRadio>(html`<it-radio required label="Required field" name="test"></it-radio>`);
    const input = el.shadowRoot?.querySelector('input')!;

    input.blur();
    await el.updateComplete;

    // Seleziona il radio
    input.click();
    await el.updateComplete;

    el.checkValidity();
    await el.updateComplete;

    expect(el.validationMessage).to.equal('');
  });

  // Test FormData: verifica che il valore corretto venga inviato
  it('should send correct value to FormData when checked', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form id="test-form">
          <it-radio name="option" value="option1" label="Option 1"></it-radio>
          <it-radio name="option" value="option2" label="Option 2" checked></it-radio>
          <it-radio name="option" value="option3" label="Option 3"></it-radio>
        </form>
      </div>
    `);

    const form = container.querySelector('form')!;
    const radios = form.querySelectorAll('it-radio');

    // Aspetta che tutti i radio siano completamente renderizzati
    await Promise.all(Array.from(radios).map((r) => r.updateComplete));

    // Aspetta un tick aggiuntivo per assicurarsi che il FormControlController sia pronto
    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 50);
    });
    const formData = new FormData(form);
    // Solo il radio selezionato dovrebbe essere nel FormData
    expect(formData.get('option')).to.equal('option2');
  });

  // Test FormData: verifica che non venga inviato nulla se nessun radio è selezionato
  it('should not send value to FormData when not checked', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form id="test-form">
          <it-radio name="option" value="option1" label="Option 1"></it-radio>
          <it-radio name="option" value="option2" label="Option 2"></it-radio>
        </form>
      </div>
    `);

    const form = container.querySelector('form')!;
    const radios = form.querySelectorAll('it-radio');

    await Promise.all(Array.from(radios).map((r) => r.updateComplete));

    // Aspetta un tick aggiuntivo
    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 50);
    });

    const formData = new FormData(form);

    // Nessun radio selezionato, quindi nessun valore nel FormData
    expect(formData.get('option')).to.be.null;
  });

  // Test FormData: aggiorna il valore quando un radio diverso viene selezionato
  it('should update FormData when a different radio is selected', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form id="test-form">
          <it-radio name="option" value="option1" label="Option 1" checked></it-radio>
          <it-radio name="option" value="option2" label="Option 2"></it-radio>
        </form>
      </div>
    `);

    const form = container.querySelector('form')!;
    const radio1 = form.querySelector<ItRadio>('it-radio[value="option1"]')!;
    const radio2 = form.querySelector<ItRadio>('it-radio[value="option2"]')!;

    await radio1.updateComplete;
    await radio2.updateComplete;

    // Aspetta un tick aggiuntivo
    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 50);
    });

    // Verifica iniziale
    let formData = new FormData(form);
    expect(formData.get('option')).to.equal('option1');

    // Seleziona il secondo radio
    const input2 = radio2.shadowRoot?.querySelector('input')!;
    input2.click();
    await radio2.updateComplete;
    await radio1.updateComplete;

    // Aspetta un tick aggiuntivo
    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 50);
    });

    // Verifica aggiornamento
    formData = new FormData(form);
    expect(formData.get('option')).to.equal('option2');
  });

  // Verifica che il metodo click() funzioni
  it('should support the click() method', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Test" name="test"></it-radio>`);

    expect(el.checked).to.be.false;

    el.click();
    await el.updateComplete;

    expect(el.checked).to.be.true;
  });

  // Verifica che il change event venga emesso
  it('should emit change event when checked state changes', async () => {
    const el = await fixture<ItRadio>(html`<it-radio label="Test" name="test"></it-radio>`);
    let changeEventFired = false;

    el.addEventListener('change', () => {
      changeEventFired = true;
    });

    const input = el.shadowRoot?.querySelector('input')!;
    input.click();
    await el.updateComplete;

    expect(changeEventFired).to.be.true;
  });

  // Verifica che il radio funzioni all'interno di un fieldset
  it('should work inside a fieldset', async () => {
    const container = await fixture<HTMLFieldSetElement>(html`
      <fieldset>
        <legend>Test Group</legend>
        <it-radio id="radio1" label="Option 1" name="test-group" checked></it-radio>
        <it-radio id="radio2" label="Option 2" name="test-group"></it-radio>
      </fieldset>
    `);

    const radio1 = container.querySelector<ItRadio>('#radio1')!;
    const radio2 = container.querySelector<ItRadio>('#radio2')!;

    await radio1.updateComplete;
    await radio2.updateComplete;

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;

    const input2 = radio2.shadowRoot?.querySelector('input')!;
    input2.click();
    await radio2.updateComplete;
    await radio1.updateComplete;

    expect(radio1.checked).to.be.false;
    expect(radio2.checked).to.be.true;
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('should navigate with arrow keys', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div>
          <it-radio id="radio1" label="Option 1" name="kbd-group" value="opt1" checked></it-radio>
          <it-radio id="radio2" label="Option 2" name="kbd-group" value="opt2"></it-radio>
          <it-radio id="radio3" label="Option 3" name="kbd-group" value="opt3"></it-radio>
        </div>
      `);

      const radio1 = container.querySelector<ItRadio>('#radio1')!;
      const radio2 = container.querySelector<ItRadio>('#radio2')!;
      const radio3 = container.querySelector<ItRadio>('#radio3')!;

      await radio1.updateComplete;
      await radio2.updateComplete;
      await radio3.updateComplete;

      const input1 = radio1.shadowRoot?.querySelector('input')!;

      // Initially radio1 is checked
      expect(radio1.checked).to.be.true;
      expect(radio2.checked).to.be.false;
      expect(radio3.checked).to.be.false;

      // Press ArrowDown should move to radio2
      input1.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await radio2.updateComplete;
      await radio1.updateComplete;

      expect(radio1.checked).to.be.false;
      expect(radio2.checked).to.be.true;
      expect(radio3.checked).to.be.false;

      // Press ArrowDown again should move to radio3
      const input2 = radio2.shadowRoot?.querySelector('input')!;
      input2.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await radio3.updateComplete;
      await radio2.updateComplete;

      expect(radio1.checked).to.be.false;
      expect(radio2.checked).to.be.false;
      expect(radio3.checked).to.be.true;

      // Press ArrowDown should wrap to radio1
      const input3 = radio3.shadowRoot?.querySelector('input')!;
      input3.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await radio1.updateComplete;
      await radio3.updateComplete;

      expect(radio1.checked).to.be.true;
      expect(radio2.checked).to.be.false;
      expect(radio3.checked).to.be.false;
    });

    it('should navigate with ArrowUp/ArrowLeft in reverse', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div>
          <it-radio id="radio1" label="Option 1" name="kbd-group2" value="opt1" checked></it-radio>
          <it-radio id="radio2" label="Option 2" name="kbd-group2" value="opt2"></it-radio>
          <it-radio id="radio3" label="Option 3" name="kbd-group2" value="opt3"></it-radio>
        </div>
      `);

      const radio1 = container.querySelector<ItRadio>('#radio1')!;
      const radio2 = container.querySelector<ItRadio>('#radio2')!;
      const radio3 = container.querySelector<ItRadio>('#radio3')!;

      await radio1.updateComplete;
      await radio2.updateComplete;
      await radio3.updateComplete;

      const input1 = radio1.shadowRoot?.querySelector('input')!;

      // Press ArrowUp should wrap to radio3
      input1.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
      await radio3.updateComplete;
      await radio1.updateComplete;

      expect(radio1.checked).to.be.false;
      expect(radio2.checked).to.be.false;
      expect(radio3.checked).to.be.true;
    });

    it('should select radio with Space key', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div>
          <it-radio id="radio1" label="Option 1" name="kbd-group3" value="opt1"></it-radio>
          <it-radio id="radio2" label="Option 2" name="kbd-group3" value="opt2"></it-radio>
        </div>
      `);

      const radio1 = container.querySelector<ItRadio>('#radio1')!;
      const radio2 = container.querySelector<ItRadio>('#radio2')!;

      await radio1.updateComplete;
      await radio2.updateComplete;

      const input1 = radio1.shadowRoot?.querySelector('input')!;

      expect(radio1.checked).to.be.false;

      // Press Space should select radio1
      input1.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
      await radio1.updateComplete;

      expect(radio1.checked).to.be.true;
      expect(radio2.checked).to.be.false;
    });

    it('should implement roving tabindex - only checked radio is tabbable', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div>
          <it-radio id="radio1" label="Option 1" name="tab-group" value="opt1"></it-radio>
          <it-radio id="radio2" label="Option 2" name="tab-group" value="opt2" checked></it-radio>
          <it-radio id="radio3" label="Option 3" name="tab-group" value="opt3"></it-radio>
        </div>
      `);

      const radio1 = container.querySelector<ItRadio>('#radio1')!;
      const radio2 = container.querySelector<ItRadio>('#radio2')!;
      const radio3 = container.querySelector<ItRadio>('#radio3')!;

      await radio1.updateComplete;
      await radio2.updateComplete;
      await radio3.updateComplete;

      const input1 = radio1.shadowRoot?.querySelector('input')!;
      const input2 = radio2.shadowRoot?.querySelector('input')!;
      const input3 = radio3.shadowRoot?.querySelector('input')!;

      // Only checked radio should have tabindex 0
      expect(input1.tabIndex).to.equal(-1);
      expect(input2.tabIndex).to.equal(0);
      expect(input3.tabIndex).to.equal(-1);
    });

    it('should implement roving tabindex - first radio is tabbable when none checked', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div>
          <it-radio id="radio1" label="Option 1" name="tab-group2" value="opt1"></it-radio>
          <it-radio id="radio2" label="Option 2" name="tab-group2" value="opt2"></it-radio>
          <it-radio id="radio3" label="Option 3" name="tab-group2" value="opt3"></it-radio>
        </div>
      `);

      const radio1 = container.querySelector<ItRadio>('#radio1')!;
      const radio2 = container.querySelector<ItRadio>('#radio2')!;
      const radio3 = container.querySelector<ItRadio>('#radio3')!;

      await radio1.updateComplete;
      await radio2.updateComplete;
      await radio3.updateComplete;

      const input1 = radio1.shadowRoot?.querySelector('input')!;
      const input2 = radio2.shadowRoot?.querySelector('input')!;
      const input3 = radio3.shadowRoot?.querySelector('input')!;

      // First radio should have tabindex 0 when none is checked
      expect(input1.tabIndex).to.equal(0);
      expect(input2.tabIndex).to.equal(-1);
      expect(input3.tabIndex).to.equal(-1);
    });

    it('should not navigate when disabled', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div>
          <it-radio id="radio1" label="Option 1" name="kbd-group4" value="opt1" checked></it-radio>
          <it-radio id="radio2" label="Option 2" name="kbd-group4" value="opt2" disabled></it-radio>
        </div>
      `);

      const radio1 = container.querySelector<ItRadio>('#radio1')!;
      const radio2 = container.querySelector<ItRadio>('#radio2')!;

      await radio1.updateComplete;
      await radio2.updateComplete;

      const input1 = radio1.shadowRoot?.querySelector('input')!;

      expect(radio1.checked).to.be.true;

      // Press ArrowDown should skip disabled radio2 and wrap around
      input1.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await radio1.updateComplete;
      await radio2.updateComplete;

      // Should stay on radio1 since radio2 is disabled and it wraps to radio1
      expect(radio1.checked).to.be.true;
      expect(radio2.checked).to.be.false;
    });
  });
});
