import '@italia/checkbox';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';

import { type ItCheckbox } from '@italia/checkbox';

describe('<it-checkbox>', () => {
  it('renders correctly with default props', async () => {
    const el: ItCheckbox = await fixture(html`<it-checkbox><span slot="label">Accetto i termini</span></it-checkbox>`);
    expect(el).shadowDom.to.exist;
    expect(el.label).to.equal('Accetto i termini');
    expect(el.checked).to.be.false;
  });

  it('should reflect "checked" attribute', async () => {
    const el = await fixture(html`<it-checkbox checked><span slot="label">Test</span></it-checkbox>`);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.checked).to.be.true;
  });

  it('toggles checked state on click', async () => {
    const el: ItCheckbox = await fixture(html`<it-checkbox><span slot="label">Click me</span></it-checkbox>`);
    const input = el.shadowRoot!.querySelector('input')!;
    input.click();
    await elementUpdated(el);
    expect(el.checked).to.be.true;
  });

  it('should reflect "indeterminate" attribute', async () => {
    const el = await fixture(html`<it-checkbox indeterminate><span slot="label">Indeterminate</span></it-checkbox>`);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.indeterminate).to.be.true;
  });

  it('should render inline class when "inline" is true', async () => {
    const el = await fixture(html`<it-checkbox inline><span slot="label">Inline</span></it-checkbox>`);
    const wrapper = el.shadowRoot!.querySelector('.form-check')!;
    expect(wrapper.classList.contains('form-check-inline')).to.be.true;
  });

  it('should render label correctly', async () => {
    const el = await fixture(html`<it-checkbox><span slot="label">Etichetta visibile</span></it-checkbox>`);

    const slot = el.shadowRoot!.querySelector('slot[name="label"]')!;
    const assignedNodes = slot.assignedNodes({ flatten: true });
    expect(assignedNodes[0].textContent).to.include('Etichetta visibile');
  });

  it('renders support text when set', async () => {
    const el = await fixture(
      html`<it-checkbox support-text="Testo di supporto"><span slot="label">Con supporto</span></it-checkbox>`,
    );
    const supportText = el.shadowRoot!.querySelector('small')!;
    expect(supportText.textContent).to.include('Testo di supporto');
  });

  it('shows validation message when invalid', async () => {
    const el: ItCheckbox = await fixture(
      html`<it-checkbox required support-text="Testo"><span slot="label">Campo richiesto</span></it-checkbox>`,
    );
    await el.reportValidity();
    el._touched = true; // forza la condizione di "toccato"

    el.requestUpdate();
    await elementUpdated(el);
    expect(el.validationMessage).to.include('Questo campo è obbligatorio.');
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
