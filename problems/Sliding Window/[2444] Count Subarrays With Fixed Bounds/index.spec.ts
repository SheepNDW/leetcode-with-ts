import { describe, expect, it } from 'vitest';
import { countSubarrays } from '.';

describe.skip('countSubarrays', () => {
  it('should return 2 for nums = [1,3,5,2,7,5], minK = 1, maxK = 5', () => {
    const nums = [1, 3, 5, 2, 7, 5];
    const minK = 1;
    const maxK = 5;

    const result = countSubarrays(nums, minK, maxK);

    expect(result).toBe(2);
  });

  it('should return 10 for nums = [1,1,1,1], minK = 1, maxK = 1', () => {
    const nums = [1, 1, 1, 1];
    const minK = 1;
    const maxK = 1;

    const result = countSubarrays(nums, minK, maxK);

    expect(result).toBe(10);
  });
});
