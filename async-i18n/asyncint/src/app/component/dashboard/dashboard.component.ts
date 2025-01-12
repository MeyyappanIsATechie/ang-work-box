import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
private intervalId: any;
refreshCount = 0;

ngOnInit(): void {
  this.intervalId = setInterval(() => {
    this.refreshCount++;
  }, 10000);
}

ngOnDestroy(): void {
  if(this.intervalId) {
    clearInterval(this.intervalId);
    console.log('Interval cleared');
  }
}
}
