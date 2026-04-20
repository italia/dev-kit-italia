/* eslint-disable lit-a11y/click-events-have-key-events */
import { BaseComponent, FocusTrapController, WindowManager } from '@italia/globals';
import { html, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type ModalSize, type ModalPosition, type ModalVariant, type ModalEventDetail } from './types.js';
import styles from './modal.scss';

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

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

  @state()
  private _safariMouseInteraction = false;

  private _dialogAnimation?: Animation;

  private _backdropAnimation?: Animation;

  private readonly _dialogAnimationDuration = 300;

  private readonly _backdropAnimationDuration = 150;

  private _inertElements: HTMLElement[] = [];

  private _triggerPointerBefore: string | null = null;

  /** Timer ID for the focus-restore call in finishHide. Cancelled on reconnect/unmount
   *  to prevent a stale focus from a previous close cycle firing during a new open. */
  private _restoreFocusTimer: ReturnType<typeof setTimeout> | null = null;

  private _focusTrap: FocusTrapController;

  get _triggerElement(): HTMLElement | null {
    const elements = this._triggerSlot?.assignedElements({ flatten: true });
    return (elements?.[0] as HTMLElement) || null;
  }

  constructor() {
    super();
    this._triggerId = this.generateId('modal-trigger');
    this._titleId = this.generateId('modal-title');
    this._descriptionId = this.generateId('modal-description');
    this._focusTrap = new FocusTrapController(this, {
      getContainer: () => this._modalElement,
      initialFocus: () => this._modalElement,
      getTrigger: () => this._triggerElement,
      onEscape: () => {
        this._safariMouseInteraction = false;
        this.hide();
      },
    });
  }

  connectedCallback(): void {
    super.connectedCallback?.();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback?.();
    this._removeTriggerListeners();
    this._cleanupAnimations();
    this._removeInert();
    if (this._restoreFocusTimer !== null) {
      clearTimeout(this._restoreFocusTimer);
      this._restoreFocusTimer = null;
    }
    WindowManager.unlockBodyScroll();
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
    if (changedProperties.has('_safariMouseInteraction')) {
      let realButton: HTMLElement | null = this._triggerElement;
      if (realButton?.tagName.toLowerCase() === 'it-button') {
        realButton = this._triggerElement?.shadowRoot?.querySelector('button')!;
      }
      if (!realButton) return;
      // Fix Safari: se l'interazione è da mouse, rimuovi outline e box-shadow forzati per evitare il doppio focus ring
      if (this._safariMouseInteraction) {
        realButton.style.setProperty('outline', '0', 'important');
        realButton.style.setProperty('box-shadow', 'none', 'important');
      } else {
        realButton.style.removeProperty('outline');
        realButton.style.removeProperty('box-shadow');
      }
    }
  }

  private _applyInert(): void {
    this._removeInert();
    const trigger = this._triggerElement;
    if (trigger) {
      this._triggerPointerBefore = trigger.style.pointerEvents;
      trigger.style.pointerEvents = 'none';
      trigger.setAttribute('inert', '');
      if (trigger.tagName.toLowerCase().startsWith('it-')) {
        trigger.setAttribute('it-inert', '');
      }
    }
    const ignored = new Set(['SCRIPT', 'STYLE', 'TEMPLATE', 'LINK']);
    for (let cur: HTMLElement | null = this; cur && cur !== document.body; cur = cur.parentElement) {
      const parent = cur.parentElement;
      if (!parent) break;
      Array.from(parent.children).forEach((node) => {
        if (node !== cur && !ignored.has(node.tagName) && node instanceof HTMLElement) {
          node.setAttribute('inert', '');

          // // FIX FOR SAFARI/VOICEOVER:
          // // If it's a web component with a shadow root, VoiceOver might still
          // // find the inner button.
          if (node.shadowRoot && isSafari) {
            node.setAttribute('inert', '');
            node.setAttribute('it-inert', '');
          }

          this._inertElements.push(node);
        }
      });
    }
  }

  private _removeInert(): void {
    this._inertElements.forEach((el) => {
      el.removeAttribute('inert');
      el.removeAttribute('it-inert');
    });
    if (this._triggerElement && this._triggerPointerBefore !== null) {
      this._triggerElement.style.pointerEvents = this._triggerPointerBefore;
      this._triggerElement.removeAttribute('inert');
      this._triggerElement.removeAttribute('it-inert');
    }
    this._inertElements = [];
    this._triggerPointerBefore = null;
  }

  // eslint-disable-next-line class-methods-use-this
  private _handleDialogClick = (event: Event): void => {
    const path = event.composedPath();
    // Check that is not footer or react synthetic events break on buttons
    const isInFooter = path.some((el) => el instanceof HTMLElement && el.slot === 'footer');

    if (!isInFooter) {
      event.stopPropagation(); // solo per backdrop
    }
  };

  private _handleBackdropClick = (): void => {
    if (!this.staticBackdrop) {
      this.hide();
    }
  };

  private async _showModal(): Promise<void> {
    if (this.isAnimating) return;
    // Cancel any stale close-focus-restore timer so it doesn't fire during the new open.
    if (this._restoreFocusTimer !== null) {
      clearTimeout(this._restoreFocusTimer);
      this._restoreFocusTimer = null;
    }
    this.isAnimating = true;
    this._applyInert();
    WindowManager.lockBodyScroll();

    // ASPETTA LIT o race conditions solo per Safari
    await this.updateComplete;

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
            if (this.open) {
              this._focusTrap.activate();
            }
          })
          .finally(() => {
            this.isAnimating = false;
          });
      } else {
        // No animation: activate immediately. The 50ms inside activate()'s setTimeout
        // gives VoiceOver iOS enough time to settle its accessibility tree.
        // See FocusTrapController class comment for full rationale.
        this._focusTrap.activate();
        this.isAnimating = false;
      }
    });
  }

  private _hideModal(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;

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
      const target = this._originalTrigger ?? this._triggerElement;
      this._removeInert();
      this._cleanupAnimations();
      // skipFocusRestore: we manage focus restore ourselves with the timer below.
      // Without this, _restoreFocus() fires at 0ms and the timer fires at 20ms,
      // causing VoiceOver to announce the restored element twice.
      this._focusTrap.deactivate({ skipFocusRestore: true });
      WindowManager.unlockBodyScroll();
      this._isSelfClosing = true;
      this.isAnimating = false;
      this.open = false;
      if (target) {
        this._restoreFocusTimer = setTimeout(() => {
          this._restoreFocusTimer = null;
          if (!this.open) target.focus({ preventScroll: true });
        }, 20);
      }
      this._originalTrigger = null;
      if (isSafari) this._safariMouseInteraction = false;
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
    }
  }

  private _cleanupAnimations(): void {
    this._dialogAnimation?.cancel();
    this._backdropAnimation?.cancel();
    this._dialogAnimation = undefined;
    this._backdropAnimation = undefined;
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

  private _onTriggerClick = async (event: Event): Promise<void> => {
    event.stopPropagation();
    const trigger = this._triggerElement;
    if (!trigger) return;
    if (isSafari) {
      this._safariMouseInteraction = true;
    }
    await this.updateComplete; // Assicurati che l'update sia completo prima di applicare il focus workaround
    this.show();
  };

  private _onTriggerKeydown = async (event: Event): Promise<void> => {
    if ((event as KeyboardEvent).key === 'Enter' || (event as KeyboardEvent).key === ' ') {
      event.preventDefault();
      this.show();
    } else {
      const trigger = this._triggerElement;
      if (!trigger) return;
      if (isSafari) {
        this._safariMouseInteraction = false;
      }
      await this.updateComplete; // Assicurati che l'update sia completo prima di applicare il focus workaround
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
        @click="${this._handleBackdropClick}"
        part="modal"
      >
        <!-- TRICK SAFARI ENGINE -->
        <div
          id="safari-focus-anchor"
          tabindex="-1"
          aria-hidden="true"
          style="position: absolute; width: 0; height: 0; outline: none;"
        ></div>
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
            <div
              class="${hasHeader || (this.variant !== 'popconfirm' && !this.hideCloseButton) ? 'modal-header' : ''}"
              part="modal-header"
            >
              <slot name="header-icon"></slot>
              <h2 id="${this._titleId}" class="modal-title">
                <slot name="header" @slotchange="${this._onHeaderSlotChange}">${this.modalTitle}</slot>
              </h2>
              ${!this.hideCloseButton && this.variant !== 'popconfirm'
                ? html`<it-button
                    class="btn-close"
                    variant="link"
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
