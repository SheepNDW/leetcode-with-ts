import { describe, expect, it } from 'vitest';
import { numMagicSquaresInside } from '.';

describe('numMagicSquaresInside', () => {
  it('should return 1 for grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]', () => {
    const grid = [
      [4, 3, 8, 4],
      [9, 5, 1, 9],
      [2, 7, 6, 2],
    ];

    const result = numMagicSquaresInside(grid);

    expect(result).toBe(1);
  });

  it('should return 0 for grid = [[1,8,6],[10,5,0],[4,2,9]]', () => {
    const grid = [
      [1, 8, 6],
      [10, 5, 0],
      [4, 2, 9],
    ];

    const result = numMagicSquaresInside(grid);

    expect(result).toBe(0);
  });

  it('should return 0 for grid = [[8]]', () => {
    const grid = [[8]];

    const result = numMagicSquaresInside(grid);

    expect(result).toBe(0);
  });
});
