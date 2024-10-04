import { describe, expect, it } from 'vitest';
import { minSubarray } from '.';

describe.skip('minSubarray', () => {
  it('should 1 for [3,1,4,2], p = 6', () => {
    const nums = [3, 1, 4, 2];
    const p = 6;

    const result = minSubarray(nums, p);

    expect(result).toBe(1);
  });

  it('should 2 for [6,3,5,2], p = 9', () => {
    const nums = [6, 3, 5, 2];
    const p = 9;

    const result = minSubarray(nums, p);

    expect(result).toBe(2);
  });

  it('should 0 for [1,2,3], p = 3', () => {
    const nums = [1, 2, 3];
    const p = 3;

    const result = minSubarray(nums, p);

    expect(result).toBe(0);
  });

  it('should return 0 for [1000000000, 1000000000, 1000000000], p = 3', () => {
    const nums = [1000000000, 1000000000, 1000000000];
    const p = 3;

    const result = minSubarray(nums, p);

    expect(result).toBe(0);
  });
});
