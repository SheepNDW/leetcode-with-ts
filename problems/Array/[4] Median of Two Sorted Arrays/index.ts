// brute force
function findMedianSortedArrays0(nums1: number[], nums2: number[]): number {
  const newArr = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = newArr.length;
  if (n % 2 !== 0) {
    return newArr[n >> 1];
  }
  return (newArr[n >> 1] + newArr[n >> (1 + 1)]) / 2;
}

// merge sort O(m+n)
function findMedianSortedArrays1(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;
  const totalLength = m + n;
  let p1 = 0;
  let p2 = 0;
  const merged: number[] = [];

  while (p1 + p2 < (totalLength >> 1) + 1) {
    if (p1 < m && p2 < n) {
      if (nums1[p1] <= nums2[p2]) {
        merged.push(nums1[p1++]);
      } else {
        merged.push(nums2[p2++]);
      }
    } else if (p1 < m) {
      merged.push(nums1[p1++]);
    } else if (p2 < n) {
      merged.push(nums2[p2++]);
    }
  }

  if (totalLength % 2 !== 0) {
    return merged[merged.length - 1];
  } else {
    return (merged[merged.length - 1] + merged[merged.length - 2]) / 2;
  }
}

// binary search
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;
  let left = 0;
  let right = m;

  while (left <= right) {
    const mid = (left + right) >> 1;
    const j = ((m + n + 1) >> 1) - mid;

    const maxLeftA = mid > 0 ? nums1[mid - 1] : -Infinity;
    const minRightA = mid < m ? nums1[mid] : Infinity;
    const maxLeftB = j > 0 ? nums2[j - 1] : -Infinity;
    const minRightB = j < n ? nums2[j] : Infinity;

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      // 終止條件
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return 0;
}

export { findMedianSortedArrays };
