import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
showNotification = false;

showNotificationFn() {
  this.showNotification = true;
  setTimeout(() => {
    this.showNotification = false;
  }, 3000);
}
}
