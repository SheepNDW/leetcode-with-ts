// brute force
function getSumAbsoluteDifference1(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = [];

  for (let i = 0; i < n; i++) {
    const curr = nums[i];
    let diff = 0;
    for (let j = 0; j < n; j++) {
      if (j === i) continue;
      diff += Math.abs(curr - nums[j]);
    }
    result.push(diff);
  }

  return result;
}

// prefix sum
function getSumAbsoluteDifferences(nums: number[]): number[] {
  const n = nums.length;
  const prefix: number[] = new Array(n).fill(0);
  prefix[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  const result: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const leftSum = prefix[i] - nums[i];
    const rightSum = prefix[n - 1] - prefix[i];

    const leftCount = i;
    const rightCount = n - 1 - i;

    const leftTotal = leftCount * nums[i] - leftSum;
    const rightTotal = rightSum - rightCount * nums[i];

    result[i] = leftTotal + rightTotal;
  }

  return result;
}

export { getSumAbsoluteDifferences };
