function maxFreeTime(eventTime: number, startTime: number[], endTime: number[]): number {
  const n = startTime.length;
  const q = new Array(n).fill(false);

  let t1 = 0;
  let t2 = 0;
  for (let i = 0; i < n; i++) {
    if (endTime[i] - startTime[i] <= t1) {
      q[i] = true;
    }
    t1 = Math.max(t1, startTime[i] - (i === 0 ? 0 : endTime[i - 1]));

    if (endTime[n - i - 1] - startTime[n - i - 1] <= t2) {
      q[n - 1 - i] = true;
    }
    t2 = Math.max(t2, (i === 0 ? eventTime : startTime[n - i]) - endTime[n - 1 - i]);
  }

  let res = 0;

  for (let i = 0; i < n; i++) {
    let left = i === 0 ? 0 : endTime[i - 1];
    let right = i === n - 1 ? eventTime : startTime[i + 1];

    if (q[i]) {
      res = Math.max(res, right - left);
    } else {
      res = Math.max(res, right - left - (endTime[i] - startTime[i]));
    }
  }

  return res;
}

export { maxFreeTime };
