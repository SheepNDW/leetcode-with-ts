import { describe, expect, it } from 'vitest';
import { maxMatrixSum } from '.';

describe('maxMatrixSum', () => {
  it('example 1', () => {
    const matrix = [
      [1, -1],
      [-1, 1],
    ];

    const result = maxMatrixSum(matrix);

    expect(result).toBe(4);
  });

  it('example 2', () => {
    const matrix = [
      [1, 2, 3],
      [-1, -2, -3],
      [1, 2, 3],
    ];

    const result = maxMatrixSum(matrix);

    expect(result).toBe(16);
  });
});
