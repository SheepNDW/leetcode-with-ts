import { describe, expect, it } from 'vitest';
import { makesquare } from '.';

describe('makesquare', () => {
  it('should return true if it is possible to make one square', () => {
    const nums = [1, 1, 2, 2, 2];
    const nums2 = [4, 3, 3, 2, 2, 1, 1];

    expect(makesquare(nums)).toBe(true);
    expect(makesquare(nums2)).toBe(true);
  });

  it('should return false if it is not possible to make one square', () => {
    const nums = [3, 3, 3, 3, 4];
    const nums2 = [1, 2, 3];

    expect(makesquare(nums)).toBe(false);
    expect(makesquare(nums2)).toBe(false);
  });
});
