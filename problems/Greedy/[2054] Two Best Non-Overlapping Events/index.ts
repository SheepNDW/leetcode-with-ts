import { upperBound } from '../../utils/upperbound';

function maxTwoEvents(events: number[][]): number {
  const n = events.length;
  events.sort((a, b) => a[1] - b[1]);

  const rollingMax: number[] = [];
  let m = 0;
  for (let i = 0; i < n; i++) {
    m = Math.max(m, events[i][2]);
    rollingMax[i] = m;
  }

  const endTimes: number[] = [];
  let res = 0;

  for (let i = 0; i < n; i++) {
    const start = events[i][0] - 1;
    const end = events[i][1];
    const value = events[i][2];
    res = Math.max(res, value);

    let pos = upperBound(endTimes, start);
    if (pos > 0) {
      pos -= 1;
      res = Math.max(res, rollingMax[pos] + value);
    }

    endTimes.push(end);
  }

  return res;
}

export { maxTwoEvents };
