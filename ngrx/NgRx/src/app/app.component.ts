import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { selectCount, selectCounterState } from './store/counter.selector';
import { decrementCounter, incrementCounter } from './store/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NgRx';

  counter$: Observable<number> = new Observable<number>();

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(selectCount);
  }

  //increment
  increment() {
    this.store.dispatch(incrementCounter());
  }

  //decrement
  decrement() {
    this.store.dispatch(decrementCounter());
  }
}
