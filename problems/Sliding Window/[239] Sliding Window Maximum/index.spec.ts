import { describe, expect, it } from 'vitest';
import { maxSlidingWindow } from '.';

describe('maxSlidingWindow', () => {
  it('should return max values for sliding window of size 3', () => {
    const nums = [1, 3, -1, -3, 5, 3, 6, 7];
    const k = 3;

    const result = maxSlidingWindow(nums, k);

    expect(result).toEqual([3, 3, 5, 5, 6, 7]);
  });

  it('should handle array with single element', () => {
    const nums = [1];
    const k = 1;

    const result = maxSlidingWindow(nums, k);

    expect(result).toEqual([1]);
  });

  it('should handle negative numbers', () => {
    const nums = [-5, -2, -1, -3, -4];
    const k = 2;

    const result = maxSlidingWindow(nums, k);

    expect(result).toEqual([-2, -1, -1, -3]);
  });

  it('should handle k equal to array length', () => {
    const nums = [4, 2, 7, 1];
    const k = 4;

    const result = maxSlidingWindow(nums, k);

    expect(result).toEqual([7]);
  });
});
