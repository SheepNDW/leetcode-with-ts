import { describe, it, expect } from 'vitest';
import { isToeplitzMatrix } from '.';

describe.skip('isToeplitzMatrix', () => {
  it('should return true for valid matrix', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 1, 2, 3],
      [9, 5, 1, 2],
    ];

    expect(isToeplitzMatrix(matrix)).toBe(true);
  });

  it('should return false for invalid matrix 2x2', () => {
    const matrix = [
      [1, 2],
      [2, 2],
    ];

    expect(isToeplitzMatrix(matrix)).toBe(false);
  });

  it('should return false for invalid matrix', () => {
    const matrix = [
      [36, 86, 7, 94, 71, 59, 10],
      [19, 0, 86, 7, 94, 71, 59],
    ];

    expect(isToeplitzMatrix(matrix)).toBe(false);
  });
});

/**
 * @link https://leetcode.com/problems/toeplitz-matrix/
 */
