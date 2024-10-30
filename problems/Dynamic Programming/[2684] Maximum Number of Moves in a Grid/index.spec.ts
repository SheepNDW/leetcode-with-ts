import { describe, expect, it } from 'vitest';
import { maxMoves } from '.';

describe.skip('maxMoves', () => {
  it('should return 3 for grid = [[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]]', () => {
    const grid = [
      [2, 4, 3, 5],
      [5, 4, 9, 3],
      [3, 4, 2, 11],
      [10, 9, 13, 15],
    ];

    const result = maxMoves(grid);

    expect(result).toBe(3);
  });

  it('should return 0 for grid = [[3,2,4],[2,1,9],[1,1,7]]', () => {
    const grid = [
      [3, 2, 4],
      [2, 1, 9],
      [1, 1, 7],
    ];

    const result = maxMoves(grid);

    expect(result).toBe(0);
  });
});
