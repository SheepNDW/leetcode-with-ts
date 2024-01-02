import { describe, expect, it } from 'vitest';
import { findMatrix } from '.';

describe.skip('findMatrix', () => {
  it('should create a valid 2D array from nums = [1,3,4,1,2,3,1]', () => {
    const nums = [1, 3, 4, 1, 2, 3, 1];
    const result = findMatrix(nums);

    const allElementsUsed = nums.every((num) => result.some((row) => row.includes(num)));
    const eachRowDistinct = result.every((row) => new Set(row).size === row.length);
    expect(allElementsUsed).toBe(true);
    expect(eachRowDistinct).toBe(true);
  });

  it('should create a valid 2D array from nums = [1,2,3,4]', () => {
    const nums = [1, 2, 3, 4];
    const result = findMatrix(nums);

    const allElementsUsed = nums.every((num) => result.some((row) => row.includes(num)));
    const eachRowDistinct = result.every((row) => new Set(row).size === row.length);
    expect(allElementsUsed).toBe(true);
    expect(eachRowDistinct).toBe(true);
  });
});
