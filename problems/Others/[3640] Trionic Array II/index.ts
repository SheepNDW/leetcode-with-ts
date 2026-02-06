function maxSumTrionic(nums: number[]): number {
  const n = nums.length;
  const decArr = splitDecreasingSubarrays(nums);

  let res = -Infinity;

  for (const [start, end] of decArr) {
    if (start - 1 < 0) continue;
    if (end + 1 >= n) continue;
    if (nums[start - 1] >= nums[start]) continue;
    if (nums[end + 1] <= nums[end]) continue;

    // 找 start 往前的最大和
    let sum = nums[start - 1];
    let maxSumPrefix = sum;
    for (let i = start - 2; i >= 0; i--) {
      if (nums[i] >= nums[i + 1]) break;
      sum += nums[i];
      maxSumPrefix = Math.max(maxSumPrefix, sum);
    }

    // 找 end 往後的最大和
    sum = nums[end + 1];
    let maxSumSuffix = sum;
    for (let i = end + 2; i < n; i++) {
      if (nums[i] <= nums[i - 1]) break;
      sum += nums[i];
      maxSumSuffix = Math.max(maxSumSuffix, sum);
    }

    // 計算目前下降子陣列和
    sum = 0;
    for (let i = start; i <= end; i++) {
      sum += nums[i];
    }

    res = Math.max(res, sum + maxSumPrefix + maxSumSuffix);
  }

  return res;
}

function splitDecreasingSubarrays(nums: number[]): [start: number, end: number][] {
  const n = nums.length;
  const res: [start: number, end: number][] = [];

  let i = 0;
  while (i < n) {
    let j = i;
    while (j + 1 < n && nums[j] > nums[j + 1]) {
      j++;
    }
    if (j > i) {
      res.push([i, j]);
    }
    i = j + 1;
  }

  return res;
}

export { maxSumTrionic };
