/* eslint-disable lit-a11y/click-events-have-key-events */
import { BaseComponent, FocusTrapController, WindowManager } from '@italia/globals';
import { html, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type ModalSize, type ModalPosition, type ModalVariant, type ModalEventDetail } from './types.js';
import styles from './modal.scss';

@customElement('it-modal')
export class ItModal extends BaseComponent {
  static styles = styles;

  static override shadowRootOptions = { ...BaseComponent.shadowRootOptions, delegatesFocus: true };

  @property({ type: Boolean, reflect: true }) open: boolean | undefined = undefined;

  @property({ type: String, attribute: 'modal-title', reflect: true }) modalTitle = '';

  @property({ type: String, attribute: 'modal-description', reflect: true }) modalDescription = '';

  @property({ type: String, reflect: true }) size: ModalSize = '';

  @property({ type: String, reflect: true }) position?: ModalPosition;

  @property({ type: Boolean, reflect: true }) scrollable = false;

  @property({ type: Boolean, attribute: 'static-backdrop', reflect: true }) staticBackdrop = false;

  @property({ type: Boolean, attribute: 'hide-close-button', reflect: true }) hideCloseButton = false;

  @property({ type: String, reflect: true }) variant?: ModalVariant;

  @property({ type: String, attribute: 'it-aria-label' }) itAriaLabel = '';

  @property({ type: String, attribute: 'close-label', reflect: true }) closeLabel = '';

  @property({ type: Boolean, attribute: 'disable-animation', reflect: true }) disableAnimation = false;

  @property({ type: Boolean, attribute: 'footer-shadow', reflect: true }) footerShadow = false;

  @query('[role="dialog"]') private _modalElement!: HTMLElement;

  @query('slot[name="trigger"]') private _triggerSlot!: HTMLSlotElement;

  @query('slot[name="header"]') private _headerSlot!: HTMLSlotElement;

  @query('slot[name="description"]') private _descriptionSlot!: HTMLSlotElement;

  @query('.modal-backdrop') private _backdropElement!: HTMLElement;

  @query('.modal-dialog') private _dialogElement!: HTMLElement;

  private _titleId = '';

  private _triggerId = '';

  private _descriptionId = '';

  private isAnimating = false;

  private _isSelfClosing = false;

  private _originalTrigger: HTMLElement | null = null;

  private _dialogAnimation?: Animation;

  private _backdropAnimation?: Animation;

  private readonly _dialogAnimationDuration = 300;

  private readonly _backdropAnimationDuration = 150;

  private _inertElements: HTMLElement[] = [];

  private _triggerPointerBefore: string | null = null;

  private _focusTrap: FocusTrapController;

  constructor() {
    super();
    this._triggerId = this.generateId('modal-trigger');
    this._titleId = this.generateId('modal-title');
    this._descriptionId = this.generateId('modal-description');
    this._focusTrap = new FocusTrapController(this, {
      getContainer: () => this._modalElement,
      initialFocus: () => this._modalElement,
      getTrigger: () => this._triggerElement,
      onEscape: () => this.hide(),
    });
  }

  get _triggerElement(): HTMLElement | null {
    const elements = this._triggerSlot?.assignedElements({ flatten: true });
    return (elements?.[0] as HTMLElement) || null;
  }

  public show(): void {
    if (this.open || this.isAnimating) return;

    this._originalTrigger = this._triggerElement;
    this.dispatchEvent(
      new CustomEvent<ModalEventDetail>('it-modal-open', { detail: { modal: this }, bubbles: true, composed: true }),
    );
    this.open = true;
  }

  public hide(): void {
    if (!this.open || this.isAnimating) return;
    this.dispatchEvent(
      new CustomEvent<ModalEventDetail>('it-modal-close', { detail: { modal: this }, bubbles: true, composed: true }),
    );
    this._hideModal();
  }

  public toggle(): void {
    this.open = !this.open;
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('open')) {
      if (this._isSelfClosing) {
        this._isSelfClosing = false;
        return;
      }
      this._cleanupAnimations();
      if (this.open !== undefined) {
        if (this.open) this._showModal();
        else this._hideModal();
      }
    }
  }

  private _applyInert(): void {
    this._removeInert();
    const trigger = this._triggerElement;
    if (trigger) {
      this._triggerPointerBefore = trigger.style.pointerEvents;
      trigger.style.pointerEvents = 'none';
    }
    const ignored = new Set(['SCRIPT', 'STYLE', 'TEMPLATE', 'LINK']);
    for (let cur: HTMLElement | null = this; cur && cur !== document.body; cur = cur.parentElement) {
      const parent = cur.parentElement;
      if (!parent) break;
      Array.from(parent.children).forEach((node) => {
        if (node !== cur && !ignored.has(node.tagName) && node instanceof HTMLElement) {
          node.setAttribute('inert', '');
          this._inertElements.push(node);
        }
      });
    }
  }

  private _removeInert(): void {
    this._inertElements.forEach((el) => el.removeAttribute('inert'));
    if (this._triggerElement && this._triggerPointerBefore !== null) {
      this._triggerElement.style.pointerEvents = this._triggerPointerBefore;
    }
    this._inertElements = [];
    this._triggerPointerBefore = null;
  }

  private _exposeA11yOnHost(): void {
    this.setAttribute('role', 'dialog');
    this.setAttribute('aria-modal', 'true');
    if (this._titleId) this.setAttribute('aria-labelledby', this._titleId);
    if (this._descriptionId) this.setAttribute('aria-describedby', this._descriptionId);
  }

  private _removeA11yFromHost(): void {
    ['role', 'aria-modal', 'aria-labelledby', 'aria-describedby'].forEach((a) => this.removeAttribute(a));
  }

  private async _showModal(): Promise<void> {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this._exposeA11yOnHost();
    this._applyInert();
    WindowManager.lockBodyScroll();

    // ASPETTA CHE LIT STAMPI IL DOM (risolve bug prima apertura)
    await this.updateComplete;

    requestAnimationFrame(() => {
      const dDuration = !this.disableAnimation ? this._dialogAnimationDuration : 0;
      const bDuration = !this.disableAnimation ? this._backdropAnimationDuration : 0;
      if (this._backdropElement)
        this._backdropAnimation = this._backdropElement.animate([{ opacity: 0 }, { opacity: 0.8 }], {
          duration: bDuration,
          fill: 'forwards',
        });
      if (this._dialogElement) {
        this._dialogAnimation = this._dialogElement.animate(
          [
            { opacity: 0, transform: 'scale(0.95)' },
            { opacity: 1, transform: 'scale(1)' },
          ],
          { duration: dDuration, fill: 'forwards' },
        );
        this._dialogAnimation.finished
          .then(() => {
            if (this.open) {
              this._focusTrap.activate();
            }
          })
          .finally(() => {
            this.isAnimating = false;
          });
      } else {
        // Fallback estremo se @query fallisce ancora
        this._focusTrap.activate();
        this.isAnimating = false;
      }
    });
  }

  private _hideModal(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    FocusTrapController.getActiveElement()?.blur();
    this._focusTrap.deactivate({ skipFocusRestore: true });
    const target = this._originalTrigger ?? this._triggerElement;
    const finish = () => {
      this._removeInert();
      this._removeA11yFromHost();
      this._cleanupAnimations();
      WindowManager.unlockBodyScroll();
      this._isSelfClosing = true;
      this.open = false;
      this.isAnimating = false;
      if (target)
        setTimeout(() => {
          if (!this.open) target.focus();
        }, 20);
      this._originalTrigger = null;
    };
    if (this._dialogElement && !this.disableAnimation) {
      this._dialogAnimation = this._dialogElement.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 150,
        fill: 'forwards',
      });
      this._dialogAnimation.finished.then(finish);
    } else {
      finish();
    }
  }

  private _cleanupAnimations(): void {
    this._dialogAnimation?.cancel();
    this._backdropAnimation?.cancel();
    this._dialogAnimation = undefined;
    this._backdropAnimation = undefined;
  }

  private _onTriggerSlotChange = (): void => {
    const trigger = this._triggerElement;

    console.log('Trigger slot changed, trigger element:', trigger);
    if (trigger) {
      console.log('Setting up trigger with ID:', this._triggerId);
      trigger.setAttribute('id', this._triggerId);
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        this.show();
      });
      trigger.addEventListener('keydown', (e: any) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();

          this.show();
        }
      });
      this.requestUpdate();
    }
  };

  private get _modalClasses() {
    return {
      modal: true,
      fade: !this.disableAnimation,
      show: Boolean(this.open) && !this.disableAnimation,
      'alert-modal': this.variant === 'alert',
      'popconfirm-modal': this.variant === 'popconfirm',
      'it-dialog-link-list': this.variant === 'link-list',
      'it-dialog-scrollable': this.scrollable || this.position === 'left' || this.position === 'right',
    };
  }

  private get _modalBodyClasses() {
    return {
      'modal-dialog': true,
      'modal-dialog-centered': this.position === 'center',
      'modal-dialog-left': this.position === 'left',
      'modal-dialog-right': this.position === 'right',
      'modal-dialog-scrollable': this.scrollable,
      'modal-sm': this.size === 'sm',
      'modal-lg': this.size === 'lg',
      'modal-xl': this.size === 'xl',
    };
  }

  render() {
    const hasHeader = this.modalTitle || (this._headerSlot?.assignedElements({ flatten: true }).length || 0) > 0;
    const ariaLabel = !hasHeader ? this.itAriaLabel || undefined : undefined;
    const enableFocusContent = this.scrollable || this.position === 'left' || this.position === 'right';

    return html`
      <slot name="trigger" @slotchange=${this._onTriggerSlotChange}></slot>
      <div
        class="${classMap(this._modalClasses)}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${ifDefined(hasHeader ? this._titleId : undefined)}"
        aria-describedby="${ifDefined(this._descriptionId)}"
        aria-label="${ifDefined(ariaLabel)}"
        aria-hidden="${!this.open}"
        tabindex="-1"
        @click="${() => !this.staticBackdrop && this.hide()}"
        part="modal"
      >
        <div
          class="${classMap(this._modalBodyClasses)}"
          role="document"
          @click="${(e: any) => {
            if (!e.composedPath().some((el: any) => el.slot === 'footer')) e.stopPropagation();
          }}"
          part="modal-content-wrapper"
        >
          <div class="visually-hidden" id="${this._descriptionId}">
            <slot name="description" @slotchange="${() => this.requestUpdate()}">${this.modalDescription}</slot>
          </div>
          <div class="modal-content" part="modal-content">
            <div
              class="${hasHeader || (this.variant !== 'popconfirm' && !this.hideCloseButton) ? 'modal-header' : ''}"
              part="modal-header"
            >
              <slot name="header-icon"></slot>
              <h2 id="${this._titleId}" class="modal-title">
                <slot name="header" @slotchange="${() => this.requestUpdate()}">${this.modalTitle}</slot>
              </h2>
              ${!this.hideCloseButton && this.variant !== 'popconfirm'
                ? html`<it-button
                    class="btn-close"
                    variant="link"
                    icon
                    size="lg"
                    exportparts="focusable, button"
                    @click="${() => this.hide()}"
                    ><it-icon name="it-close" size="lg"></it-icon
                    ><span class="visually-hidden">${this.closeLabel}</span></it-button
                  >`
                : ''}
            </div>
            <div class="modal-body" tabindex="${enableFocusContent ? '0' : '-1'}" part="focusable modal-body">
              <slot name="content"></slot>
            </div>
            <div class="modal-footer ${this.footerShadow ? 'modal-footer-shadow' : ''}" part="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal-backdrop ${this.disableAnimation ? 'fade' : ''} ${this.open ? 'show' : ''}"
        aria-hidden="true"
        @click="${() => !this.staticBackdrop && this.hide()}"
        part="modal-backdrop"
      ></div>
    `;
  }
}
