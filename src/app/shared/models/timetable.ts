import { ClassStatus } from './classStatus';
import { TimetableItem } from './timetable-item';

export class TimeTable {
  classes: TimetableItem[] = [];

  constructor(res: any[], public classStatus: ClassStatus) {
    this.initializeTimeTableItem(res);
    this.initializeIsActive();
  }

  private initializeTimeTableItem(res: any[]) {
    res.forEach((v) => this.classes.push(new TimetableItem(v)));
  }

  get nullFilledClasses() {
    const maxCountLength = this.maxClassLength;
    let newClasses = Array.from(this.classes);

    newClasses = newClasses.map((i: any) => {
      const c = i.class.slice();
      while (c.length <= maxCountLength) {
        c.push(null);
      }
      return c;
    });
    return newClasses;
  }

  get todayClasses() {
    return this.classes[this.classStatus.dayOrder - 1].class;
  }

  get currentSession() {
    return this.todayClasses.find(
      (v) => this.time >= v.sessionStartsAt && this.time < v.sessionEndsAt
    );
  }

  get finishedSessions() {
    return this.todayClasses.filter((i) => i.sessionEndsAt < this.time);
  }

  get upComingSessions() {
    return this.todayClasses.filter((i) => i.sessionStartsAt > this.time);
  }

  private get time() {
    return new Date().getTime();
  }

  private initializeIsActive() {
    const date = new Date();
    const day = date.getDay();
    if (!day) this.classStatus.isClassActive = false;
  }

  get maxClassLength() {
    return this.classes.length
      ? this.classes.sort((a, b) => b.class.length - a.class.length)[0].class
          .length
      : 0;
  }
}
