import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { DayOrderDetailComponent } from './day-order-detail/day-order-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimeTableComponent } from './time-table/time-table.component';

@NgModule({
  declarations: [
    NavbarComponent,
    TimeTableComponent,
    HomeComponent,
    DayOrderDetailComponent,
    LoginComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild([])],
  exports: [NavbarComponent],
})
export class CoreModule {}
