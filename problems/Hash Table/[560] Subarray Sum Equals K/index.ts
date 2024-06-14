/*
  X X X [X X X X]
         j     i
  s[i:j] = presum[i] - presum[j-1]

  TC: O(n^2)
  SC: O(n)
*/
function subarraySum0(nums: number[], k: number): number {
  const n = nums.length;
  const prefixSums = new Array<number>(n + 1).fill(0);
  let count = 0;

  // First pass: Compute prefix sums
  for (let i = 0; i < n; i++) {
    prefixSums[i + 1] = prefixSums[i] + nums[i];
  }

  // Second pass: Count subarrays with sum k
  for (let j = 0; j < n; j++) {
    for (let i = j + 1; i <= n; i++) {
      if (prefixSums[i] - prefixSums[j] === k) {
        count++;
      }
    }
  }

  return count;
}

// without space
function subarraySum1(nums: number[], k: number): number {
  const n = nums.length;
  let count = 0;

  for (let j = 0; j < n; j++) {
    let sum = 0;

    for (let i = j; i < n; i++) {
      sum += nums[i];
      if (sum === k) count++;
    }
  }

  return count;
}

/*
  presum + hash map
  TC: O(n)
  SC: O(n)
*/
function subarraySum(nums: number[], k: number): number {
  const prefixCount = new Map<number, number>();
  prefixCount.set(0, 1);

  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const diff = sum - k;
    count += prefixCount.get(diff) || 0;
    prefixCount.set(sum, (prefixCount.get(sum) || 0) + 1);
  }

  return count;
}

export { subarraySum };
