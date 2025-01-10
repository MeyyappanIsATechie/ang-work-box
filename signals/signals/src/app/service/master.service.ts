import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// A Promise represents a single asynchronous computation that either resolves or rejects. It is eager and starts executing immediately.

// Key Features:
// Single value emission.
// Not cancellable.
// Useful for one-time asynchronous operations like HTTP calls.

export class MasterService {

  constructor() { }

  getDataWithPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data received from server');
      }, 2000);
    });
  }
}
