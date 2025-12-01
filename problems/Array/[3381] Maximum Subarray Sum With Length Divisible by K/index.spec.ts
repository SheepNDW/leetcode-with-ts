import { describe, expect, it } from 'vitest';
import { maxSubarraySum } from '.';

describe('maxSubarraySum', () => {
  it('example 1', () => {
    const nums = [1, 2];
    const k = 1;

    const result = maxSubarraySum(nums, k);

    expect(result).toBe(3);
  });

  it('example 2', () => {
    const nums = [-1, -2, -3, -4, -5];
    const k = 4;

    const result = maxSubarraySum(nums, k);

    expect(result).toBe(-10);
  });

  it('example 3', () => {
    const nums = [-5, 1, 2, -3, 4];
    const k = 2;

    const result = maxSubarraySum(nums, k);

    expect(result).toBe(4);
  });
});
