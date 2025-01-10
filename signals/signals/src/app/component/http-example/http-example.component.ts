import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-example',
  standalone: true,
  imports: [],
  templateUrl: './http-example.component.html',
  styleUrl: './http-example.component.css'
})
export class HttpExampleComponent implements OnDestroy {
private subscription!: Subscription;

  constructor(private http: HttpClient) {}

  makeRequest() {
    this.subscription = this.http.get('https://jsonplaceholder.typicode.com/posts')
     .subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.error(error);
      });
  }

  ngOnDestroy(): void {
      if(this.subscription) {
        this.subscription.unsubscribe();
        console.log('HTTP Request cancelled');
        
      }
  }
}
