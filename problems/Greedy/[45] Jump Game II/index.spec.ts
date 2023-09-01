import { describe, expect, it } from 'vitest';
import { jump } from '.';

describe('jump game ii', () => {
  it('should return the minimum number of jumps to reach the end of the array', () => {
    const nums1 = [2, 3, 1, 1, 4];
    const nums2 = [2, 3, 0, 1, 4];

    const result1 = jump(nums1);
    const result2 = jump(nums2);

    expect(result1).toBe(2);
    expect(result2).toBe(2);
  });

  it('should return 0 when the array length is 1', () => {
    const nums = [0];

    const result = jump(nums);

    expect(result).toBe(0);
  });

  it('should handle larger jumps correctly', () => {
    const nums = [5, 4, 3, 2, 1, 1, 1];

    const result = jump(nums);

    expect(result).toBe(2);
  });
});
