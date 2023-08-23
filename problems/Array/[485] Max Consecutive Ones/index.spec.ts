import { describe, expect, it } from 'vitest';
import { findMaxConsecutiveOnes } from '.';

describe('findMaxConsecutiveOnes', () => {
  it('should return the maximum number of consecutive 1s in the array', () => {
    const nums = [1, 1, 0, 1, 1, 1];
    const expected = 3;

    const result = findMaxConsecutiveOnes(nums);

    expect(result).toEqual(expected);

    const nums2 = [1, 0, 1, 1, 0, 1];
    const expected2 = 2;

    const result2 = findMaxConsecutiveOnes(nums2);

    expect(result2).toEqual(expected2);
  });
});
