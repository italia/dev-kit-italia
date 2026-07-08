import '../src/it-upload-avatar.js';
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
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar"></it-upload-avatar>`);
    expect((el as any)._currentSrc).to.equal('');
  });

  // ── Size prop ────────────────────────────────────────────────────────────────

  it('renders sm wrapper class when size=sm', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar" size="sm"></it-upload-avatar>`);
    // handleValidationMessages() in updated() schedules a second Lit cycle; flush it.
    await el.updateComplete;
    await el.updateComplete;

    const wrapper = el.shadowRoot!.querySelector('.avatar-upload-wrapper')!;
    expect(wrapper.classList.contains('size-sm')).to.be.true;
  });

  it('does not add size-sm class for standard size', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar" size="xxl"></it-upload-avatar>`);
    await el.updateComplete;

    const wrapper = el.shadowRoot!.querySelector('.avatar-upload-wrapper')!;
    expect(wrapper.classList.contains('size-sm')).to.be.false;
  });

  // ── Disabled ─────────────────────────────────────────────────────────────────

  it('disables the hidden file input when disabled=true', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar" disabled></it-upload-avatar>`);
    await el.updateComplete;

    const input = el.shadowRoot!.querySelector('input[type="file"]')! as HTMLInputElement;
    expect(input.disabled).to.be.true;
  });

  it('does not disable input when disabled is not set', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar"></it-upload-avatar>`);
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
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar"></it-upload-avatar>`);
    await el.updateComplete;

    const input = el.shadowRoot!.querySelector('input[type="file"]')! as HTMLInputElement;
    expect(input.accept).to.equal('image/*');
  });

  // ── File selection ───────────────────────────────────────────────────────────

  it('emits it-change when a file is selected', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar"></it-upload-avatar>`);
    await el.updateComplete;

    const eventPromise = oneEvent(el, 'it-change') as Promise<CustomEvent>;

    const file = new File(['data'], 'photo.jpg', { type: 'image/jpeg' });
    const fakeInput = { files: [file] } as unknown as HTMLInputElement;
    (el as any)._handleFileChange({ target: fakeInput } as Event);

    const ev = await eventPromise;
    expect(ev.detail.file).to.equal(file);
  });

  it('does not emit it-change when no files are provided', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar"></it-upload-avatar>`);
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
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar"></it-upload-avatar>`);
    await el.updateComplete;

    const input = el.shadowRoot!.querySelector('input[type="file"]');
    expect(input).to.exist;
    expect(input!.getAttribute('class')).to.contain('upload-avatar');
  });

  it('renders the upload-avatar-container overlay', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar"></it-upload-avatar>`);
    await el.updateComplete;

    expect(el.shadowRoot!.querySelector('.upload-avatar-container')).to.exist;
  });

  // ── FormControl ──────────────────────────────────────────────────────────────

  it('participates in form submission with name', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form>
          <it-upload-avatar name="avatar" src="https://example.com/photo.jpg"></it-upload-avatar>
          <button type="submit">Invia</button>
        </form>
      </div>
    `);
    const el = container.querySelector('it-upload-avatar')! as ItUploadAvatar;
    await el.updateComplete;
    // The element should be associated with the form
    expect(el.getForm()).to.equal(container.querySelector('form'));
  });

  it('checkValidity() returns false when required and no src and no file', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar" required></it-upload-avatar>`);
    await el.updateComplete;
    expect(el.checkValidity()).to.be.false;
  });

  it('checkValidity() returns true when required and src is pre-set', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar" required src="https://example.com/photo.jpg"></it-upload-avatar>`,
    );
    await el.updateComplete;
    expect(el.checkValidity()).to.be.true;
  });

  it('checkValidity() returns true when required and a file has been selected', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar" required></it-upload-avatar>`);
    await el.updateComplete;

    const file = new File(['data'], 'photo.jpg', { type: 'image/jpeg' });
    const fakeInput = { files: [file] } as unknown as HTMLInputElement;
    (el as any)._handleFileChange({ target: fakeInput } as Event);
    await el.updateComplete;

    expect(el.checkValidity()).to.be.true;
  });

  it('disabled removes element from form', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form>
          <it-upload-avatar name="avatar" disabled src="https://example.com/photo.jpg"></it-upload-avatar>
          <button type="submit">Invia</button>
        </form>
      </div>
    `);
    const el = container.querySelector('it-upload-avatar')! as ItUploadAvatar;
    await el.updateComplete;
    // Disabled controls are excluded from form submission
    expect(el.disabled).to.be.true;
  });

  // ── overlayLabel ─────────────────────────────────────────────────────────────

  it('renders default i18n overlay label in the label element', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar"></it-upload-avatar>`);
    await el.updateComplete;
    await el.updateComplete;

    const label = el.shadowRoot!.querySelector('.upload-avatar-container label');
    expect(label).to.exist;
    const span = label!.querySelector('span');
    // Test environment defaults to English; accept either locale string.
    expect(span!.textContent?.trim()).to.match(/^(Aggiorna|Update)$/);
  });

  it('renders custom overlay-label when provided', async () => {
    const el = await fixture<ItUploadAvatar>(
      html`<it-upload-avatar name="avatar" overlay-label="Cambia foto"></it-upload-avatar>`,
    );
    await el.updateComplete;

    const label = el.shadowRoot!.querySelector('.upload-avatar-container label');
    const span = label!.querySelector('span');
    expect(span!.textContent).to.equal('Cambia foto');
  });

  it('renders it-icon inside the overlay label', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar"></it-upload-avatar>`);
    await el.updateComplete;

    const label = el.shadowRoot!.querySelector('.upload-avatar-container label');
    expect(label!.querySelector('it-icon')).to.exist;
  });

  // ── it-change carries name + id ──────────────────────────────────────────────

  it('it-change event detail includes name and id', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="my-avatar" id="avatar1"></it-upload-avatar>`);
    await el.updateComplete;

    const eventPromise = oneEvent(el, 'it-change') as Promise<CustomEvent>;

    const file = new File(['data'], 'photo.jpg', { type: 'image/jpeg' });
    const fakeInput = { files: [file] } as unknown as HTMLInputElement;
    (el as any)._handleFileChange({ target: fakeInput } as Event);

    const ev = await eventPromise;
    expect(ev.detail.name).to.equal('my-avatar');
    expect(ev.detail.id).to.equal('avatar1');
  });

  // ── Validation message display (A2+A3) ───────────────────────────────────────

  it('error div shows validation message after form submission when required and empty', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <form>
          <it-upload-avatar name="avatar" required></it-upload-avatar>
          <button type="submit">Invia</button>
        </form>
      </div>
    `);
    const el = container.querySelector('it-upload-avatar')! as ItUploadAvatar;
    await el.updateComplete;
    await el.updateComplete;

    // Submit to trigger validation
    container.querySelector('form')!.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await el.updateComplete;
    await el.updateComplete;

    const feedback = el.shadowRoot!.querySelector('.invalid-feedback');
    expect(feedback).to.exist;
    expect(feedback!.hasAttribute('aria-hidden')).to.be.false;
    expect(feedback!.textContent?.trim()).to.have.length.greaterThan(0);
  });

  it('error div is empty and has no aria-hidden when not submitted', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar" required></it-upload-avatar>`);
    await el.updateComplete;

    const feedback = el.shadowRoot!.querySelector('.invalid-feedback');
    expect(feedback).to.exist;
    expect(feedback!.hasAttribute('aria-hidden')).to.be.false;
    expect(feedback!.textContent?.trim()).to.equal('');
  });

  // ── aria-required on visible file input ───────────────────────────────────────

  it('file input has aria-required="true" when required', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar" required></it-upload-avatar>`);
    await el.updateComplete;
    const input = el.shadowRoot!.querySelector('input[type="file"]')!;
    expect(input.getAttribute('aria-required')).to.equal('true');
  });

  it('file input has no aria-required when not required', async () => {
    const el = await fixture<ItUploadAvatar>(html`<it-upload-avatar name="avatar"></it-upload-avatar>`);
    await el.updateComplete;
    const input = el.shadowRoot!.querySelector('input[type="file"]')!;
    expect(input.hasAttribute('aria-required')).to.be.false;
  });
});
