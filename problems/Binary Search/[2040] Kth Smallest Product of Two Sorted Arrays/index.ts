import { lowerBound } from '../../utils/lowerbound';
import { upperBound } from '../../utils/upperbound';

function kthSmallestProduct(nums1: number[], nums2: number[], k: number): number {
  let lower = -1e10;
  let upper = 1e10;

  while (lower < upper) {
    const mid = Math.floor((lower + upper) / 2);

    const count = countSmallerOrEqual(mid, nums1, nums2);

    if (count < k) {
      lower = mid + 1;
    } else {
      upper = mid;
    }
  }

  return lower;
}

function countSmallerOrEqual(target: number, nums1: number[], nums2: number[]): number {
  let count = 0;

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] > 0) {
      const idx = upperBound(nums2, target / nums1[i]);
      count += idx;
    } else if (nums1[i] === 0) {
      if (target >= 0) {
        count += nums2.length;
      }
    } else {
      const idx = lowerBound(nums2, target / nums1[i]);
      count += nums2.length - idx;
    }
  }

  return count;
}

export { kthSmallestProduct };
