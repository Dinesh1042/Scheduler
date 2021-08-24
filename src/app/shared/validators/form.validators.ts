import { AbstractControl, ValidationErrors } from '@angular/forms';

import { formatTime } from '../helper/formatTime';

export class FormValidators {
  static sessionTime(control: AbstractControl): ValidationErrors | null {
    const startsAtControl = control.get('startsAt');
    const endsAtControl = control.get('endsAt');

    const startsAt = formatTime(startsAtControl?.value).getTime();
    const endsAt = formatTime(endsAtControl?.value).getTime();

    return startsAt >= endsAt ? { sessionTime: true } : null;
  }

  static validClassId(control: AbstractControl): ValidationErrors | null {
    const CLASS_ID_REGEX = /^[a-z]{3}\-[a-z]{4}\-[a-z]{3}/;

    return CLASS_ID_REGEX.test(control.value) ? null : { validClassId: true };
  }
}
