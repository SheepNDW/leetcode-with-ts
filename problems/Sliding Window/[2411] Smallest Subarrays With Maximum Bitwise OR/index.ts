function smallestSubarrays(nums: number[]): number[] {
  const n = nums.length;
  const res = new Array(n).fill(0);
  const count = new Array(32).fill(0);

  let j = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    for (let k = 0; k < 32; k++) {
      count[k] += (nums[i] >> k) & 1;
    }

    while (j > i && canSkip(nums[j], count)) {
      for (let k = 0; k < 32; k++) {
        count[k] -= (nums[j] >> k) & 1;
      }
      j--;
    }
    res[i] = j - i + 1;
  }

  return res;
}

function canSkip(num: number, count: number[]): boolean {
  for (let k = 0; k < 32; k++) {
    if (count[k] === 1 && (num >> k) & 1) {
      return false;
    }
  }
  return true;
}

export { smallestSubarrays };
