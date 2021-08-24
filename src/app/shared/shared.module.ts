import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClassCardComponent } from './components/class-card/class-card.component';
import { DateComponent } from './components/date/date.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SessionTimeComponent } from './components/session-time/session-time.component';

@NgModule({
  declarations: [
    SessionTimeComponent,
    LoaderComponent,
    DateComponent,
    ClassCardComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [
    SessionTimeComponent,
    LoaderComponent,
    DateComponent,
    NgbModule,
    ClassCardComponent,
  ],
})
export class SharedModule {}
