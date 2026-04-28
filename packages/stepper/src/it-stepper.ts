import { html } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
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

  @state()
  private _totalSteps = 0;

  @queryAssignedElements({ selector: 'it-stepper-step' })
  private _steps!: ItStepperStep[];

  override firstUpdated() {
    this._syncSteps();
  }

  override updated(changed: Map<string | number | symbol, unknown>) {
    super.updated?.(changed);
    if (changed.has('current')) {
      this._syncSteps();
    }
  }

  private _syncSteps() {
    const steps = this._steps;
    this._totalSteps = steps.length;
    steps.forEach((step, index) => {
      step.active = index === this.current;
      step.confirmed = index < this.current;
    });
  }

  /** Avanza al prossimo step, se disponibile. */
  public next() {
    if (this.current < this._totalSteps - 1) {
      const prevStep = this.current;
      this.current += 1;
      this.dispatchEvent(
        new CustomEvent('it-stepper-change', {
          detail: { step: this.current, prevStep },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  /** Torna al passo precedente, se disponibile. */
  public prev() {
    if (this.current > 0) {
      const prevStep = this.current;
      this.current -= 1;
      this.dispatchEvent(
        new CustomEvent('it-stepper-change', {
          detail: { step: this.current, prevStep },
          bubbles: true,
          composed: true,
        }),
      );
    }
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
    this._syncSteps();
  }

  private _renderHeaderItem(step: ItStepperStep, index: number) {
    const isActive = index === this.current;
    const isConfirmed = index < this.current;

    const liClasses = [isActive ? 'active' : '', isConfirmed ? 'confirmed' : ''].filter(Boolean).join(' ');

    const confirmedIcon = html`
      <it-icon class="steppers-success" name="it-check" aria-hidden="true"></it-icon>
      <span class="visually-hidden">Confermato</span>
    `;

    const activeHint = isActive ? html`<span class="visually-hidden">Attivo</span>` : '';

    if (this.headerVariant === 'icons') {
      return html`
        <li class=${liClasses || undefined}>
          ${step.icon ? html`<it-icon name=${step.icon} aria-hidden="true"></it-icon>` : ''}
          ${step.label}
          ${isActive ? activeHint : ''}
          ${isConfirmed ? confirmedIcon : ''}
        </li>
      `;
    }

    if (this.headerVariant === 'numbers') {
      const numberContent = isConfirmed
        ? html`
            <it-icon class="steppers-success" name="it-check" aria-hidden="true"></it-icon>
            <span class="visually-hidden">Confermato</span>
          `
        : html`<span class="visually-hidden">Step </span>${index + 1}`;

      return html`
        <li class=${liClasses || undefined}>
          <span class="steppers-number">${numberContent}</span>
          ${step.label}
          ${isActive ? activeHint : ''}
        </li>
      `;
    }

    // Default: text only
    return html`
      <li class=${liClasses || undefined}>
        ${step.label}
        ${isActive ? activeHint : ''}
        ${isConfirmed ? confirmedIcon : ''}
      </li>
    `;
  }

  private _renderMobileIndex() {
    if (this.headerVariant === 'numbers') {
      return html`
        <span class="steppers-index" aria-hidden="true">
          ${this._steps.map(
            (_, i) => html`<span class=${i === this.current ? 'active' : undefined}>${i + 1}</span>`,
          )}
        </span>
      `;
    }
    return html`<span class="steppers-index" aria-hidden="true">${this.current + 1}/${this._totalSteps}</span>`;
  }

  private _renderProgressBar() {
    const percent = this._totalSteps > 1 ? Math.round((this.current / (this._totalSteps - 1)) * 100) : 100;
    return html`
      <div class="steppers-progress">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: ${percent}%"
            aria-valuenow=${percent}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    `;
  }

  private _renderDots() {
    return html`
      <ul class="steppers-dots">
        ${this._steps.map(
          (_, i) => html`
            <li class=${i < this.current ? 'done' : undefined}>
              <span class="visually-hidden">
                Step ${i + 1} di ${this._totalSteps}${i < this.current ? ' - Confermato' : ''}
              </span>
            </li>
          `,
        )}
      </ul>
    `;
  }

  private _renderSaveArea() {
    if (!this.saveLabel) return '';
    return html`
      <div class="steppers-save d-flex border-top border-subtle pt-3 mt-2">
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

  render() {
    const stepperClasses = this.composeClass('steppers', { 'bg-dark': this.dark });
    const isPrevDisabled = this.current <= 0;
    const isNextDisabled = this.current >= this._totalSteps - 1;

    return html`
      <div class=${stepperClasses}>
        <div class="steppers-header mb-3">
          <ul>
            ${this._steps.map((step, i) => this._renderHeaderItem(step, i))}
          </ul>
          ${this._renderMobileIndex()}
        </div>

        <div class="steppers-content mb-3" aria-live="polite">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>

        <nav class="steppers-nav mb-3">
          <button
            type="button"
            class="btn btn-icon btn-outline-primary btn-sm steppers-btn-prev"
            ?disabled=${isPrevDisabled}
            @click=${this._handlePrev}
          >
            <it-icon name="it-chevron-left" color=${this.dark ? 'inverse' : 'primary'}></it-icon>
            ${this.prevLabel}
          </button>

          ${this.mobileProgress === 'bar'
            ? this._renderProgressBar()
            : this.mobileProgress === 'dots'
              ? this._renderDots()
              : ''}

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
                  <it-icon name="it-chevron-right" color="inverse"></it-icon>
                </button>
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
