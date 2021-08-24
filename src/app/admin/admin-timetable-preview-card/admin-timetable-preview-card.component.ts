import { Component, Input } from '@angular/core';
import { TimetableItem } from 'src/app/shared/models/timetable-item';

@Component({
  selector: 'admin-timetable-preview-card',
  templateUrl: './admin-timetable-preview-card.component.html',
  styleUrls: ['./admin-timetable-preview-card.component.scss'],
})
export class AdminTimetablePreviewCardComponent {
  detail?: TimetableItem;
  @Input('dayOrderId') dayOrderId: string | null = null;
  @Input('totalDayOrder') totalDayOrder: number | null = null;
  @Input('dayOrderDetail') get dayOrderDetail() {
    return this.detail;
  }
  set dayOrderDetail(c) {
    if (c) this.detail = new TimetableItem(c);
  }
}
