import { describe, expect, it } from 'vitest';
import { findKthLargest } from '.';

describe('findKthLargest', () => {
  it('should return the kth largest element in the array without duplicates', () => {
    const nums = [3, 2, 1, 5, 6, 4];
    const k = 2;
    const expected = 5;

    const result = findKthLargest(nums, k);

    expect(result).toBe(expected);
  });

  it('should return the kth largest element in the array with duplicates', () => {
    const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    const k = 4;
    const expected = 4;

    const result = findKthLargest(nums, k);

    expect(result).toBe(expected);
  });
});
