import { BaseComponent } from '@italia/globals';
import { customElement, property, query } from 'lit/decorators.js';
import { html, PropertyValues } from 'lit';
import { computePosition, offset, flip, shift, autoUpdate, arrow } from '@floating-ui/dom';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './tooltip.scss';
import type { TooltipPlacement } from './types.js';

const BSI_PLACEMENT_CLASSES = {
  top: 'bs-tooltip-top',
  right: 'bs-tooltip-end',
  bottom: 'bs-tooltip-bottom',
  left: 'bs-tooltip-start',
} as const;

@customElement('it-tooltip')
export class ItTooltip extends BaseComponent {
  static styles = styles;

  static OFFSET = 0;

  @property({ type: Boolean, reflect: true }) open = false;

  @property({ type: Boolean }) controlled = false;

  @property({ type: String }) placement: TooltipPlacement = 'top';

  @property({ type: Boolean, attribute: 'no-flip' }) noFlip: boolean = false;

  @query('slot[name="trigger"]') private _triggerSlot!: HTMLSlotElement;

  @query('.tooltip') private _tooltipElement!: HTMLElement;

  @query('.tooltip-arrow') private _arrowElement!: HTMLElement;

  private get _triggerElement(): HTMLElement | null {
    return (this._triggerSlot?.assignedElements({ flatten: true })[0] as HTMLElement) ?? null;
  }

  private _cleanup?: () => void;

  private _onMouseEnter = () => {
    if (!this.controlled) this.showTooltip();
  };

  private _onMouseLeave = () => {
    if (!this.controlled) this.hideTooltip();
  };

  private _onFocusIn = () => {
    if (!this.controlled) this.showTooltip();
  };

  private _onFocusOut = () => {
    if (!this.controlled) this.hideTooltip();
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.open && !this.controlled) this.hideTooltip();
  };

  disconnectedCallback(): void {
    super.disconnectedCallback?.();
    this._removeListeners();
    this._cleanup?.();
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this._setupAria();
    if (!this.controlled) this._setupStandardEvents();
  }

  protected updated(changedProps: Map<string, unknown>): void {
    if (changedProps.has('open')) {
      if (this.open) {
        this._show();
        this.dispatchEvent(new CustomEvent('it-tooltip-open', { bubbles: true, composed: true }));
      } else {
        this._hide();
        this.dispatchEvent(new CustomEvent('it-tooltip-close', { bubbles: true, composed: true }));
      }
    }
  }

  private _setupAria(): void {
    const trigger = this._triggerElement;
    if (!trigger || !this._id) return;
    if (trigger.tagName === 'IT-BUTTON') {
      trigger.setAttribute('it-aria-describedby', this._id);
    } else {
      trigger.setAttribute('aria-describedby', this._id);
    }
  }

  private _setupStandardEvents(): void {
    this._removeListeners();
    const trigger = this._triggerElement;
    if (!trigger) return;
    trigger.addEventListener('mouseenter', this._onMouseEnter);
    trigger.addEventListener('mouseleave', this._onMouseLeave);
    trigger.addEventListener('focusin', this._onFocusIn);
    trigger.addEventListener('focusout', this._onFocusOut);
    trigger.addEventListener('keydown', this._onKeyDown);
  }

  private _removeListeners(): void {
    const trigger = this._triggerElement;
    if (!trigger) return;
    trigger.removeEventListener('mouseenter', this._onMouseEnter);
    trigger.removeEventListener('mouseleave', this._onMouseLeave);
    trigger.removeEventListener('focusin', this._onFocusIn);
    trigger.removeEventListener('focusout', this._onFocusOut);
    trigger.removeEventListener('keydown', this._onKeyDown);
  }

  private _show(): void {
    const trigger = this._triggerElement;
    if (!trigger || !this._tooltipElement) return;

    this._tooltipElement.removeAttribute('aria-hidden');
    this._tooltipElement.classList.add('show');

    this._cleanup = autoUpdate(trigger, this._tooltipElement, () => {
      computePosition(trigger, this._tooltipElement, {
        placement: this.placement,
        middleware: [
          offset(ItTooltip.OFFSET),
          flip({ mainAxis: !this.noFlip, crossAxis: !this.noFlip }),
          shift({ padding: 8 }),
          arrow({ element: this._arrowElement }),
        ],
      }).then(({ x, y, placement: finalPlacement, middlewareData }) => {
        Object.assign(this._tooltipElement.style, {
          visibility: 'visible',
          left: `${x}px`,
          top: `${y}px`,
        });

        const side = finalPlacement.split('-')[0] as keyof typeof BSI_PLACEMENT_CLASSES;
        Object.values(BSI_PLACEMENT_CLASSES).forEach((c) => this._tooltipElement.classList.remove(c));
        this._tooltipElement.classList.add(BSI_PLACEMENT_CLASSES[side]);

        const { x: arrowX, y: arrowY } = middlewareData.arrow ?? {};
        const staticSide = ({ top: 'bottom', right: 'left', bottom: 'top', left: 'right' } as const)[side];
        Object.assign(this._arrowElement.style, {
          left: arrowX != null ? `${arrowX}px` : '',
          top: arrowY != null ? `${arrowY}px` : '',
          right: '',
          bottom: '',
          [staticSide]: '-4px',
          position: 'absolute',
        });
      });
    });
  }

  private _hide(): void {
    this._cleanup?.();
    this._tooltipElement.classList.remove('show');
    this._tooltipElement.style.visibility = 'hidden';
    Object.values(BSI_PLACEMENT_CLASSES).forEach((c) => this._tooltipElement.classList.remove(c));
    this._tooltipElement.setAttribute('aria-hidden', 'true');
  }

  public showTooltip(): void {
    this.open = true;
  }

  public hideTooltip(): void {
    this.open = false;
  }

  public toggle(): void {
    this.open = !this.open;
  }

  render() {
    return html`
      <slot
        name="trigger"
        part="trigger"
        @slotchange=${() => {
          this._setupAria();
          if (!this.controlled) this._setupStandardEvents();
        }}
      ></slot>
      <div class="tooltip" role="tooltip" id=${ifDefined(this._id)} aria-hidden="true">
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner"><slot name="content"></slot></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-tooltip': ItTooltip;
  }
}
