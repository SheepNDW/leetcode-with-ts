import { describe, expect, it } from 'vitest';
import { minBitwiseArray } from '.';

describe('q1', () => {
  it('example 1', () => {
    const nums = [2, 3, 5, 7];
    const result = minBitwiseArray(nums);
    expect(result).toEqual([-1, 1, 4, 3]);
  });

  it('example 2', () => {
    const nums = [11, 13, 31];
    const result = minBitwiseArray(nums);
    expect(result).toEqual([9, 12, 15]);
  });
});
