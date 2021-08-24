export function formatTime(time: string) {
  const date = new Date();
  return new Date(date.toString().split(':')[0].slice(0, -2) + time);
}
