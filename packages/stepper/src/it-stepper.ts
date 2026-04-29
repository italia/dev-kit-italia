import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';
import type { ItStepperStep } from './it-stepper-step.js';
import type { StepperHeaderVariant, StepperMobileProgress } from './types.js';
import styles from './stepper.scss';

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
 *   <it-stepper-step label="Primo contenuto">
 *     <p>Contenuto del primo step</p>
 *   </it-stepper-step>
 *   <it-stepper-step label="Secondo contenuto">
 *     <p>Contenuto del secondo step</p>
 *   </it-stepper-step>
 *   <it-stepper-step label="Terzo contenuto">
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
export class ItStepper extends BaseComponent {
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
  @property({ type: String, reflect: true, attribute: 'header-variant' })
  headerVariant: StepperHeaderVariant = 'text';

  /**
   * Indicatore di progresso mobile mostrato tra i pulsanti di navigazione.
   * - `bar`: barra di avanzamento
   * - `dots`: pallini
   * - `''` (vuoto): nessun indicatore (default)
   *
   * Su desktop l'indicatore è sempre nascosto (comportamento BSI nativo).
   */
  @property({ type: String, reflect: true, attribute: 'mobile-progress' })
  mobileProgress: StepperMobileProgress = '';

  /**
   * Numero totale di passi mostrati dagli indicatori mobile (indice, barra e pallini).
   * Se non impostato, viene usato il numero di `it-stepper-step` nello slot.
   */
  @property({ type: Number, reflect: true, attribute: 'total-steps' })
  totalSteps = 0;

  /** Nasconde l'intestazione, mantenendo attiva la sincronizzazione degli step nello slot. */
  @property({ type: Boolean, reflect: true, attribute: 'hide-header' })
  hideHeader = false;

  /** Nasconde l'area contenuto, utile per esempi di sola intestazione. */
  @property({ type: Boolean, reflect: true, attribute: 'hide-content' })
  hideContent = false;

  /** Nasconde la barra di navigazione. */
  @property({ type: Boolean, reflect: true, attribute: 'hide-nav' })
  hideNav = false;

  /** Mostra progress bar o pallini anche a desktop, comportamento utile per anteprime e documentazione. */
  @property({ type: Boolean, reflect: true, attribute: 'mobile-progress-on-desktop' })
  mobileProgressOnDesktop = false;

  /** Etichetta del pulsante "Indietro". */
  @property({ type: String, reflect: true, attribute: 'prev-label' })
  prevLabel = 'Indietro';

  /** Etichetta del pulsante "Avanti". */
  @property({ type: String, reflect: true, attribute: 'next-label' })
  nextLabel = 'Avanti';

  /** Etichetta del pulsante "Conferma". */
  @property({ type: String, reflect: true, attribute: 'confirm-label' })
  confirmLabel = 'Conferma';

  /**
   * Mostra il pulsante "Conferma" al posto del pulsante "Avanti".
   * Utile per l'ultimo step o per step che richiedono conferma esplicita su mobile.
   */
  @property({ type: Boolean, reflect: true, attribute: 'show-confirm' })
  showConfirm = false;

  /**
   * Etichetta del pulsante "Salva".
   * Se vuoto (default), l'area di salvataggio non viene mostrata.
   */
  @property({ type: String, reflect: true, attribute: 'save-label' })
  saveLabel = '';

  /** Titolo del testo descrittivo nell'area di salvataggio. */
  @property({ type: String, reflect: true, attribute: 'save-title' })
  saveTitle = 'Vuoi salvare il progresso?';

  /** Testo descrittivo nell'area di salvataggio. */
  @property({ type: String, reflect: true, attribute: 'save-description' })
  saveDescription = 'Potrai riprendere il flusso da questo punto in poi.';

  private _stepCount = 0;

  private get _steps() {
    return Array.from(this.querySelectorAll<ItStepperStep>('it-stepper-step'));
  }

  override connectedCallback() {
    super.connectedCallback?.();
    this._syncSteps(true);
  }

  override willUpdate(changed: Map<string | number | symbol, unknown>) {
    super.willUpdate?.(changed);
    if ((changed.has('current') || changed.has('totalSteps')) && this._stepCount > 0) {
      const currentIndex = this._currentIndex;
      if (this.current !== currentIndex) this.current = currentIndex;
    }
  }

  override updated(changed: Map<string | number | symbol, unknown>) {
    super.updated?.(changed);
    if (changed.has('current') || changed.has('totalSteps')) {
      this._syncSteps();
    }
  }

  private get _effectiveTotalSteps() {
    return Math.max(this._normalizedTotalSteps, this._stepCount, 1);
  }

  private get _normalizedTotalSteps() {
    return Number.isFinite(this.totalSteps) && this.totalSteps > 0 ? Math.trunc(this.totalSteps) : 0;
  }

  private get _maxNavigableIndex() {
    const navigableTotal = this._stepCount > 0 ? this._stepCount : this._effectiveTotalSteps;
    return Math.max(navigableTotal - 1, 0);
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

  private _handlePrev() {
    this.prev();
  }

  private _handleNext() {
    this.next();
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

  private _renderHeaderItem(step: ItStepperStep, index: number) {
    const isActive = index === this._currentIndex;
    const isConfirmed = index < this._currentIndex;

    const liClasses = [
      isActive ? 'active' : '',
      isConfirmed ? 'confirmed' : '',
      this.headerVariant === 'numbers' && isActive ? 'no-line' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const confirmedIcon = html`
      <it-icon class="icon steppers-success" name="it-check" aria-hidden="true"></it-icon>
      <span class="visually-hidden">Confermato</span>
    `;

    const activeHint = isActive ? html`<span class="visually-hidden">Attivo</span>` : '';

    if (this.headerVariant === 'icons') {
      return html`
        <li class=${liClasses} aria-current=${isActive ? 'step' : nothing}>
          ${step.icon ? html`<it-icon class="icon" name=${step.icon} aria-hidden="true"></it-icon>` : nothing}
          ${step.label} ${isActive ? activeHint : ''} ${isConfirmed ? confirmedIcon : ''}
        </li>
      `;
    }

    if (this.headerVariant === 'numbers') {
      const numberContent = isConfirmed
        ? html`
            <it-icon class="icon steppers-success" name="it-check" aria-hidden="true"></it-icon>
            <span class="visually-hidden">Confermato Step ${index + 1}</span>
          `
        : html`<span class="visually-hidden">${isActive ? 'Attivo ' : ''}Step </span>${index + 1}`;

      return html`
        <li class=${liClasses} aria-current=${isActive ? 'step' : nothing}>
          <span class="steppers-number">${numberContent}</span>
          ${step.label}
        </li>
      `;
    }

    // Default: text only
    return html`
      <li class=${liClasses} aria-current=${isActive ? 'step' : nothing}>
        ${step.label} ${isActive ? activeHint : ''} ${isConfirmed ? confirmedIcon : ''}
      </li>
    `;
  }

  private _renderMobileIndex() {
    const currentIndex = this._currentIndex;
    const total = this._effectiveTotalSteps;

    if (this.headerVariant === 'numbers') {
      return html`
        <span class="steppers-index" aria-hidden="true">
          ${Array.from({ length: total }, (_, i) => i).map(
            (i) => html`<span class=${i === currentIndex ? 'active' : undefined}>${i + 1}</span>`,
          )}
        </span>
      `;
    }
    return html`<span class="steppers-index" aria-hidden="true">${currentIndex + 1}/${total}</span>`;
  }

  private _renderProgressBar() {
    const total = this._effectiveTotalSteps;
    const percent = total > 1 ? Math.round((this._currentIndex / (total - 1)) * 100) : 100;
    return html`
      <div class="steppers-progress" part="progress">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: ${percent}%"
            aria-label="Avanzamento dello stepper"
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
    const total = this._effectiveTotalSteps;

    return html`
      <ul class="steppers-dots" part="dots">
        ${Array.from({ length: total }, (_, i) => i).map(
          (i) => html`
            <li class=${this._getDotClass(i)} aria-current=${i === currentIndex ? 'step' : nothing}>
              <span class="visually-hidden">Step ${i + 1} di ${total}${this._getDotStateText(i)}</span>
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
    if (index < this._currentIndex) return ' - Confermato';
    if (index === this._currentIndex) return ' - Attivo';
    return '';
  }

  private _renderSaveArea() {
    if (!this.saveLabel) return '';
    return html`
      <div class="steppers-save d-flex border-top border-subtle pt-3 mt-2" part="save">
        <div class="text-lg-end mb-2 mb-lg-0 me-lg-3">
          <p class="text-muted mb-0 small"><strong>${this.saveTitle}</strong></p>
          <p class="text-muted mb-0 small">${this.saveDescription}</p>
        </div>
        <button type="button" class="btn btn-outline-secondary btn-sm" @click=${this._handleSave}>
          ${this.saveLabel}
        </button>
      </div>
    `;
  }

  private _renderContent() {
    if (this.hideContent) {
      return html`<div hidden><slot @slotchange=${this._handleSlotChange}></slot></div>`;
    }

    return html`
      <div class="steppers-content mb-3" aria-live="polite" part="content">
        <slot @slotchange=${this._handleSlotChange}></slot>
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
        ${this.hideHeader
          ? nothing
          : html`
              <div class="steppers-header mb-3" part="header">
                <ul part="header-list">
                  ${this._steps.map((step, i) => this._renderHeaderItem(step, i))}
                </ul>
                ${this._renderMobileIndex()}
              </div>
            `}
        ${this._renderContent()}
        ${this.hideNav
          ? nothing
          : html`
              <nav class="steppers-nav mb-3" aria-label="Navigazione stepper" part="nav">
                <button
                  type="button"
                  class="btn btn-icon btn-outline-primary btn-sm steppers-btn-prev"
                  ?disabled=${isPrevDisabled}
                  @click=${this._handlePrev}
                >
                  <it-icon class="icon" name="it-chevron-left" color=${this.dark ? 'inverse' : 'primary'}></it-icon>
                  ${this.prevLabel}
                </button>

                ${this._renderProgressIndicator()}
                ${this.showConfirm
                  ? html`
                      <button
                        type="button"
                        class="btn btn-icon btn-primary btn-sm steppers-btn-confirm"
                        @click=${this._handleConfirm}
                      >
                        ${this.confirmLabel}
                      </button>
                    `
                  : html`
                      <button
                        type="button"
                        class="btn btn-icon btn-primary btn-sm steppers-btn-next"
                        ?disabled=${isNextDisabled}
                        @click=${this._handleNext}
                      >
                        ${this.nextLabel}
                        <it-icon class="icon" name="it-chevron-right" color="inverse"></it-icon>
                      </button>
                    `}
              </nav>
            `}
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
