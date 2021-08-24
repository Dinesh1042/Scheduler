import { formatTime } from '../helper/formatTime';
import { Session } from './session';

export class TimetableItem {
  class: Array<Session> = [];
  $key: string;
  order: number;

  constructor(item: { class: Session[]; $key: string; order: number }) {
    this.$key = item.$key;
    this.order = item.order;

    this.class = item.class.map((v) => ({
      ...v,
      sessionStartsAt: formatTime(v.timing.startsAt).getTime(),
      sessionEndsAt: formatTime(v.timing.endsAt).getTime(),
      duration: this.getDuration(v.timing),
      classLink: `https://meet.google.com/${v.classId}`,
    }));
  }

  private getDuration(timing: { startsAt: string; endsAt: string }) {
    const { startsAt, endsAt } = timing;

    const startTime = formatTime(startsAt);
    const endTime = formatTime(endsAt);

    const hours = endTime.getHours() - startTime.getHours();
    let minutes = endTime.getMinutes() - startTime.getMinutes();

    let finalStr = ``;

    if (hours > 0) finalStr += `${hours} ${hours > 1 ? 'Hours' : 'Hour'} `;

    if (minutes > 0)
      finalStr += `${
        minutes <= 9
          ? `0${minutes}${minutes > 1 ? ' Minutes' : ' Minute'}`
          : `${minutes} Minutes`
      }`;
    return finalStr;
  }
}
