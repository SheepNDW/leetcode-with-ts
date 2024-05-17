import { describe, expect, it } from 'vitest';
import { getMaximumGold } from '.';

describe.skip('getMaximumGold', () => {
  it('should return 24 for grid = [[0,6,0],[5,8,7],[0,9,0]]', () => {
    const grid = [
      [0, 6, 0],
      [5, 8, 7],
      [0, 9, 0],
    ];
    const result = getMaximumGold(grid);
    expect(result).toBe(24);
  });

  it('should return 28 for grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]', () => {
    const grid = [
      [1, 0, 7],
      [2, 0, 6],
      [3, 4, 5],
      [0, 3, 0],
      [9, 0, 20],
    ];
    const result = getMaximumGold(grid);
    expect(result).toBe(28);
  });
});
