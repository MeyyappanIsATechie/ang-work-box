import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  timeLeft = 10;
  private intervalId: any;
  isTimerRunning = false;

  //"As a user, I want to cancel a countdown timer if I decide not to wait anymore."
  startTimer() {
    if(this.isTimerRunning) return;
    this.isTimerRunning = true;

    this.intervalId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.cancelTimer();
        this.timeLeft = 10;
        console.log('Timer has ended!');
      }
    }, 1000);
  }

  cancelTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isTimerRunning = false;
    console.log('Timer has been cancelled!');
    
  }
}
