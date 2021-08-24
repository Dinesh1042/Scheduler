import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { TimetableItem } from 'src/app/shared/models/timetable-item';
import { TimeTableService } from 'src/app/shared/services/time-table.service';
import { FormValidators } from 'src/app/shared/validators/form.validators';

import { Session } from '../../shared/models/session';

@Component({
  selector: 'admin-timetable-form',
  templateUrl: './admin-timetable-form.component.html',
  styleUrls: ['./admin-timetable-form.component.scss'],
})
export class AdminTimetableFormComponent implements OnInit {
  timeTableForm: FormGroup;
  dayOrderId: null | string = null;
  totalDayOrder: number | null = null;
  private dayOrderDetail: TimetableItem | null = null;

  constructor(
    private fb: FormBuilder,
    private timeTableService: TimeTableService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.timeTableForm = fb.group({
      class: fb.array([]),
    });

    this.dayOrderId = this.route.snapshot.paramMap.get('dayOrderId');
  }

  ngOnInit(): void {
    this.dayOrderId
      ? this.timeTableService
          .getDayOrderDetail(+this.dayOrderId)
          .pipe(take(1))
          .subscribe((timeTable) => {
            this.dayOrderDetail = timeTable;
            this.updateForm(timeTable);
          })
      : this.timeTableService
          .getTimeTable()
          .pipe(take(1))
          .subscribe(
            (timetable) => (this.totalDayOrder = timetable.classes.length + 1)
          );
  }

  private updateForm(timeTable: TimetableItem) {
    timeTable.class.forEach((i) => this.addSession(i));
  }

  save() {
    const session = this.timeTableForm.value;

    const newSession = {
      ...session,
      order: this.totalDayOrder,
    };

    this.dayOrderId
      ? this.timeTableService.updateDayOrderDetail(
          this.dayOrderDetail!.$key,
          session
        )
      : this.timeTableService.createDayOrderDetail(newSession);
    this.router.navigate(['/admin/timetable']);
  }

  get sessions() {
    return this.timeTableForm.controls['class'] as FormArray;
  }

  addSession(session?: Session) {
    if (this.sessions.controls.length >= 5) return;

    const { className, classId, instructor, shortClassName, timing } =
      session || {};

    const sessionForm = this.fb.group({
      classId: [
        classId || null,
        [Validators.required, FormValidators.validClassId],
      ],
      className: [className || null, [Validators.required]],
      instructor: [instructor || null, [Validators.required]],
      shortClassName: [
        shortClassName || null,
        [Validators.required, Validators.maxLength(5)],
      ],
      timing: this.fb.group(
        {
          startsAt: [
            timing?.startsAt || null,
            [Validators.required, Validators.min(0), Validators.max(24)],
          ],
          endsAt: [
            timing?.endsAt || null,
            [Validators.required, Validators.max(24)],
          ],
        },
        {
          validators: [FormValidators.sessionTime],
        }
      ),
    });

    this.sessions.push(sessionForm);
  }

  delete() {
    if (this.dayOrderDetail)
      this.timeTableService.removeDayOrder(this.dayOrderDetail.$key);
    this.router.navigate(['/admin/timetable']);
  }

  removeSession(index: number) {
    this.sessions.removeAt(index);
  }
}
