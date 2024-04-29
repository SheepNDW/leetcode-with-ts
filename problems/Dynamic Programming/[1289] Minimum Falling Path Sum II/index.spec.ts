import { describe, expect, it } from 'vitest';
import { minFallingPathSum } from '.';

describe.skip('minFallingPathSum', () => {
  it('should return 13 for grid = [[1,2,3],[4,5,6],[7,8,9]]', () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = minFallingPathSum(grid);
    expect(result).toBe(13);
  });

  it('should return 7 for grid = [[7]]', () => {
    const grid = [[7]];
    const result = minFallingPathSum(grid);
    expect(result).toBe(7);
  });
});
