/* eslint-disable lit-a11y/click-events-have-key-events */
// import { type ItButton } from '@italia/button';
import { BaseComponent, FocusTrapController, WindowManager } from '@italia/globals';
import { html, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type ModalSize, type ModalPosition, type ModalVariant, type ModalEventDetail } from './types.js';
import styles from './modal.scss';

/**
 * Componente Modal per finestre di dialogo modali.
 *
 * @element it-modal
 *
 * @slot trigger - Elemento che apre la modale (es. it-button)
 * @slot content - Contenuto principale della modale (body)
 * @slot header-icon - Icona opzionale nell'header
 * @slot footer - Azioni del footer (pulsanti)
 *
 * @fires it-modal-open - Quando la modale si apre
 * @fires it-modal-close - Quando la modale si chiude
 */
@customElement('it-modal')
export class ItModal extends BaseComponent {
  static styles = styles;

  static override shadowRootOptions = {
    ...BaseComponent.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true }) open = false;

  @property({ type: String, attribute: 'modal-title', reflect: true }) modalTitle = '';

  @property({ type: String, attribute: 'modal-description', reflect: true }) modalDescription = '';

  @property({ type: String, reflect: true }) size: ModalSize = '';

  @property({ type: String, reflect: true }) position?: ModalPosition | undefined;

  @property({ type: Boolean, reflect: true }) scrollable = false;

  @property({ type: Boolean, attribute: 'static-backdrop', reflect: true }) staticBackdrop = false;

  @property({ type: Boolean, attribute: 'hide-close-button', reflect: true }) hideCloseButton = false;

  @property({ type: String, reflect: true }) variant?: ModalVariant | undefined;

  @property({ type: String, attribute: 'it-aria-label' }) itAriaLabel: string = '';

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

  private _dialogAnimation?: Animation;

  private _backdropAnimation?: Animation;

  private readonly _dialogAnimationDuration = 300; // ms - matches Bootstrap Italia modal-transition

  private readonly _backdropAnimationDuration = 150; // ms - standard fade

  private _focusTrap = new FocusTrapController(this, {
    getContainer: () => this._modalElement,
    initialFocus: () => this._modalElement,
    getTrigger: () => this._triggerElement,
    onEscape: () => {
      this.hide();
    },

    disableEscape: false,
  });

  get _triggerElement(): HTMLElement | null {
    if (!this._triggerSlot) {
      this.logger.error('No trigger provided');
      return null;
    }
    const elements = this._triggerSlot.assignedElements({ flatten: true });
    if (elements.length === 0) {
      return null;
    }
    return elements[0] as HTMLElement | null;
  }

  constructor() {
    super();
    this._triggerId = this.generateId('modal-trigger');
    this._titleId = this.generateId('modal-title');
    this._descriptionId = this.generateId('modal-description');
  }

  connectedCallback(): void {
    super.connectedCallback?.();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback?.();
    this._removeTriggerListeners();
    this._cleanupAnimations();
    WindowManager.unlockBodyScroll();
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('open')) {
      // Cancel any ongoing animations before starting new ones
      this._cleanupAnimations();

      if (this.open) {
        this._showModal();
      } else {
        this._hideModal();
      }
    }
  }

  private _onTriggerSlotChange = (): void => {
    this._setupTriggerListeners();
  };

  private _onHeaderSlotChange = (): void => {
    this.requestUpdate();
  };

  private _setupTriggerListeners(): void {
    const trigger = this._triggerElement;
    if (!trigger) return;

    trigger.setAttribute('id', this._triggerId);
    // Rimuovi eventuali listener precedenti
    trigger.removeEventListener('click', this._onTriggerClick);
    trigger.removeEventListener('keydown', this._onTriggerKeydown);

    // Aggiungi nuovi listener
    trigger.addEventListener('click', this._onTriggerClick);
    trigger.addEventListener('keydown', this._onTriggerKeydown);
  }

  private _removeTriggerListeners(): void {
    const trigger = this._triggerElement;
    if (!trigger) return;

    trigger.removeEventListener('click', this._onTriggerClick);
    trigger.removeEventListener('keydown', this._onTriggerKeydown);
  }

  private _onTriggerClick = (event: Event): void => {
    event.stopPropagation();
    this.show();
  };

  private _onTriggerKeydown = (event: Event): void => {
    if ((event as KeyboardEvent).key === 'Enter' || (event as KeyboardEvent).key === ' ') {
      event.preventDefault();
      this.show();
    }
  };

  public show(): void {
    if (this.open || this.isAnimating) return;
    this.open = true;
  }

  public hide(): void {
    if (!this.open || this.isAnimating) return;
    this._hideModal();
  }

  public toggle(): void {
    this.open = !this.open;
  }

  private _showModal(): void {
    if (this.isAnimating) return;

    this.isAnimating = true;

    // Deactivate focus trap first if it was active
    this._focusTrap.deactivate();

    WindowManager.lockBodyScroll();

    requestAnimationFrame(() => {
      // Determine transform based on position
      let dialogStartTransform = 'translate(0, 0)'; // default: no transform
      if (this.position === 'center') {
        dialogStartTransform = 'translate(0, -5%)';
      } else if (this.position === 'left') {
        dialogStartTransform = 'translateX(-100%)';
      } else if (this.position === 'right') {
        dialogStartTransform = 'translateX(100%)';
      }

      const dialogDuration = !this.disableAnimation && !this.prefersReducedMotion ? this._dialogAnimationDuration : 0;
      const backdropDuration =
        !this.disableAnimation && !this.prefersReducedMotion ? this._backdropAnimationDuration : 0;

      // Animate backdrop fade in
      if (this._backdropElement) {
        this._backdropAnimation = this._backdropElement.animate([{ opacity: '0' }, { opacity: '0.8' }], {
          duration: backdropDuration,
          easing: 'linear',
          fill: 'forwards',
        });
      }

      // Animate dialog transform (slide/drop in)
      if (this._dialogElement && dialogDuration > 0) {
        this._dialogAnimation = this._dialogElement.animate(
          [{ transform: dialogStartTransform }, { transform: 'translate(0, 0)' }],
          {
            duration: dialogDuration,
            easing: 'ease-in-out',
            fill: 'forwards',
          },
        );

        this._dialogAnimation.finished
          .then(() => {
            // Only activate focus trap if modal is still open
            if (this.open) {
              try {
                this._focusTrap.activate();
              } catch {
                // Swallow errors if focus trap fails
              }
            }
          })
          .catch(() => {
            // Animation cancelled or failed
          })
          .finally(() => {
            this.isAnimating = false;
          });
      } else {
        // No dialog element or no animation, just finish
        if (this.open) {
          try {
            this._focusTrap.activate();
          } catch {
            // Swallow errors if focus trap fails
          }
        }
        this.isAnimating = false;
      }
    });

    this.dispatchEvent(
      new CustomEvent<ModalEventDetail>('it-modal-open', {
        detail: { modal: this },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _hideModal(): void {
    if (this.isAnimating) return;

    this.isAnimating = true;

    // Deactivate focus trap immediately to prevent focus issues
    this._focusTrap.deactivate();

    // Determine end transform based on position
    let dialogEndTransform = 'translate(0, 0)'; // default: no transform
    let dialogCloseDuration = this._dialogAnimationDuration / 1.33;

    if (this.position === 'center') {
      dialogEndTransform = 'translate(0, -5%)';
      // Dialog più veloce quando è centrato per una chiusura più reattiva
      dialogCloseDuration = this._dialogAnimationDuration / 2;
    } else if (this.position === 'left') {
      dialogEndTransform = 'translateX(-100%)';
    } else if (this.position === 'right') {
      dialogEndTransform = 'translateX(100%)';
    }

    const dialogDuration = !this.disableAnimation && !this.prefersReducedMotion ? dialogCloseDuration : 0;
    const backdropDuration =
      !this.disableAnimation && !this.prefersReducedMotion ? this._backdropAnimationDuration / 1.33 : 0;

    const finishHide = () => {
      // Ensure focus trap is deactivated
      this._focusTrap.deactivate();
      this._cleanupAnimations();
      WindowManager.unlockBodyScroll();
      // Set open to false after animation completes
      this.open = false;
    };

    // Animate dialog and backdrop in parallel for smoother close
    const animations: Promise<Animation>[] = [];

    if (this._dialogElement && dialogDuration > 0) {
      this._dialogAnimation = this._dialogElement.animate(
        [
          { transform: 'translate(0, 0)', opacity: '1' },
          { transform: dialogEndTransform, opacity: '0' },
        ],
        {
          duration: dialogDuration,
          easing: 'ease-in',
          fill: 'forwards',
        },
      );
      animations.push(this._dialogAnimation.finished);
    }

    if (this._backdropElement && backdropDuration > 0) {
      this._backdropAnimation = this._backdropElement.animate([{ opacity: '0.8' }, { opacity: '0' }], {
        duration: backdropDuration,
        easing: 'linear',
        fill: 'forwards',
      });
      animations.push(this._backdropAnimation.finished);
    }

    if (animations.length > 0) {
      Promise.all(animations)
        .then(() => finishHide())
        .catch(() => {
          // Animation was cancelled
          finishHide();
        })
        .finally(() => {
          this.isAnimating = false;
        });
    } else {
      // No animation, finish immediately
      finishHide();
      this.isAnimating = false;
    }

    this.dispatchEvent(
      new CustomEvent<ModalEventDetail>('it-modal-close', {
        detail: { modal: this },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _cleanupAnimations(): void {
    if (this._dialogAnimation) {
      try {
        this._dialogAnimation.cancel();
      } catch {
        /* ignore */
      }
      this._dialogAnimation = undefined;
    }

    if (this._backdropAnimation) {
      try {
        this._backdropAnimation.cancel();
      } catch {
        /* ignore */
      }
      this._backdropAnimation = undefined;
    }
  }

  private _handleCloseClick = (): void => {
    this.hide();
  };

  private _handleBackdropClick = (): void => {
    if (!this.staticBackdrop) {
      this.hide();
    }
  };

  // eslint-disable-next-line class-methods-use-this
  private _handleDialogClick = (event: Event): void => {
    const path = event.composedPath();
    // Check that is not footer or react synthetic events break on buttons
    const isInFooter = path.some((el) => el instanceof HTMLElement && el.slot === 'footer');

    if (!isInFooter) {
      event.stopPropagation(); // solo per backdrop
    }
  };

  private get _modalClasses() {
    return {
      modal: true,
      fade: !this.disableAnimation,
      show: this.open && !this.disableAnimation,
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
    const hasHeader = this.modalTitle || this._headerSlot?.assignedElements({ flatten: true }).length > 0;
    const ariaLabelledBy = hasHeader ? this._titleId : undefined;
    const ariaLabel = !hasHeader ? this.itAriaLabel : undefined;
    const headerClass = hasHeader || (this.variant !== 'popconfirm' && !this.hideCloseButton) ? 'modal-header' : '';
    const hasDescription =
      this.modalDescription || this._descriptionSlot?.assignedElements({ flatten: true }).length > 0;
    const ariaDescribedBy = hasDescription ? this._descriptionId : undefined;
    const enableFocusContent = this.scrollable || this.position === 'left' || this.position === 'right';
    return html`
      <slot name="trigger" @slotchange=${this._onTriggerSlotChange}></slot>

      <div
        class="${classMap(this._modalClasses)}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${ifDefined(ariaLabelledBy)}"
        aria-describedby="${ifDefined(ariaDescribedBy)}"
        aria-label="${ifDefined(ariaLabel)}"
        aria-hidden="${!this.open}"
        tabindex="-1"
        @click="${this._handleBackdropClick}"
        part="modal"
      >
        <div
          class="${classMap(this._modalBodyClasses)}"
          role="document"
          @click="${this._handleDialogClick}"
          part="modal-content-wrapper"
        >
          <div class="visually-hidden" id="${this._descriptionId}">
            <slot name="description" @slotchange="${this._onHeaderSlotChange}">${this.modalDescription}</slot>
          </div>
          <div class="modal-content" part="modal-content">
            <div class="${headerClass}" part="modal-header">
              <slot name="header-icon"></slot>
              <h2 id="${this._titleId}" class="modal-title">
                <slot name="header" @slotchange="${this._onHeaderSlotChange}">${this.modalTitle}</slot>
              </h2>
              ${!this.hideCloseButton && this.variant !== 'popconfirm'
                ? html`<it-button
                    class="btn-close"
                    variant="link"
                    icon
                    size="lg"
                    exportparts="focusable, button"
                    @click="${this._handleCloseClick}"
                  >
                    <it-icon name="it-close" size="lg"></it-icon>
                    <span class="visually-hidden">${this.closeLabel}</span>
                  </it-button>`
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
        @click="${this._handleBackdropClick}"
        part="modal-backdrop"
      ></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-modal': ItModal;
  }
}
