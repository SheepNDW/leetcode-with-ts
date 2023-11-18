import { describe, expect, it } from 'vitest';
import { maxFrequency } from '.';

describe.skip('maxFrequency', () => {
  it('should return 3 for nums = [1,2,4] and k = 5', () => {
    const nums = [1, 2, 4];
    const k = 5;
    const result = maxFrequency(nums, k);
    expect(result).toBe(3);
  });

  it('should return 2 for nums = [1,4,8,13] and k = 5', () => {
    const nums = [1, 4, 8, 13];
    const k = 5;
    const result = maxFrequency(nums, k);
    expect(result).toBe(2);
  });

  it('should return 1 for nums = [3,9,6] and k = 2', () => {
    const nums = [3, 9, 6];
    const k = 2;
    const result = maxFrequency(nums, k);
    expect(result).toBe(1);
  });
});
