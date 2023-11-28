function numberOfWays(corridor: string): number {
  const MOD = 1e9 + 7;
  const seatIndex: number[] = [];

  for (let i = 0; i < corridor.length; i++) {
    if (corridor[i] === 'S') seatIndex.push(i);
  }

  if (seatIndex.length === 0 || seatIndex.length % 2 !== 0) return 0;

  let ways = 1;
  for (let i = 2; i < seatIndex.length; i += 2) {
    const diff = seatIndex[i] - seatIndex[i - 1];
    ways = (ways * diff) % MOD; // 計算每對座位之間的劃分方式
  }

  return ways;
}

export { numberOfWays };
