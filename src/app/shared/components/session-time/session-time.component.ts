import { Component, Input } from '@angular/core';

@Component({
  selector: 'session-time',
  templateUrl: './session-time.component.html',
  styleUrls: ['./session-time.component.scss'],
})
export class SessionTimeComponent {
  @Input('sessionStartsAt') sessionStartsAt: number = 0;
  @Input('sessionEndsAt') sessionEndsAt: number = 0;
}
