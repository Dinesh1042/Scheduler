import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, switchMap } from 'rxjs/operators';

import { ClassStatus } from '../models/classStatus';
import { TimeTable } from '../models/timetable';
import { TimetableItem } from '../models/timetable-item';

@Injectable({
  providedIn: 'root',
})
export class TimeTableService {
  private classStatus!: ClassStatus;

  constructor(private db: AngularFireDatabase) {}

  getClassStatus() {
    return this.db.object<ClassStatus>('/classStatus').valueChanges();
  }

  updateClassStatus(classStatus: ClassStatus) {
    this.db.object<ClassStatus>('/classStatus').update(classStatus);
  }

  getTimeTable() {
    return this.getClassStatus().pipe(
      switchMap((v) => {
        this.classStatus = v!;
        return this.db
          .list(`/timetable`)
          .snapshotChanges()
          .pipe(
            map((u) =>
              u.map((a: any) => ({ $key: a.key, ...a.payload.val() }))
            ),
            map((b) => new TimeTable(b, this.classStatus))
          );
      })
    );
  }

  updateDayOrderDetail($key: string, dayOrderDetail: TimetableItem) {
    this.db.object(`/timetable/${$key}/class`).set(dayOrderDetail.class);
  }

  createDayOrderDetail(dayOrderDetail: TimetableItem) {
    return this.db.list(`/timetable`).push(dayOrderDetail);
  }

  removeDayOrder($key: string) {
    this.db.object(`timetable/${$key}`).remove();
  }

  getDayOrderDetail(dayOrderId: number) {
    return this.db
      .list(`/timetable`, (q) => q.orderByChild(`/order`).equalTo(dayOrderId))
      .snapshotChanges()
      .pipe(
        map(
          (u: any) =>
            new TimetableItem({ $key: u[0].key, ...u[0].payload.val() })
        )
      );
  }
}
