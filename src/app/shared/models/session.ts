export interface Session {
  classId: string;
  className: string;
  instructor: string;
  classLink: string;
  shortClassName: string;
  sessionStartsAt: number;
  sessionEndsAt: number;
  timing: {
    endsAt: string;
    startsAt: string;
  };
  $key: string;
  duration: string;
}
