import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DayOrderDetailComponent } from './core/day-order-detail/day-order-detail.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { TimeTableComponent } from './core/time-table/time-table.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'login', component: LoginComponent },

  {
    path: 'timetable',
    component: TimeTableComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'timetable/day-order/:dayOrderId',
    component: DayOrderDetailComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
