import { describe, expect, it } from 'vitest';
import { countSubarrays } from '.';

describe.skip('countSubarrays', () => {
  it('should return 6 for nums = [1,3,2,3,3], k = 2', () => {
    const nums = [1, 3, 2, 3, 3];
    const k = 2;

    const result = countSubarrays(nums, k);

    expect(result).toBe(6);
  });

  it('should return 0 for nums = [1,4,2,1], k = 3', () => {
    const nums = [1, 4, 2, 1];
    const k = 3;

    const result = countSubarrays(nums, k);

    expect(result).toBe(0);
  });

  it('should return 224 for nums = [61,23,38,23,56,40,82,56,82,82,82,70,8,69,8,7,19,14,58,42,82,10,82,78,15,82], k = 2', () => {
    const nums = [
      61, 23, 38, 23, 56, 40, 82, 56, 82, 82, 82, 70, 8, 69, 8, 7, 19, 14, 58, 42, 82, 10, 82, 78,
      15, 82,
    ];
    const k = 2;

    const result = countSubarrays(nums, k);

    expect(result).toBe(224);
  });
});
