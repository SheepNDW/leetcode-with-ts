import { describe, expect, it } from 'vitest';
import { subarraysDivByK } from '.';

describe.skip('subarraysDivByK', () => {
  it('should return 7 for nums = [4,5,0,-2,-3,1], k = 5', () => {
    const nums = [4, 5, 0, -2, -3, 1];
    const k = 5;

    const result = subarraysDivByK(nums, k);

    expect(result).toBe(7);
  });

  it('should return 0 for nums = [5], k = 9', () => {
    const nums = [5];
    const k = 9;

    const result = subarraysDivByK(nums, k);

    expect(result).toBe(0);
  });

  it('should return 1 for nums = [-6,1,-5,10], k = 9', () => {
    const nums = [-6, 1, -5, 10];
    const k = 9;

    const result = subarraysDivByK(nums, k);

    expect(result).toBe(1);
  });
});
