import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

// A Promise represents a single asynchronous computation that either resolves or rejects. It is eager and starts executing immediately.

// Key Features:
// Single value emission.
// Not cancellable.
// Useful for one-time asynchronous operations like HTTP calls.

// An Observable represents a lazy stream of values over time. It can emit multiple values and is cancellable.

// Key Features:
// Supports multiple values over time.
// Works well with RxJS operators for powerful transformations.
// Typically used in Angular for HTTP requests, events, etc.

/* 
A Subject is both an Observable and an Observer. It allows manual control over emissions.

Key Features:
Does not store previous values.
Emits values to all active subscribers.
Useful for multicasting events.
*/
export class MasterService {
  constructor() {}

  getDataWithPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data received from server');
      }, 2000);
    });
  }

  getDataWithObservable(): Observable<string> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next('Data fetched with Observable');
        observer.complete();
      }, 2000);
    });
  }

  private subject = new Subject<string>();

  getDataWithSubject(): Observable<string> {
    return this.subject.asObservable();
  }

  emitData(data: string): void {
    this.subject.next(data);
  }

  //behavior subjects

  private behaviorSubject = new BehaviorSubject<string>('Initial data');

  getDataWithBehaviorSubject(): Observable<string> {
    return this.behaviorSubject.asObservable();
  }

  changeData(data: string): void {
    this.behaviorSubject.next(data);
  }

  private replaySubject = new ReplaySubject<string>(2); // Buffer size of 2

  sendData(data: string) {
    this.replaySubject.next(data);
  }

  getData(): Observable<string> {
    return this.replaySubject.asObservable();
  }
}
