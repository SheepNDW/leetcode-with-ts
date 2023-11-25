function maxCoins(piles: number[]): number {
  let ans = 0;
  piles.sort((a, b) => b - a);
  const rounds = piles.length / 3;

  for (let i = 0; i < rounds; i++) {
    ans += piles[2 * i + 1];
  }

  return ans;
}

export { maxCoins };
