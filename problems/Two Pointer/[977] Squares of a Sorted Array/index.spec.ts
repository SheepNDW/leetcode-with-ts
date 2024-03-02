import { describe, expect, it } from 'vitest';
import { sortedSquares } from '.';

describe.skip('sortedSquares', () => {
  it('should return an array of the squares of each number sorted in non-decreasing order for a mixed positive and negative array', () => {
    const nums = [-4, -1, 0, 3, 10];

    const result = sortedSquares(nums);

    expect(result).toEqual([0, 1, 9, 16, 100]);
  });

  it('should return an array of the squares of each number sorted in non-decreasing order for a negative array', () => {
    const nums = [-7, -3, 2, 3, 11];

    const result = sortedSquares(nums);

    expect(result).toEqual([4, 9, 9, 49, 121]);
  });

  it('should handle an array with a single element', () => {
    const nums = [-2];

    const result = sortedSquares(nums);

    expect(result).toEqual([4]);
  });

  it('should handle an array with all positive numbers', () => {
    const nums = [1, 2, 3, 4, 5];

    const result = sortedSquares(nums);

    expect(result).toEqual([1, 4, 9, 16, 25]);
  });

  it('should handle an array with all negative numbers', () => {
    const nums = [-5, -4, -3, -2, -1];

    const result = sortedSquares(nums);

    expect(result).toEqual([1, 4, 9, 16, 25]);
  });
});
