import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TimeTable } from 'src/app/shared/models/timetable';
import { TimeTableService } from 'src/app/shared/services/time-table.service';

@Component({
  selector: 'admin-timetable',
  templateUrl: './admin-timetable.component.html',
  styleUrls: ['./admin-timetable.component.scss'],
})
export class AdminTimetableComponent {
  timeTable$?: Observable<TimeTable>;

  constructor(timeTableService: TimeTableService, private router: Router) {
    this.timeTable$ = timeTableService.getTimeTable();
  }

  addClass(classOrderCount: number) {
    if (classOrderCount >= 6) return;
    this.router.navigate(['/admin/timetable/new-timetable']);
  }
}
