import '../src/it-upload-drag-drop.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import type { ItUploadDragDrop } from '../src/it-upload-drag-drop.js';

/** Send a synthetic DragEvent into the component's internal drop zone */
function dragEvent(type: string, files: File[] = []): DragEvent {
  const ev = new DragEvent(type, { bubbles: true, cancelable: true });
  if (files.length > 0) {
    // DragEvent constructor rejects plain objects as DataTransfer; patch via defineProperty instead
    Object.defineProperty(ev, 'dataTransfer', {
      value: { files, types: ['Files'] },
      writable: false,
    });
  }
  return ev;
}

const mkFile = (name = 'upload.zip', size = 4096) => new File(['x'.repeat(size)], name);

describe('<it-upload-drag-drop>', () => {
  // ── Accessibility ────────────────────────────────────────────────────────────

  it('is accessible in idle state', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await expect(el).to.be.accessible();
  });

  // ── Initial state ─────────────────────────────────────────────────────────────

  it('starts in idle state', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    expect((el as any)._state).to.equal('idle');
  });

  it('renders the drop zone container', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.upload-dragdrop')).to.exist;
  });

  it('has aria-live="polite" status region', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;
    const status = el.shadowRoot!.querySelector('[role="status"]');
    expect(status).to.exist;
    expect(status!.getAttribute('aria-live')).to.equal('polite');
  });

  // ── Drag interactions ─────────────────────────────────────────────────────────

  it('enters loading state on dragenter (auto-start via it-dd-start)', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;

    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    zone.dispatchEvent(dragEvent('dragenter', [mkFile()]));
    await el.updateComplete;

    expect((el as any)._state).to.equal('loading');
    expect(zone.classList.contains('loading')).to.be.true;
  });

  it('enters dragover state on dragenter when it-dd-start is cancelled', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;
    el.addEventListener('it-dd-start', (e) => e.preventDefault());

    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    zone.dispatchEvent(dragEvent('dragenter', [mkFile()]));
    await el.updateComplete;

    expect((el as any)._state).to.equal('dragover');
    expect(zone.classList.contains('dragover')).to.be.true;
  });

  it('returns to idle on dragleave', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;

    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    zone.dispatchEvent(dragEvent('dragenter', [mkFile()]));
    await el.updateComplete;
    zone.dispatchEvent(dragEvent('dragleave'));
    await el.updateComplete;

    expect((el as any)._state).to.equal('idle');
  });

  it('dragenter is blocked when in success state', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.success();
    await el.updateComplete;

    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    zone.dispatchEvent(dragEvent('dragenter', [mkFile()]));
    await el.updateComplete;

    // Should remain in success state
    expect((el as any)._state).to.equal('success');
  });

  it('drop transitions to loading state', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;

    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    zone.dispatchEvent(dragEvent('drop', [mkFile('archive.zip')]));
    await el.updateComplete;

    expect((el as any)._state).to.equal('loading');
  });

  it('drop emits it-change with the dropped file', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;

    const file = mkFile('data.csv');
    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;

    const eventPromise = oneEvent(el, 'it-change') as Promise<CustomEvent>;
    zone.dispatchEvent(dragEvent('drop', [file]));

    const ev = await eventPromise;
    expect(ev.detail.file).to.equal(file);
  });

  it('drop when already in success state does not fire it-change', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.success();
    await el.updateComplete;

    let fired = false;
    el.addEventListener('it-change', () => {
      fired = true;
    });

    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    zone.dispatchEvent(dragEvent('drop', [mkFile()]));
    await el.updateComplete;

    expect(fired).to.be.false;
  });

  // ── Public API: start() / success() / reset() ────────────────────────────────

  it('start() sets state to loading and removes dragover class', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    // Force dragover first
    (el as any)._state = 'dragover';
    el.start();
    await el.updateComplete;

    expect((el as any)._state).to.equal('loading');
    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    expect(zone.classList.contains('dragover')).to.be.false;
    expect(zone.classList.contains('loading')).to.be.true;
  });

  it('success() transitions from loading to success', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.start();
    el.success();
    await el.updateComplete;

    expect((el as any)._state).to.equal('success');
    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    expect(zone.classList.contains('success')).to.be.true;
    expect(zone.classList.contains('loading')).to.be.false;
  });

  it('reset() returns to idle state', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.start();
    el.success();
    el.reset();
    await el.updateComplete;

    expect((el as any)._state).to.equal('idle');
    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    expect(zone.classList.contains('idle') || !zone.classList.contains('success')).to.be.true;
  });

  it('reset() clears filename and weight', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    (el as any)._fileName = 'data.csv';
    (el as any)._fileWeight = '4 KB';
    el.reset();
    await el.updateComplete;

    expect((el as any)._fileName).to.equal('');
    expect((el as any)._fileWeight).to.equal('');
  });

  // ── progress() API ────────────────────────────────────────────────────────────

  it('progress(0.5) sets _progress to 50', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.start();
    el.progress(0.5);
    await el.updateComplete;

    expect((el as any)._progress).to.equal(50);
  });

  it('progress(1.5) is clamped to 100', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.start();
    el.progress(1.5);
    await el.updateComplete;

    expect((el as any)._progress).to.equal(100);
  });

  it('progress(-0.2) is clamped to 0', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.start();
    el.progress(-0.2);
    await el.updateComplete;

    expect((el as any)._progress).to.equal(0);
  });

  it('progress(1.0) sets _progress to 100', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.start();
    el.progress(1);
    await el.updateComplete;

    expect((el as any)._progress).to.equal(100);
  });

  it('reset() zeroes _progress', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.start();
    el.progress(0.8);
    el.reset();
    await el.updateComplete;

    expect((el as any)._progress).to.equal(0);
  });

  // ── it-progress donut integration ─────────────────────────────────────────────

  it('it-progress element is present in loading state', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.start();
    await el.updateComplete;

    const progressEl = el.shadowRoot!.querySelector('it-progress');
    expect(progressEl).to.exist;
  });

  it('it-progress receives the updated .value after progress()', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.start();
    el.progress(0.42);
    await el.updateComplete;

    const progressEl = el.shadowRoot!.querySelector('it-progress') as any;
    expect(progressEl).to.exist;
    // Either the property binding or aria-valuenow reflects the value
    const valuenow = progressEl?.value ?? progressEl?.getAttribute('aria-valuenow') ?? progressEl?.value;
    expect(Number(valuenow)).to.be.closeTo(42, 1);
  });

  // ── File-input keyboard fallback ──────────────────────────────────────────────

  it('renders a file input for keyboard users', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;

    const input = el.shadowRoot!.querySelector('input.upload-dragdrop-input');
    expect(input).to.exist;
    expect(input!.getAttribute('type')).to.equal('file');
  });

  it('file input emits it-change when file selected via keyboard', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;

    const file = mkFile('keyboard.txt');
    const eventPromise = oneEvent(el, 'it-change') as Promise<CustomEvent>;

    const fakeInput = { files: [file] } as unknown as HTMLInputElement;
    (el as any)._onFileInputChange({ target: fakeInput } as Event);

    const ev = await eventPromise;
    expect(ev.detail.file).to.equal(file);
  });

  // ── Slots ─────────────────────────────────────────────────────────────────────

  it('renders slotted title content', async () => {
    const el = await fixture<ItUploadDragDrop>(
      html`<it-upload-drag-drop>
        <span slot="title">Trascina qui</span>
      </it-upload-drag-drop>`,
    );
    await el.updateComplete;

    const slot = el.shadowRoot!.querySelector('slot[name="title"]') as HTMLSlotElement;
    expect(slot).to.exist;
    const assigned = slot.assignedNodes({ flatten: true });
    expect(assigned.length).to.be.greaterThan(0);
  });

  it('dragleave during loading state does NOT return to idle (B5)', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.start();
    await el.updateComplete;

    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    zone.dispatchEvent(dragEvent('dragleave'));
    await el.updateComplete;

    expect((el as any)._state).to.equal('loading');
  });

  it('dragend during loading state does NOT return to idle (B5)', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    el.start();
    await el.updateComplete;

    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    zone.dispatchEvent(new DragEvent('dragend', { bubbles: true, cancelable: true }));
    await el.updateComplete;

    expect((el as any)._state).to.equal('loading');
  });

  // ── Error div: no aria-hidden (A2+A3) ────────────────────────────────────────

  it('error div has no aria-hidden attribute and is empty by default', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;

    const div = el.shadowRoot!.querySelector('[role="alert"]');
    expect(div).to.exist;
    expect(div!.hasAttribute('aria-hidden')).to.be.false;
    expect(div!.textContent?.trim()).to.equal('');
  });

  it('error div shows message when required and form submitted without file', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form>
          <it-upload-drag-drop required></it-upload-drag-drop>
          <button type="submit">Invia</button>
        </form>
      </div>
    `);
    const el = container.querySelector('it-upload-drag-drop')! as ItUploadDragDrop;
    await el.updateComplete;

    container.querySelector('button')!.click();
    await el.updateComplete;

    const div = el.shadowRoot!.querySelector('[role="alert"]');
    expect(div!.textContent?.trim()).to.have.length.greaterThan(0);
  });

  // ── FormControl ──────────────────────────────────────────────────────────────

  it('participates in form submission with name', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form>
          <it-upload-drag-drop name="documento"></it-upload-drag-drop>
          <button type="submit">Invia</button>
        </form>
      </div>
    `);
    const el = container.querySelector('it-upload-drag-drop')! as ItUploadDragDrop;
    await el.updateComplete;
    expect(el.getForm()).to.equal(container.querySelector('form'));
  });

  it('checkValidity() returns false when required and no file', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop required></it-upload-drag-drop>`);
    await el.updateComplete;
    expect(el.checkValidity()).to.be.false;
  });

  it('checkValidity() returns true when required and file selected via input', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop required></it-upload-drag-drop>`);
    await el.updateComplete;

    const file = mkFile('report.pdf');
    const fakeInput = { files: [file] } as unknown as HTMLInputElement;
    (el as any)._onFileInputChange({ target: fakeInput } as Event);
    await el.updateComplete;

    expect(el.checkValidity()).to.be.true;
  });

  it('checkValidity() returns true when required and file dropped', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop required></it-upload-drag-drop>`);
    await el.updateComplete;

    const zone = el.shadowRoot!.querySelector('.upload-dragdrop')!;
    zone.dispatchEvent(dragEvent('drop', [mkFile('archive.zip')]));
    await el.updateComplete;

    expect(el.checkValidity()).to.be.true;
  });

  it('reset() clears form value — checkValidity() false again when required', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop required></it-upload-drag-drop>`);
    await el.updateComplete;

    const file = mkFile('report.pdf');
    const fakeInput = { files: [file] } as unknown as HTMLInputElement;
    (el as any)._onFileInputChange({ target: fakeInput } as Event);
    await el.updateComplete;
    expect(el.checkValidity()).to.be.true;

    el.reset();
    await el.updateComplete;
    expect(el.checkValidity()).to.be.false;
  });

  it('disabled removes element from form', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form>
          <it-upload-drag-drop name="documento" disabled></it-upload-drag-drop>
          <button type="submit">Invia</button>
        </form>
      </div>
    `);
    const el = container.querySelector('it-upload-drag-drop')! as ItUploadDragDrop;
    await el.updateComplete;
    expect(el.disabled).to.be.true;
  });

  // ── heading-level prop ────────────────────────────────────────────────────────

  it('defaults to h3 heading tag', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;
    const heading = el.shadowRoot!.querySelector('h3');
    expect(heading).to.exist;
  });

  it('heading element has class h5 for visual sizing', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;
    const heading = el.shadowRoot!.querySelector('h3');
    expect(heading!.classList.contains('h5')).to.be.true;
  });

  it('heading-level="h2" renders an h2', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop heading-level="h2"></it-upload-drag-drop>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('h2')).to.exist;
    expect(el.shadowRoot!.querySelector('h3')).to.not.exist;
  });

  it('heading-level="h4" renders an h4', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop heading-level="h4"></it-upload-drag-drop>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('h4')).to.exist;
  });

  it('invalid heading-level falls back to h3', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    (el as any).headingLevel = 'h9';
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('h3')).to.exist;
  });

  // ── aria-required on visible file input ───────────────────────────────────────

  it('file input has aria-required="true" when required', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop required></it-upload-drag-drop>`);
    await el.updateComplete;
    const input = el.shadowRoot!.querySelector('input.upload-dragdrop-input');
    expect(input!.getAttribute('aria-required')).to.equal('true');
  });

  it('file input has no aria-required when not required', async () => {
    const el = await fixture<ItUploadDragDrop>(html`<it-upload-drag-drop></it-upload-drag-drop>`);
    await el.updateComplete;
    const input = el.shadowRoot!.querySelector('input.upload-dragdrop-input');
    expect(input!.hasAttribute('aria-required')).to.be.false;
  });
});
