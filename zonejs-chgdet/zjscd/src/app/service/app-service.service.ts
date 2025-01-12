import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getMessage() {
    return 'Hello from AppService';
  }
}
