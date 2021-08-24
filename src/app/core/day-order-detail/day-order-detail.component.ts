import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TimetableItem } from '../../shared/models/timetable-item';
import { TimeTableService } from '../../shared/services/time-table.service';

@Component({
  selector: 'day-order-detail',
  templateUrl: './day-order-detail.component.html',
  styleUrls: ['./day-order-detail.component.scss'],
})
export class DayOrderDetailComponent implements OnInit {
  dayOrderId: string | null;
  dayOrderDetail$?: Observable<TimetableItem | null>;

  constructor(
    private timeTableService: TimeTableService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.dayOrderId = this.route.snapshot.paramMap.get('dayOrderId');
  }

  ngOnInit(): void {
    if (this.dayOrderId)
      this.dayOrderDetail$ = this.timeTableService.getDayOrderDetail(
        +this.dayOrderId
      );
  }

  goBack() {
    this.location.back();
  }
}
