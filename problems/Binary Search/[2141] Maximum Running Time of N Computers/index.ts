function maxRunTime(n: number, batteries: number[]): number {
  const total = batteries.reduce((acc, x) => acc + x, 0);
  let left = 0;
  let right = Math.floor(total / n) + 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (check(mid, n, batteries)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // left 是第一個不可行解
  return left - 1;
}

function check(t: number, n: number, batteries: number[]): boolean {
  const needed = t * n;
  let sum = 0;

  for (const x of batteries) {
    sum += Math.min(x, t);
    if (sum >= needed) return true;
  }

  return false;
}

export { maxRunTime };
