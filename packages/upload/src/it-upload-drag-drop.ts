/* eslint-disable class-methods-use-this */
import { FormControl, FormControlController } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html, nothing } from 'lit';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import it from './locales/it.js';
import en from './locales/en.js';
import styles from './upload-drag-drop.scss';
import { formatSize } from './utils.js';
import { type DragDropHeadingLevel, DRAG_DROP_HEADING_LEVELS } from './types.js';

registerTranslation(it);
registerTranslation(en);

type DragDropState = 'idle' | 'dragover' | 'loading' | 'success';

// Base64‑encoded copy of bootstrap-italia/dist/assets/upload-drag-drop-icon.svg
// bundled inline so the component works standalone without a public assets path.
const DRAG_DROP_ICON_SRC =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTgwcHgiIGhlaWdodD0iMTgwcHgiIHZpZXdCb3g9IjAgMCAxODAgMTgwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmljb248L3RpdGxlPgogICAgPGcgaWQ9IlVwbG9hZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFydGJvYXJkIj4KICAgICAgICAgICAgPGcgaWQ9Imljb24iPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0QxRTdGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIxODAiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC02LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNy44NTUxNzUsIDEwOS43MDIyNDgpIHJvdGF0ZSgtMTApIHRyYW5zbGF0ZSgtMTA3Ljg1NTE3NSwgLTEwOS43MDIyNDgpIHRyYW5zbGF0ZSg0OC4zNTUxNzUsIDM1LjIwMjI0OCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjA5NDg1NzY1LDAuODE4Mzc2OTk5IEw4OS4wOTA5MjA2LDAuODE4Mzc2OTk5IEwxMTguNTkwOTIxLDMwLjQxODM3NyBMMTE4LjU5MDkyMSwxNDAuMzE0NDQgQzExOC41OTA5MjEsMTQ1LjAxMTAzNSAxMTQuNzgzNTc4LDE0OC44MTgzNzcgMTEwLjA4Njk4NCwxNDguODE4Mzc3IEw2LjI2MDIxMTk4LDE0OC44MTgzNzcgQzMuMTI5MTQ4ODMsMTQ4LjgxODM3NyAwLjU5MDkyMDY0MywxNDYuMjgwMTQ5IDAuNTkwOTIwNjQzLDE0My4xNDkwODYgTDAuNTkwOTIwNjQzLDkuMzIyMzE0MDEgQzAuNTkwOTIwNjQzLDQuNjI1NzE5MjggNC4zOTgyNjI5MywwLjgxODM3Njk5OSA5LjA5NDg1NzY1LDAuODE4Mzc2OTk5IFoiIGZpbGw9IiM2NkE1RTMiIG9wYWNpdHk9IjAuNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIyMS4wNTczOTU5IDczLjg1ODQ5NTkgMjEuMDU3Mzk1OSA2NS4zNTQ1NTg5IDcwLjg2MzA0MTIgNjUuMzU0NTU4OSA3MC44NjMwNDEyIDczLjg1ODQ5NTkiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iMjAuMjE3MTkzNCA5MS4zMjIxNTkgMjAuMjE3MTkzNCA4Mi44MTgyMjIgOTkuNzIxMTMwNCA4Mi44MTgyMjIgOTkuNzIxMTMwNCA5MS4zMjIxNTkiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iMjAuMzkzMjQ1OCAxMDcuNjAwMDI4IDIwLjM5MzI0NTggOTkuMDk2MDkwNiA5OS44OTcxODI4IDk5LjA5NjA5MDYgOTkuODk3MTgyOCAxMDcuNjAwMDI4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzAwNTlCMyIgb3BhY2l0eT0iMC4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDUuNDQ5MzYxLCA0MC42MTA1MzUpIHNjYWxlKC0xLCAxKSByb3RhdGUoOTApIHRyYW5zbGF0ZSgtMTA1LjQ0OTM2MSwgLTQwLjYxMDUzNSkiIHBvaW50cz0iOTIuMzA0MDQyMiAyNy40NzUwNDA5IDExOC41OTQ2ODEgNTMuNzQ2MDI5NiA5NS4yNDY0MDUyIDUzLjczNzc1ODkiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNODkuMDkyNzUyOCwwLjg0MjY2NjY0NyBMMTE4LjU2MDYyNSwzMC4zOTE1OTQ3IEwxMDAuMjQ3NzMzLDMwLjY3MTkxNDYgQzk0LjE4MDU4OTQsMzAuNzY0Nzg1OSA4OS4xODY5MTEsMjUuOTIxNjgxNSA4OS4wOTQwMzk3LDE5Ljg1NDUzODIgQzg5LjA5MzE4MTgsMTkuNzk4NDg5NSA4OS4wOTI3NTI4LDE5Ljc0MjQzNTEgODkuMDkyNzUyOCwxOS42ODYzNzk5IEw4OS4wOTI3NTI4LDAuODQyNjY2NjQ3IFoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';

@customElement('it-upload-drag-drop')
export class ItUploadDragDrop extends FormControl {
  static styles = styles;

  // Override the base FormControlController: value is the selected File.
  protected override readonly formControlController: FormControlController = new FormControlController(this, {
    value: (el) => (el as ItUploadDragDrop)._currentFile,
    assumeInteractionOn: ['it-change'],
  });

  @query('.it-form__control')
  override inputElement!: HTMLInputElement;

  /** Accepted file types, e.g. "image/*,.pdf" */
  @property({ type: String })
  accept?: string;

  /** Custom illustration URL. If not set, the built-in illustration is used. */
  @property({ type: String })
  illustration?: string;

  /** Heading level for the title element. Defaults to 'h3'; visual size stays at h5. */
  @property({ type: String, attribute: 'heading-level' })
  headingLevel: DragDropHeadingLevel = 'h3';

  /** The currently selected File (null until file is chosen/dropped). */
  @state()
  private _currentFile: File | null = null;

  @state()
  private _state: DragDropState = 'idle';

  @state()
  private _progress = 0;

  @state()
  private _fileName = '';

  @state()
  private _fileWeight = '';

  @state()
  private _fileType = '';

  @state()
  private _indeterminate = false;

  private _autoStarted = false;

  protected getHeadingLevel(): DragDropHeadingLevel {
    return DRAG_DROP_HEADING_LEVELS.includes(this.headingLevel) ? this.headingLevel : 'h3';
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
    this._indeterminate = false;
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
    this._indeterminate = false;
    this._autoStarted = false;
    this._fileName = '';
    this._fileWeight = '';
    this._fileType = '';
    this._currentFile = null;
  }

  private _extractFileType(fileName: string): string {
    const ext = fileName.split('.').pop();
    return ext ? ext.toUpperCase() : '';
  }

  private _preventEvent(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  private _onDragEnter(e: DragEvent) {
    this._preventEvent(e);
    if (this.disabled || this._state === 'success' || this._state === 'loading') return;
    const cancelled = !this.dispatchEvent(
      new CustomEvent('it-dd-start', {
        cancelable: true,
        bubbles: true,
        composed: true,
        detail: {},
      }),
    );
    if (!cancelled) {
      this.start();
      this._autoStarted = true;
    } else {
      this._state = 'dragover';
    }
  }

  private _onDragOver(e: DragEvent) {
    e.preventDefault();
    if (this.disabled || this._state === 'success') return;
    if (this._state === 'idle') this._state = 'dragover';
  }

  private _onDragLeave(e: DragEvent) {
    this._preventEvent(e);
    if (this.disabled) return;
    if (this._state === 'dragover') {
      this._state = 'idle';
    } else if (this._state === 'loading' && this._autoStarted && !this._currentFile) {
      this._state = 'idle';
      this._autoStarted = false;
    }
  }

  private _onDragEnd(e: DragEvent) {
    this._preventEvent(e);
    if (this.disabled) return;
    if (this._state === 'dragover') {
      this._state = 'idle';
    }
  }

  private _onDrop(e: DragEvent) {
    this._preventEvent(e);
    if (this.disabled || this._state === 'success') return;

    const file = e.dataTransfer?.files?.[0];
    if (!file) return;

    this._currentFile = file;
    this._fileName = file.name;
    this._fileWeight = formatSize(file.size);
    this._fileType = this._extractFileType(file.name);
    this._autoStarted = false;

    const dropCancelled = !this.dispatchEvent(
      new CustomEvent('it-dd-drop', {
        cancelable: true,
        bubbles: true,
        composed: true,
        detail: { file, name: this.name, id: this.id },
      }),
    );
    if (!dropCancelled) {
      if (this._state !== 'loading') this.start();
      this._indeterminate = true;
    }

    this.dispatchEvent(
      new CustomEvent('it-change', {
        detail: { file, name: this.name, id: this.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _onFileInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this._currentFile = file;
    this._fileName = file.name;
    this._fileWeight = formatSize(file.size);
    this._fileType = this._extractFileType(file.name);
    input.value = '';

    const dropCancelled = !this.dispatchEvent(
      new CustomEvent('it-dd-drop', {
        cancelable: true,
        bubbles: true,
        composed: true,
        detail: { file, name: this.name, id: this.id },
      }),
    );
    if (!dropCancelled) {
      this.start();
      this._indeterminate = true;
    }

    this.dispatchEvent(
      new CustomEvent('it-change', {
        detail: { file, name: this.name, id: this.id },
        bubbles: true,
        composed: true,
      }),
    );
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
    const headingTag = unsafeStatic(this.getHeadingLevel());

    return html`
      <div class="upload-dragdrop-text">
        ${hasFile && this._fileWeight
          ? html`
              <p class="upload-dragdrop-weight">
                <it-icon name="it-file" size="xs" aria-hidden="true" color="secondary"></it-icon>
                <span>${this._fileType ? `${this._fileType} ` : ''}(${this._fileWeight})</span>
              </p>
            `
          : nothing}
        ${staticHtml`<${headingTag} class="h5">
          <slot name="title">${titleText}</slot>
        </${headingTag}>`} ${this._state === 'idle' || this._state === 'dragover'
          ? html`
              <p>
                <slot name="description">${this.$t('upload_dd_description')}</slot>
              </p>
              <p>
                <input
                  type="file"
                  class="upload-dragdrop-input"
                  id="${this._id!}"
                  accept="${ifDefined(this.accept)}"
                  ?disabled="${this.disabled}"
                  aria-label="${this.$t('upload_label')}"
                  aria-required="${this.required ? 'true' : nothing}"
                  @change="${this._onFileInputChange}"
                />
                <label for="${this._id!}">${this.$t('upload_dd_select')}</label>
              </p>
            `
          : nothing}
        ${this._state === 'loading' ? html`<p>${this.$t('upload_dd_status_loading')}</p>` : nothing}
        ${this._state === 'success' ? html`<p>${this.$t('upload_dd_status_success')}</p>` : nothing}
      </div>
    `;
  }

  override render() {
    const statusText = this._getStatusText();
    const isInvalid = this.formControlController.submittedOnce && this.validationMessage.length > 0;

    return html`
      <div
        part="drop-zone"
        class="${this._formClass}"
        @drag="${this._preventEvent}"
        @dragstart="${this._preventEvent}"
        @dragend="${this._onDragEnd}"
        @dragover="${this._onDragOver}"
        @dragenter="${this._onDragEnter}"
        @dragleave="${this._onDragLeave}"
        @drop="${this._onDrop}"
      >
        <div class="upload-dragdrop-image">
          <img src="${this.illustration ?? DRAG_DROP_ICON_SRC}" alt="" aria-hidden="true" width="180" height="180" />
          <div class="upload-dragdrop-loading" aria-hidden="${this._state !== 'loading' ? 'true' : nothing}">
            <it-progress
              type="donut"
              .value="${this._indeterminate ? 0 : this._progress}"
              it-aria-label="${this.$t('upload_dd_progress_label')}"
              ?show-value="${!this._indeterminate}"
            ></it-progress>
          </div>
          <div class="upload-dragdrop-success" aria-hidden="${this._state !== 'success' ? 'true' : nothing}">
            <it-icon name="it-check" aria-hidden="true" color="inverse"></it-icon>
          </div>
        </div>

        ${this._renderTextContent()}

        <!-- Accessible live region for state announcements -->
        <div role="status" aria-live="polite" aria-atomic="true" class="visually-hidden">${statusText}</div>
      </div>

      <!-- Hidden proxy input: drives native required/validity checking via FormControl base class -->
      <input
        type="text"
        class="it-form__control"
        .value="${this._currentFile?.name || ''}"
        ?required="${this.required}"
        tabindex="-1"
        aria-hidden="true"
      />

      <div class="invalid-feedback form-feedback form-text just-validate-error-label" role="alert">
        ${isInvalid ? this.validationMessage : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-upload-drag-drop': ItUploadDragDrop;
  }
}
