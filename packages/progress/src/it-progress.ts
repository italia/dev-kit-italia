import { BaseComponent } from '@italia/globals';
import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import type { ProgressBarColor, ProgressSpinnerSize, ProgressType } from './types.js';
import { ProgressDonut } from './utils/progress-donut.js';
import styles from './it-progress.scss';

@customElement('it-progress')
export class ItProgress extends BaseComponent {
  static styles = styles;

  @property({ type: String, reflect: true })
  type: ProgressType = 'bar';

  @property({ type: Number, reflect: true })
  value = 0;

  @property({ type: String, reflect: true })
  label = 'Caricamento';

  @property({ type: Boolean, reflect: true, attribute: 'show-label' })
  showLabel = false;

  @property({ type: String, reflect: true, attribute: 'label-text' })
  labelText = '';

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: String, reflect: true })
  color: ProgressBarColor | string = 'default';

  @property({ type: String, reflect: true, attribute: 'trail-color' })
  trailColor = '#D4E9FF';

  @property({ type: Number, reflect: true, attribute: 'stroke-width' })
  strokeWidth = 24;

  @property({ type: Number, reflect: true, attribute: 'trail-width' })
  trailWidth = 12;

  @property({ type: String, reflect: true })
  easing = 'easeInOut';

  @property({ type: Number, reflect: true })
  duration = 1400;

  @property({ type: Boolean, reflect: true, attribute: 'animate' })
  animated = true;

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  double = false;

  @property({ type: String, reflect: true })
  size: ProgressSpinnerSize = 'md';

  @state()
  private _hasSlotContent = false;

  private _bar: ProgressDonut | null = null;

  private _donutContainer: HTMLElement | null = null;

  override firstUpdated() {
    if (this.type === 'donut') {
      this._initDonutBar();
    }
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    if (changedProperties.has('type')) {
      if (this.type !== 'donut' && this._bar) {
        this._bar.destroy();
        this._bar = null;
      }

      if (this.type === 'donut') {
        this.updateComplete.then(() => this._initDonutBar());
      }
    }

    if (this.type === 'donut') {
      const configChanged =
        changedProperties.has('color') ||
        changedProperties.has('trailColor') ||
        changedProperties.has('strokeWidth') ||
        changedProperties.has('trailWidth') ||
        changedProperties.has('easing') ||
        changedProperties.has('duration');

      if (configChanged && this._bar) {
        this._bar.destroy();
        this._bar = null;
        this.updateComplete.then(() => this._initDonutBar());
      } else if (changedProperties.has('value') && this._bar) {
        this._setDonutProgress(this.value);
      }
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback?.();
    if (this._bar) {
      this._bar.destroy();
      this._bar = null;
    }
  }

  public set(progress: number) {
    this.value = progress;
  }

  private _onSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    this._hasSlotContent = slot.assignedNodes({ flatten: true }).length > 0;
  }

  private static _isBarColorVariant(color: string): color is ProgressBarColor {
    return ['default', 'success', 'info', 'warning', 'danger'].includes(color);
  }

  private get _barColorClass() {
    if (!ItProgress._isBarColorVariant(this.color)) return '';
    return this.color === 'default' ? '' : `bg-${this.color}`;
  }

  private get _displayLabelText() {
    return this.labelText || `${this.value}%`;
  }

  private _setDonutProgress(progress: number) {
    if (!this._bar) return;
    this._bar.setValue(progress, this.animated);
  }

  private async _initDonutBar() {
    if (!this.shadowRoot || this.type !== 'donut') return;

    this._donutContainer = this.shadowRoot.querySelector('.progress-donut');
    if (!this._donutContainer) return;

    this._donutContainer.setAttribute('aria-valuenow', String(Math.round(this.value * 100)));
    this._donutContainer.setAttribute('aria-valuemin', '0');
    this._donutContainer.setAttribute('aria-valuemax', '100');
    this._donutContainer.setAttribute('role', 'progressbar');

    this._bar = await ProgressDonut.create(this._donutContainer, {
      color: ItProgress._isBarColorVariant(this.color) ? '#0073E6' : this.color,
      trailColor: this.trailColor,
      strokeWidth: this.strokeWidth,
      trailWidth: this.trailWidth,
      easing: this.easing,
      duration: this.duration,
      animate: this.animated,
      value: this.value,
      onStep: (value) => {
        this._donutContainer?.setAttribute('aria-valuenow', String(value));
      },
    });
  }

  private _renderBar() {
    const progressClasses = this.composeClass('progress', this.indeterminate && 'progress-indeterminate');
    const barClasses = this.composeClass('progress-bar', this._barColorClass);
    const barStyle = this.indeterminate ? {} : { width: `${this.value}%` };

    const bar = html`
      <div class="${progressClasses}" part="progress">
        <div
          class="${barClasses}"
          role="progressbar"
          style="${styleMap(barStyle)}"
          aria-valuenow="${ifDefined(this.indeterminate ? undefined : this.value)}"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="${ifDefined(this.label || undefined)}"
          part="progress-bar"
        ></div>
      </div>
    `;

    return when(
      this.showLabel,
      () => html`
        <div class="progress-bar-wrapper">
          <div class="progress-bar-label">
            <slot name="label"><span class="visually-hidden">Progresso </span>${this._displayLabelText}</slot>
          </div>
          ${bar}
        </div>
      `,
      () => bar,
    );
  }

  private _renderDonut() {
    return html`
      <div class="progress-donut-wrapper" part="donut-wrapper">
        <div
          class="progress-donut"
          aria-label="${this.label || nothing}"
          aria-valuenow="${Math.round(this.value * 100)}"
          aria-valuemin="0"
          aria-valuemax="100"
          role="progressbar"
          part="donut"
        ></div>
      </div>
    `;
  }

  private _renderSpinner() {
    const classes = this.composeClass(
      'progress-spinner',
      this.active && 'progress-spinner-active',
      this.double && 'progress-spinner-double',
      this.size === 'sm' && 'size-sm',
      this.size === 'lg' && 'size-lg',
      this.size === 'xl' && 'size-xl',
    );

    return html`
      <div class="${classes}" part="spinner">
        ${this.double
          ? html`
              <div class="progress-spinner-inner"></div>
              <div class="progress-spinner-inner"></div>
            `
          : ''}
        <slot @slotchange="${this._onSlotChange}">
          ${!this._hasSlotContent ? html`<span class="visually-hidden">Caricamento...</span>` : ''}
        </slot>
      </div>
    `;
  }

  override render() {
    if (this.type === 'donut') {
      return this._renderDonut();
    }

    if (this.type === 'spinner') {
      return this._renderSpinner();
    }

    return this._renderBar();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-progress': ItProgress;
  }
}
