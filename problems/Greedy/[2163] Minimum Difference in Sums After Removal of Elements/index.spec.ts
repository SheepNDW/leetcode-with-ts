import { describe, expect, it } from 'vitest';
import { minimumDifference } from '.';

describe('minimumDifference', () => {
  it('example 1', () => {
    const nums = [3, 1, 2];
    const result = minimumDifference(nums);
    expect(result).toBe(-1);
  });

  it('example 2', () => {
    const nums = [7, 9, 5, 8, 1, 3];
    const result = minimumDifference(nums);
    expect(result).toBe(1);
  });
});
