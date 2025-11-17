import { describe, expect, it } from 'vitest';
import { minOperations } from '.';

describe('minOperations', () => {
  it('example 1', () => {
    const nums = [2, 6, 3, 4];
    const result = minOperations(nums);
    expect(result).toBe(4);
  });

  it('example 2', () => {
    const nums = [2, 10, 6, 14];
    const result = minOperations(nums);
    expect(result).toBe(-1);
  });
});
