import { html, nothing, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseLocalizedComponent } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import type { ItStepperStep } from './it-stepper-step.js';
import type { StepperHeaderVariant, StepperMobileProgress } from './types.js';
import styles from './stepper.scss';

import it from './locales/it.js';
import en from './locales/en.js';

registerTranslation(it);
registerTranslation(en);

/**
 * `it-stepper` è il componente contenitore per una procedura a più passi.
 *
 * Gestisce la navigazione tra gli step, il rendering dell'intestazione,
 * dell'area contenuto e dei controlli di navigazione.
 *
 * ## Struttura attesa
 *
 * ```html
 * <it-stepper header-variant="numbers">
 *   <it-stepper-step>
 *     <span slot="label">Primo contenuto</span>
 *     <p>Contenuto del primo step</p>
 *   </it-stepper-step>
 *   <it-stepper-step>
 *     <span slot="label">Secondo contenuto</span>
 *     <p>Contenuto del secondo step</p>
 *   </it-stepper-step>
 *   <it-stepper-step>
 *     <span slot="label">Terzo contenuto</span>
 *     <p>Contenuto del terzo step</p>
 *   </it-stepper-step>
 * </it-stepper>
 * ```
 *
 * @slot - Slot di default per gli elementi `it-stepper-step`.
 *
 * @fires it-stepper-change - Emesso quando lo step attivo cambia.
 *   `detail.step` contiene il nuovo indice (0-based), `detail.prevStep` quello precedente.
 * @fires it-stepper-save - Emesso quando l'utente clicca il pulsante "Salva".
 * @fires it-stepper-confirm - Emesso quando l'utente clicca il pulsante "Conferma".
 */
@customElement('it-stepper')
export class ItStepper extends BaseLocalizedComponent {
  static styles = styles;

  /**
   * Indice (0-based) dello step attivo.
   * Modificando questo attributo si naviga direttamente a un determinato step.
   */
  @property({ type: Number, reflect: true })
  current = 0;

  /** Variante con sfondo scuro. Aggiunge la classe `.bg-dark` al contenitore. */
  @property({ type: Boolean, reflect: true })
  dark = false;

  /**
   * Variante dell'intestazione degli step.
   * - `text`: solo testo
   * - `icons`: icona + testo (richiede l'attributo `icon` su ogni `it-stepper-step`)
   * - `numbers`: numero ordinale + testo
   */
  @property({ type: String, attribute: 'header-variant' })
  headerVariant: StepperHeaderVariant = 'text';

  /**
   * Indicatore di progresso mobile mostrato tra i pulsanti di navigazione.
   * - `bar`: barra di avanzamento
   * - `dots`: pallini
   * - `''` (vuoto): nessun indicatore (default)
   *
   * Su desktop l'indicatore è sempre nascosto (comportamento BSI nativo).
   */
  @property({ type: String, attribute: 'mobile-progress' })
  mobileProgress: StepperMobileProgress = '';

  /** Mostra progress bar o pallini anche a desktop, comportamento utile per anteprime e documentazione. */
  @property({ type: Boolean, reflect: true, attribute: 'mobile-progress-on-desktop' })
  mobileProgressOnDesktop = false;

  /** Etichetta del pulsante "Indietro". */
  @property({ type: String, attribute: 'prev-label' })
  prevLabel?: string;

  /** Etichetta del pulsante "Avanti". */
  @property({ type: String, attribute: 'next-label' })
  nextLabel?: string;

  /** Etichetta del pulsante "Conferma". */
  @property({ type: String, attribute: 'confirm-label' })
  confirmLabel?: string;

  /**
   * Mostra il pulsante "Conferma" al posto del pulsante "Avanti".
   * Utile per l'ultimo step o per step che richiedono conferma esplicita su mobile.
   */
  @property({ type: Boolean, attribute: 'show-confirm' })
  showConfirm = false;

  /**
   * Etichetta del pulsante "Salva".
   * Se vuoto (default), l'area di salvataggio non viene mostrata.
   */
  @property({ type: String, attribute: 'save-label' })
  saveLabel?: string;

  /** Titolo del testo descrittivo nell'area di salvataggio. */
  @property({ type: String, attribute: 'save-title' })
  saveTitle?: string;

  /** Testo descrittivo nell'area di salvataggio. */
  @property({ type: String, attribute: 'save-description' })
  saveDescription?: string;

  private _stepCount = 0;

  private get _steps() {
    return Array.from(this.querySelectorAll<ItStepperStep>('it-stepper-step'));
  }

  override connectedCallback() {
    super.connectedCallback?.();
    this._syncSteps(true);
  }

  override willUpdate(changed: PropertyValues) {
    super.willUpdate?.(changed);
    if (changed.has('current') && this._stepCount > 0) {
      const currentIndex = this._currentIndex;
      if (this.current !== currentIndex) this.current = currentIndex;
    }
  }

  protected override updated(changed: PropertyValues): void {
    super.updated?.(changed);
    if (changed.has('current')) {
      this._syncSteps();
    }
  }

  private get _maxNavigableIndex() {
    return Math.max(this._stepCount - 1, 0);
  }

  private get _currentIndex() {
    return this._clampIndex(this.current);
  }

  private _clampIndex(index: number) {
    const numericIndex = Number.isFinite(index) ? Math.trunc(index) : 0;
    return Math.min(Math.max(numericIndex, 0), this._maxNavigableIndex);
  }

  private _syncSteps(clampCurrent = false) {
    const steps = this._steps;
    const previousStepCount = this._stepCount;
    this._stepCount = steps.length;
    const currentIndex = this._currentIndex;

    if (clampCurrent && this.current !== currentIndex) {
      this.current = currentIndex;
    }

    steps.forEach((_, index) => {
      const stepElement = steps[index];
      stepElement.active = index === currentIndex;
      stepElement.confirmed = index < currentIndex;
    });

    if (previousStepCount !== this._stepCount && this.hasUpdated) {
      this.requestUpdate();
    }
  }

  private _goToStep(nextStep: number) {
    const prevStep = this._currentIndex;
    const step = this._clampIndex(nextStep);
    if (step === prevStep) return;

    this.current = step;
    this.dispatchEvent(
      new CustomEvent('it-stepper-change', {
        detail: { step, prevStep },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /** Avanza al prossimo step, se disponibile. */
  public next() {
    this._goToStep(this._currentIndex + 1);
  }

  /** Torna al passo precedente, se disponibile. */
  public prev() {
    this._goToStep(this._currentIndex - 1);
  }

  private _handleConfirm() {
    this.dispatchEvent(new CustomEvent('it-stepper-confirm', { bubbles: true, composed: true }));
  }

  private _handleSave() {
    this.dispatchEvent(new CustomEvent('it-stepper-save', { bubbles: true, composed: true }));
  }

  private _handleSlotChange() {
    this._syncSteps(true);
  }

  // eslint-disable-next-line class-methods-use-this
  private _getStepLabel(step: ItStepperStep): Node | '' {
    return step.querySelector(':scope > [slot="label"]')?.cloneNode(true) ?? '';
  }

  private _renderHeaderItem(step: ItStepperStep, index: number) {
    const isActive = index === this._currentIndex;
    const isConfirmed = index < this._currentIndex;

    const liClasses = this.composeClass({
      active: isActive,
      confirmed: isConfirmed,
      'no-line': this.headerVariant === 'numbers' && isActive,
    });

    const confirmedIcon = html`
      <it-icon class="icon steppers-success" name="it-check" aria-hidden="true"></it-icon>
      <span class="visually-hidden">${this.$t('confirmed')}</span>
    `;

    const activeHint = isActive ? html`<span class="visually-hidden">${this.$t('active')}</span>` : '';
    const labelContent = this._getStepLabel(step);

    if (this.headerVariant === 'icons') {
      return html`
        <li class=${liClasses} aria-current=${ifDefined(isActive ? 'step' : undefined)}>
          ${step.icon ? html`<it-icon class="icon" name=${step.icon} aria-hidden="true"></it-icon>` : nothing}
          ${labelContent} ${isActive ? activeHint : ''} ${isConfirmed ? confirmedIcon : ''}
        </li>
      `;
    }

    if (this.headerVariant === 'numbers') {
      const numberContent = isConfirmed
        ? html`
            <it-icon class="icon steppers-success" name="it-check" aria-hidden="true"></it-icon>
            <span class="visually-hidden">${this.$t('confirmed')} ${this.$t('step')} ${index + 1}</span>
          `
        : html`<span class="visually-hidden">${isActive ? this.$t('active') : ''} ${this.$t('step')} </span>${index + 1}`;

      return html`
        <li class=${liClasses} aria-current=${ifDefined(isActive ? 'step' : undefined)}>
          <span class="steppers-number">${numberContent}</span>
          ${labelContent}
        </li>
      `;
    }

    // Default: text only
    return html`
      <li class=${liClasses} aria-current=${ifDefined(isActive ? 'step' : undefined)}>
        ${labelContent} ${isActive ? activeHint : ''} ${isConfirmed ? confirmedIcon : ''}
      </li>
    `;
  }

  private _renderMobileIndex() {
    const currentIndex = this._currentIndex;
    const total = this._stepCount;

    if (this.headerVariant === 'numbers') {
      return html`
        <span class="steppers-index" aria-hidden="true">
          ${Array.from({ length: total }, (_, i) => i).map(
            (i) => html`<span class=${ifDefined(i === currentIndex ? 'active' : undefined)}>${i + 1}</span>`,
          )}
        </span>
      `;
    }
    return html`<span class="steppers-index" aria-hidden="true">${currentIndex + 1}/${total}</span>`;
  }

  private _renderProgressBar() {
    const total = this._stepCount;
    const percent = total > 1 ? Math.round((this._currentIndex / (total - 1)) * 100) : 100;
    return html`
      <div class="steppers-progress" part="progress">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: ${percent}%"
            aria-label=${this.$t('progress')}
            aria-valuenow=${percent}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    `;
  }

  private _renderDots() {
    const currentIndex = this._currentIndex;
    const total = this._stepCount;

    return html`
      <ul class="steppers-dots" part="dots">
        ${Array.from({ length: total }, (_, i) => i).map(
          (i) => html`
            <li class=${this._getDotClass(i)} aria-current=${ifDefined(i === currentIndex ? 'step' : undefined)}>
              <span class="visually-hidden"
                >${this.$t('step')} ${i + 1} ${this.$t('outOf')} ${total}${this._getDotStateText(i)}</span
              >
            </li>
          `,
        )}
      </ul>
    `;
  }

  private _getDotClass(index: number) {
    if (index < this._currentIndex) return 'done';
    if (index === this._currentIndex) return 'done active';
    return '';
  }

  private _getDotStateText(index: number) {
    if (index < this._currentIndex) return ` - ${this.$t('confirmed')}`;
    if (index === this._currentIndex) return ` - ${this.$t('active')}`;
    return '';
  }

  private _renderSaveArea() {
    if (!this.saveLabel) return '';
    return html`
      <div class="steppers-save d-flex border-top pt-3 mt-2" part="save">
        <div class="text-lg-end mb-2 mb-lg-0 me-lg-3">
          <p class="text-muted mb-0 small"><strong>${this.saveTitle}</strong></p>
          <p class="text-muted mb-0 small">${this.saveDescription}</p>
        </div>
        <it-button variant="secondary" outline type="button" @click=${this._handleSave} exportparts="focusable">
          ${this.saveLabel}
        </it-button>
      </div>
    `;
  }

  private _renderProgressIndicator() {
    if (this.mobileProgress === 'bar') return this._renderProgressBar();
    if (this.mobileProgress === 'dots') return this._renderDots();
    return nothing;
  }

  render() {
    const stepperClasses = this.composeClass('steppers', {
      'bg-dark': this.dark,
      'mobile-progress-on-desktop': this.mobileProgressOnDesktop,
    });
    const isPrevDisabled = this._currentIndex <= 0;
    const isNextDisabled = this._currentIndex >= this._maxNavigableIndex;

    return html`
      <div class=${stepperClasses} part="stepper">
        <div class="steppers-header mb-3" part="header">
          <ul part="header-list">
            ${this._steps.map((step, i) => this._renderHeaderItem(step, i))}
          </ul>
          ${this._renderMobileIndex()}
        </div>
        <div class="steppers-content mb-3" aria-live="polite" part="content">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
        <nav class="steppers-nav mb-3" aria-label=${this.$t('navigation')} part="nav">
          <it-button
            type="button"
            variant="primary"
            outline
            size="sm"
            class="steppers-btn-prev"
            exportparts="focusable"
            ?disabled=${isPrevDisabled}
            @click=${this.prev}
          >
            <it-icon class="icon" name="it-chevron-left" color=${this.dark ? 'inverse' : 'primary'} size="sm"></it-icon>
            ${this.prevLabel || this.$t('back')}
          </it-button>

          ${this._renderProgressIndicator()}
          ${this.showConfirm
            ? html`
                <it-button
                  type="button"
                  variant="primary"
                  size="sm"
                  class="steppers-btn-confirm"
                  exportparts="focusable"
                  @click=${this._handleConfirm}
                >
                  ${this.confirmLabel || this.$t('confirm')}
                </it-button>
              `
            : html`
                <it-button
                  type="button"
                  variant="primary"
                  size="sm"
                  class="steppers-btn-next"
                  exportparts="focusable"
                  ?disabled=${isNextDisabled}
                  @click=${this.next}
                >
                  ${this.nextLabel || this.$t('next')}
                  <it-icon
                    class="icon"
                    name="it-chevron-right"
                    color=${this.dark ? 'primary' : 'inverse'}
                    size="sm"
                  ></it-icon>
                </it-button>
              `}
        </nav>
        ${this._renderSaveArea()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-stepper': ItStepper;
  }
}
