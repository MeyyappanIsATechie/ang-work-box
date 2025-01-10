import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// What are Signals?
// Signals are a new reactive primitive introduced in Angular to manage state in a reactive way. They are part of Angular’s shift toward a more predictable and efficient state management system.

// Core Idea:
// Signals act like a reactive data store. When the value of a signal changes, Angular knows about the change and automatically updates the UI without the need for manual change detection.

// Key Features:

// Tracks dependencies automatically.
// Simplifies reactive programming compared to traditional approaches.
// Avoids the overhead of ChangeDetectionStrategy or async pipes in certain cases.

export class AppComponent implements OnInit {
  title = 'signals';

  ngOnInit(): void {
    this.service.getDataWithPromise().then(data => {
      console.log('Data:', data);
    })
    this.service.getDataWithObservable().subscribe(data => {
      console.log('Data:', data);
    })
    console.log('AppComponent initialized');
    console.log(this.c());
    // this.a = 50;
    //signals
    this.a.set(50);
    console.log(this.c());
    
  }

  constructor(private service: MasterService) {
    //effects
    effect(()=>{
      //cannot modify signals here
      console.log('Count:', this.count());
    })

  }

  count = signal(0);
  colors = signal(["Red", "Green", "Yellow"]);
  length = signal(20)
  breadth = signal(40)
  area = computed(() => this.length() * this.breadth());

  // a = 10;
  // b = 20;
  // c = this.a + this.b;
  
  //using signals
  a = signal(10);
  b = signal(20);
  c = computed(() => this.a() + this.b());
  increment(): void {
    // this.count++;
    // this.count.set(this.count() + 1);
    //using update
    this.count.update((val) => val + 1);
    console.log('Count incremented:', this.count());
    //'mutate' dropped in A17
    this.colors.update((colors) => colors.includes("Blue")? colors : [...colors, "Blue"]);
    this.length.update((length) => length + 10);
  }
}
