function maximumCandies(candies: number[], k: number): number {
  const maxPiles = candies.reduce((a, c) => a + c, 0);
  if (maxPiles < k) return 0;

  let left = 1;
  let right = Math.floor(maxPiles / k) + 1;

  while (left < right) {
    const mid = (left + right) >> 1;
    let piles = 0;

    for (const candy of candies) {
      piles += Math.floor(candy / mid);
    }

    if (piles < k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left - 1;
}

export { maximumCandies };
