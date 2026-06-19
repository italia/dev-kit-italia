import { FormControl, FormControlController } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html, nothing } from 'lit';
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
    // Keep the displayed validation message in sync with the value here (pre-render) rather
    // than in updated(), so picking/clearing a file refreshes it without scheduling a second
    // render — avoids Lit's "scheduled an update after an update completed" warning. The native
    // `?required` attribute still drives checkValidity()/the constraint bubble. Guarded by
    // `hasUpdated` because `inputElement` only exists once the first render has produced the DOM.
    if (
      this.hasUpdated &&
      !this.customValidation &&
      (changedProperties.has('_currentFile') || changedProperties.has('_currentSrc'))
    ) {
      const hasValue = Boolean(this._currentFile || this._currentSrc);
      const message = this.required && !hasValue ? this.$t('validityRequired') : '';
      this.inputElement?.setCustomValidity(message);
      this.validationMessage = message;
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

  override render() {
    const labelText = this.$t('upload_avatar_label');
    const fileInputLabel = this.required ? labelText : labelText;
    const overlayText = this.overlayLabel ?? this.$t('upload_avatar_overlay_label');
    // A pre-filled `src` or a freshly selected file both satisfy `required`.
    const hasValue = Boolean(this._currentFile || this._currentSrc);
    const isInvalid = this.formControlController.submittedOnce && this.validationMessage.length > 0;
    const feedbackId = `invalid-feedback-${this._id}`;

    return html`
      <div class="avatar-upload-wrapper size-${this.size}">
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
            class="upload-avatar it-form__control"
            id="${this._id!}"
            accept="${this.accept}"
            ?disabled="${this.disabled}"
            ?required="${this.required && !hasValue}"
            aria-label="${fileInputLabel}"
            aria-required="${this.required ? 'true' : nothing}"
            aria-invalid="${isInvalid ? 'true' : 'false'}"
            aria-describedby="${ifDefined(isInvalid ? feedbackId : undefined)}"
            @change="${this._handleFileChange}"
          />
          <label part="overlay-label" for="${this._id!}" class="it-upload-avatar-label-container" aria-hidden="true">
            <it-icon name="it-camera" size="sm" color="inverse" aria-hidden="true"></it-icon>
            <span class="it-upload-avatar-label">${overlayText}</span>
          </label>
        </div>

        <div class="avatar-upload-icon" aria-hidden="true">
          <it-icon name="it-camera" size="${this.size === 'xl' ? 'xs' : 'sm'}"></it-icon>
        </div>
      </div>

      <div
        id="${feedbackId}"
        class="invalid-feedback form-feedback form-text just-validate-error-label"
        role="alert"
        ?hidden=${!isInvalid}
      >
        ${isInvalid ? this.validationMessage : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-upload-avatar': ItUploadAvatar;
  }
}
