import { describe, expect, it } from 'vitest';
import { search } from '.';

describe('search', () => {
  it('should return the correct index when the target is found in a rotated array', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const target = 0;
    const expected = 4;

    const result = search(nums, target);

    expect(result).toBe(expected);

    const nums2 = [3, 1];
    const target2 = 1;
    const expected2 = 1;

    const result2 = search(nums2, target2);

    expect(result2).toBe(expected2);
  });

  it('should return -1 when the target is not found in the array', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const target = 3;
    const expected = -1;

    const result = search(nums, target);

    expect(result).toBe(expected);

    const nums2 = [1];
    const target2 = 0;
    const expected2 = -1;

    const result2 = search(nums2, target2);

    expect(result2).toBe(expected2);
  });

  it('should return the correct index for a non-rotated array', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const target = 4;
    const expected = 3;

    const result = search(nums, target);

    expect(result).toBe(expected);
  });
});
