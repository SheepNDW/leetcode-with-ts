function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
  const diff: number[] = [];
  nums.forEach((x) => diff.push((x ^ k) - x));
  diff.sort((a, b) => b - a);

  let totalDiff = 0;
  let maxDiff = 0;
  for (let i = 0; i + 1 < diff.length; i += 2) {
    totalDiff += diff[i] + diff[i + 1];
    if (totalDiff > maxDiff) {
      maxDiff = totalDiff;
    }
  }

  return maxDiff + nums.reduce((a, c) => a + c, 0);
}

export { maximumValueSum };
