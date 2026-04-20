import '@italia/transfer';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import type { ItTransfer } from '../src/it-transfer.js';

// ── helpers ──────────────────────────────────────────────────────────────────

const defaultFixture = async () =>
  fixture<ItTransfer>(html`
    <it-transfer name="items">
      <it-transfer-item value="a">Alpha</it-transfer-item>
      <it-transfer-item value="b">Beta</it-transfer-item>
      <it-transfer-item value="c">Gamma</it-transfer-item>
    </it-transfer>
  `);

/** Tick a source/target item checkbox by its 0-based index inside the list. */
function checkItem(el: ItTransfer, side: 'source' | 'target', index: number) {
  const cb = el.shadowRoot!.querySelectorAll<HTMLInputElement>(
    `.it-transfer-wrapper.${side} .transfer-group input[type="checkbox"]`,
  )[index];
  cb.checked = true;
  cb.dispatchEvent(new Event('change', { bubbles: true }));
}

/** Tick the "select all" header checkbox of a side. */
function checkAll(el: ItTransfer, side: 'source' | 'target') {
  const cb = el.shadowRoot!.querySelector<HTMLInputElement>(
    `.it-transfer-wrapper.${side} .transfer-header input[type="checkbox"]`,
  )!;
  cb.checked = true;
  cb.dispatchEvent(new Event('change', { bubbles: true }));
}

const sourceCount = (el: ItTransfer) =>
  el.shadowRoot!.querySelectorAll('.it-transfer-wrapper.source .transfer-group input[type="checkbox"]').length;

const targetCount = (el: ItTransfer) =>
  el.shadowRoot!.querySelectorAll('.it-transfer-wrapper.target .transfer-group input[type="checkbox"]').length;

// ── tests ─────────────────────────────────────────────────────────────────────

describe('<it-transfer>', () => {
  it('initialises with empty value when no items have target', async () => {
    const el = await defaultFixture();
    await elementUpdated(el);

    expect(el.value).to.equal('[]');
    expect(sourceCount(el)).to.equal(3);
    expect(targetCount(el)).to.equal(0);
  });

  it('respects target attribute — items with target start in target list', async () => {
    const el = await fixture<ItTransfer>(html`
      <it-transfer name="items">
        <it-transfer-item value="a">Alpha</it-transfer-item>
        <it-transfer-item value="b" target>Beta</it-transfer-item>
      </it-transfer>
    `);
    await elementUpdated(el);

    expect(el.value).to.equal('["b"]');
    expect(sourceCount(el)).to.equal(1);
    expect(targetCount(el)).to.equal(1);
  });

  it('transfer() moves a checked source item to the target list', async () => {
    const el = await defaultFixture();
    await elementUpdated(el);

    checkItem(el, 'source', 0); // check "a"
    el.transfer();
    await elementUpdated(el);

    expect(JSON.parse(el.value)).to.deep.equal(['a']);
    expect(sourceCount(el)).to.equal(2);
    expect(targetCount(el)).to.equal(1);
  });

  it('transfer() moves multiple checked source items to the target list', async () => {
    const el = await defaultFixture();
    await elementUpdated(el);

    checkAll(el, 'source');
    el.transfer();
    await elementUpdated(el);

    expect(JSON.parse(el.value)).to.deep.equal(['a', 'b', 'c']);
    expect(sourceCount(el)).to.equal(0);
    expect(targetCount(el)).to.equal(3);
  });

  it('backtransfer() moves a checked target item back to the source list', async () => {
    const el = await fixture<ItTransfer>(html`
      <it-transfer name="items">
        <it-transfer-item value="a" target>Alpha</it-transfer-item>
        <it-transfer-item value="b" target>Beta</it-transfer-item>
        <it-transfer-item value="c">Gamma</it-transfer-item>
      </it-transfer>
    `);
    await elementUpdated(el);

    checkItem(el, 'target', 0); // check "a"
    el.backtransfer();
    await elementUpdated(el);

    expect(JSON.parse(el.value)).to.deep.equal(['b']);
    expect(targetCount(el)).to.equal(1);
    expect(sourceCount(el)).to.equal(2);
  });

  it('reset() restores both lists to their initial state', async () => {
    const el = await fixture<ItTransfer>(html`
      <it-transfer name="items">
        <it-transfer-item value="a">Alpha</it-transfer-item>
        <it-transfer-item value="b" target>Beta</it-transfer-item>
      </it-transfer>
    `);
    await elementUpdated(el);

    checkItem(el, 'source', 0); // check "a"
    el.transfer();
    await elementUpdated(el);
    expect(targetCount(el)).to.equal(2);

    el.reset();
    await elementUpdated(el);

    expect(el.value).to.equal('["b"]');
    expect(sourceCount(el)).to.equal(1);
    expect(targetCount(el)).to.equal(1);
  });

  it('it-transfer event fires before transfer with correct detail', async () => {
    const el = await defaultFixture();
    await elementUpdated(el);

    let detail: any = null;
    el.addEventListener('it-transfer', (e: any) => {
      detail = e.detail;
    });

    checkItem(el, 'source', 0); // check "a"
    el.transfer();
    await elementUpdated(el);

    expect(detail).to.not.be.null;
    expect(detail.action).to.equal('transfer');
    expect(detail.items).to.deep.equal(['a']);
    expect(detail.target).to.include('a');
  });

  it('it-transfer event is cancelable — preventDefault stops the action', async () => {
    const el = await defaultFixture();
    await elementUpdated(el);
    const initialValue = el.value;

    el.addEventListener('it-transfer', (e: Event) => e.preventDefault());
    checkItem(el, 'source', 0);
    el.transfer();
    await elementUpdated(el);

    expect(el.value).to.equal(initialValue);
    expect(sourceCount(el)).to.equal(3);
    expect(targetCount(el)).to.equal(0);
  });

  it('it-change event fires after transfer with the updated value', async () => {
    const el = await defaultFixture();
    await elementUpdated(el);

    let changeValue: string | undefined;
    el.addEventListener('it-change', (e: any) => {
      changeValue = e.detail.value;
    });

    checkItem(el, 'source', 0); // check "a"
    el.transfer();
    await elementUpdated(el);

    expect(changeValue).to.equal('["a"]');
  });

  it('disabled items are not transferred even when select-all is used', async () => {
    const el = await fixture<ItTransfer>(html`
      <it-transfer name="items">
        <it-transfer-item value="a" disabled>Alpha</it-transfer-item>
        <it-transfer-item value="b">Beta</it-transfer-item>
      </it-transfer>
    `);
    await elementUpdated(el);

    checkAll(el, 'source'); // selects only "b" ("a" is disabled)
    el.transfer();
    await elementUpdated(el);

    expect(JSON.parse(el.value)).to.deep.equal(['b']);
    expect(sourceCount(el)).to.equal(1); // "a" stays in source
  });

  it('it-transfer event fires with action reset on reset()', async () => {
    const el = await defaultFixture();
    await elementUpdated(el);

    let action: string | null = null;
    el.addEventListener('it-transfer', (e: any) => {
      action = e.detail.action;
    });

    el.reset();

    expect(action).to.equal('reset');
  });


  it('source-label attribute overrides i18n default', async () => {
    const el = await fixture<ItTransfer>(html`
      <it-transfer name="items" source-label="Disponibili">
        <it-transfer-item value="a">Alpha</it-transfer-item>
      </it-transfer>
    `);
    await elementUpdated(el);

    const label = el.shadowRoot!.querySelector('.it-transfer-wrapper.source .transfer-header .descr');
    expect(label?.textContent?.trim()).to.equal('Disponibili');
  });
});

describe('<it-transfer> validity', () => {
  it('checkValidity returns false when required and target is empty', async () => {
    const el = await fixture<ItTransfer>(html`
      <it-transfer name="items" required>
        <it-transfer-item value="a">Alpha</it-transfer-item>
      </it-transfer>
    `);
    await elementUpdated(el);

    expect(el.checkValidity()).to.be.false;
  });

  it('checkValidity returns true after moving an item to target', async () => {
    const el = await fixture<ItTransfer>(html`
      <it-transfer name="items" required>
        <it-transfer-item value="a">Alpha</it-transfer-item>
      </it-transfer>
    `);
    await elementUpdated(el);

    checkItem(el, 'source', 0);
    el.transfer();
    await elementUpdated(el);

    expect(el.checkValidity()).to.be.true;
  });

  it('reportValidity sets validationMessage when required and invalid', async () => {
    const el = await fixture<ItTransfer>(html`
      <it-transfer name="items" required>
        <it-transfer-item value="a">Alpha</it-transfer-item>
      </it-transfer>
    `);
    await elementUpdated(el);

    el.reportValidity();
    await elementUpdated(el);

    expect(el.validationMessage.length).to.be.greaterThan(0);
  });

  it('reportValidity clears validationMessage when valid', async () => {
    const el = await fixture<ItTransfer>(html`
      <it-transfer name="items" required>
        <it-transfer-item value="a">Alpha</it-transfer-item>
      </it-transfer>
    `);
    await elementUpdated(el);

    checkItem(el, 'source', 0);
    el.transfer();
    await elementUpdated(el);
    el.reportValidity();
    await elementUpdated(el);

    expect(el.validationMessage).to.equal('');
  });
});

describe('<it-transfer> form integration', () => {
  it('includes target items value in FormData under given name', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <it-transfer name="selections">
          <it-transfer-item value="x" target>X</it-transfer-item>
          <it-transfer-item value="y">Y</it-transfer-item>
        </it-transfer>
      </form>
    `);

    const el = form.querySelector<ItTransfer>('it-transfer')!;
    await elementUpdated(el);

    const fd = new FormData(form);
    const val = fd.get('selections') as string;
    expect(JSON.parse(val)).to.deep.equal(['x']);
  });
});
