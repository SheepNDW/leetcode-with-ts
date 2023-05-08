import { describe, expect, it } from 'vitest';
import { diagonalSum } from '.';

describe('diagonalSum', () => {
  it('should return 25', () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const result = diagonalSum(mat);

    expect(result).toBe(25);
  });

  it('should return 8', () => {
    const mat = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];

    const result = diagonalSum(mat);

    expect(result).toBe(8);
  });

  it('should return 5', () => {
    const mat = [[5]];

    const result = diagonalSum(mat);

    expect(result).toBe(5);
  });
});
