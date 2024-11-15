function minimizedMaximum(n: number, quantities: number[]): number {
  let min = 1;
  let max = Math.max(...quantities) + 1;

  while (min < max) {
    const mid = (min + max) >> 1;

    if (canDistribute(quantities, n, mid)) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return min;
}

function canDistribute(quantities: number[], n: number, k: number): boolean {
  const m = quantities.length;

  for (let i = 0; i < m; i++) {
    const costs = Math.ceil(quantities[i] / k);
    n -= costs;
    if (n < 0) break;
  }

  return n >= 0;
}

export { minimizedMaximum };
