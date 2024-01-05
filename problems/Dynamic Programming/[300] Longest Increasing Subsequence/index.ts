// memoization
function lengthOfLIS0(nums: number[]): number {
  const memo = new Map<number, number>();

  function getLIS(index: number, memo: Map<number, number>): number {
    if (memo.has(index)) return memo.get(index)!;

    let max = 1;
    for (let i = index - 1; i >= 0; i--) {
      if (nums[index] > nums[i]) {
        max = Math.max(max, 1 + getLIS(i, memo));
      }
    }

    memo.set(index, max);
    return max;
  }

  let ans = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    ans = Math.max(ans, getLIS(i, memo));
  }

  return ans;
}

// DP
// dp[i]: the length of the longest strictly increasing subsequence for nums[0:i] ending with nums[i]
function lengthOfLIS1(nums: number[]): number {
  const n = nums.length;
  const dp = Array<number>(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let ans = 0;

  for (const lis of dp) {
    ans = Math.max(ans, lis);
  }

  return ans;
}

// greedy + binary search  Time: O(n log n)
function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  const q = [nums[0]];

  for (let i = 1; i < n; i++) {
    if (q[q.length - 1] < nums[i]) {
      q.push(nums[i]);
    } else {
      const idx = findIndex(q, nums[i]);
      if (idx !== -1) q[idx] = nums[i];
    }
  }

  return q.length;
}

function findIndex(arr: number[], numToReplace: number): number {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const mid = (l + r) >> 1;
    if (arr[mid] < numToReplace) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return arr[l] >= numToReplace ? l : -1;
}

export { lengthOfLIS };
