import { fixture, html, expect, nextFrame } from '@open-wc/testing';
import { ItAutocomplete, AutocompleteOption } from '../src/it-autocomplete.js';
import '@italia/autocomplete';

describe('ItAutocomplete', () => {
  it('renders with default properties', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete>
        <span slot="label">Test Label</span>
      </it-autocomplete>
    `);
    expect(el).to.exist;
    expect(el.shadowRoot).to.exist;
  });

  it('renders label correctly', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete>
        <span slot="label">Regione</span>
      </it-autocomplete>
    `);

    // Forza un re-render per assicurarsi che lo slot sia processato
    el.requestUpdate();
    await el.updateComplete;

    const label = el.shadowRoot!.querySelector('label');
    expect(label).to.exist;
  });

  it('renders input with correct attributes', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete placeholder="Cerca..." required>
        <span slot="label">Test</span>
      </it-autocomplete>
    `);
    const input = el.shadowRoot!.querySelector('input');
    expect(input).to.exist;
    expect(input?.getAttribute('placeholder')).to.equal('Cerca...');
    // Verifica che il componente abbia la proprietà required
    expect(el.required).to.be.true;
  });

  it('filters options when typing', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete
        .source="${[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'cherry', label: 'Cherry' },
        ]}"
      >
        <span slot="label">Fruit</span>
      </it-autocomplete>
    `);

    const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
    input.value = 'ba';
    input.dispatchEvent(new Event('input'));

    await el.updateComplete;

    const listbox = el.shadowRoot!.querySelector('.autocomplete-listbox');
    expect(listbox).to.exist;
  });

  it('respects minLength property', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete
        min-length="3"
        .source="${[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
          { value: 'cherry', label: 'Cherry' },
        ]}"
      >
        <span slot="label">Fruit</span>
      </it-autocomplete>
    `);

    const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

    // Type 2 characters
    input.value = 'ap';
    input.dispatchEvent(new Event('input'));
    await el.updateComplete;

    let listbox = el.shadowRoot!.querySelector('.autocomplete-listbox');
    expect(listbox).to.not.exist;

    // Type 3 characters
    input.value = 'app';
    input.dispatchEvent(new Event('input'));
    await el.updateComplete;

    listbox = el.shadowRoot!.querySelector('.autocomplete-listbox');
    expect(listbox).to.exist;
  });

  it('emits change event when value changes', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete
        .source="${[
          { value: 'apple', label: 'Apple' },
          { value: 'banana', label: 'Banana' },
        ]}"
      >
        <span slot="label">Test</span>
      </it-autocomplete>
    `);

    let eventFired = false;
    el.addEventListener('it-autocomplete-search', () => {
      eventFired = true;
    });

    const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
    input.value = 'test';
    input.dispatchEvent(new Event('input'));

    expect(eventFired).to.be.true;
  });

  it('can be disabled', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete disabled>
        <span slot="label">Test</span>
      </it-autocomplete>
    `);

    const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
    expect(input.disabled).to.be.true;
  });

  describe('Keyboard Navigation', () => {
    it('ArrowDown opens menu and navigates to first option when input is empty', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'cherry', label: 'Cherry' },
          ]}"
        >
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Initially closed
      expect(el._isOpen).to.be.false;
      expect(el._activeIndex).to.equal(-1);

      // Press ArrowDown
      input.focus();
      const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);

      await el.updateComplete;

      // Menu should be open and first item selected (W3C APG: ArrowDown va alla prima)
      expect(el._isOpen).to.be.true;
      expect(el._activeIndex).to.equal(0);
      expect(el._filteredOptions.length).to.be.greaterThan(0);

      const listbox = el.shadowRoot!.querySelector('.autocomplete-listbox');
      expect(listbox).to.exist;
    });

    it('ArrowDown navigates through options with wrap', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'apricot', label: 'Apricot' },
            { value: 'avocado', label: 'Avocado' },
          ]}"
        >
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu digitando "a" - filtra tutte e 3 le opzioni
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Prima ArrowDown: va alla prima opzione (listbox prende focus)
      let keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(0);
      expect(el._listboxHasVisualFocus).to.be.true;

      // Seconda ArrowDown: va alla seconda opzione
      keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(1);

      // Terza ArrowDown: va alla terza opzione
      keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(2);

      // Quarta ArrowDown: wrap alla prima (W3C APG comportamento)
      keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(0);
    });

    it('ArrowUp from combobox goes to last option', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'apricot', label: 'Apricot' },
            { value: 'avocado', label: 'Avocado' },
          ]}"
        >
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu digitando "a" - filtra tutte e 3
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // ArrowUp da combobox: va all'ultima opzione (W3C APG)
      const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(2); // Ultima opzione (Avocado)
      expect(el._listboxHasVisualFocus).to.be.true;

      // Navigate up again (wrap to seconda)
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(1); // Wrapped to Apricot
    });

    it('Enter selects option only when listbox has focus', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'cherry', label: 'Cherry' },
          ]}"
        >
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu digitando
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // ArrowDown per dare focus al listbox e selezionare prima opzione
      let keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;

      expect(el._activeIndex).to.equal(0);
      expect(el._listboxHasVisualFocus).to.be.true;

      // Press Enter (ora dovrebbe selezionare)
      keyEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;

      // Menu chiuso e valore impostato
      expect(el._isOpen).to.be.false;
      expect(input.value).to.equal('Apple'); // Display label
      expect(el.value).to.equal('apple'); // Form value
    });

    it('Escape closes the menu', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'cherry', label: 'Cherry' },
          ]}"
        >
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;
      expect(el._isOpen).to.be.true;

      // Press Escape
      const keyEvent = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;

      expect(el._isOpen).to.be.false;
    });
  });

  describe('ARIA Attributes', () => {
    it('has correct ARIA attributes on input', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
          ]}"
        >
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      expect(input.getAttribute('role')).to.equal('combobox');
      expect(input.getAttribute('aria-autocomplete')).to.equal('list');
      expect(input.getAttribute('aria-expanded')).to.equal('false');
    });

    it('updates aria-expanded when menu opens', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
          ]}"
        >
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      expect(input.getAttribute('aria-expanded')).to.equal('true');
    });

    it('sets aria-activedescendant when option is active', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
          ]}"
        >
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu and navigate
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Simula ArrowDown per dare focus al listbox (W3C APG pattern)
      const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;

      // Ora aria-activedescendant dovrebbe essere impostato
      const activeDescendant = input.getAttribute('aria-activedescendant');
      expect(activeDescendant).to.include('option-0');
    });

    it('options have aria-posinset and aria-setsize', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'cherry', label: 'Cherry' },
          ]}"
        >
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      const options = el.shadowRoot!.querySelectorAll('[role="option"]');
      expect(options.length).to.be.greaterThan(0);

      options.forEach((option, index) => {
        expect(option.getAttribute('aria-posinset')).to.equal(String(index + 1));
        expect(option.getAttribute('aria-setsize')).to.equal(String(options.length));
      });
    });
  });

  describe('Assistive Hint', () => {
    it('shows assistive hint initially', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
          ]}"
        >
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      expect(el._showAssistiveHint).to.be.true;

      const hint = el.shadowRoot!.querySelector('.visually-hidden');
      expect(hint).to.exist;
    });

    it('removes assistive hint after first input', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
          ]}"
        >
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      expect(el._showAssistiveHint).to.be.true;

      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      expect(el._showAssistiveHint).to.be.false;
    });
  });

  describe('Reactive Properties', () => {
    it('updates options when source changes', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'option1', label: 'Option1' },
            { value: 'option2', label: 'Option2' },
          ]}"
        >
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      await el.updateComplete;

      // Verifica le opzioni iniziali
      expect(el._options).to.deep.equal([
        { value: 'option1', label: 'Option1' },
        { value: 'option2', label: 'Option2' },
      ]);

      // Cambia la source
      el.source = [
        { value: 'newoption1', label: 'NewOption1' },
        { value: 'newoption2', label: 'NewOption2' },
        { value: 'newoption3', label: 'NewOption3' },
      ];
      await el.updateComplete;

      // Verifica che le opzioni siano aggiornate
      expect(el._options).to.deep.equal([
        { value: 'newoption1', label: 'NewOption1' },
        { value: 'newoption2', label: 'NewOption2' },
        { value: 'newoption3', label: 'NewOption3' },
      ]);
    });

    it('filters new options after source change', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
          ]}"
        >
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      await el.updateComplete;

      // Cambia la source con nuove opzioni
      el.source = [
        { value: 'cherry', label: 'Cherry' },
        { value: 'cranberry', label: 'Cranberry' },
        { value: 'coconut', label: 'Coconut' },
      ];
      await el.updateComplete;

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Digita 'c' per filtrare
      input.value = 'c';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Verifica che filtri le nuove opzioni
      expect(el._filteredOptions.length).to.equal(3);
      expect(el._filteredOptions).to.deep.equal([
        { value: 'cherry', label: 'Cherry' },
        { value: 'cranberry', label: 'Cranberry' },
        { value: 'coconut', label: 'Coconut' },
      ]);
    });

    it('emits ready event on connection', async () => {
      let readyFired = false;
      const container = document.createElement('div');
      document.body.appendChild(container);

      container.addEventListener('it-autocomplete-ready', () => {
        readyFired = true;
      });

      const el = document.createElement('it-autocomplete') as ItAutocomplete;
      el.source = [{ value: 'test', label: 'Test' }];
      el.innerHTML = '<span slot="label">Test</span>';
      container.appendChild(el);

      await el.updateComplete;
      // Aspetta il requestAnimationFrame
      await nextFrame();

      expect(readyFired).to.be.true;

      document.body.removeChild(container);
    });
  });

  describe('Form Integration', () => {
    it('integrates with native form and validates required field', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <it-autocomplete
            name="region"
            required
            .source="${[
              { value: 'emilia-romagna', label: 'Emilia Romagna' },
              { value: 'lombardia', label: 'Lombardia' },
              { value: 'lazio', label: 'Lazio' },
            ]}"
          >
            <span slot="label">Regione</span>
          </it-autocomplete>
        </form>
      `);

      form.addEventListener('submit', (e) => e.preventDefault());

      const el = form.querySelector('it-autocomplete') as ItAutocomplete;
      await el.updateComplete;

      // Valore NON nelle opzioni → invalido
      el.value = 'Emilia';
      expect(el.checkValidity()).to.be.false;

      // Valore nelle opzioni (usa il value, non il label) → valido
      el.value = 'emilia-romagna';
      expect(el.checkValidity()).to.be.true;

      // Valore parziale → invalido
      el.value = 'emilia';
      expect(el.checkValidity()).to.be.false;
    });

    it('accepts defaultValue as valid selection', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          required
          default-value="lombardia"
          .source="${[
            { value: 'emilia-romagna', label: 'Emilia Romagna' },
            { value: 'lombardia', label: 'Lombardia' },
            { value: 'lazio', label: 'Lazio' },
          ]}"
        >
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;

      expect(el.value).to.equal('lombardia');
      expect(el.checkValidity()).to.be.true;
    });

    it('accepts defaultValue as AutocompleteOption object', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete required .defaultValue="${{ value: 'lombardia', label: 'Lombardia' }}">
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;

      // Anche senza source, value e label sono impostati
      expect(el.value).to.equal('lombardia');
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.value).to.equal('Lombardia');
    });

    it('validates defaultValue object against source when available', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          required
          .defaultValue="${{ value: 'lombardia', label: 'Lombardia' }}"
          .source="${[
            { value: 'emilia-romagna', label: 'Emilia Romagna' },
            { value: 'lombardia', label: 'Lombardia' },
            { value: 'lazio', label: 'Lazio' },
          ]}"
        >
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;

      expect(el.value).to.equal('lombardia');
      expect(el.checkValidity()).to.be.true;
    });

    it('resets defaultValue object if source is static and not in source', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          required
          .defaultValue="invalid"
          .source="${[
            { value: 'emilia-romagna', label: 'Emilia Romagna' },
            { value: 'lombardia', label: 'Lombardia' },
            { value: 'lazio', label: 'Lazio' },
          ]}"
        >
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;

      expect(el.value).to.equal('');
      expect(el.checkValidity()).to.be.false;
    });

    // QUESTO È IL TEST CHE MANCAVA (Caso Source Dinamica -> Accetta tutto)
    it('keeps defaultValue object blindly if source is a function (Async mode)', async () => {
      // Funzione dummy per simulare source dinamica
      const asyncSource = (query: string, cb: any) => cb([]);

      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .defaultValue="${{ value: 'umbria', label: 'Umbria' }}" .source="${asyncSource}">
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;

      // Qui ci aspettiamo che il valore RESTI, perché con source dinamica ci fidiamo
      expect(el.value).to.equal('umbria');
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.value).to.equal('Umbria');
    });

    it('allows any value when not required', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'option1', label: 'Option1' },
            { value: 'option2', label: 'Option2' },
          ]}"
        >
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Digita un valore senza selezionare dalla lista
      input.value = 'Any text';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Dovrebbe essere valido perché non è required
      expect(el.invalid).to.be.false;
    });
    it('accepts defaultValue as valid selection (String match in source)', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          required
          default-value="lombardia"
          .source="${[
            { value: 'emilia-romagna', label: 'Emilia Romagna' },
            { value: 'lombardia', label: 'Lombardia' },
          ]}"
        >
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;
      expect(el.value).to.equal('lombardia');

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.value).to.equal('Lombardia'); // Lookup riuscito
    });

    it('accepts defaultValue as Object (Trust Mode)', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete required .defaultValue="${{ value: 'lombardia', label: 'Lombardia' }}">
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;
      expect(el.value).to.equal('lombardia');

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.value).to.equal('Lombardia'); // Popolato direttamente
    });

    it('RESETS defaultValue STRING if not in STATIC source', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete required default-value="invalid" .source="${[{ value: 'lombardia', label: 'Lombardia' }]}">
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;
      expect(el.value).to.equal(''); // Reset avvenuto
    });

    it('KEEPS defaultValue OBJECT even if not in STATIC source (Trust Mode)', async () => {
      // Questo comportamento permette di mantenere valori "storici" o "legacy"
      // che non sono più selezionabili nella lista corrente
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .defaultValue="${{ value: 'umbria', label: 'Umbria' }}"
          .source="${[
            { value: 'lazio', label: 'Lazio' },
            // Umbria NON c'è
          ]}"
        >
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;

      expect(el.value).to.equal('umbria');
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.value).to.equal('Umbria');
    });

    it('KEEPS defaultValue OBJECT with ASYNC source (Trust Mode)', async () => {
      const asyncSource = (query: string, cb: any) => cb([]);

      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .defaultValue="${{ value: 'umbria', label: 'Umbria' }}" .source="${asyncSource}">
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;

      expect(el.value).to.equal('umbria');
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      expect(input.value).to.equal('Umbria');
    });
    it('shows invalid state after submit when validation fails', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <it-autocomplete
            name="test"
            required
            .source="${[
              { value: 'option1', label: 'Option1' },
              { value: 'option2', label: 'Option2' },
            ]}"
          >
            <span slot="label">Test</span>
          </it-autocomplete>
        </form>
      `);

      const el = form.querySelector('it-autocomplete') as ItAutocomplete;
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Campo vuoto required NON è invalido prima della submit
      await el.updateComplete;
      expect(el.invalid).to.be.false;

      // Simula submit del form
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      await el.updateComplete;

      // Dopo submit, il campo vuoto required è invalido
      expect(el.invalid).to.be.true;
      expect(input.classList.contains('is-invalid')).to.be.true;
    });

    it('typing does not set value, only selection does', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete
          .source="${[
            { value: 'emilia-romagna', label: 'Emilia Romagna' },
            { value: 'lombardia', label: 'Lombardia' },
            { value: 'lazio', label: 'Lazio' },
          ]}"
        >
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      await el.updateComplete;

      // L'utente digita "e" ma non seleziona dalla lista
      input.value = 'e';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // value deve rimanere vuoto
      expect(el.value).to.equal('');

      // Ora selezioniamo dalla lista
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await el.updateComplete;
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      await el.updateComplete;

      // Ora value deve avere l'opzione selezionata (il value, non il label)
      expect(el.value).to.equal('emilia-romagna');
      // Ma l'input mostra il label
      expect(input.value).to.equal('Emilia Romagna');
    });

    it('submits form with selected autocomplete value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <it-autocomplete
            name="test-field"
            .source="${[
              { value: 'value1', label: 'Value1' },
              { value: 'value2', label: 'Value2' },
            ]}"
          >
            <span slot="label">Test</span>
          </it-autocomplete>
        </form>
      `);

      const el = form.querySelector('it-autocomplete') as ItAutocomplete;
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Digita e seleziona dalla lista
      input.value = 'Value1';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Simula selezione con ArrowDown + Enter
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await el.updateComplete;
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      await el.updateComplete;

      const formData = new FormData(form);
      expect(formData.get('test-field')).to.equal('value1');
    });

    it('resets value when form is reset', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <it-autocomplete
            name="test"
            .source="${[
              { value: 'a', label: 'A' },
              { value: 'b', label: 'B' },
              { value: 'c', label: 'C' },
            ]}"
          >
            <span slot="label">Test</span>
          </it-autocomplete>
        </form>
      `);

      const el = form.querySelector('it-autocomplete') as ItAutocomplete;
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Digita e seleziona dalla lista
      input.value = 'A';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Seleziona con ArrowDown + Enter
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await el.updateComplete;
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      await el.updateComplete;

      expect(el.value).to.equal('a');

      // Reset form
      form.reset();
      await el.updateComplete;

      expect(el.value).to.equal('');
    });
  });

  describe('Async source function', () => {
    it('calls source function with query and populateResults callback', async () => {
      const mockData = [
        { value: 'apple', label: 'Apple' },
        { value: 'apricot', label: 'Apricot' },
        { value: 'avocado', label: 'Avocado' },
      ];
      let calledQuery = '';
      let calledCallback: ((results: AutocompleteOption[]) => void) | null = null;

      const sourceFunction = (query: string, populateResults: (results: AutocompleteOption[]) => void) => {
        calledQuery = query;
        calledCallback = populateResults;
        // Simula ricerca asincrona
        setTimeout(() => {
          const filtered = mockData.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
          populateResults(filtered);
        }, 10);
      };

      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${sourceFunction}">
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Digita 'ap'
      input.value = 'ap';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await el.updateComplete;

      expect(calledQuery).to.equal('ap');
      expect(calledCallback).to.not.be.null;

      // Aspetta che la callback venga chiamata
      await new Promise((resolve) => {
        setTimeout(resolve, 50);
      });
      await el.updateComplete;

      // Verifica che le opzioni siano state filtrate
      expect(el._filteredOptions.length).to.equal(2); // Apple, Apricot
      expect(el._isOpen).to.be.true;
    });

    it('works with async function that simulates API call', async () => {
      const asyncSource = (query: string, populateResults: (results: AutocompleteOption[]) => void) => {
        // Simula chiamata API con Promise
        Promise.resolve().then(() => {
          const cities = [
            { value: 'milano', label: 'Milano' },
            { value: 'modena', label: 'Modena' },
            { value: 'messina', label: 'Messina' },
            { value: 'roma', label: 'Roma' },
            { value: 'napoli', label: 'Napoli' },
          ];
          const filtered = cities.filter((city) => city.label.toLowerCase().includes(query.toLowerCase())).slice(0, 3);
          populateResults(filtered);
        });
      };

      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${asyncSource}" min-length="1">
          <span slot="label">Città</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Digita 'm'
      input.value = 'm';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await el.updateComplete;

      // Aspetta che la Promise si risolva
      await new Promise((resolve) => {
        setTimeout(resolve, 10);
      });
      await el.updateComplete;

      expect(el._filteredOptions.length).to.equal(3); // Milano, Modena, Messina
      expect(el._isOpen).to.be.true;
    });
  });
});
