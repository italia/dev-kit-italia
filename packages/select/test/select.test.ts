import '@italia/select';
import { expect, fixture, html } from '@open-wc/testing';

import { type ItSelect } from '@italia/select';

describe('<it-select>', () => {
  // rendering base
  it('renders label and select', async () => {
    const el = await fixture<ItSelect>(html`
      <it-select>
        <span slot="label">My select</span>
        <option value="1">One</option>
      </it-select>
    `);

    await el.updateComplete;

    const select = el.shadowRoot!.querySelector('select');
    const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="label"]')!;
    const nodes = slot.assignedNodes({ flatten: true });

    expect(select).to.exist;
    expect(nodes[0].textContent).to.equal('My select');
  });

  // rendering options
  it('renders options passed via slot', async () => {
    const el = await fixture<ItSelect>(html`
      <it-select>
        <span slot="label">Options</span>
        <option value="1">One</option>
        <option value="2">Two</option>
      </it-select>
    `);

    await el.updateComplete;

    const options = el.shadowRoot!.querySelectorAll('option');

    // 2 option reali
    expect(options.length).to.equal(2);
    expect(options[0].value).to.equal('1');
    expect(options[1].value).to.equal('2');
  });

  // test placeholder
  it('renders placeholder option when provided', async () => {
    const el = await fixture<ItSelect>(html`
      <it-select placeholder="Select one">
        <span slot="label">Placeholder</span>
        <option value="1">One</option>
      </it-select>
    `);

    await el.updateComplete;

    const options = el.shadowRoot!.querySelectorAll('option');

    expect(options[0].textContent).to.equal('Select one');
    expect(options[0].disabled).to.be.false;
  });

  // test selezione singola
  it('updates value on single select change', async () => {
    const el = await fixture<ItSelect>(html`
      <it-select>
        <span slot="label">Single</span>
        <option value="1">One</option>
        <option value="2">Two</option>
      </it-select>
    `);

    await el.updateComplete;

    const select = el.shadowRoot!.querySelector('select')!;

    select.value = '2';
    select.dispatchEvent(new Event('change', { bubbles: true }));

    await el.updateComplete;

    expect(el.value).to.equal('2');
  });

  // test selezione multipla
  it('updates value on multiple select change', async () => {
    const el = await fixture<ItSelect>(html`
      <it-select multiple>
        <span slot="label">Multiple</span>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </it-select>
    `);

    await el.updateComplete;

    const select = el.shadowRoot!.querySelector('select')!;

    select.options[0].selected = true;
    select.options[2].selected = true;

    select.dispatchEvent(new Event('change', { bubbles: true }));

    await el.updateComplete;

    expect(el.value).to.equal('a,c');
  });

  // Il componente è accessibile di default
  it('should be accessible', async () => {
    const el = await fixture<ItSelect>(
      html`<it-select name="test"
        ><span slot="label">Test label</span>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option></it-select
      >`,
    );
    await expect(el).to.be.accessible();
  });

  // Imposta e riflette il valore correttamente
  it('should reflect the initial value', async () => {
    const el = await fixture<ItSelect>(
      html`<it-select name="test" value="1"
        ><span slot="label">Test label</span>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option></it-select
      >`,
    );
    expect(el.value).to.equal('1');
    expect(el.shadowRoot?.querySelector('select')?.value).to.equal('1');
  });
});
