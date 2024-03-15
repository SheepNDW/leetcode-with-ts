/*
  brute force
*/
function numSubarraysWithSum0(nums: number[], goal: number): number {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let prefixSum = 0;

    for (let j = i; j < n; j++) {
      prefixSum += nums[j];
      if (prefixSum === goal) ans++;
      if (prefixSum > goal) break;
    }
  }

  return ans;
}

/*
  prefix + hash

  X X [i X X j] X X X

  sum[i:j] => prefix[j] - prefix[i-1] = goal

  prefix[i-1] = prefix[j] - goal
*/
function numSubarraysWithSum1(nums: number[], goal: number): number {
  const n = nums.length;
  const prefixTable = new Map<number, number>(); // prefix -> count of idx
  prefixTable.set(0, 1);
  let prefixSum = 0;
  let ans = 0;

  for (let j = 0; j < n; j++) {
    prefixSum += nums[j];

    if (prefixTable.has(prefixSum - goal)) {
      ans += prefixTable.get(prefixSum - goal)!;
    }

    prefixTable.set(prefixSum, (prefixTable.get(prefixSum) || 0) + 1);
  }

  return ans;
}

/*
  sliding window
*/
function numSubarraysWithSum(nums: number[], goal: number): number {
  const n = nums.length;
  const postZeros: number[] = new Array(n).fill(0);

  let count = 0;
  for (let i = n - 1; i >= 0; i--) {
    postZeros[i] = count;
    if (nums[i] === 0) {
      count++;
    } else {
      count = 0;
    }
  }

  let j = 0;
  let sum = 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    while (j <= i || (j < n && sum < goal)) {
      sum += nums[j];
      j++;
    }

    if (sum === goal) {
      ans += postZeros[j - 1] + 1;
    }

    sum -= nums[i];
  }

  return ans;
}

export { numSubarraysWithSum };
