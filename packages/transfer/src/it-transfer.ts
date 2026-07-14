/* eslint-disable lit-a11y/anchor-is-valid */
/* eslint-disable lit-a11y/no-aria-slot */
import { FormControl, FormControlController, dispatchCancelable } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { repeat } from 'lit/directives/repeat.js';

import type { ItTransferItem } from './it-transfer-item.js';
import type { TransferItemData, TransferAction, TransferEventDetail } from './types.js';
import it from './locales/it.js';
import styles from './transfer.scss';

registerTranslation(it);

/**
 * A dual-list transfer component that allows moving items between a source and a target list.
 * Integrates with native `<form>` elements via the FormControl API.
 *
 * @fires {CustomEvent<TransferEventDetail>} it-transfer - Fired (cancelable) before items are transferred/reset. Prevent default to cancel.
 * @fires {CustomEvent<{value: string, el: HTMLElement}>} it-change - Fired after the target list changes.
 *
 * @slot - One or more `<it-transfer-item>` elements.
 */
@customElement('it-transfer')
export class ItTransfer extends FormControl {
  static styles = styles;

  protected override readonly formControlController: FormControlController = new FormControlController(this, {
    value: (control) => (control as ItTransfer).value,
    name: (control) => (control as ItTransfer).name,
    checkValidity: (control) => (control as ItTransfer).checkValidity(),
    reportValidity: (control) => (control as ItTransfer).reportValidity(),
    setValue: (control, val) => {
      const t = control as ItTransfer;
      t._setFromFormValue(val as string);
    },
    assumeInteractionOn: ['it-change'],
  });

  /** Override i18n label for the source (left) list header. */
  @property({ type: String, attribute: 'source-label' })
  sourceLabel?: string;

  /** Override i18n label for the target (right) list header. */
  @property({ type: String, attribute: 'target-label' })
  targetLabel?: string;

  /** Override i18n aria-label for the transfer (→) button. */
  @property({ type: String, attribute: 'transfer-label' })
  transferLabel?: string;

  /** Override i18n aria-label for the back-transfer (←) button. */
  @property({ type: String, attribute: 'backtransfer-label' })
  backtransferLabel?: string;

  /** Override i18n aria-label for the reset (↺) button. */
  @property({ type: String, attribute: 'reset-label' })
  resetLabel?: string;

  @queryAssignedElements({ selector: 'it-transfer-item' })
  private _slottedItems!: ItTransferItem[];

  @state()
  private _sourceItems: TransferItemData[] = [];

  @state()
  private _targetItems: TransferItemData[] = [];

  @state()
  private _sourceChecked: Set<string> = new Set();

  @state()
  private _targetChecked: Set<string> = new Set();

  /** Snapshot of the initial state for reset(). Set once on first slotchange. */
  private _initialSource: TransferItemData[] = [];

  private _initialTarget: TransferItemData[] = [];

  // ── Form integration ──────────────────────────────────────────────────────

  override get validity(): ValidityState {
    const valid = !this.required || this._targetItems.length > 0;
    return {
      valid,
      valueMissing: this.required && this._targetItems.length === 0,
      typeMismatch: false,
      patternMismatch: false,
      tooLong: false,
      tooShort: false,
      rangeUnderflow: false,
      rangeOverflow: false,
      stepMismatch: false,
      badInput: false,
      customError: this.customValidation && (this.validationText?.length ?? 0) > 0,
    } as ValidityState;
  }

  override checkValidity(): boolean {
    if (this.customValidation) return (this.validationText?.length ?? 0) === 0;
    return !this.required || this._targetItems.length > 0;
  }

  override reportValidity(): boolean {
    const valid = this.checkValidity();
    if (!valid && !this.customValidation) {
      this.validationMessage = this.$t('validityGroupRequired');
    } else if (valid) {
      this.validationMessage = '';
    }
    this.formControlController.updateValidity();
    this.requestUpdate();
    return valid;
  }

  protected override handleValidationMessages() {
    if (!this.customValidation && this.formControlController.submittedOnce) {
      this.validationMessage = this.checkValidity() ? '' : this.$t('validityGroupRequired');
    }
    if (this.customValidation) {
      this.validationMessage = this.validationText ?? '';
    }
  }

  private _setFromFormValue(val: string) {
    if (!val) return;
    try {
      const targetValues: string[] = JSON.parse(val);
      const all = [...this._sourceItems, ...this._targetItems];
      this._targetItems = all.filter((i) => targetValues.includes(i.value));
      this._sourceItems = all.filter((i) => !targetValues.includes(i.value));
      this._sourceChecked = new Set();
      this._targetChecked = new Set();
      this._syncValue();
    } catch {
      // ignore malformed values
    }
  }

  private _syncValue() {
    this.value = JSON.stringify(this._targetItems.map((i) => i.value));
    this.dispatchEvent(
      new CustomEvent('it-change', {
        detail: { value: this.value, el: this },
        bubbles: true,
        composed: true,
      }),
    );
    this.handleValidationMessages();
    this.formControlController.updateValidity();
  }

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  override connectedCallback() {
    super.connectedCallback?.();
  }

  // ── Slot handling ─────────────────────────────────────────────────────────

  private _handleSlotChange() {
    const items = this._slottedItems;
    const source: TransferItemData[] = [];
    const target: TransferItemData[] = [];

    for (const el of items) {
      const data: TransferItemData = {
        value: el.value,
        label: el.textContent?.trim() ?? el.value,
        disabled: el.disabled,
      };
      if (el.target) {
        target.push(data);
      } else {
        source.push(data);
      }
    }

    // Only initialise once; on subsequent slot changes keep current state if values already exist
    if (this._initialSource.length === 0 && this._initialTarget.length === 0) {
      this._initialSource = source;
      this._initialTarget = target;
      this._sourceItems = source;
      this._targetItems = target;
      this._syncValue();
    }
  }

  // ── Actions ───────────────────────────────────────────────────────────────

  private _dispatch(
    action: TransferAction,
    items: string[],
    nextSource: TransferItemData[],
    nextTarget: TransferItemData[],
    defaultAction: () => void,
  ): void {
    dispatchCancelable<TransferEventDetail>(
      this,
      'it-transfer',
      {
        action,
        items,
        source: nextSource.map((i) => i.value),
        target: nextTarget.map((i) => i.value),
      },
      defaultAction,
    );
  }

  /** Move checked source items to the target list. */
  transfer() {
    const moving = this._sourceItems.filter((i) => this._sourceChecked.has(i.value) && !i.disabled);
    if (moving.length === 0) return;

    const nextSource = this._sourceItems.filter((i) => !this._sourceChecked.has(i.value));
    const nextTarget = [...this._targetItems, ...moving];

    this._dispatch(
      'transfer',
      moving.map((i) => i.value),
      nextSource,
      nextTarget,
      () => {
        this._sourceItems = nextSource;
        this._targetItems = nextTarget;
        this._sourceChecked = new Set();
        this._syncValue();
      },
    );
  }

  /** Move checked target items back to the source list. */
  backtransfer() {
    const moving = this._targetItems.filter((i) => this._targetChecked.has(i.value) && !i.disabled);
    if (moving.length === 0) return;

    const nextTarget = this._targetItems.filter((i) => !this._targetChecked.has(i.value));
    const nextSource = [...this._sourceItems, ...moving];

    this._dispatch(
      'backtransfer',
      moving.map((i) => i.value),
      nextSource,
      nextTarget,
      () => {
        this._sourceItems = nextSource;
        this._targetItems = nextTarget;
        this._targetChecked = new Set();
        this._syncValue();
      },
    );
  }

  /** Reset both lists to their initial state. */
  reset() {
    const nextSource = this._initialSource.slice();
    const nextTarget = this._initialTarget.slice();

    this._dispatch('reset', [], nextSource, nextTarget, () => {
      this._sourceItems = nextSource;
      this._targetItems = nextTarget;
      this._sourceChecked = new Set();
      this._targetChecked = new Set();
      this._syncValue();
    });
  }

  /**
   * Applies the proposed state from a previously cancelled `it-transfer` event,
   * without re-dispatching the event.
   *
   * Use this after calling `event.preventDefault()` in an `it-transfer` listener
   * to resume the action once your async logic (validation, confirmation, etc.) resolves:
   *
   * ```js
   * el.addEventListener('it-transfer', async (e) => {
   *   e.preventDefault();
   *   const ok = await confirm('Procedere con il trasferimento?');
   *   if (ok) el.commit(e.detail);
   * });
   * ```
   */
  commit(detail: TransferEventDetail): void {
    const known = new Map<string, TransferItemData>(
      [...this._sourceItems, ...this._targetItems].map((i) => [i.value, i]),
    );
    this._sourceItems = detail.source.flatMap((v) => (known.has(v) ? [known.get(v)!] : []));
    this._targetItems = detail.target.flatMap((v) => (known.has(v) ? [known.get(v)!] : []));
    this._sourceChecked = new Set();
    this._targetChecked = new Set();
    this._syncValue();
  }

  // ── Checkbox logic ────────────────────────────────────────────────────────

  private _toggleItem(side: 'source' | 'target', value: string, checked: boolean) {
    if (side === 'source') {
      const next = new Set(this._sourceChecked);
      if (checked) next.add(value);
      else next.delete(value);
      this._sourceChecked = next;
    } else {
      const next = new Set(this._targetChecked);
      if (checked) next.add(value);
      else next.delete(value);
      this._targetChecked = next;
    }
  }

  private _toggleAll(side: 'source' | 'target', selectAll: boolean) {
    if (side === 'source') {
      this._sourceChecked = selectAll
        ? new Set(this._sourceItems.filter((i) => !i.disabled).map((i) => i.value))
        : new Set();
    } else {
      this._targetChecked = selectAll
        ? new Set(this._targetItems.filter((i) => !i.disabled).map((i) => i.value))
        : new Set();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private _getHeaderState(items: TransferItemData[], checked: Set<string>) {
    const selectableCount = items.filter((i) => !i.disabled).length;
    const checkedCount = items.filter((i) => checked.has(i.value)).length;
    return {
      allChecked: selectableCount > 0 && checkedCount === selectableCount,
      indeterminate: checkedCount > 0 && checkedCount < selectableCount,
      anyChecked: checkedCount > 0,
    };
  }

  // ── Render helpers ────────────────────────────────────────────────────────

  private _renderList(side: 'source' | 'target', items: TransferItemData[], checked: Set<string>, listId: string) {
    const headerState = this._getHeaderState(items, checked);
    const allDisabled = this.disabled || items.length === 0;
    const label =
      side === 'source'
        ? (this.sourceLabel ?? this.$t('transferSourceLabel'))
        : (this.targetLabel ?? this.$t('transferTargetLabel'));
    const count = this.$t('transferItemsCount').replace('{count}', items.length.toString());
    const headerId = `${this._id}-${side}-header`;

    return html`
      <div class="it-transfer-wrapper ${side}" part="${side}-wrapper" role="group" aria-labelledby="${headerId}">
        <div class="transfer-header" part="header">
          <div class="form-check">
            <input
              type="checkbox"
              id="${headerId}"
              class="it-form__control${headerState.indeterminate ? ' semi-checked' : ''}"
              .checked=${live(headerState.allChecked)}
              .indeterminate=${live(headerState.indeterminate)}
              .disabled=${allDisabled}
              aria-label="${this.$t('transferSelectAll')}"
              @change=${(e: Event) => this._toggleAll(side, (e.target as HTMLInputElement).checked)}
            />
            <label for="${headerId}">
              <span class="num">${count}</span>
              <span class="descr">${label}</span>
            </label>
          </div>
        </div>
        <div class="transfer-scroll" part="scroll">
          <div class="transfer-group" id="${listId}" part="group">
            ${repeat(
              items,
              (item) => item.value,
              (item) => {
                const itemId = `${this._id}-${side}-${item.value}`;
                return html`
                  <div class="form-check">
                    <input
                      type="checkbox"
                      id="${itemId}"
                      class="it-form__control"
                      .checked=${checked.has(item.value)}
                      .disabled=${this.disabled || item.disabled || false}
                      @change=${(e: Event) =>
                        this._toggleItem(side, item.value, (e.target as HTMLInputElement).checked)}
                    />
                    <label for="${itemId}">${item.label}</label>
                  </div>
                `;
              },
            )}
          </div>
        </div>
      </div>
    `;
  }

  private _renderButtons() {
    const hasSourceChecked = this._sourceChecked.size > 0;
    const hasTargetChecked = this._targetChecked.size > 0;
    const hasBeenModified =
      JSON.stringify(this._sourceItems.map((i) => i.value)) !== JSON.stringify(this._initialSource.map((i) => i.value));

    const btnTransferLabel = this.transferLabel ?? this.$t('transferLabel');
    const btnBackLabel = this.backtransferLabel ?? this.$t('transferBackLabel');
    const btnResetLabel = this.resetLabel ?? this.$t('transferResetLabel');

    return html`
      <div class="it-transfer-buttons" part="buttons">
        <a
          part="forward-button"
          role="button"
          tabindex="${hasSourceChecked && !this.disabled ? '0' : '-1'}"
          class="transfer ${hasSourceChecked && !this.disabled ? 'active' : ''}"
          aria-label="${btnTransferLabel}"
          ?disabled=${!hasSourceChecked || this.disabled}
          aria-disabled="${!hasSourceChecked || this.disabled ? 'true' : 'false'}"
          @click=${(e: Event) => {
            e.preventDefault();
            this.transfer();
          }}
          @keydown=${(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.transfer();
            }
          }}
        >
          <it-icon name="it-arrow-right" size="sm"></it-icon>
        </a>
        <a
          part="back-button"
          role="button"
          tabindex="${hasTargetChecked && !this.disabled ? '0' : '-1'}"
          class="backtransfer ${hasTargetChecked && !this.disabled ? 'active' : ''}"
          aria-label="${btnBackLabel}"
          ?disabled=${!hasTargetChecked || this.disabled}
          aria-disabled="${!hasTargetChecked || this.disabled ? 'true' : 'false'}"
          @click=${(e: Event) => {
            e.preventDefault();
            this.backtransfer();
          }}
          @keydown=${(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.backtransfer();
            }
          }}
        >
          <it-icon name="it-arrow-left" size="sm"></it-icon>
        </a>
        <a
          part="reset-button"
          role="button"
          tabindex="${hasBeenModified && !this.disabled ? '0' : '-1'}"
          class="reset ${hasBeenModified && !this.disabled ? 'active' : ''}"
          aria-label="${btnResetLabel}"
          ?disabled=${!hasBeenModified || this.disabled}
          aria-disabled="${!hasBeenModified || this.disabled ? 'true' : 'false'}"
          @click=${(e: Event) => {
            e.preventDefault();
            this.reset();
          }}
          @keydown=${(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.reset();
            }
          }}
        >
          <it-icon name="it-restore" size="sm"></it-icon>
        </a>
      </div>
    `;
  }

  override render() {
    const showValidation = this.formControlController.submittedOnce || this.customValidation;
    const validityMessage = (showValidation ? this.validationMessage : '') ?? '';
    const invalid = validityMessage.length > 0;

    const sourceListId = `${this._id}-source-list`;
    const targetListId = `${this._id}-target-list`;

    return html`
      <div class="it-transfer" part="base">
        <div class="row" part="row">
          <div class="col-12 col-md-5" part="source-col">
            ${this._renderList('source', this._sourceItems, this._sourceChecked, sourceListId)}
          </div>
          <div class="col-12 col-md-2 d-flex align-items-center justify-content-center" part="buttons-col">
            ${this._renderButtons()}
          </div>
          <div class="col-12 col-md-5" part="target-col">
            ${this._renderList('target', this._targetItems, this._targetChecked, targetListId)}
          </div>
        </div>

        ${invalid
          ? html`
              <div
                role="alert"
                id="invalid-feedback-${this._id}"
                class="invalid-feedback form-feedback form-text just-validate-error-label"
              >
                ${validityMessage}
              </div>
            `
          : ''}
      </div>

      <!-- Hidden slot to read it-transfer-item children -->
      <slot class="visually-hidden" aria-hidden="true" @slotchange=${this._handleSlotChange}></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-transfer': ItTransfer;
  }
}
