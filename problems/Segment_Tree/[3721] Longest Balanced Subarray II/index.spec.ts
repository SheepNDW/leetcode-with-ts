import { describe, expect, it } from 'vitest';
import { longestBalanced } from '.';

describe('longestBalanced', () => {
  it('example 1', () => {
    const nums = [2, 5, 4, 3];
    const result = longestBalanced(nums);
    expect(result).toBe(4);
  });

  it('example 2', () => {
    const nums = [3, 2, 2, 5, 4];
    const result = longestBalanced(nums);
    expect(result).toBe(5);
  });

  it('example 3', () => {
    const nums = [1, 2, 3, 2];
    const result = longestBalanced(nums);
    expect(result).toBe(3);
  });
});
