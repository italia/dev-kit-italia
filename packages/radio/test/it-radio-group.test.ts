import { expect, fixture, html, oneEvent, nextFrame } from '@open-wc/testing';
import '@italia/radio';
import { type ItRadio, type ItRadioGroup } from '@italia/radio';

describe('<it-radio-group>', () => {
  it('should be accessible', async () => {
    const el = await fixture(html`
      <fieldset>
        <legend>Test group</legend>
        <it-radio-group name="test">
          <it-radio value="1"><span slot="label">Option 1</span></it-radio>
          <it-radio value="2"><span slot="label">Option 2</span></it-radio>
        </it-radio-group>
      </fieldset>
    `);
    await expect(el).to.be.accessible();
  });

  it('should have role="radiogroup"', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
      </it-radio-group>
    `);
    await el.updateComplete;
    expect(el.getAttribute('role')).to.equal('radiogroup');
  });

  it('should initialize with a value', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2" checked=""><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    await el.updateComplete;
    await nextFrame(); // Wait a frame for radios to sync
    const radios = el.querySelectorAll<ItRadio>('it-radio');
    await Promise.all(Array.from(radios).map((r) => r.updateComplete));
    expect(radios[0].checked).to.be.false;
    expect(radios[1].checked).to.be.true;
    expect(radios[2].checked).to.be.false;
    expect(el.value).to.equal('2'); // Group value should be synced
  });

  // ROVING TABINDEX TESTS
  it('should implement roving tabindex - only checked radio is tabbable', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group>
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2" checked=""><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    await el.updateComplete;
    const radios = el.querySelectorAll<ItRadio>('it-radio');
    await Promise.all(Array.from(radios).map((r) => r.updateComplete));

    expect(radios[0].tabIndex).to.equal(-1);
    expect(radios[1].tabIndex).to.equal(0); // checked radio is tabbable
    expect(radios[2].tabIndex).to.equal(-1);
  });

  it('should implement roving tabindex - first radio is tabbable when none checked', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    // First radio should be tabbable when none is checked
    expect(radios[0].tabIndex).to.equal(0);
    expect(radios[1].tabIndex).to.equal(-1);
    expect(radios[2].tabIndex).to.equal(-1);
  });

  it('should update roving tabindex when selection changes', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group>
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2" checked><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    await el.updateComplete;

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    // Initially radio 2 is tabbable
    expect(radios[1].tabIndex).to.equal(0);
    expect(radios[0].tabIndex).to.equal(-1);
    expect(radios[2].tabIndex).to.equal(-1);

    // Click radio 1
    radios[0].click();
    await el.updateComplete;

    // Now radio 1 should be tabbable
    expect(radios[0].tabIndex).to.equal(0);
    expect(radios[1].tabIndex).to.equal(-1);
    expect(radios[2].tabIndex).to.equal(-1);
  });

  // KEYBOARD NAVIGATION TESTS
  it('should navigate to next radio with ArrowDown', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1" checked><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    await el.updateComplete;

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    // Focus first radio
    radios[0].focus();
    expect(document.activeElement).to.equal(radios[0]);

    // Press ArrowDown
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, composed: true });
    radios[0].dispatchEvent(event);
    await el.updateComplete;

    // Should move to and select second radio
    expect(el.value).to.equal('2');
    expect(radios[1].checked).to.be.true;
    expect(document.activeElement).to.equal(radios[1]);
  });

  it('should navigate to previous radio with ArrowUp', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2" checked><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    await el.updateComplete;

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    // Focus second radio
    radios[1].focus();
    expect(document.activeElement).to.equal(radios[1]);

    // Press ArrowUp
    const event = new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true, composed: true });
    radios[1].dispatchEvent(event);
    await el.updateComplete;

    // Should move to and select first radio
    expect(el.value).to.equal('1');
    expect(radios[0].checked).to.be.true;
    expect(document.activeElement).to.equal(radios[0]);
  });

  it('should wrap around when navigating past last radio', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
        <it-radio value="3" checked><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    await el.updateComplete;

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    // Focus last radio
    radios[2].focus();

    // Press ArrowDown - should wrap to first
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, composed: true });
    radios[2].dispatchEvent(event);
    await el.updateComplete;

    expect(el.value).to.equal('1');
    expect(radios[0].checked).to.be.true;
    expect(document.activeElement).to.equal(radios[0]);
  });

  it('should wrap around when navigating before first radio', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1" checked><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    await el.updateComplete;

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    // Focus first radio
    radios[0].focus();

    // Press ArrowUp - should wrap to last
    const event = new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true, composed: true });
    radios[0].dispatchEvent(event);
    await el.updateComplete;

    expect(el.value).to.equal('3');
    expect(radios[2].checked).to.be.true;
    expect(document.activeElement).to.equal(radios[2]);
  });

  it('should skip disabled radios when navigating', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    // Set disabled property programmatically
    radios[1].disabled = true;

    // Wait for all radios to update
    await Promise.all(Array.from(radios).map((r) => r.updateComplete));
    await el.updateComplete;

    // Focus first radio
    radios[0].focus();

    // Press ArrowDown - should skip disabled and go to third
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, composed: true });
    radios[0].dispatchEvent(event);
    await el.updateComplete;

    expect(el.value).to.equal('3');
    expect(radios[2].checked).to.be.true;
    expect(document.activeElement).to.equal(radios[2]);
  });

  it('should select first radio with Space when none is checked', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    // Focus first radio (simulating Tab into the group)
    radios[0].focus();

    // Initially no radio should be checked
    expect(el.value).to.equal('');
    expect(radios[0].checked).to.be.false;
    expect(radios[1].checked).to.be.false;
    expect(radios[2].checked).to.be.false;

    // Press Space - should select the focused radio
    const keydownEvent = new KeyboardEvent('keydown', { code: 'Space', bubbles: true, composed: true });
    const keyupEvent = new KeyboardEvent('keyup', { code: 'Space', bubbles: true, composed: true });
    radios[0].dispatchEvent(keydownEvent);
    radios[0].dispatchEvent(keyupEvent);
    await el.updateComplete;

    // First radio should now be checked
    expect(el.value).to.equal('1');
    expect(radios[0].checked).to.be.true;
    expect(radios[1].checked).to.be.false;
    expect(radios[2].checked).to.be.false;
  });

  it('should update value when a radio is clicked', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1" checked><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    await el.updateComplete;

    const radios = el.querySelectorAll<ItRadio>('it-radio');
    expect(el.value).to.equal('1');

    // Click on second radio
    const listener = oneEvent(el, 'it-change');
    radios[1].click();
    await listener;

    expect(el.value).to.equal('2');
    expect(radios[0].checked).to.be.false;
    expect(radios[1].checked).to.be.true;
    expect(radios[2].checked).to.be.false;
  });

  it('should enforce mutual exclusion', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    // Click first
    radios[0].click();
    await el.updateComplete;
    expect(radios[0].checked).to.be.true;
    expect(radios[1].checked).to.be.false;
    expect(radios[2].checked).to.be.false;

    // Click second
    radios[1].click();
    await el.updateComplete;
    expect(radios[0].checked).to.be.false;
    expect(radios[1].checked).to.be.true;
    expect(radios[2].checked).to.be.false;

    // Click third
    radios[2].click();
    await el.updateComplete;
    expect(radios[0].checked).to.be.false;
    expect(radios[1].checked).to.be.false;
    expect(radios[2].checked).to.be.true;
  });

  it('should disable all radios when disabled attribute is set', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test" disabled>
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
      </it-radio-group>
    `);

    const radios = el.querySelectorAll<ItRadio>('it-radio');
    expect(radios[0].disabled).to.be.true;
    expect(radios[1].disabled).to.be.true;
  });

  it('should not select individually disabled radio on click', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2" disabled><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    await el.updateComplete;

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    // Check that the radio is disabled
    expect(radios[1].disabled).to.be.true;
    expect(radios[1].hasAttribute('aria-disabled')).to.be.true;

    // Try to click disabled radio
    radios[1].click();
    await el.updateComplete;

    // Should not be selected
    expect(radios[1].checked).to.be.false;
    expect(el.value).to.equal('');
  });

  it('should be invalid when required and no value is selected', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test" required>
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
      </it-radio-group>
    `);

    expect(el.checkValidity()).to.be.false;
  });

  it('should be valid when required and a value is selected', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test" required value="1">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
      </it-radio-group>
    `);

    expect(el.checkValidity()).to.be.true;
  });

  it('should integrate with FormData', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <it-radio-group name="test">
          <it-radio value="option1"><span slot="label">Option 1</span></it-radio>
          <it-radio value="option2" checked><span slot="label">Option 2</span></it-radio>
          <it-radio value="option3"><span slot="label">Option 3</span></it-radio>
        </it-radio-group>
      </form>
    `);

    const group = form.querySelector('it-radio-group')!;
    await group.updateComplete;

    const formData = new FormData(form);
    expect(formData.get('test')).to.equal('option2');
  });

  it('should update FormData when selection changes', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <it-radio-group name="test">
          <it-radio value="option1" checked><span slot="label">Option 1</span></it-radio>
          <it-radio value="option2"><span slot="label">Option 2</span></it-radio>
          <it-radio value="option3"><span slot="label">Option 3</span></it-radio>
        </it-radio-group>
      </form>
    `);

    const group = form.querySelector('it-radio-group')!;
    await group.updateComplete;

    let formData = new FormData(form);
    expect(formData.get('test')).to.equal('option1');

    // Change selection
    const radios = group.querySelectorAll<ItRadio>('it-radio');
    radios[1].click();
    await group.updateComplete;

    formData = new FormData(form);
    expect(formData.get('test')).to.equal('option2');
  });

  it('should emit it-change event when selection changes', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
      </it-radio-group>
    `);

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    setTimeout(() => radios[1].click());
    const event = await oneEvent(el, 'it-change');

    expect(event).to.exist;
    expect(el.value).to.equal('2');
  });

  it('should programmatically set value', async () => {
    const el = await fixture<ItRadioGroup>(html`
      <it-radio-group name="test">
        <it-radio value="1"><span slot="label">Option 1</span></it-radio>
        <it-radio value="2"><span slot="label">Option 2</span></it-radio>
        <it-radio value="3"><span slot="label">Option 3</span></it-radio>
      </it-radio-group>
    `);

    const radios = el.querySelectorAll<ItRadio>('it-radio');

    el.value = '2';
    await el.updateComplete;

    expect(radios[0].checked).to.be.false;
    expect(radios[1].checked).to.be.true;
    expect(radios[2].checked).to.be.false;
  });

  it('should submit empty value when not required and no selection', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <it-radio-group name="testGroup">
          <it-radio value="option1"><span slot="label">Option 1</span></it-radio>
          <it-radio value="option2"><span slot="label">Option 2</span></it-radio>
        </it-radio-group>
      </form>
    `);

    const formData = new FormData(form);
    // When no radio is selected, FormData should contain the key with empty/null value
    expect(formData.has('testGroup')).to.be.true;
    expect(formData.get('testGroup')).to.equal('');
  });

  it('should submit default checked value without user interaction', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <it-radio-group name="test">
          <it-radio value="option1"><span slot="label">Option 1</span></it-radio>
          <it-radio value="option2" checked><span slot="label">Option 2</span></it-radio>
          <it-radio value="option3"><span slot="label">Option 3</span></it-radio>
        </it-radio-group>
      </form>
    `);

    const group = form.querySelector<ItRadioGroup>('it-radio-group')!;
    await group.updateComplete;
    await group.updateComplete;

    const formData = new FormData(form);
    // Should submit the preselected value
    expect(formData.has('test')).to.be.true;
    expect(formData.get('test')).to.equal('option2');

    // Verify the correct radio is checked
    const radios = form.querySelectorAll<ItRadio>('it-radio');
    expect(radios[0].checked).to.be.false;
    expect(radios[1].checked).to.be.true;
    expect(radios[2].checked).to.be.false;
  });

  // VALIDATION TESTS
  describe('Native Validation', () => {
    it('should not show aria-invalid until validation is triggered', async () => {
      const el = await fixture<ItRadioGroup>(html`
        <it-radio-group name="test" required>
          <span slot="label">Test Group</span>
          <it-radio value="1"><span slot="label">Option 1</span></it-radio>
          <it-radio value="2"><span slot="label">Option 2</span></it-radio>
        </it-radio-group>
      `);

      await el.updateComplete;
      const radios = el.querySelectorAll<ItRadio>('it-radio');
      await Promise.all(Array.from(radios).map((r) => r.updateComplete));

      // Initially, aria-invalid should NOT be set (ARIA best practice)
      expect(el.hasAttribute('aria-invalid')).to.be.false;
      radios.forEach((radio) => {
        expect(radio.hasAttribute('aria-invalid')).to.be.false;
      });
    });

    it('should show aria-invalid after reportValidity() is called', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <it-radio-group name="test" required>
            <span slot="label">Test Group</span>
            <it-radio value="1"><span slot="label">Option 1</span></it-radio>
            <it-radio value="2"><span slot="label">Option 2</span></it-radio>
          </it-radio-group>
        </form>
      `);
      const group = el.querySelector('it-radio-group')!;
      await group.updateComplete;

      //
      // 2️⃣ Submit vero su form → scatena validation API
      //
      el.requestSubmit(); // come utente reale
      await group.updateComplete;
      await nextFrame();

      const radios = group.querySelectorAll<ItRadio>('it-radio');
      await Promise.all(Array.from(radios).map((r) => r.updateComplete));

      // Call reportValidity() - should trigger validation
      const isValid = group.reportValidity();
      await el.updateComplete;
      await nextFrame();
      await Promise.all(Array.from(radios).map((r) => r.updateComplete));

      expect(isValid).to.be.false;
      expect(group.hasAttribute('aria-invalid')).to.be.true;
      radios.forEach((radio) => {
        expect(radio.hasAttribute('aria-invalid')).to.be.true;
      });
    });

    it('should clear aria-invalid after selecting a value', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <it-radio-group name="test" required>
            <span slot="label">Test Group</span>
            <it-radio value="1"><span slot="label">Option 1</span></it-radio>
            <it-radio value="2"><span slot="label">Option 2</span></it-radio>
          </it-radio-group>
        </form>
      `);

      const group = el.querySelector('it-radio-group')!;
      await group.updateComplete;
      //
      // 2️⃣ Submit vero su form → scatena validation API
      //
      el.requestSubmit(); // come utente reale
      await group.updateComplete;
      await nextFrame();

      const radios = group.querySelectorAll<ItRadio>('it-radio');
      await Promise.all(Array.from(radios).map((r) => r.updateComplete));

      expect(group.hasAttribute('aria-invalid')).to.be.true;

      // Now select a value
      radios[0].click();
      await group.updateComplete;
      await nextFrame();
      await Promise.all(Array.from(radios).map((r) => r.updateComplete));

      // aria-invalid should be cleared
      expect(group.hasAttribute('aria-invalid')).to.be.false;
      radios.forEach((radio) => {
        expect(radio.hasAttribute('aria-invalid')).to.be.false;
      });
    });

    it('should show validation message only after form submit', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <it-radio-group name="test" required>
            <span slot="label">Test Group</span>
            <it-radio value="1"><span slot="label">Option 1</span></it-radio>
            <it-radio value="2"><span slot="label">Option 2</span></it-radio>
          </it-radio-group>
        </form>
      `);

      const group = el.querySelector('it-radio-group')!;
      await group.updateComplete;

      //
      // 1️⃣ Prima del submit: nessun messaggio di validazione
      //
      let messageEl = group.querySelector('[slot="validation-message"]');
      expect(messageEl).to.not.exist;

      //
      // 2️⃣ Submit vero su form → scatena validation API
      //
      el.requestSubmit(); // come utente reale
      await group.updateComplete;
      await nextFrame();

      //
      // 3️⃣ Dopo il submit: il messaggio deve comparire
      //
      messageEl = group.querySelector('[slot="validation-message"]');
      expect(messageEl).to.exist;
      expect(messageEl!.textContent).to.include('obbligatorio');

      //
      // 4️⃣ aria-describedby deve riferirsi al messaggio
      //
      const ariaDescribedBy = group.getAttribute('aria-describedby');
      expect(ariaDescribedBy).to.include(messageEl!.id);
    });
  });
});
