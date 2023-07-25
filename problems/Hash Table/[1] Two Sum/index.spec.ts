import { describe, expect, it } from 'vitest';
import { twoSum } from '.';

describe('twoSum', () => {
  it('should return [0, 1] when nums=[2, 7, 11, 15] and target=9', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const result = twoSum(nums, target);

    expect(result).toEqual([0, 1]);
  });

  it('should return [1, 2] when nums=[3, 2, 4] and target=6', () => {
    const nums = [3, 2, 4];
    const target = 6;

    const result = twoSum(nums, target);

    expect(result).toEqual([1, 2]);
  });

  it('should return [0, 1] when nums=[3, 3] and target=6', () => {
    const nums = [3, 3];
    const target = 6;

    const result = twoSum(nums, target);

    expect(result).toEqual([0, 1]);
  });
});
