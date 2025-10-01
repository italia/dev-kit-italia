import '@italia/checkbox';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';

import { type ItCheckbox } from '@italia/checkbox';

describe('<it-checkbox>', () => {
  it('renders correctly with default props', async () => {
    const el: ItCheckbox = await fixture(html`<it-checkbox label="Accetto i termini"></it-checkbox>`);
    expect(el).shadowDom.to.exist;
    expect(el.label).to.equal('Accetto i termini');
    expect(el.checked).to.be.false;
  });

  it('should reflect "checked" attribute', async () => {
    const el = await fixture(html`<it-checkbox label="Test" checked></it-checkbox>`);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.checked).to.be.true;
  });

  it('toggles checked state on click', async () => {
    const el: ItCheckbox = await fixture(html`<it-checkbox label="Click me"></it-checkbox>`);
    const input = el.shadowRoot!.querySelector('input')!;
    input.click();
    await elementUpdated(el);
    expect(el.checked).to.be.true;
  });

  it('should reflect "indeterminate" attribute', async () => {
    const el = await fixture(html`<it-checkbox label="Indeterminate" indeterminate></it-checkbox>`);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.indeterminate).to.be.true;
  });

  it('should render inline class when "inline" is true', async () => {
    const el = await fixture(html`<it-checkbox label="Inline" inline></it-checkbox>`);
    const wrapper = el.shadowRoot!.querySelector('.form-check')!;
    expect(wrapper.classList.contains('form-check-inline')).to.be.true;
  });

  it('should render label correctly', async () => {
    const el = await fixture(html`<it-checkbox label="Etichetta visibile"></it-checkbox>`);
    const label = el.shadowRoot!.querySelector('label')!;
    expect(label.textContent).to.include('Etichetta visibile');
  });

  it('renders support text when set', async () => {
    const el = await fixture(html`<it-checkbox label="Con supporto" support-text="Testo di supporto"></it-checkbox>`);
    const supportText = el.shadowRoot!.querySelector('small')!;
    expect(supportText.textContent).to.include('Testo di supporto');
  });

  it('shows validation message when invalid', async () => {
    const el: ItCheckbox = await fixture(
      html`<it-checkbox label="Campo richiesto" required support-text="Testo"></it-checkbox>`,
    );
    const input = el.shadowRoot!.querySelector('input')!;
    el._touched = true; // forza la condizione di "toccato"
    input.setCustomValidity('Campo obbligatorio');
    el.requestUpdate();
    await elementUpdated(el);
    const errorDiv = el.shadowRoot!.querySelector('.invalid-feedback')!;
    expect(errorDiv.textContent).to.include('Campo obbligatorio');
  });

  it('logs a warning if label is missing', async () => {
    const originalWarn = console.warn;
    let loggedMessage = '';
    console.warn = (msg: string) => {
      loggedMessage = msg;
    };

    await fixture(html`<it-checkbox></it-checkbox>`);
    expect(loggedMessage).to.include('Label is required');

    console.warn = originalWarn;
  });
});
