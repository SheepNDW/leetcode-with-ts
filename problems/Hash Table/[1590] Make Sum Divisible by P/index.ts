/*
  X X X [i X X j] X X X

  totalSum % p = r0
  sum[i:j] = presum[j] - presum[i-1]
    r0             r           r-r0

  Map[r'] = i'
*/
function minSubarray(nums: number[], p: number): number {
  const totalSum = nums.reduce((a, c) => a + c, 0);
  const r0 = totalSum % p;
  if (r0 === 0) return 0;

  const n = nums.length;
  let res = n;

  const remainToIndex = new Map<number, number>();
  remainToIndex.set(0, -1);
  let presum = 0;

  for (let j = 0; j < n; j++) {
    presum = (presum + nums[j]) % p; // r
    const dr = (presum - r0 + p) % p;

    if (remainToIndex.has(dr)) {
      const i = remainToIndex.get(dr)! + 1;
      res = Math.min(res, j - i + 1);
    }

    remainToIndex.set(presum, j);
  }

  return res === n ? -1 : res;
}

export { minSubarray };
