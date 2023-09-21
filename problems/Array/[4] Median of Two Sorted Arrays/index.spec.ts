import { describe, expect, it } from 'vitest';
import { findMedianSortedArrays } from '.';

describe('findMedianSortedArrays', () => {
  it('should return the median of two sorted arrays of varying lengths', () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    const expected = 2;

    const result = findMedianSortedArrays(nums1, nums2);

    expect(result).toEqual(expected);
  });

  it('should handle arrays where the median is an average', () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4];
    const expected = 2.5;

    const result = findMedianSortedArrays(nums1, nums2);

    expect(result).toEqual(expected);
  });

  it('should handle arrays with negative numbers', () => {
    const nums1 = [-1, 3];
    const nums2 = [2, 4];
    const expected = 2.5;

    const result = findMedianSortedArrays(nums1, nums2);

    expect(result).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const nums1: number[] = [];
    const nums2 = [2, 3];
    const expected = 2.5;

    const result = findMedianSortedArrays(nums1, nums2);

    expect(result).toEqual(expected);
  });
});
