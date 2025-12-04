function countTrapezoids(points: number[][]): number {
  const MOD = 1000000007n;
  const yMap = new Map<number, number>();

  for (const [x, y] of points) {
    yMap.set(y, (yMap.get(y) || 0) + 1);
  }

  // 每條水平線的組合數 C(k, 2)
  const lines: bigint[] = [];
  for (const k of yMap.values()) {
    if (k >= 2) {
      const kb = BigInt(k);
      const c2 = ((kb * (kb - 1n)) / 2n) % MOD;
      lines.push(c2);
    }
  }

  if (lines.length < 2) return 0;

  let count = 0n;
  let presum = 0n;

  for (const c2 of lines) {
    count = (count + presum * c2) % MOD;
    presum = (presum + c2) % MOD;
  }

  return Number(count);
}

export { countTrapezoids };
