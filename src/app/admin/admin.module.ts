import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AdminClassStatusFormComponent } from './admin-class-status-form/admin-class-status-form.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminTimetableFormComponent } from './admin-timetable-form/admin-timetable-form.component';
import { AdminTimetablePreviewCardComponent } from './admin-timetable-preview-card/admin-timetable-preview-card.component';
import { AdminTimetableComponent } from './admin-timetable/admin-timetable.component';

@NgModule({
  declarations: [
    AdminClassStatusFormComponent,
    AdminTimetableComponent,
    AdminTimetableFormComponent,
    AdminTimetablePreviewCardComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [AdminRoutingModule],
})
export class AdminModule {}
