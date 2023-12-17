import { describe, expect, it } from 'vitest';
import { findIntersectionValues } from '.';

describe.skip('findIntersectionValues', () => {
  it('should return [3,4] for nums1 = [4,3,2,3,1] and nums2 = [2,2,5,2,3,6]', () => {
    const nums1 = [4, 3, 2, 3, 1];
    const nums2 = [2, 2, 5, 2, 3, 6];
    const expected = [3, 4];

    const result = findIntersectionValues(nums1, nums2);

    expect(result).toEqual(expected);
  });

  it('should return [0,0] for nums1 = [3,4,2,3] and nums2 = [1,5]', () => {
    const nums1 = [3, 4, 2, 3];
    const nums2 = [1, 5];
    const expected = [0, 0];

    const result = findIntersectionValues(nums1, nums2);

    expect(result).toEqual(expected);
  });
});
