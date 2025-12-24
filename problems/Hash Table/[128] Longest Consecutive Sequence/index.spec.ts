import { describe, expect, it } from 'vitest';
import { longestConsecutive } from '.';

describe('longestConsecutive', () => {
  it('example 1', () => {
    const nums = [100, 4, 200, 1, 3, 2];
    const result = longestConsecutive(nums);
    expect(result).toBe(4);
  });

  it('example 2', () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    const result = longestConsecutive(nums);
    expect(result).toBe(9);
  });

  it('example 3', () => {
    const nums = [1, 0, 1, 2];
    const result = longestConsecutive(nums);
    expect(result).toBe(3);
  });
});
