import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './service/app-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'zjscd';
  msg: string;

  constructor(private appService: AppService, private cdRef: ChangeDetectorRef, private zone: NgZone) {
    this.msg = this.appService.getMessage();
  }

  updateMessage() {
    this.msg = this.appService.getMessage();
    this.cdRef.detectChanges(); //trigger change detection
  }

  updateMessageAsync() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.msg = 'Message updated at ' + new Date().toLocaleTimeString();
        this.zone.run(() => {}); //trigger change detection
      }, 2000);
    })
  }
}
