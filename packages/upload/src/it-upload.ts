import { FormControl, FormControlController } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html, nothing } from 'lit';
import { customElement, property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';

import type { UploadFile, UploadFileStatus, UploadVariant, UploadInternalFile } from './types.js';
import it from './locales/it.js';
import en from './locales/en.js';
import styles from './upload.scss';

registerTranslation(it);
registerTranslation(en);

@customElement('it-upload')
export class ItUpload extends FormControl {
  static styles = styles;

  // Override the base FormControlController to submit File[] instead of strings.
  // The base class field is declared as `protected readonly` but re-declaring here
  // shadows it cleanly via class field initialization order.
  protected override readonly formControlController: FormControlController = new FormControlController(this, {
    value: (el) => (el as ItUpload)._files.map((f) => f._raw),
    assumeInteractionOn: ['it-change'],
  });

  @query('.it-form__control')
  override inputElement!: HTMLInputElement;

  @queryAssignedElements({ slot: 'label' })
  labelElements!: HTMLElement[];

  get label(): string {
    if (this.labelElements.length > 0) {
      return this.labelElements[0].innerText.trim();
    }
    return '';
  }

  /** Allow multiple file selection */
  @property({ type: Boolean, reflect: true })
  multiple = false;

  /** Accepted file types, e.g. "image/*,.pdf" */
  @property({ type: String })
  accept?: string;

  /** Show image thumbnails in the file list */
  @property({ type: Boolean, attribute: 'image-preview' })
  imagePreview = false;

  /** Layout variant: 'default' shows a vertical file list, 'gallery' shows a pictures-wall grid */
  @property({ type: String, reflect: true })
  variant: UploadVariant = 'default';

  /** Support text displayed below the upload button */
  @property({ type: String, attribute: 'support-text' })
  supportText = '';

  /**
   * If true, files transition to 'success' automatically as soon as they are added
   * (useful for purely client-side scenarios).
   * Leave false (default) when you need to call setFileStatus() after a real HTTP upload.
   */
  @property({ type: Boolean, attribute: 'auto-success' })
  autoSuccess = false;

  @state()
  private _files: UploadInternalFile[] = [];

  /** Returns a copy of the current file list */
  get files(): UploadFile[] {
    return this._files.map(({ _raw: _, ...rest }) => rest);
  }

  /**
   * Programmatically add a file to the list with an initial status of 'loading'.
   * Returns the generated id for use with setFileStatus / removeFile.
   */
  addFile(file: File): string {
    const id = `upload-file-${Math.random().toString(36).slice(2)}`;
    const entry: UploadInternalFile = {
      id,
      name: file.name,
      size: file.size,
      status: 'loading',
      _raw: file,
    };
    this._files = [...this._files, entry];
    return id;
  }

  /** Update the status (and optional progress 0–100) of a file by id. No-op for unknown ids. */
  setFileStatus(id: string, status: UploadFileStatus, progress?: number) {
    this._files = this._files.map((f) =>
      f.id === id ? { ...f, status, progress: progress ?? f.progress } : f,
    );
  }

  /** Set a thumbnail data URL for a file entry by id. No-op for unknown ids. */
  setFileThumbnail(id: string, dataUrl: string) {
    this._files = this._files.map((f) =>
      f.id === id ? { ...f, thumbnail: dataUrl } : f,
    );
  }

  /** Remove a file entry by id. No-op for unknown ids. */
  removeFile(id: string) {
    this._files = this._files.filter((f) => f.id !== id);
    this._validateFiles();
  }

  override connectedCallback() {
    super.connectedCallback?.();
    this._handleReady();
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    if (!this.label && this.label?.length === 0) {
      this.logger.warn(
        `Label is required for accessibility. Define a <span slot="label"> inside <it-upload name="${this.name}">.`,
      );
    }
  }

  // Override FormControl.checkValidity — the native hidden input manages required state
  override checkValidity(): boolean {
    return this.inputElement?.checkValidity() ?? true;
  }

  /** Override to prevent string-level validation messages from FormControl base */
  protected override handleValidationMessages() {
    this._validateFiles();
  }

  private _validateFiles() {
    if (this.required && this._files.length === 0) {
      this.inputElement?.setCustomValidity(this.$t('validityRequired'));
      this.validationMessage = this.$t('validityRequired');
    } else {
      this.inputElement?.setCustomValidity('');
      this.validationMessage = '';
    }
    this.formControlController.updateValidity();
  }

  override get validity(): ValidityState {
    return this.inputElement?.validity;
  }

  private _handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const fileList = input.files;
    if (!fileList || fileList.length === 0) return;

    const newFiles = Array.from(fileList);
    newFiles.forEach((file) => {
      const id = this.addFile(file);
      if (file.type.startsWith('image/') && (this.imagePreview || this.variant === 'gallery')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          this.setFileThumbnail(id, ev.target?.result as string);
          if (this.autoSuccess) this.setFileStatus(id, 'success');
        };
        reader.readAsDataURL(file);
      } else if (this.autoSuccess) {
        this.setFileStatus(id, 'success');
      }
    });

    // Reset the native input so the same file can be re-selected
    input.value = '';

    this._validateFiles();

    this.dispatchEvent(
      new CustomEvent('it-upload-add', {
        detail: { files: newFiles, name: this.name, id: this.id },
        bubbles: true,
        composed: true,
      }),
    );
    this.dispatchEvent(
      new CustomEvent('it-change', {
        detail: { files: this._files.map((f) => f._raw), name: this.name, id: this.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleRemove(id: string, name: string) {
    this.removeFile(id);
    this.dispatchEvent(
      new CustomEvent('it-upload-remove', {
        detail: { id, name, componentName: this.name, componentId: this.id },
        bubbles: true,
        composed: true,
      }),
    );
    this.dispatchEvent(
      new CustomEvent('it-change', {
        detail: { files: this._files.map((f) => f._raw), name: this.name, id: this.id },
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

  private _getStatusLabel(status: UploadFileStatus): string {
    switch (status) {
      case 'loading':
        return this.$t('upload_status_loading');
      case 'success':
        return this.$t('upload_status_success');
      case 'error':
      default:
        return this.$t('upload_status_error');
    }
  }

  private _getRemoveLabel(f: UploadInternalFile): string {
    const template =
      f.status === 'loading' ? this.$t('upload_remove_loading') : this.$t('upload_remove_done');
    return template.replace('{name}', f.name);
  }

  // eslint-disable-next-line class-methods-use-this
  private _iconForStatus(status: UploadFileStatus) {
    switch (status) {
      case 'loading':
        return 'it-file';
      case 'success':
        return 'it-file';
      case 'error':
      default:
        return 'it-close-circle';
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private _colorForStatus(status: UploadFileStatus): string {
    switch (status) {
      case 'success':
        return 'success';
      case 'error':
        return 'danger';
      default:
        return '';
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private _actionIconForStatus(status: UploadFileStatus): string {
    return status === 'success' ? 'it-check' : 'it-close';
  }

  private _renderFileItem(f: UploadInternalFile) {
    const liClass = this.composeClass(
      'upload-file',
      f.status === 'loading' ? 'uploading' : f.status,
    );

    const statusLabel = this._getStatusLabel(f.status);
    const removeLabel = this._getRemoveLabel(f);

    return html`
      <li class="${liClass}">
        ${when(
          this.imagePreview && f.thumbnail,
          () => html`
            <div class="upload-image">
              <img src="${f.thumbnail!}" alt="${f.name}" />
            </div>
          `,
          () => html`<it-icon name="${this._iconForStatus(f.status)}" size="sm" color="${this._colorForStatus(f.status)}" aria-hidden="true"></it-icon>`,
        )}
        <p>
          <span class="visually-hidden">${statusLabel}</span>${f.name}${when(
            f.status === 'success',
            () => html`<span class="upload-file-weight">${this._formatSize(f.size)}</span>`,
          )}
        </p>

        <button
          type="button"
          @click="${() => this._handleRemove(f.id, f.name)}"
          aria-label="${removeLabel}"
          ?disabled="${this.disabled||f.status === 'success'}"
        >
          <it-icon
            name="${this._actionIconForStatus(f.status)}"
            color="${this._colorForStatus(f.status)}"
            aria-hidden="true"
          ></it-icon>
        </button>
        ${when(
          f.status === 'loading',
          () => html`
            <it-progress
              type="line"
              .value="${f.progress ?? 0}"
              it-aria-label="${f.name}"
            ></it-progress>
          `,
        )}
      </li>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderGalleryItem(f: UploadInternalFile) {
    return html`
      <li class="upload-image">
        ${when(
          f.thumbnail,
          () => html`<img src="${f.thumbnail!}" alt="${f.name}" />`,
        )}

      </li>
    `;
  }

  private _renderFileList() {
    if (this._files.length === 0) return nothing;

    if (this.variant === 'gallery') {
      return html`
        ${this._files.map((f) => this._renderGalleryItem(f))}
      `;
    }

    const listClass = this.composeClass(
      'upload-file-list',
      this.imagePreview ? 'upload-file-list-image' : '',
    );
    return html`
      <ul class="${listClass}" aria-label="File caricati">
        ${this._files.map((f) => this._renderFileItem(f))}
      </ul>
    `;
  }

  private _renderUploadInput() {
    const inputId = this._id ?? `upload-${Math.random().toString(36).slice(2)}`;
    const labelText = this.variant === 'gallery'
      ? this.$t('upload_gallery_label')
      : this.$t('upload_label');

    const showValidation = this.formControlController.submittedOnce;
    const isInvalid = showValidation && this.validationMessage.length > 0;

    return html`
      <div class="form-group">
        <input
          type="file"
          class="upload it-form__control"
          id="${inputId}"
          name="${this.name}"
          ?multiple="${this.multiple}"
          accept="${ifDefined(this.accept)}"
          ?disabled="${this.disabled}"
          ?required="${this.required && this._files.length === 0}"
          aria-invalid="${isInvalid ? 'true' : 'false'}"
          aria-describedby="${ifDefined(
            isInvalid ? `invalid-feedback-${inputId}` : undefined,
          )}"
          @change="${this._handleFileChange}"
        />
        <label for="${inputId}">
          <it-icon name="it-upload" size="sm" aria-hidden="true" color="${this.variant === 'gallery'? 'primary':'inverse'}"></it-icon>
          <slot name="label">${labelText}</slot>
        </label>

        ${when(
          this.supportText,
          () => html`<small class="form-text">${this.supportText}</small>`,
        )}

        <div
          role="alert"
          id="invalid-feedback-${inputId}"
          class="invalid-feedback form-feedback form-text form-feedback just-validate-error-label"
          aria-hidden="${!isInvalid}"
        >
          <span class="visually-hidden">${this.label}: </span>${this.validationMessage}
        </div>
      </div>
    `;
  }

  override render() {
    if (this.variant === 'gallery') {
      return html`
        <ul class="upload-pictures-wall">
          ${this._renderFileList()}
          <li>
            ${this._renderUploadInput()}
          </li>
        </ul>
      `;
    }

    return html`
      ${this._renderUploadInput()}
      ${this._renderFileList()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-upload': ItUpload;
  }
}
