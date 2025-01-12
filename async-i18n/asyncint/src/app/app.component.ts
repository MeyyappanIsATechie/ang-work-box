import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { NotificationComponent } from "./component/notification/notification.component";
import { TimerComponent } from "./component/timer/timer.component";
import { OptimizedDashboardComponent } from "./component/optimized-dashboard/optimized-dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, NotificationComponent, TimerComponent, OptimizedDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'asyncint';
}
