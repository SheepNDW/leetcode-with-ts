import { describe, expect, it } from 'vitest';
import { minimizeMax } from '.';

describe('minimizeMax', () => {
  it('should return the minimum maximum difference for the given pairs', () => {
    const nums1 = [10, 1, 2, 7, 1, 3];
    const p1 = 2;
    const expected1 = 1;

    const nums2 = [4, 2, 1, 2];
    const p2 = 1;
    const expected2 = 0;

    const nums3 = [3, 4, 2, 3, 2, 1, 2];
    const p3 = 3;
    const expected3 = 1;

    const result1 = minimizeMax(nums1, p1);
    const result2 = minimizeMax(nums2, p2);
    const result3 = minimizeMax(nums3, p3);

    expect(result1).toBe(expected1);
    expect(result2).toBe(expected2);
    expect(result3).toBe(expected3);
  });

  it('should return 0 when p is 0', () => {
    const nums = [5, 3, 2, 4];
    const p = 0;
    const expected = 0;

    const result = minimizeMax(nums, p);

    expect(result).toBe(expected);
  });
});
