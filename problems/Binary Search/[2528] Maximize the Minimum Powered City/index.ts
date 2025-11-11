function maxPower(stations: number[], r: number, k: number): number {
  let left = 0;
  let right = Number.MAX_SAFE_INTEGER;

  while (left < right) {
    const mid = Math.ceil((left + right) / 2);

    if (isOk([...stations], r, k, mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function isOk(stations: number[], r: number, k: number, target: number) {
  const n = stations.length;
  let sum = 0;

  for (let i = 0; i <= Math.min(r - 1, n - 1); i++) {
    sum += stations[i];
  }

  for (let i = 0; i < n; i++) {
    if (i + r < n) sum += stations[i + r];
    if (i - r - 1 >= 0) sum -= stations[i - r - 1];

    if (sum >= target) continue;

    const diff = target - sum;

    if (diff > k) return false;

    stations[Math.min(i + r, n - 1)] += diff;
    sum = target;
    k -= diff;
  }

  return true;
}

export { maxPower };
