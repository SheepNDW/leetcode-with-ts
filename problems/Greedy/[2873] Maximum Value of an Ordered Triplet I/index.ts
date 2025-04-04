/*
  brute force
  Time complexity: O(n^3)
*/
function maximumTripletValue0(nums: number[]): number {
  const n = nums.length;
  let res = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (nums[i] - nums[j] < 0) continue;

      for (let k = j + 1; k < n; k++) {
        res = Math.max(res, (nums[i] - nums[j]) * nums[k]);
      }
    }
  }

  return res;
}

/*
  greedy
  Time complexity: O(n^2)
*/
function maximumTripletValue1(nums: number[]): number {
  const n = nums.length;
  let res = 0;
  let preMax = nums[0];

  for (let j = 1; j < n - 1; j++) {
    if (nums[j] > preMax) {
      preMax = nums[j];
      continue;
    }

    for (let k = j + 1; k < n; k++) {
      res = Math.max(res, (preMax - nums[j]) * nums[k]);
    }
  }

  return res;
}

/*
  greedy + prefix
  Time complexity: O(n)
*/
function maximumTripletValue(nums: number[]): number {
  const n = nums.length;

  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], nums[i - 1]);
    rightMax[n - i - 1] = Math.max(rightMax[n - i], nums[n - i]);
  }

  let res = 0;

  for (let j = 1; j < n - 1; j++) {
    res = Math.max(res, (leftMax[j] - nums[j]) * rightMax[j]);
  }

  return res;
}

export { maximumTripletValue };
