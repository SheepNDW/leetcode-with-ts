import { describe, expect, it } from 'vitest';
import { subarraySum } from '.';

describe.skip('subarraySum', () => {
  it('should return 2 for nums = [1,1,1], k = 2', () => {
    const nums = [1, 1, 1];
    const k = 2;

    const result = subarraySum(nums, k);

    expect(result).toBe(2);
  });

  it('should return 2 for nums = [1,2,3], k = 3', () => {
    const nums = [1, 2, 3];
    const k = 3;

    const result = subarraySum(nums, k);

    expect(result).toBe(2);
  });

  it('should return 4 for nums = [1,1,1,1,1], k = 2', () => {
    const nums = [1, 1, 1, 1, 1];
    const k = 2;

    const result = subarraySum(nums, k);

    expect(result).toBe(4);
  });
});
