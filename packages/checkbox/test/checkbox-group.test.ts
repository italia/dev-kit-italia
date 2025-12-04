import '@italia/checkbox';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';

import { type ItCheckboxGroup } from '@italia/checkbox-group';

describe('<it-checkbox-group>', () => {
  it('renders correctly with child checkboxes', async () => {
    const el: ItCheckboxGroup = await fixture(html`
      <it-checkbox-group name="fruits">
        <it-checkbox value="apple"><span slot="label">Apple</span></it-checkbox>
        <it-checkbox value="banana"><span slot="label">Banana</span></it-checkbox>
      </it-checkbox-group>
    `);

    expect(el.checkboxes).to.have.lengthOf(2);
    expect(el.checkboxes[0].value).to.equal('apple');
    expect(el.checkboxes[1].value).to.equal('banana');
  });

  it('selectedValues returns array of checked values', async () => {
    const el: ItCheckboxGroup = await fixture(html`
      <it-checkbox-group name="fruits" value='["apple"]'>
        <it-checkbox value="apple"><span slot="label">Apple</span></it-checkbox>
        <it-checkbox value="banana"><span slot="label">Banana</span></it-checkbox>
      </it-checkbox-group>
    `);

    await elementUpdated(el);
    expect(el.selectedValues).to.deep.equal(['apple']);
  });

  it('toggles values when checkbox clicked', async () => {
    const el: ItCheckboxGroup = await fixture(html`
      <it-checkbox-group name="fruits">
        <it-checkbox value="apple"><span slot="label">Apple</span></it-checkbox>
        <it-checkbox value="banana"><span slot="label">Banana</span></it-checkbox>
      </it-checkbox-group>
    `);

    const apple = el.checkboxes[0];
    apple.click();
    await elementUpdated(el);

    expect(el.selectedValues).to.include('apple');

    apple.click();
    await elementUpdated(el);
    expect(el.selectedValues).to.not.include('apple');
  });

  it('checkValidity returns true if required and at least one checkbox selected', async () => {
    const el: ItCheckboxGroup = await fixture(html`
      <it-checkbox-group name="fruits" required>
        <it-checkbox value="apple"><span slot="label">Apple</span></it-checkbox>
        <it-checkbox value="banana"><span slot="label">Banana</span></it-checkbox>
      </it-checkbox-group>
    `);

    expect(el.checkValidity()).to.be.false;

    el.checkboxes[0].checked = true;
    el._handleGroupChange();
    await elementUpdated(el);

    expect(el.checkValidity()).to.be.true;
  });

  it('reportValidity sets validationMessage when invalid', async () => {
    const el: ItCheckboxGroup = await fixture(html`
      <it-checkbox-group name="fruits" required>
        <it-checkbox value="apple"><span slot="label">Apple</span></it-checkbox>
      </it-checkbox-group>
    `);

    el.reportValidity();
    await elementUpdated(el);
    expect(el.validationMessage).to.include("Scegli almeno un'opzione");
  });

  it('syncs group state to child checkboxes', async () => {
    const el: ItCheckboxGroup = await fixture(html`
      <it-checkbox-group name="fruits" required group inline>
        <it-checkbox value="apple"></it-checkbox>
        <it-checkbox value="banana"></it-checkbox>
      </it-checkbox-group>
    `);

    await elementUpdated(el);

    el._syncGroupStateToChildren();
    expect(el.checkboxes[0].name).to.equal('fruits');
    expect(el.checkboxes[0].group).to.be.true;
    expect(el.checkboxes[0].inline).to.be.true;
    expect(el.checkboxes[0].required).to.be.true;
  });
});

describe('<it-checkbox-group> integration with FormData', () => {
  it('includes all selected values in FormData', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <it-checkbox-group name="fruits">
          <it-checkbox value="apple" checked><span slot="label">Apple</span></it-checkbox>
          <it-checkbox value="banana" checked><span slot="label">Banana</span></it-checkbox>
          <it-checkbox value="cherry"><span slot="label">Cherry</span></it-checkbox>
        </it-checkbox-group>
        <button type="submit">Submit</button>
      </form>
    `);

    // Recupera il gruppo
    const group = form.querySelector<ItCheckboxGroup>('it-checkbox-group')!;
    await elementUpdated(group);

    // Crea FormData dalla form
    const fd = new FormData(form);

    // fd.getAll() ritorna tutti i valori selezionati
    const values = fd.getAll('fruits');
    expect(values).to.have.members(['apple', 'banana']);
    expect(values).to.not.include('cherry');
  });

  it('reflects changes when checkboxes are toggled before form submission', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <it-checkbox-group name="fruits">
          <it-checkbox value="apple"><span slot="label">Apple</span></it-checkbox>
          <it-checkbox value="banana"><span slot="label">Banana</span></it-checkbox>
        </it-checkbox-group>
      </form>
    `);

    const group = form.querySelector<ItCheckboxGroup>('it-checkbox-group')!;
    await elementUpdated(group);

    // Seleziona tutte le checkbox
    group.checkboxes.forEach((cb) => {
      // eslint-disable-next-line no-param-reassign
      cb.checked = true;
    });
    group._handleGroupChange();
    await elementUpdated(group);

    const fd = new FormData(form);
    const values = fd.getAll('fruits');
    expect(values).to.have.members(['apple', 'banana']);
  });
});
