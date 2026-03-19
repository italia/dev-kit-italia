/* eslint-disable lit-a11y/accessible-name */
import { BaseComponent, setAttributes } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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

  @property({ type: String, reflect: true, attribute: 'it-aria-label' })
  itAriaLabel = 'Caricamento';

  @property({ type: Boolean, reflect: true, attribute: 'show-value' })
  showValue = false;

  @property({ type: String, reflect: true, attribute: 'label' })
  label = '';

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: String, reflect: true })
  color: ProgressBarColor | string = 'default';

  private trailColor = '#D4E9FF';

  private strokeWidth = 24;

  private trailWidth = 12;

  private easing = 'easeInOut';

  private duration = 1400;

  private animated = true;

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  double = false;

  @property({ type: String, reflect: true })
  size: ProgressSpinnerSize = 'md';

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
    }

    if (this.type === 'donut') {
      const configChanged =
        changedProperties.has('color') ||
        changedProperties.has('trailColor') ||
        changedProperties.has('strokeWidth') ||
        changedProperties.has('trailWidth') ||
        changedProperties.has('easing') ||
        changedProperties.has('duration') ||
        changedProperties.has('type');

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

  private static _isBarColorVariant(color: string): color is ProgressBarColor {
    return ['default', 'success', 'info', 'warning', 'danger'].includes(color);
  }

  private get _barColorClass() {
    if (!ItProgress._isBarColorVariant(this.color)) return '';
    return this.color === 'default' ? '' : `bg-${this.color}`;
  }

  private get _displayLabel() {
    return this.label || `${this.value}%`;
  }

  private _setDonutProgress(progress: number) {
    if (!this._bar) return;
    this._bar.setValue(progress / 100, this.animated);
  }

  private async _initDonutBar() {
    if (!this.shadowRoot || this.type !== 'donut') return;

    this._donutContainer = this.shadowRoot.querySelector('.progress-donut');
    if (!this._donutContainer) return;

    this._donutContainer.setAttribute('aria-label', this.itAriaLabel);
    this._donutContainer.setAttribute('aria-valuenow', this.value.toString());
    this._donutContainer.setAttribute('aria-valuemin', '0');
    this._donutContainer.setAttribute('aria-valuemax', '100');
    this._donutContainer.setAttribute('role', 'progressbar');

    this._bar = await ProgressDonut.create(this._donutContainer, {
      color: ItProgress._isBarColorVariant(this.color) ? 'var(--bsi-secondary)' : this.color,
      trailColor: this.trailColor,
      strokeWidth: this.strokeWidth,
      trailWidth: this.trailWidth,
      easing: this.easing,
      duration: this.duration,
      animate: this.animated,
      value: this.value / 100,
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
          ${setAttributes(this._ariaAttributes)}
          aria-label="${ifDefined(this.itAriaLabel || undefined)}"
          aria-valuenow="${ifDefined(this.indeterminate ? undefined : this.value)}"
          aria-valuemin="0"
          aria-valuemax="100"
          part="progress-bar"
        ></div>
      </div>
    `;

    return when(
      this.showValue || this.label,
      () => html`
        <div class="progress-bar-wrapper">
          <div class="progress-bar-label">
            <span class="visually-hidden">${this.itAriaLabel} </span>
            ${this._displayLabel}
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
          ${setAttributes(this._ariaAttributes)}
          aria-label="${ifDefined(this.itAriaLabel || undefined)}"
          aria-valuenow="${this.value}"
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
        <span class="visually-hidden">${this.itAriaLabel}</span>
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
