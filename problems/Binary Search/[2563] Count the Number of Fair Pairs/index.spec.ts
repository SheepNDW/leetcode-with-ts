import { describe, expect, it } from 'vitest';
import { countFairPairs } from '.';

describe.skip('countFairPairs', () => {
  it('should return 6', () => {
    const nums = [0, 1, 7, 4, 4, 5];
    const lower = 3;
    const upper = 6;

    const result = countFairPairs(nums, lower, upper);

    expect(result).toBe(6);
  });

  it('should return 1', () => {
    const nums = [1, 7, 9, 2, 5];
    const lower = 11;
    const upper = 11;

    const result = countFairPairs(nums, lower, upper);

    expect(result).toBe(1);
  });
});
