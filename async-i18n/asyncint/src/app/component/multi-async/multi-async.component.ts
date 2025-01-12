import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-multi-async',
  standalone: true,
  imports: [],
  templateUrl: './multi-async.component.html',
  styleUrl: './multi-async.component.css',
})
export class MultiAsyncComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const timerSub = timer(5000).subscribe(() =>
      console.log('Timer completed')
    );
    this.subscriptions.add(timerSub);

    const clickSub = this.renderer.listen(document, 'click', () =>
      console.log('Document clicked')
    );

    this.subscriptions.add({
      unsubscribe: () => clickSub(),
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    console.log('All subscriptions unsubscribed');
    
  }
  /*
"As a developer, I want to manage multiple async operations without manually clearing each one to ensure proper cleanup."

Solution
Use Angular’s Renderer2 for event listeners and Subscription for observables to manage resources efficiently.
*/
}
