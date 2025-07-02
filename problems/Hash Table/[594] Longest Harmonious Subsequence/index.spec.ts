import { describe, expect, it } from 'vitest';
import { findLHS } from '.';

describe('findLHS', () => {
  it('example 1', () => {
    const nums = [1, 3, 2, 2, 5, 2, 3, 7];

    const result = findLHS(nums);

    expect(result).toBe(5);
  });

  it('example 2', () => {
    const nums = [1, 2, 3, 4];

    const result = findLHS(nums);

    expect(result).toBe(2);
  });

  it('example 3', () => {
    const nums = [1, 1, 1, 1];

    const result = findLHS(nums);

    expect(result).toBe(0);
  });
});
