import { describe, expect, it } from 'vitest';
import { countMaxOrSubsets } from '.';

describe('countMaxOrSubsets', () => {
  it('example 1', () => {
    const nums = [3, 1];
    const result = countMaxOrSubsets(nums);
    expect(result).toBe(2);
  });

  it('example 2', () => {
    const nums = [2, 2, 2];
    const result = countMaxOrSubsets(nums);
    expect(result).toBe(7);
  });

  it('example 3', () => {
    const nums = [3, 2, 1, 5];
    const result = countMaxOrSubsets(nums);
    expect(result).toBe(6);
  });
});
