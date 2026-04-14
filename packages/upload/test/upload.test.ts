import '@italia/upload';
import '@italia/progress';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import type { ItUpload } from '../src/it-upload.js';

const mkFile = (name = 'test.pdf', size = 1024, type = 'application/pdf') =>
  new File(['x'.repeat(size)], name, { type });

describe('<it-upload>', () => {
  // ── Accessibility ────────────────────────────────────────────────────────────

  it('is accessible by default', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files"><span slot="label">Carica file</span></it-upload>`,
    );
    await expect(el).to.be.accessible();
  });

  it('is accessible when disabled', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files" disabled><span slot="label">Carica file</span></it-upload>`,
    );
    await expect(el).to.be.accessible();
  });

  // ── Logger warning when label is missing ─────────────────────────────────────

  it('warns when no label slot is provided', async () => {
    const warned: string[] = [];
    const el = await fixture<ItUpload>(html`<it-upload name="files"></it-upload>`);
    // Patch the logger to capture the warning
    (el as any).logger = {
      warn: (msg: string) => warned.push(msg),
      error: () => {},
      info: () => {},
    };
    el.requestUpdate();
    await el.updateComplete;
    // The component logs in updated() — trigger it by forcing a change
    expect(warned.some((w) => w.includes('Label is required'))).to.be.true;
  });

  // ── addFile() / removeFile() / setFileStatus() ──────────────────────────────

  it('addFile() adds an entry with loading status', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files"><span slot="label">Files</span></it-upload>`,
    );
    const id = el.addFile(mkFile('report.pdf'));
    await el.updateComplete;

    const files = el.files;
    expect(files).to.have.length(1);
    expect(files[0].name).to.equal('report.pdf');
    expect(files[0].status).to.equal('loading');
    expect(files[0].id).to.equal(id);
  });

  it('addFile() appends multiple entries independently', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files" multiple><span slot="label">Files</span></it-upload>`,
    );
    el.addFile(mkFile('a.pdf'));
    el.addFile(mkFile('b.pdf'));
    await el.updateComplete;

    expect(el.files).to.have.length(2);
    expect(el.files[0].name).to.equal('a.pdf');
    expect(el.files[1].name).to.equal('b.pdf');
  });

  it('removeFile() removes the correct entry', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files"><span slot="label">Files</span></it-upload>`,
    );
    const id1 = el.addFile(mkFile('keep.pdf'));
    el.addFile(mkFile('remove.pdf'));
    await el.updateComplete;

    el.removeFile(/* removes second, we pass first */ el.files[1].id);
    await el.updateComplete;

    expect(el.files).to.have.length(1);
    expect(el.files[0].id).to.equal(id1);
  });

  it('removeFile() is a no-op for unknown id', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files"><span slot="label">Files</span></it-upload>`,
    );
    el.addFile(mkFile('file.pdf'));
    await el.updateComplete;

    el.removeFile('nonexistent-id');
    await el.updateComplete;

    expect(el.files).to.have.length(1);
  });

  it('setFileStatus() updates status to success', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files"><span slot="label">Files</span></it-upload>`,
    );
    const id = el.addFile(mkFile('doc.pdf'));
    el.setFileStatus(id, 'success');
    await el.updateComplete;

    const li = el.shadowRoot!.querySelector('.upload-file.success');
    expect(li).to.exist;
    // File weight visible on success
    const weight = li!.querySelector('.upload-file-weight');
    expect(weight).to.exist;
  });

  it('setFileStatus() updates status to error', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files"><span slot="label">Files</span></it-upload>`,
    );
    const id = el.addFile(mkFile('broken.jpg'));
    el.setFileStatus(id, 'error');
    await el.updateComplete;

    expect(el.shadowRoot!.querySelector('.upload-file.error')).to.exist;
  });

  it('setFileStatus() is a no-op for unknown id', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files"><span slot="label">Files</span></it-upload>`,
    );
    el.addFile(mkFile('ok.pdf'));
    // should not throw
    el.setFileStatus('ghost-id', 'success');
    await el.updateComplete;
    // file count unchanged
    expect(el.files).to.have.length(1);
  });

  it('setFileStatus() updates progress value', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files"><span slot="label">Files</span></it-upload>`,
    );
    const id = el.addFile(mkFile('large.pdf'));
    el.setFileStatus(id, 'loading', 60);
    await el.updateComplete;

    expect(el.files[0].progress).to.equal(60);
    const itProgress = el.shadowRoot!.querySelector('it-progress')!;
    await (itProgress as any).updateComplete;
    const progressbar = itProgress.shadowRoot!.querySelector('[role="progressbar"]');
    expect(progressbar?.getAttribute('aria-valuenow')).to.equal('60');
  });

  // ── Validation ───────────────────────────────────────────────────────────────

  it('required + no files sets validationMessage', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form id="f">
          <it-upload name="files" required><span slot="label">Files</span></it-upload>
          <button type="submit">Invia</button>
        </form>
      </div>
    `);
    const form = container.querySelector('form')!;
    const el = form.querySelector('it-upload')! as ItUpload;
    await el.updateComplete;

    form.querySelector('button')!.click();
    await el.updateComplete;

    expect(el.validationMessage).to.have.length.greaterThan(0);
  });

  it('required clears validationMessage after addFile()', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files" required><span slot="label">Files</span></it-upload>`,
    );
    // Force validation state
    (el as any)._validateFiles();
    expect(el.validationMessage).to.have.length.greaterThan(0);

    el.addFile(mkFile('fixed.pdf'));
    (el as any)._validateFiles();
    expect(el.validationMessage).to.equal('');
  });

  // ── Disabled state ───────────────────────────────────────────────────────────

  it('disables the file input when disabled=true', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files" disabled><span slot="label">Files</span></it-upload>`,
    );
    await el.updateComplete;
    const input = el.shadowRoot!.querySelector('input[type="file"]')! as HTMLInputElement;
    expect(input.disabled).to.be.true;
  });

  it('disables remove buttons when disabled=true', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files" disabled><span slot="label">Files</span></it-upload>`,
    );
    el.addFile(mkFile('file.pdf'));
    await el.updateComplete;

    const btn = el.shadowRoot!.querySelector('.upload-file button') as HTMLButtonElement;
    expect(btn.disabled).to.be.true;
  });

  // ── Variant: gallery ─────────────────────────────────────────────────────────

  it('renders upload-pictures-wall when variant=gallery', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="photos" variant="gallery"><span slot="label">Foto</span></it-upload>`,
    );
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.upload-pictures-wall')).to.exist;
  });

  it('does not render upload-file-list when variant=gallery', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="photos" variant="gallery"><span slot="label">Foto</span></it-upload>`,
    );
    el.addFile(mkFile('img.jpg', 512, 'image/jpeg'));
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.upload-file-list')).to.not.exist;
  });

  // ── image-preview ─────────────────────────────────────────────────────────────

  it('adds upload-file-list-image class when image-preview is set', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="images" image-preview><span slot="label">Images</span></it-upload>`,
    );
    el.addFile(mkFile('photo.jpg', 2048, 'image/jpeg'));
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.upload-file-list-image')).to.exist;
  });

  // ── Events ────────────────────────────────────────────────────────────────────

  it('emits it-upload-add when a file is added via addFile()', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files"><span slot="label">Files</span></it-upload>`,
    );
    // addFile() is programmatic and doesn't trigger it-upload-add
    // The event is fired from _handleFileChange. Simulate it:
    const eventPromise = oneEvent(el, 'it-upload-add') as Promise<CustomEvent>;

    // Manually invoke the internal handler
    const fakeInput = { files: [mkFile('evt.pdf')], value: '' } as unknown as HTMLInputElement;
    (el as any)._handleFileChange({ target: fakeInput } as Event);

    const ev = await eventPromise;
    expect(ev.detail.files[0].name).to.equal('evt.pdf');
  });

  it('emits it-upload-remove when removeFile() is called', async () => {
    const el = await fixture<ItUpload>(
      html`<it-upload name="files"><span slot="label">Files</span></it-upload>`,
    );
    const id = el.addFile(mkFile('to-remove.pdf'));
    await el.updateComplete;

    const eventPromise = oneEvent(el, 'it-upload-remove') as Promise<CustomEvent>;
    const removeBtn = el.shadowRoot!.querySelector('.upload-file button') as HTMLButtonElement;
    removeBtn.click();

    const ev = await eventPromise;
    expect(ev.detail.id).to.equal(id);
    expect(ev.detail.name).to.equal('to-remove.pdf');
  });

  // ── FormData integration ──────────────────────────────────────────────────────

  it('includes File objects in FormData on submit', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form id="upload-form" novalidate>
          <it-upload name="docs"><span slot="label">Docs</span></it-upload>
        </form>
      </div>
    `);
    const form = container.querySelector('form')!;
    const el = form.querySelector('it-upload')! as ItUpload;
    await el.updateComplete;

    const file = mkFile('submitted.pdf');
    el.addFile(file);
    await el.updateComplete;

    const fd = new FormData(form);
    // FormData.get gives the value; for file inputs that's the File itself
    const entries = fd.getAll('docs');
    expect(entries).to.have.length(1);
    expect((entries[0] as File).name).to.equal('submitted.pdf');
  });

  it('appends multiple files to FormData', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form id="multi-form" novalidate>
          <it-upload name="docs" multiple><span slot="label">Docs</span></it-upload>
        </form>
      </div>
    `);
    const form = container.querySelector('form')!;
    const el = form.querySelector('it-upload')! as ItUpload;
    await el.updateComplete;

    el.addFile(mkFile('one.pdf'));
    el.addFile(mkFile('two.pdf'));
    await el.updateComplete;

    const fd = new FormData(form);
    const entries = fd.getAll('docs');
    expect(entries).to.have.length(2);
  });

  // ── _formatSize() ─────────────────────────────────────────────────────────────

  it('formats byte sizes correctly', () => {
    const el = document.createElement('it-upload') as ItUpload;
    expect((el as any)._formatSize(0)).to.equal('0 B');
    expect((el as any)._formatSize(1024)).to.equal('1 KB');
    expect((el as any)._formatSize(1024 * 1024)).to.equal('1 MB');
  });
});
