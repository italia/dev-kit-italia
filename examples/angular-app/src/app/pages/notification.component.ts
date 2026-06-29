import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotificationComponent {
  @ViewChild('notificationRef') notificationRef: any;
  @ViewChild('notificationDismissableRef') notificationDismissableRef: any;
  @ViewChild('notificationSuccessRef') notificationSuccessRef: any;
  @ViewChild('notificationErrorRef') notificationErrorRef: any;
  @ViewChild('notificationWarningRef') notificationWarningRef: any;
  @ViewChild('notificationInfoRef') notificationInfoRef: any;
  @ViewChild('notificationManualRef') notificationManualRef: any;

  @ViewChild('confirmNotif') confirmNotif: any;

  // eslint-disable-next-line class-methods-use-this
  onNotificationClose(e: Event): void {
    e.preventDefault();
    if (window.confirm('Vuoi davvero chiudere la notifica?')) {
      (e.currentTarget as any).hide();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  showNotification(ref: any) {
    const el = ref?.nativeElement ?? ref;
    if (el) {
      el.show();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  showNotificationByTarget(event: Event) {
    const target = event.currentTarget as HTMLElement;
    const notification = target.previousElementSibling as any;
    if (notification) {
      notification.show();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  showNotificationWithTimeout(event: Event, timeout: number) {
    const target = event.currentTarget as HTMLElement;
    const notification = target.previousElementSibling as any;
    if (notification) {
      notification.show(timeout);
    }
  }
}
