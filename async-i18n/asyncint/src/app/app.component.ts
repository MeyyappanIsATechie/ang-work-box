import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { NotificationComponent } from "./component/notification/notification.component";
import { TimerComponent } from "./component/timer/timer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, NotificationComponent, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'asyncint';
}
