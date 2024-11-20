/*
  use set
*/
function maximumSubarraySum0(nums: number[], k: number): number {
  const n = nums.length;
  const set = new Set<number>();

  let sum = 0;
  let curSum = 0;
  let i = 0;
  for (let j = 0; j < n; j++) {
    while (j - i + 1 > k || set.has(nums[j])) {
      curSum -= nums[i];
      set.delete(nums[i]);
      i++;
    }

    curSum += nums[j];
    set.add(nums[j]);

    if (j - i + 1 === k) {
      sum = Math.max(sum, curSum);
    }
  }

  return sum;
}

/*
  use map
*/
function maximumSubarraySum(nums: number[], k: number): number {
  const n = nums.length;
  const numToIndex: Record<number, number> = {};

  let sum = 0;
  let windowSum = 0;
  let i = 0;
  for (let j = 0; j < n; j++) {
    const prevIndex = numToIndex[nums[j]] ?? -1;

    while (i <= prevIndex || j - i + 1 > k) {
      windowSum -= nums[i];
      i++;
    }

    windowSum += nums[j];
    numToIndex[nums[j]] = j;

    if (j - i + 1 === k) {
      sum = Math.max(sum, windowSum);
    }
  }

  return sum;
}

export { maximumSubarraySum };
