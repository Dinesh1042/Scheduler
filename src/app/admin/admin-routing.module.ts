import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAuthGuard } from '../shared/services/admin-auth.guard';
import { AuthGuard } from '../shared/services/auth.guard';
import { AdminClassStatusFormComponent } from './admin-class-status-form/admin-class-status-form.component';
import { AdminTimetableFormComponent } from './admin-timetable-form/admin-timetable-form.component';
import { AdminTimetableComponent } from './admin-timetable/admin-timetable.component';

const routes: Routes = [
  {
    path: 'admin/timetable',
    component: AdminTimetableComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },

  {
    path: 'admin/timetable/day-order/:dayOrderId',
    component: AdminTimetableFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },

  {
    path: 'admin/timetable/new-timetable',
    component: AdminTimetableFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },

  {
    path: 'admin/timetable/class-status',
    component: AdminClassStatusFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
