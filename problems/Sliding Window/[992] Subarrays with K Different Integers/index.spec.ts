import { describe, expect, it } from 'vitest';
import { subarraysWithKDistinct } from '.';

describe.skip('subarraysWithKDistinct', () => {
  it('should return 7 for nums = [1,2,1,2,3], k = 2', () => {
    const nums = [1, 2, 1, 2, 3];
    const k = 2;

    const result = subarraysWithKDistinct(nums, k);

    expect(result).toBe(7);
  });

  it('should return 3 for nums = [1,2,1,3,4], k = 3', () => {
    const nums = [1, 2, 1, 3, 4];
    const k = 3;

    const result = subarraysWithKDistinct(nums, k);

    expect(result).toBe(3);
  });
});
