function minDays(bloomDay: number[], m: number, k: number): number {
  const n = bloomDay.length;
  if (n < m * k) return -1;

  let left = 1;
  let right = Math.max(...bloomDay);

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (isOk(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;

  function isOk(day: number): boolean {
    let bouquets = 0;
    let consecutive = 0;

    for (let i = 0; i < n; i++) {
      if (bloomDay[i] > day) {
        consecutive = 0;
      } else {
        consecutive += 1;
        if (consecutive === k) {
          bouquets += 1;
          consecutive = 0;
        }
      }
      if (bouquets >= m) return true;
    }

    return false;
  }
}

export { minDays };
