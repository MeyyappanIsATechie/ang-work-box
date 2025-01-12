import { CurrencyPipe } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-internationalization',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './internationalization.component.html',
  styleUrl: './internationalization.component.css'
})
export class InternationalizationComponent {
total = 500.50;
}
