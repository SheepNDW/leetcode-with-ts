import { describe, expect, it } from 'vitest';
import { minimumCost } from '.';

describe('minimumCost', () => {
  it('example 1', () => {
    const nums = [1, 3, 2, 6, 4, 2];
    const k = 3;
    const dist = 3;

    const result = minimumCost(nums, k, dist);

    expect(result).toBe(5);
  });

  it('example 2', () => {
    const nums = [10, 1, 2, 2, 2, 1];
    const k = 4;
    const dist = 3;

    const result = minimumCost(nums, k, dist);

    expect(result).toBe(15);
  });

  it('example 3', () => {
    const nums = [10, 8, 18, 9];
    const k = 3;
    const dist = 1;

    const result = minimumCost(nums, k, dist);

    expect(result).toBe(36);
  });
});
