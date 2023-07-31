import { describe, expect, it } from 'vitest';
import { isGood } from '.';

describe('isGood', () => {
  it('should return false when array cannot be a permutation of base[n]', () => {
    const nums = [2, 1, 3];

    const result = isGood(nums);

    expect(result).toBe(false);
  });

  it('should return false when array length is more than base[n]', () => {
    const nums = [3, 4, 4, 1, 2, 1];

    const result = isGood(nums);

    expect(result).toBe(false);
  });

  it('should return true when array can be a permutation of base[n]', () => {
    const nums = [1, 3, 3, 2];

    const result = isGood(nums);

    expect(result).toBe(true);
  });

  it('should return true when array is a permutation of base[1]', () => {
    const nums = [1, 1];

    const result = isGood(nums);

    expect(result).toBe(true);
  });
});
