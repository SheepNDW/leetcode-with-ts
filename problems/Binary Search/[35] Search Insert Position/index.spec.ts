import { describe, expect, it } from 'vitest';
import { searchInsert } from '.';

describe.skip('searchInsert', () => {
  it('should return 2 when nums = [1,3,5,6], target = 5', () => {
    const nums = [1, 3, 5, 6];
    const target = 5;

    const result = searchInsert(nums, target);

    expect(result).toBe(2);
  });

  it('should return 1 when nums = [1,3,5,6], target = 2', () => {
    const nums = [1, 3, 5, 6];
    const target = 2;

    const result = searchInsert(nums, target);

    expect(result).toBe(1);
  });

  it('should return 4 when nums = [1,3,5,6], target = 7', () => {
    const nums = [1, 3, 5, 6];
    const target = 7;

    const result = searchInsert(nums, target);

    expect(result).toBe(4);
  });

  it('should return 0 when nums = [1,3,5,7], target = -1', () => {
    const nums = [1, 3, 5, 7];
    const target = -1;

    const result = searchInsert(nums, target);

    expect(result).toBe(0);
  });
});
