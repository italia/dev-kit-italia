import '@italia/upload'
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import type { ItUploadAvatar } from '../src/it-upload-avatar.js';

describe('<it-upload-avatar>', () => {
  // ── Accessibility ────────────────────────────────────────────────────────────

  it('is accessible by default', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar" alt="Avatar utente"></it-upload-avatar>`,
    );
    await expect(el).to.be.accessible();
  });

  it('is accessible when disabled', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar" alt="Avatar utente" disabled></it-upload-avatar>`,
    );
    await expect(el).to.be.accessible();
  });

  // ── Source syncing ───────────────────────────────────────────────────────────

  it('initialises _currentSrc from src attribute', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar" src="https://example.com/avatar.jpg"></it-upload-avatar>`,
    );
    expect((el as any)._currentSrc).to.equal('https://example.com/avatar.jpg');
  });

  it('_currentSrc is empty when no src is supplied', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar"></it-upload-avatar>`,
    );
    expect((el as any)._currentSrc).to.equal('');
  });

  // ── Size prop ────────────────────────────────────────────────────────────────

  it('renders sm wrapper class when size=sm', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar" size="sm"></it-upload-avatar>`,
    );
    await el.updateComplete;

    const wrapper = el.shadowRoot!.querySelector('.avatar-upload-wrapper')!;
    expect(wrapper.classList.contains('size-sm')).to.be.true;
  });

  it('does not add size-sm class for standard size', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar" size="standard"></it-upload-avatar>`,
    );
    await el.updateComplete;

    const wrapper = el.shadowRoot!.querySelector('.avatar-upload-wrapper')!;
    expect(wrapper.classList.contains('size-sm')).to.be.false;
  });

  // ── Disabled ─────────────────────────────────────────────────────────────────

  it('disables the hidden file input when disabled=true', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar" disabled></it-upload-avatar>`,
    );
    await el.updateComplete;

    const input = el.shadowRoot!.querySelector('input[type="file"]')! as HTMLInputElement;
    expect(input.disabled).to.be.true;
  });

  it('does not disable input when disabled is not set', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar"></it-upload-avatar>`,
    );
    await el.updateComplete;

    const input = el.shadowRoot!.querySelector('input[type="file"]')! as HTMLInputElement;
    expect(input.disabled).to.be.false;
  });

  // ── accept attribute ─────────────────────────────────────────────────────────

  it('propagates accept attribute to file input', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar" accept="image/png, image/jpeg"></it-upload-avatar>`,
    );
    await el.updateComplete;

    const input = el.shadowRoot!.querySelector('input[type="file"]')! as HTMLInputElement;
    expect(input.accept).to.equal('image/png, image/jpeg');
  });

  it('defaults accept to image/*', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar"></it-upload-avatar>`,
    );
    await el.updateComplete;

    const input = el.shadowRoot!.querySelector('input[type="file"]')! as HTMLInputElement;
    expect(input.accept).to.equal('image/*');
  });

  // ── File selection ───────────────────────────────────────────────────────────

  it('emits it-change when a file is selected', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar"></it-upload-avatar>`,
    );
    await el.updateComplete;

    const eventPromise = oneEvent(el, 'it-change') as Promise<CustomEvent>;

    const file = new File(['data'], 'photo.jpg', { type: 'image/jpeg' });
    const fakeInput = { files: [file] } as unknown as HTMLInputElement;
    (el as any)._handleFileChange({ target: fakeInput } as Event);

    const ev = await eventPromise;
    expect(ev.detail.file).to.equal(file);
  });

  it('does not emit it-change when no files are provided', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar"></it-upload-avatar>`,
    );
    await el.updateComplete;

    let fired = false;
    el.addEventListener('it-change', () => {
      fired = true;
    });

    const fakeInput = { files: [] } as unknown as HTMLInputElement;
    (el as any)._handleFileChange({ target: fakeInput } as Event);
    await el.updateComplete;

    expect(fired).to.be.false;
  });

  it('does not update _currentSrc when no files are provided', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar" src="https://example.com/old.jpg"></it-upload-avatar>`,
    );
    await el.updateComplete;

    const fakeInput = { files: [] } as unknown as HTMLInputElement;
    (el as any)._handleFileChange({ target: fakeInput } as Event);
    await el.updateComplete;

    expect((el as any)._currentSrc).to.equal('https://example.com/old.jpg');
  });

  // ── Snapshot: hidden input structure ─────────────────────────────────────────

  it('renders a hidden file input inside the shadow root', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar"></it-upload-avatar>`,
    );
    await el.updateComplete;

    const input = el.shadowRoot!.querySelector('input[type="file"]');
    expect(input).to.exist;
    expect(input!.getAttribute('class')).to.contain('upload-avatar');
  });

  it('renders the upload-avatar-container overlay', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar"></it-upload-avatar>`,
    );
    await el.updateComplete;

    expect(el.shadowRoot!.querySelector('.upload-avatar-container')).to.exist;
  });
});
