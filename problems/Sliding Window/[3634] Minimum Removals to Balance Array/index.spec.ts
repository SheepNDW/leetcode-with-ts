import { describe, expect, it } from 'vitest';
import { minRemoval } from '.';

describe('minRemoval', () => {
  it('example 1', () => {
    const nums = [2, 1, 5];
    const k = 2;

    const result = minRemoval(nums, k);

    expect(result).toBe(1);
  });

  it('example 2', () => {
    const nums = [1, 6, 2, 9];
    const k = 3;

    const result = minRemoval(nums, k);

    expect(result).toBe(2);
  });
});
