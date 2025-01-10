import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  interval,
  Observable,
  Subject,
  Subscription,
  take,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent {
  private subscription!: Subscription;
  observable$ = interval(1000);

  ngOnInit() {
    const observable = new Observable((observer) => {
      const intervalId = setInterval(() => {
        observer.next('Emitting value...');
      }, 1000);

      //cleanup
      return () => {
        clearInterval(intervalId);
      };
    });

    this.subscription = observable.subscribe((value) => {
      console.log(value);
    });

    //other ways to unsubscribe
    interval(1000)
      .pipe(take(3))
      .subscribe((v) => console.log(v)); // Outputs: 0, 1, 2

    const stop$ = new Subject<void>();

    interval(1000)
      .pipe(takeUntil(stop$))
      .subscribe((v) => console.log(v)); // Emits values until stop$.next() is called
    setTimeout(() => {
      stop$.next(); // stop emitting values after 3 seconds
    }, 3000);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe(); // ensure to unsubscribe when component is destroyed to prevent memory leaks
      console.log('observable cancelled');
    }
  }
}
