import { describe, expect, it } from 'vitest';
import { maxDotProduct } from '.';

describe('maxDotProduct', () => {
  it('example 1', () => {
    const nums1 = [2, 1, -2, 5];
    const nums2 = [3, 0, -6];

    const result = maxDotProduct(nums1, nums2);

    expect(result).toBe(18);
  });

  it('example 2', () => {
    const nums1 = [3, -2];
    const nums2 = [2, -6, 7];

    const result = maxDotProduct(nums1, nums2);

    expect(result).toBe(21);
  });

  it('example 3', () => {
    const nums1 = [-1, -1];
    const nums2 = [1, 1];

    const result = maxDotProduct(nums1, nums2);

    expect(result).toBe(-1);
  });
});
