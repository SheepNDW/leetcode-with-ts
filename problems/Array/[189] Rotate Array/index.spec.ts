import { describe, expect, it } from 'vitest';
import { rotate } from '.';

describe('rotate', () => {
  it('should correctly rotate array by k steps to the right', () => {
    const nums1 = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums1, 3);
    expect(nums1).toEqual([5, 6, 7, 1, 2, 3, 4]);

    const nums2 = [-1, -100, 3, 99];
    rotate(nums2, 2);
    expect(nums2).toEqual([3, 99, -1, -100]);
  });

  it('should correctly handle k greater than length of array', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 10);
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('should correctly handle k equal to length of array', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 7);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should correctly handle k equal to 0', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 0);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
