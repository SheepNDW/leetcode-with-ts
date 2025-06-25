import { describe, expect, it } from 'vitest';
import { kthSmallestProduct } from '.';

describe('kthSmallestProduct', () => {
  it('example 1', () => {
    const nums1 = [2, 5];
    const nums2 = [3, 4];
    const k = 2;

    const result = kthSmallestProduct(nums1, nums2, k);

    expect(result).toBe(8);
  });

  it('example 2', () => {
    const nums1 = [-4, -2, 0, 3];
    const nums2 = [2, 4];
    const k = 6;

    const result = kthSmallestProduct(nums1, nums2, k);

    expect(result).toBe(0);
  });

  it('example 3', () => {
    const nums1 = [-2, -1, 0, 1, 2];
    const nums2 = [-3, -1, 2, 4, 5];
    const k = 3;

    const result = kthSmallestProduct(nums1, nums2, k);

    expect(result).toBe(-6);
  });

  it('example 4', () => {
    const nums1 = [-100000, 100000];
    const nums2 = [-100000, 100000];
    const k = 1;

    const result = kthSmallestProduct(nums1, nums2, k);

    expect(result).toBe(-1e10);
  });
});
