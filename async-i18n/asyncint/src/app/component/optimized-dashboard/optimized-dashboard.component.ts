import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-optimized-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './optimized-dashboard.component.html',
  styleUrl: './optimized-dashboard.component.css',
})
export class OptimizedDashboardComponent implements OnInit, OnDestroy {
  private refreshSubscription!: Subscription;
  refreshCount = 0;


//   "As a developer, I want to ensure that all timers are managed properly and cleaned up to avoid memory leaks or unexpected behaviors."

// Solution
// Use Angular's NgZone and the RxJS timer/interval operators for better management of async tasks.

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.refreshSubscription = interval(10000).subscribe(() => {
        this.zone.run(() => {
          this.refreshDashboard();
        });
      });
    });
  }

  refreshDashboard(): void {
    this.refreshCount++;
    console.log('Refreshed Dashboard', this.refreshCount);
  }

  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
      console.log('Subscription Unsubscribed');
    }
  }
}
