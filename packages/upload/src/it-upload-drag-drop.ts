import { BaseLocalizedComponent } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import it from './locales/it.js';
import en from './locales/en.js';
import styles from './upload-drag-drop.scss';

registerTranslation(it);
registerTranslation(en);

type DragDropState = 'idle' | 'dragover' | 'loading' | 'success';

@customElement('it-upload-drag-drop')
export class ItUploadDragDrop extends BaseLocalizedComponent {
  static styles = styles;

  /** Accepted file types, e.g. "image/*,.pdf" */
  @property({ type: String })
  accept?: string;

  /** Name attribute forwarded to the hidden input */
  @property({ type: String })
  name = '';

  @state()
  private _state: DragDropState = 'idle';

  @state()
  private _progress = 0;

  @state()
  private _fileName = '';

  @state()
  private _fileWeight = '';

  private get _inputId(): string {
    return this._id ?? `upload-dd-${Math.random().toString(36).slice(2)}`;
  }

  private get _formClass(): string {
    return this.composeClass(
      'upload-dragdrop',
      this._state === 'dragover' ? 'dragover' : '',
      this._state === 'loading' ? 'loading' : '',
      this._state === 'success' ? 'success' : '',
    );
  }

  /** Advance the donut progress. Value must be between 0 and 1. */
  public progress(value: number) {
    const clamped = Math.min(1, Math.max(0, value));
    this._progress = Math.round(clamped * 100);
  }

  /** Transition to the loading state, starting the progress animation. */
  public start() {
    this._state = 'loading';
  }

  /** Mark upload as successful. */
  public success() {
    this._state = 'success';
  }

  /** Reset to idle state with progress at 0. */
  public reset() {
    this._state = 'idle';
    this._progress = 0;
    this._fileName = '';
    this._fileWeight = '';
  }

  private _preventEvent(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  private _onDragEnter(e: DragEvent) {
    this._preventEvent(e);
    if (this._state !== 'success') {
      this._state = 'dragover';
    }
  }

  private _onDragOver(e: DragEvent) {
    this._preventEvent(e);
    if (this._state !== 'success') {
      this._state = 'dragover';
    }
  }

  private _onDragLeave(e: DragEvent) {
    this._preventEvent(e);
    if (this._state !== 'success') {
      this._state = 'idle';
    }
  }

  private _onDragEnd(e: DragEvent) {
    this._preventEvent(e);
    if (this._state !== 'success') {
      this._state = 'idle';
    }
  }

  private _onDrop(e: DragEvent) {
    this._preventEvent(e);
    if (this._state === 'success') return;

    const file = e.dataTransfer?.files?.[0];
    if (!file) return;

    this._fileName = file.name;
    this._fileWeight = this._formatSize(file.size);
    this.start();

    this.dispatchEvent(
      new CustomEvent('it-change', {
        detail: { file },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _onFileInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this._fileName = file.name;
    this._fileWeight = this._formatSize(file.size);
    this.start();

    input.value = '';

    this.dispatchEvent(
      new CustomEvent('it-change', {
        detail: { file },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _formatSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(1))} ${sizes[i]}`;
  }

  private _getStatusText(): string {
    switch (this._state) {
      case 'dragover':
        return this.$t('upload_dd_status_dragover');
      case 'loading':
        return this.$t('upload_dd_status_loading');
      case 'success':
        return this.$t('upload_dd_status_success');
      default:
        return '';
    }
  }

  private _renderTextContent() {
    const hasFile = this._fileName.length > 0;

    // Title: slot or default per state
    const titleText = hasFile ? this._fileName : this.$t('upload_dd_title');

    return html`
      <div class="upload-dragdrop-text">
        <h5>
          <slot name="title">${titleText}</slot>
        </h5>
        ${this._state === 'idle' || this._state === 'dragover'
          ? html`
              <p>
                <slot name="description">${this.$t('upload_dd_description')}</slot>
              </p>
              <p>
                <input
                  type="file"
                  class="upload-dragdrop-input"
                  id="${this._inputId}"
                  name="${ifDefined(this.name || undefined)}"
                  accept="${ifDefined(this.accept)}"
                  aria-label="${this.$t('upload_label')}"
                  @change="${this._onFileInputChange}"
                />
                <label for="${this._inputId}">${this.$t('upload_dd_select')}</label>
              </p>
            `
          : nothing}
        ${this._state === 'loading'
          ? html`<p>${this.$t('upload_dd_status_loading')}</p>`
          : nothing}
        ${hasFile
          ? html`
              <p class="upload-dragdrop-weight">
                <it-icon name="it-file" size="xs" aria-hidden="true"></it-icon>
                ${this._fileWeight}
              </p>
            `
          : nothing}
      </div>
    `;
  }

  override render() {
    const statusText = this._getStatusText();

    return html`
      <div
        class="${this._formClass}"
        role="region"
        aria-label="${this.$t('upload_dd_title')}"
        @drag="${this._preventEvent}"
        @dragstart="${this._preventEvent}"
        @dragend="${this._onDragEnd}"
        @dragover="${this._onDragOver}"
        @dragenter="${this._onDragEnter}"
        @dragleave="${this._onDragLeave}"
        @drop="${this._onDrop}"
      >
        <div class="upload-dragdrop-image">
          <it-progress
            type="donut"
            .value="${this._progress}"
            it-aria-label="${this.$t('upload_dd_progress_label')}"
            show-value
          ></it-progress>
          <div class="upload-dragdrop-loading" aria-hidden="true"></div>
          <div class="upload-dragdrop-success" aria-hidden="true">
            <it-icon name="it-check-circle" aria-hidden="true"></it-icon>
          </div>
        </div>

        ${this._renderTextContent()}

        <!-- Accessible live region for state announcements -->
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          class="visually-hidden"
        >
          ${statusText}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-upload-drag-drop': ItUploadDragDrop;
  }
}
