import { FormControl, FormControlController } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import it from './locales/it.js';
import en from './locales/en.js';
import styles from './upload-avatar.scss';

registerTranslation(it);
registerTranslation(en);

@customElement('it-upload-avatar')
export class ItUploadAvatar extends FormControl {
  static styles = styles;

  static override shadowRootOptions = {
    ...FormControl.shadowRootOptions,
    delegatesFocus: true,
  };

  // Override the base FormControlController.
  // Value is the selected File, or falls back to the current src (pre-filled image satisfies required).
  protected override readonly formControlController: FormControlController = new FormControlController(this, {
    value: (el) => (el as ItUploadAvatar)._currentFile ?? ((el as ItUploadAvatar)._currentSrc || null),
    assumeInteractionOn: ['it-change'],
  });

  @query('.it-form__control')
  override inputElement!: HTMLInputElement;

  /** Current image source URL displayed in the avatar */
  @property({ type: String, reflect: true })
  src = '';

  /** Alt text for the current avatar image */
  @property({ type: String, reflect: true })
  alt = '';

  /** Size of the avatar. Accepts any BSI avatar size token. */
  @property({ type: String, reflect: true })
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'xxl';

  /** Accepted file types, e.g. "image/*" */
  @property({ type: String })
  accept = 'image/*';

  /**
   * Text shown inside the desktop hover/focus overlay.
   * Defaults to the i18n key `upload_avatar_overlay_label` ("Aggiorna" / "Update").
   */
  @property({ type: String, attribute: 'overlay-label' })
  overlayLabel?: string;

  /** If true, the upload button is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @state()
  private _currentSrc = '';

  /** The currently selected File (null until a new file is chosen). */
  @state()
  private _currentFile: File | null = null;

  override connectedCallback() {
    super.connectedCallback?.();
    this._currentSrc = this.src;
  }

  override willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    super.willUpdate?.(changedProperties);
    if (changedProperties.has('src') && !this._currentSrc) {
      this._currentSrc = this.src;
    }
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);
    // Re-evaluate validity whenever the form value changes.
    if (changedProperties.has('_currentFile') || changedProperties.has('_currentSrc')) {
      this.handleValidationMessages();
    }
  }

  private _handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this._currentFile = file;

    const reader = new FileReader();
    reader.onload = (event) => {
      this._currentSrc = event.target?.result as string;
      this.requestUpdate();
    };
    reader.readAsDataURL(file);

    // Reset the native input
    input.value = '';

    this.dispatchEvent(
      new CustomEvent('it-change', {
        detail: { file, name: this.name, id: this.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  // Forward wrapper clicks to the hidden file input.
  // If the click already originated from the label (which has a `for` association), skip to
  // avoid double-firing. This is needed because at desktop breakpoints the overlay label only
  // covers the bottom 60%; clicks on the top portion hit it-avatar but must still open the picker.
  private _openFilePicker(e: MouseEvent) {
    if (this.disabled) return;
    const input = this.shadowRoot?.querySelector<HTMLInputElement>('input.upload-avatar');
    const label = this.shadowRoot?.querySelector<HTMLElement>('.upload-avatar-container label');
    if (!input || label?.contains(e.target as Node)) return;
    input.click();
  }



  private get _inputId(): string {
    return this._id ?? `upload-avatar-${Math.random().toString(36).slice(2)}`;
  }

  override render() {
    const labelText = this.$t('upload_avatar_label');
    const overlayText = this.overlayLabel ?? this.$t('upload_avatar_overlay_label');
    const proxyValue = this._currentSrc || this._currentFile?.name || '';
    const isInvalid = this.formControlController.submittedOnce && this.validationMessage.length > 0;

    return html`
      <div class="avatar-upload-wrapper size-${this.size}" @click="${this._openFilePicker}">
        <it-avatar
          type="image"
          size="${this.size}"
          src="${ifDefined(this._currentSrc || undefined)}"
          alt="${this.alt}"
          class="avatar-upload"
        ></it-avatar>

        <div class="upload-avatar-container">
          <input
            type="file"
            class="upload-avatar"
            id="${this._inputId}"
            accept="${this.accept}"
            ?disabled="${this.disabled}"
            aria-label="${labelText}"
            @change="${this._handleFileChange}"
          />
          <label for="${this._inputId}" class="it-upload-avatar-label-container">
            <it-icon name="it-camera" size="sm" color="inverse" aria-hidden="true"></it-icon>
            <span class="it-upload-avatar-label">${overlayText}</span>
          </label>
        </div>

        <div class="avatar-upload-icon" aria-hidden="true">
          <it-icon name="it-camera" size="${this.size === 'xl'? 'xs': 'sm'}"></it-icon>
        </div>
      </div>

      <!-- Hidden proxy input: drives native required/validity checking via FormControl base class -->
      <input
        type="text"
        class="it-form__control"
        .value="${proxyValue}"
        ?required="${this.required}"
        tabindex="-1"
        aria-hidden="true"
      />

      <div
        class="invalid-feedback form-feedback form-text form-feedback just-validate-error-label"
        role="alert"
        aria-hidden="${!isInvalid}"
      >${this.validationMessage}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-upload-avatar': ItUploadAvatar;
  }
}
