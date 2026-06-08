/* eslint-disable lit-a11y/accessible-name */
import { BaseComponent } from '@italia/globals';
import { customElement, property, query } from 'lit/decorators.js';
import { html, PropertyValues } from 'lit';
import { computePosition, offset, flip, shift, autoUpdate, arrow } from '@floating-ui/dom';
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

  static TRANSITION_DURATION = 150;

  @property({ type: Boolean, reflect: true }) open = false;

  @property({ type: Boolean }) controlled = false;

  @property({ type: String }) placement: TooltipPlacement = 'top';

  @property({ type: Boolean, attribute: 'no-flip' }) noFlip: boolean = false;

  @query('slot[name="trigger"]') private _triggerSlot!: HTMLSlotElement;

  @query('slot[name="content"]') private _contentSlot!: HTMLSlotElement;

  @query('.tooltip') private _tooltipElement!: HTMLElement;

  @query('.tooltip-arrow') private _arrowElement!: HTMLElement;

  isTransitioning = false;

  private _contentElement: HTMLElement | null = null;

  private _lastTrigger: HTMLElement | null = null;

  private get _triggerElement(): HTMLElement | null {
    return (this._triggerSlot?.assignedElements({ flatten: true })[0] as HTMLElement) ?? null;
  }

  private _cleanup?: () => void;

  private _onMouseEnter = () => {
    if (!this.controlled) this.showTooltip();
  };

  private _onMouseLeave = (e: MouseEvent) => {
    if (!this.controlled) {
      const rt = e.relatedTarget as Node | null;
      // When mouse moves to the tooltip (shadow DOM), relatedTarget is retargeted to the host
      if (rt === this || this._tooltipElement?.contains(rt)) return;
      this.hideTooltip();
    }
  };

  private _onTooltipMouseLeave = (e: MouseEvent) => {
    if (!this.controlled) {
      const rt = e.relatedTarget as Node | null;
      // When mouse moves back to trigger (light DOM), relatedTarget is retargeted to the host
      if (rt === this || rt === this._triggerElement || this._triggerElement?.contains(rt)) return;
      this.hideTooltip();
    }
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
    this._contentElement?.removeAttribute('role');
    this._contentElement?.removeAttribute('id');
    this._contentElement?.removeAttribute('aria-hidden');
    this._cleanupDescribedBy();
  }

  private _cleanupDescribedBy(): void {
    if (!this._lastTrigger) return;

    if (this._lastTrigger.tagName.startsWith('IT-')) {
      this._lastTrigger.removeAttribute('it-aria-describedby');
    } else {
      this._lastTrigger.removeAttribute('aria-describedby');
    }
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this._setupAria();
    if (!this.controlled) this._setupStandardEvents();
  }

  protected updated(changedProps: Map<string, unknown>): void {
    if (changedProps.has('open')) {
      if (this.open) {
        this._contentElement?.removeAttribute('aria-hidden');
        this._show();
        this.dispatchEvent(new CustomEvent('it-tooltip-open', { bubbles: true, composed: true }));
      } else {
        this._contentElement?.setAttribute('aria-hidden', 'true');
        this._hide();
        this.dispatchEvent(new CustomEvent('it-tooltip-close', { bubbles: true, composed: true }));
      }
    }
  }

  private _setupAria(): void {
    this._contentElement?.removeAttribute('role');
    this._contentElement?.removeAttribute('id');
    this._cleanupDescribedBy();

    const trigger = this._triggerElement;
    const content = this._contentSlot?.assignedElements({ flatten: true })[0] as HTMLElement | null;
    if (!trigger || !content || !this._id) return;

    this._contentElement = content;
    this._lastTrigger = trigger;

    if (!content.id) content.id = this._id;
    content.setAttribute('role', 'tooltip');
    if (this.open) {
      content.removeAttribute('aria-hidden');
    } else {
      content.setAttribute('aria-hidden', 'true');
    }

    if (trigger.tagName.startsWith('IT-')) {
      trigger.setAttribute('it-aria-describedby', content.id);
    } else {
      trigger.setAttribute('aria-describedby', content.id);
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
    if (this.isTransitioning) {
      return;
    }
    const trigger = this._triggerElement;
    if (!trigger || !this._tooltipElement) return;

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
    this.isTransitioning = true;
    setTimeout(() => {
      this._cleanup?.();
      this._tooltipElement.style.visibility = 'hidden';
      Object.values(BSI_PLACEMENT_CLASSES).forEach((c) => this._tooltipElement.classList.remove(c));
      this.isTransitioning = false;
    }, ItTooltip.TRANSITION_DURATION);
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
    const classes = this.composeClass('tooltip fade', {
      show: this.open,
    });

    return html`
      <slot
        name="trigger"
        part="trigger"
        @slotchange=${() => {
          this._setupAria();
          if (!this.controlled) this._setupStandardEvents();
        }}
      ></slot>
      <div class=${classes} @mouseleave=${this._onTooltipMouseLeave}>
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner"><slot name="content" @slotchange=${() => this._setupAria()}></slot></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-tooltip': ItTooltip;
  }
}
