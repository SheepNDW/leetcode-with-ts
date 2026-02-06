import { describe, expect, it } from 'vitest';
import { maxSumTrionic } from '.';

describe('maxSumTrionic', () => {
  it('example 1', () => {
    const nums = [0, -2, -1, -3, 0, 2, -1];
    const result = maxSumTrionic(nums);
    expect(result).toBe(-4);
  });

  it('example 2', () => {
    const nums = [1, 4, 2, 7];
    const result = maxSumTrionic(nums);
    expect(result).toBe(14);
  });

  it('example 3', () => {
    const nums = [1, 4, 2, 2, 3, 1, 2];
    const result = maxSumTrionic(nums);
    expect(result).toBe(8);
  });
});
