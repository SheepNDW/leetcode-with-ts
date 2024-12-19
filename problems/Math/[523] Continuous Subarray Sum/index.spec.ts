import { describe, expect, it } from 'vitest';
import { checkSubarraySum } from '.';

describe.skip('checkSubarraySum', () => {
  it('should return true for nums = [23, 2, 4, 6, 7], k = 6', () => {
    const nums = [23, 2, 4, 6, 7];
    const k = 6;

    const result = checkSubarraySum(nums, k);

    expect(result).toBe(true);
  });

  it('should return true for nums = [23, 2, 6, 4, 7], k = 6', () => {
    const nums = [23, 2, 6, 4, 7];
    const k = 6;

    const result = checkSubarraySum(nums, k);

    expect(result).toBe(true);
  });

  it('should return true for nums = [23, 2, 6, 4, 7], k = 0', () => {
    const nums = [23, 2, 6, 4, 7];
    const k = 0;

    const result = checkSubarraySum(nums, k);

    expect(result).toBe(true);
  });

  it('should return false for nums = [23, 2, 6, 4, 7], k = 13', () => {
    const nums = [23, 2, 6, 4, 7];
    const k = 13;

    const result = checkSubarraySum(nums, k);

    expect(result).toBe(false);
  });

  it('should return false for nums = [0], k = 0', () => {
    const nums = [0];
    const k = 0;

    const result = checkSubarraySum(nums, k);

    expect(result).toBe(false);
  });

  it('should return false for nums = [0, 1, 0, 3, 0, 4, 0, 4, 0], k = 5', () => {
    const nums = [0, 1, 0, 3, 0, 4, 0, 4, 0];
    const k = 5;

    const result = checkSubarraySum(nums, k);

    expect(result).toBe(false);
  });
});
