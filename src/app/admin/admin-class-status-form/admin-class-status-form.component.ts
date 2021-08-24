import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ClassStatus } from 'src/app/shared/models/classStatus';
import { TimeTable } from 'src/app/shared/models/timetable';
import { TimeTableService } from 'src/app/shared/services/time-table.service';

@Component({
  selector: 'admin-class-status-form',
  templateUrl: './admin-class-status-form.component.html',
  styleUrls: ['./admin-class-status-form.component.scss'],
})
export class AdminClassStatusFormComponent {
  timeTable?: TimeTable;
  classStatusForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private timeTableService: TimeTableService,
    private router: Router
  ) {
    this.classStatusForm = fb.group({
      dayOrder: [null, Validators.required],
      isClassActive: [null, Validators.required],
    });

    timeTableService
      .getTimeTable()
      .pipe(take(1))
      .subscribe((timeTable) => {
        this.timeTable = timeTable;
        this.updateForm();
      });
  }

  private updateForm() {
    if (this.timeTable)
      this.classStatusForm.setValue(this.timeTable.classStatus);
  }

  updateStatus() {
    if (this.dayOrder && this.isClassActive) {
      const statusForm: ClassStatus = {
        dayOrder: +this.dayOrder.value,
        isClassActive: JSON.parse(this.isClassActive.value),
      };

      this.timeTableService.updateClassStatus(statusForm);
      this.router.navigate([`/admin/timetable`]);
    }
  }

  get dayOrder() {
    return this.classStatusForm.get('dayOrder');
  }

  get isClassActive() {
    return this.classStatusForm.get('isClassActive');
  }
}
