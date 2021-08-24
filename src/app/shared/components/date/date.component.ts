import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DateService } from '../../services/date.service';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  time$: Observable<Date>;

  constructor(private dateService: DateService) {
    this.time$ = this.dateService.time$;
  }
}
