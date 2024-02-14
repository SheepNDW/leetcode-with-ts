import { describe, expect, it } from 'vitest';
import { numSubmatrixSumTarget } from '.';

describe.skip('numSubmatrixSumTarget', () => {
  it('finds 1x1 submatrices with sum equal to target', () => {
    const matrix = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
    const target = 0;
    const expected = 4;

    const result = numSubmatrixSumTarget(matrix, target);

    expect(result).toBe(expected);
  });

  it('handles negative numbers in matrix', () => {
    const matrix = [
      [1, -1],
      [-1, 1],
    ];
    const target = 0;
    const expected = 5;

    const result = numSubmatrixSumTarget(matrix, target);

    expect(result).toBe(expected);
  });

  it('returns 0 when no submatrices meet the target', () => {
    const matrix = [[904]];
    const target = 0;
    const expected = 0;

    const result = numSubmatrixSumTarget(matrix, target);

    expect(result).toBe(expected);
  });
});
