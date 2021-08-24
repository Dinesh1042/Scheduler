import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  get time$() {
    return timer(0, 10000).pipe(map(() => new Date()));
  }
}
