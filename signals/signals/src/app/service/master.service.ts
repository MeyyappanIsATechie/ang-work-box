import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
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

export class MasterService {

  constructor() { }

  getDataWithPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data received from server');
      }, 2000);
    });
  }

  getDataWithObservable(): Observable<string> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next('Data fetched with Observable');
        observer.complete();
      }, 2000);
    });
  }
}
