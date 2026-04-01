import { BaseLocalizedComponent } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import type { AvatarSize } from '@italia/avatar';
import it from './locales/it.js';
import en from './locales/en.js';
import styles from './upload-avatar.scss';

registerTranslation(it);
registerTranslation(en);

@customElement('it-upload-avatar')
export class ItUploadAvatar extends BaseLocalizedComponent {
  static styles = styles;

  /** Current image source URL displayed in the avatar */
  @property({ type: String, reflect: true })
  src = '';

  /** Alt text for the current avatar image */
  @property({ type: String, reflect: true })
  alt = '';

  /** Size of the avatar. The avatar is always xxl per BSI spec, but 'sm' reduces the wrapper. */
  @property({ type: String, reflect: true })
  size: 'sm' | 'standard' = 'standard';

  /** Accepted file types, e.g. "image/*" */
  @property({ type: String })
  accept = 'image/*';

  /** Name attribute forwarded to the hidden input (useful if inside a form) */
  @property({ type: String })
  name = '';

  /** If true, the upload button is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @state()
  private _currentSrc = '';

  override connectedCallback() {
    super.connectedCallback?.();
    this._currentSrc = this.src;
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);
    if (changedProperties.has('src') && !this._currentSrc) {
      this._currentSrc = this.src;
    }
  }

  private _handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

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
        detail: { file },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private get _avatarSize(): AvatarSize {
    return 'xxl';
  }

  private get _inputId(): string {
    return this._id ?? `upload-avatar-${Math.random().toString(36).slice(2)}`;
  }

  override render() {
    const wrapperClass = this.composeClass(
      'avatar-upload-wrapper',
      this.size === 'sm' ? 'size-sm' : '',
    );

    const labelText = this.$t('upload_avatar_label');

    return html`
      <div class="${wrapperClass}">
        <it-avatar
          type="image"
          size="${this._avatarSize}"
          src="${ifDefined(this._currentSrc || undefined)}"
          alt="${this.alt}"
          class="avatar-upload"
        ></it-avatar>

        <div class="upload-avatar-container">
          <input
            type="file"
            class="upload-avatar"
            id="${this._inputId}"
            name="${ifDefined(this.name || undefined)}"
            accept="${this.accept}"
            ?disabled="${this.disabled}"
            aria-label="${labelText}"
            @change="${this._handleFileChange}"
          />
          <label for="${this._inputId}" aria-hidden="true">
            <svg class="icon icon-sm" aria-hidden="true">
              <use href="#it-camera"></use>
            </svg>
            <span class="visually-hidden">${labelText}</span>
          </label>
        </div>

        <div class="avatar-upload-icon" aria-hidden="true">
          <it-icon name="it-pencil" size="sm"></it-icon>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-upload-avatar': ItUploadAvatar;
  }
}
