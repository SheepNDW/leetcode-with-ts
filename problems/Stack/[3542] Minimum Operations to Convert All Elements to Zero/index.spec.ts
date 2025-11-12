import { describe, expect, it } from 'vitest';
import { minOperations } from '.';

describe('minOperations', () => {
  it('example 1', () => {
    const nums = [0, 2];
    const result = minOperations(nums);
    expect(result).toBe(1);
  });

  it('example 2', () => {
    const nums = [3, 1, 2, 1];
    const result = minOperations(nums);
    expect(result).toBe(3);
  });

  it('example 3', () => {
    const nums = [1, 2, 1, 2, 1, 2];
    const result = minOperations(nums);
    expect(result).toBe(4);
  });
});
