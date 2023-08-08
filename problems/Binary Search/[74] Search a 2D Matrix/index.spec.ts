import { describe, expect, it } from 'vitest';
import { searchMatrix } from '.';

describe('searchMatrix', () => {
  it('should return true if target exists in the matrix', () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 3;

    const result = searchMatrix(matrix, target);

    expect(result).toBe(true);
  });

  it('should return false if target does not exist in the matrix', () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 13;

    const result = searchMatrix(matrix, target);

    expect(result).toBe(false);
  });
});
