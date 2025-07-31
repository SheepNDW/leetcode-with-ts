import { describe, expect, it } from 'vitest';
import { longestSubarray } from '.';

describe('longestSubarray', () => {
  it('example 1', () => {
    const nums = [1, 2, 3, 3, 2, 2];
    const result = longestSubarray(nums);
    expect(result).toBe(2);
  });

  it('example 2', () => {
    const nums = [1, 2, 3, 4];
    const result = longestSubarray(nums);
    expect(result).toBe(1);
  });
});
