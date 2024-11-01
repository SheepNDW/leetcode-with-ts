/*
  O(n^2)

  consider nums[i] as the peak
  array length = leftLIS[i] + rightLIS[i] - 1

  leftLIS:
  [X X X X i] X X X
  dp[i] = max(dp[j] + 1) for all nums[j] < nums[i]
*/
function minimumMountainRemovals0(nums: number[]): number {
  const n = nums.length;
  const left = Array.from({ length: n }, () => 1);
  const right = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        left[i] = Math.max(left[i], left[j] + 1);
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[i]) {
        right[i] = Math.max(right[i], right[j] + 1);
      }
    }
  }

  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    if (left[i] >= 2 && right[i] >= 2) {
      maxLen = Math.max(maxLen, left[i] + right[i] - 1);
    }
  }

  return n - maxLen;
}

/*
  O(n log n)
*/
function minimumMountainRemovals(nums: number[]): number {
  const n = nums.length;
  const left = Array.from({ length: n }, () => 1);
  const right = Array.from({ length: n }, () => 1);

  const arr: number[] = [];

  for (let i = 0; i < n; i++) {
    if (arr.length === 0 || nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i]);
      left[i] = arr.length;
    } else {
      const idx = lowerBound(arr, nums[i]);
      arr[idx] = nums[i];
      left[i] = idx + 1;
    }
  }

  arr.length = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (arr.length === 0 || nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i]);
      right[i] = arr.length;
    } else {
      const idx = lowerBound(arr, nums[i]);
      arr[idx] = nums[i];
      right[i] = idx + 1;
    }
  }

  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    if (left[i] >= 2 && right[i] >= 2) {
      maxLen = Math.max(maxLen, left[i] + right[i] - 1);
    }
  }

  return n - maxLen;
}

function lowerBound(arr: number[], target: number) {
  let l = 0;
  let r = arr.length;

  while (l < r) {
    const mid = (l + r) >> 1;
    if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
}

export { minimumMountainRemovals };
