import { describe, expect, it } from 'vitest';
import { maximumUniqueSubarray } from '.';

describe('maximumUniqueSubarray', () => {
  it('example 1', () => {
    const nums = [4, 2, 4, 5, 6];
    const result = maximumUniqueSubarray(nums);
    expect(result).toBe(17);
  });

  it('example 2', () => {
    const nums = [5, 2, 1, 2, 5, 2, 1, 2, 5];
    const result = maximumUniqueSubarray(nums);
    expect(result).toBe(8);
  });
});
