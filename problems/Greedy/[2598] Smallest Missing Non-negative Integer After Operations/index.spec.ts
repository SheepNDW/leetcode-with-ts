import { describe, expect, it } from 'vitest';
import { findSmallestInteger } from '.';

describe('findSmallestInteger', () => {
  it('example 1', () => {
    const nums = [1, -10, 7, 13, 6, 8];
    const value = 5;

    const result = findSmallestInteger(nums, value);

    expect(result).toBe(4);
  });

  it('example 2', () => {
    const nums = [1, -10, 7, 13, 6, 8];
    const value = 7;

    const result = findSmallestInteger(nums, value);

    expect(result).toBe(2);
  });

  it('example 3', () => {
    const nums = [-3, -2, -1];
    const value = 3;

    const result = findSmallestInteger(nums, value);

    expect(result).toBe(3);
  });
});
