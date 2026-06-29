import { BaseLocalizedComponent, dispatchCancelable } from '@italia/globals';
import { html, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { registerTranslation } from '@italia/i18n';
import {
  NOTIFICATION_FIX,
  NOTIFICATION_HEADING_LEVELS,
  NOTIFICATION_STATUS,
  NOTIFICATION_STATUS_COLORS,
  type NotificationFix,
  type NotificationHeadingLevel,
  type NotificationStatus,
  type NotificationEventDetail,
} from './types.js';
import styles from './notification.scss';

import it from './locales/it.js';
import en from './locales/en.js';

registerTranslation(it);
registerTranslation(en);

/**
 * Componente Notification.
 *
 * @element it-notification
 *
 * @fires it-notification-show - Quando la notifica viene mostrata (cancelable: `preventDefault()` impedisce la comparsa)
 * @fires it-notification-close - Quando la notifica viene chiusa (cancelable: `preventDefault()` impedisce la chiusura)
 */
@customElement('it-notification')
export class ItNotification extends BaseLocalizedComponent {
  static styles = styles;

  static CLASS_NAME_FADE = 'fade';

  static CLASS_NAME_SHOW = 'show';

  static TRANSITION_DURATION = 150;

  @property({ type: String, attribute: 'heading-level' })
  headingLevel: NotificationHeadingLevel = 'h2';

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: String })
  status?: NotificationStatus;

  @property({ type: Boolean, reflect: true })
  dismissable = false;

  @property({ type: Boolean, reflect: true })
  fade = true;

  @property({ type: String })
  fix?: NotificationFix;

  @property({ type: Number })
  timeout: number = 3000;

  @query('[role="alert"]')
  container!: HTMLElement;

  @state()
  isShown = false;

  @state()
  isTransitioning = false;

  protected override updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    if (this.headingLevel && !NOTIFICATION_HEADING_LEVELS.includes(this.headingLevel)) {
      this.logger.warn(
        `Invalid heading-level value, falling back to default. Expected one of: ${NOTIFICATION_HEADING_LEVELS.join(', ')}`,
      );
    }
    if (this.status && !NOTIFICATION_STATUS.includes(this.status)) {
      this.logger.warn(`Invalid status value, expected one of: ${NOTIFICATION_STATUS.join(', ')}`);
    }
    if (this.fix && !NOTIFICATION_FIX.includes(this.fix)) {
      this.logger.warn(`Invalid fix value, expected one of: ${NOTIFICATION_FIX.join(', ')}`);
    }
  }

  public show(timeout?: number) {
    if (this.isShown || this.isTransitioning) {
      return;
    }

    // `it-notification-show` is cancelable: `preventDefault()` stops the notification
    // from being shown.
    dispatchCancelable<NotificationEventDetail>(this, 'it-notification-show', { notification: this }, () => {
      this.isShown = true;
      if (this.fade) this.isTransitioning = true;

      const timeoutVal = timeout ?? this.timeout;

      this.container.style.display = 'block';

      if (this.fade) {
        /**
         * Trick to restart an element's animation
         * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
         */
        // eslint-disable-next-line no-unused-expressions
        this.offsetHeight;
      }

      this.isShown = true;

      setTimeout(
        () => {
          this.isTransitioning = false;
          if (!this.dismissable && timeoutVal) {
            setTimeout(() => {
              this.hide();
            }, timeoutVal);
          }
        },
        this.fade ? ItNotification.TRANSITION_DURATION : 0,
      );
    });
  }

  public hide() {
    if (!this.isShown || this.isTransitioning) {
      return;
    }

    // `it-notification-close` is cancelable: `preventDefault()` keeps the notification
    // visible (the consumer can dismiss it later by calling `hide()`). This covers the
    // close button, the auto-dismiss timeout and any programmatic call.
    dispatchCancelable<NotificationEventDetail>(this, 'it-notification-close', { notification: this }, () => {
      this.isShown = false;
      if (this.fade) this.isTransitioning = true;

      setTimeout(
        () => {
          this.container.style.display = 'none';
          this.isTransitioning = false;
        },
        this.fade ? ItNotification.TRANSITION_DURATION : 0,
      );
    });
  }

  protected getHeadingLevel(): NotificationHeadingLevel {
    if (NOTIFICATION_HEADING_LEVELS.includes(this.headingLevel)) {
      return this.headingLevel;
    }
    return 'h2';
  }

  override render() {
    const classes = this.composeClass('notification', {
      'with-icon': !!this.icon,
      [`${this.status}`]: !!this.status,
      [ItNotification.CLASS_NAME_SHOW]: this.isShown,
      [ItNotification.CLASS_NAME_FADE]: this.fade,
      dismissable: this.dismissable,
      [`${this.fix}-fix`]: this.fix,
    });

    const headingClasses = this.composeClass('notification-title', {
      'd-flex align-items-center': !!this.icon,
    });

    const headingTag = unsafeStatic(this.getHeadingLevel());

    return html`
      <div
        class="${classes}"
        role="alert"
        aria-labelledby="heading"
        part="notification"
        aria-hidden="${ifDefined(this.isShown ? undefined : 'true')}"
      >
        ${staticHtml`
          <${headingTag} class=${headingClasses} id="heading" part="title">
            ${
              this.icon
                ? html`<it-icon
                    class="icon me-2"
                    size="sm"
                    color=${ifDefined(this.status ? NOTIFICATION_STATUS_COLORS[this.status] : undefined)}
                    name="${this.icon}"
                    align="none"
                  ></it-icon>`
                : ''
            }<slot name="title"></slot>
          </${headingTag}>
        `}
        <slot></slot>
        ${this.dismissable
          ? html`
              <button type="button" class="btn notification-close" @click=${this.hide}>
                <it-icon class="icon" name="it-close"></it-icon>
                <span class="visually-hidden">${this.$t('notification_close_label')}</span>
              </button>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-notification': ItNotification;
  }
}
