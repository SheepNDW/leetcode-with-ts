import { describe, expect, it } from 'vitest';
import { minimumObstacles } from '.';

describe.skip('minimumObstacles', () => {
  it('should return 2 for grid = [[0,1,1],[1,1,0],[1,1,0]]', () => {
    const grid = [
      [0, 1, 1],
      [1, 1, 0],
      [1, 1, 0],
    ];

    const result = minimumObstacles(grid);

    expect(result).toBe(2);
  });

  it('should return 0 for grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]', () => {
    const grid = [
      [0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 1, 0],
    ];

    const result = minimumObstacles(grid);

    expect(result).toBe(0);
  });
});
