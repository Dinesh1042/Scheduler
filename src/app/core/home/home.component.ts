import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TimeTable } from '../../shared/models/timetable';
import { TimeTableService } from '../../shared/services/time-table.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  timeTable?: TimeTable;
  private subscription: Subscription;
  loading: boolean;

  constructor(private ttService: TimeTableService) {
    this.loading = true;
    this.subscription = this.ttService.getTimeTable().subscribe((timeTable) => {
      this.loading = false;
      this.timeTable = timeTable;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
