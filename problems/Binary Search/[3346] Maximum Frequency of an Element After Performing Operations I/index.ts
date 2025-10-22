import { lowerBound } from '../../utils/lowerbound';
import { upperBound } from '../../utils/upperbound';

function maxFrequency0(nums: number[], k: number, numOperations: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let res = 0;
  const freq = new Map<number, number>();

  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
    res = Math.max(res, freq.get(num)!);
  }

  for (let i = nums[0]; i <= nums[n - 1]; i++) {
    const l = lowerBound(nums, i - k);
    const r = upperBound(nums, i + k) - 1;

    let temp = 0;

    if (freq.has(i)) {
      temp = Math.min(r - l + 1, freq.get(i)! + numOperations);
    } else {
      temp = Math.min(r - l + 1, numOperations);
    }

    res = Math.max(res, temp);
  }

  return res;
}

/*
  3347 Optimized version
*/
function maxFrequency(nums: number[], k: number, numOperations: number): number {
  nums.sort((a, b) => a - b);

  const candidate = new Set<number>();
  const freq = new Map<number, number>();

  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
    candidate.add(num);
    if (num - k >= nums[0]) {
      candidate.add(num - k);
    }
    if (num + k <= nums[nums.length - 1]) {
      candidate.add(num + k);
    }
  }

  let res = 0;

  for (const val of candidate) {
    const l = lowerBound(nums, val - k);
    const r = upperBound(nums, val + k) - 1;

    let temp = 0;

    if (freq.has(val)) {
      temp = Math.min(r - l + 1, freq.get(val)! + numOperations);
    } else {
      temp = Math.min(r - l + 1, numOperations);
    }

    res = Math.max(res, temp);
  }

  return res;
}

export { maxFrequency };
