import { describe, expect, it } from 'vitest';
import { findDuplicates } from '.';

describe.skip('findDuplicates', () => {
  it('should return [2,3] for nums = [4,3,2,7,8,2,3,1]', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];

    const result = findDuplicates(nums);

    expect(result.sort()).toEqual([2, 3].sort());
  });

  it('should return [1] for nums = [1,1,2]', () => {
    const nums = [1, 1, 2];

    const result = findDuplicates(nums);

    expect(result.sort()).toEqual([1].sort());
  });

  it('should return an empty array for nums = [1]', () => {
    const nums = [1];

    const result = findDuplicates(nums);

    expect(result).toEqual([]);
  });
});
