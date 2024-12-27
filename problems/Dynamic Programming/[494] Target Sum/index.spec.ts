import { describe, expect, it } from 'vitest';
import { findTargetSumWays } from '.';

describe.skip('findTargetSumWays', () => {
  it('should return 5 for nums = [1,1,1,1,1], target = 3', () => {
    const nums = [1, 1, 1, 1, 1];
    const target = 3;

    const result = findTargetSumWays(nums, target);

    expect(result).toBe(5);
  });

  it('should return 1 for nums = [1], target = 1', () => {
    const nums = [1];
    const target = 1;

    const result = findTargetSumWays(nums, target);

    expect(result).toBe(1);
  });

  it('should return 0 for nums = [2,7,9,13,27,31,37,3,2,3,5,7,11,13,17,19,23,29,47,53], target = 37', () => {
    const nums = [2, 7, 9, 13, 27, 31, 37, 3, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 47, 53];
    const target = 37;

    const result = findTargetSumWays(nums, target);

    expect(result).toBe(0);
  });

  it('should return 0 for nums = [2,7,9,13,27,31,37,3,2,3,5,7,11,13,17,19,23,29,47,53], target = 337', () => {
    const nums = [2, 7, 9, 13, 27, 31, 37, 3, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 47, 53];
    const target = 337;

    const result = findTargetSumWays(nums, target);

    expect(result).toBe(0);
  });

  it('should return 0 for nums = [1], target = 2', () => {
    const nums = [1];
    const target = 2;

    const result = findTargetSumWays(nums, target);

    expect(result).toBe(0);
  });
});
