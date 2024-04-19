import { describe, expect, it } from 'vitest';
import { islandPerimeter } from '.';

describe.skip('islandPerimeter', () => {
  it('should return 16 for grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]', () => {
    const grid = [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
    ];

    const result = islandPerimeter(grid);

    expect(result).toBe(16);
  });

  it('should return 4 for grid = [[1]]', () => {
    const grid = [[1]];

    const result = islandPerimeter(grid);

    expect(result).toBe(4);
  });

  it('should return 4 for grid = [[1,0]]', () => {
    const grid = [[1, 0]];

    const result = islandPerimeter(grid);

    expect(result).toBe(4);
  });
});
