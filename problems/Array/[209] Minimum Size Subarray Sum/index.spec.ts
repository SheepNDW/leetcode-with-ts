import { describe, expect, it } from 'vitest';
import { minSubArrayLen } from '.';

describe('minSubArrayLen', () => {
  it('returns 1 when the array contains only one element equal to the target', () => {
    const target = 1;
    const nums = [1];

    const result = minSubArrayLen(target, nums);

    expect(result).toBe(1);
  });

  it('returns the minimal length of a subarray whose sum is greater than or equal to target', () => {
    const target1 = 7;
    const nums1 = [2, 3, 1, 2, 4, 3];

    const result1 = minSubArrayLen(target1, nums1);

    expect(result1).toBe(2);

    const target2 = 4;
    const nums2 = [1, 4, 4];

    const result2 = minSubArrayLen(target2, nums2);

    expect(result2).toBe(1);
  });

  it('returns the correct length when the target is at the end of the array', () => {
    const target = 5;
    const nums = [1, 1, 1, 1, 1];

    const result = minSubArrayLen(target, nums);

    expect(result).toBe(5);
  });

  it('returns 0 when the sum of all elements is less than the target', () => {
    const target = 11;
    const nums = [1, 1, 1, 1, 1, 1, 1, 1];

    const result = minSubArrayLen(target, nums);

    expect(result).toBe(0);
  });

  it('returns the correct length when the first element is greater than the target', () => {
    const target = 6;
    const nums = [10, 3, 2];

    const result = minSubArrayLen(target, nums);

    expect(result).toBe(1);
  });
});
