import { describe, expect, it } from 'vitest';
import { canSortArray } from '.';

describe.skip('canSortArray', () => {
  it('should return true for nums = [8, 4, 2, 30, 15]', () => {
    const nums = [8, 4, 2, 30, 15];

    const result = canSortArray(nums);

    expect(result).toBe(true);
  });

  it('should return true for nums = [1, 2, 3, 4, 5]', () => {
    const nums = [1, 2, 3, 4, 5];

    const result = canSortArray(nums);

    expect(result).toBe(true);
  });

  it('should return false for nums = [3, 16, 8, 4, 2]', () => {
    const nums = [3, 16, 8, 4, 2];

    const result = canSortArray(nums);

    expect(result).toBe(false);
  });
});
