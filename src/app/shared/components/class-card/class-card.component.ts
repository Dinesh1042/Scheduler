import { Component, Input } from '@angular/core';

import { Session } from '../../models/session';

@Component({
  selector: 'class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss'],
})
export class ClassCardComponent {
  @Input('session') session!: Session;
  @Input('action') action = false;
  @Input('is-inactive') isInActive = false;
  @Input('active') active = false;
}
