import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Output() formSubmitted = new EventEmitter<{name: string}>();

  name = '';

  submitForm(): void {
    this.formSubmitted.emit({ name: this.name });
  }
}
