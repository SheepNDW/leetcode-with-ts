// brute force
function isZeroArray0(nums: number[], queries: number[][]): boolean {
  for (const [l, r] of queries) {
    for (let i = l; i <= r; i++) {
      if (nums[i] === 0) continue;
      nums[i] -= 1;
    }
  }

  return nums.reduce((a, c) => a + c, 0) === 0;
}

// diff array
function isZeroArray(nums: number[], queries: number[][]): boolean {
  const n = nums.length;
  const diff = new Array(n + 1).fill(0);

  for (const [l, r] of queries) {
    diff[l] += 1;
    diff[r + 1] -= 1;
  }

  let prefix = 0;
  for (let i = 0; i < n; i++) {
    prefix += diff[i];
    if (nums[i] > prefix) return false;
  }

  return true;
}

export { isZeroArray };
