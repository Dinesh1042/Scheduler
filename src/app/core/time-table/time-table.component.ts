import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TimeTable } from '../../shared/models/timetable';
import { TimeTableService } from '../../shared/services/time-table.service';

@Component({
  selector: 'time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss'],
})
export class TimeTableComponent {
  timeTable$: Observable<TimeTable>;

  constructor(
    private timeTableService: TimeTableService,
    private router: Router
  ) {
    this.timeTable$ = timeTableService.getTimeTable();
  }

  detailView(dayOrderId: number) {
    this.router.navigate([`/timetable/day-order/`, dayOrderId]);
  }
}
