import { describe, expect, it } from 'vitest';
import { equalPairs } from '.';

describe('equalPairs', () => {
  it('should return 1 for a 1x1 grid', () => {
    const grid = [[1]];

    const result = equalPairs(grid);

    expect(result).toBe(1);
  });

  it('should return 0 for a 2x2 grid with no equal pairs', () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];

    const result = equalPairs(grid);

    expect(result).toBe(0);
  });

  it('should return 2 for a 2x2 grid with two equal pair', () => {
    const grid = [
      [1, 2],
      [2, 3],
    ];

    const result = equalPairs(grid);

    expect(result).toBe(2);
  });

  it('should return 1 for a 3x3 grid with one equal pairs', () => {
    const grid = [
      [3, 2, 1],
      [1, 7, 6],
      [2, 7, 7],
    ];

    const result = equalPairs(grid);

    expect(result).toBe(1);
  });

  it('should return 3 for a 4x4 grid with three equal pairs', () => {
    const grid = [
      [3, 1, 2, 2],
      [1, 4, 4, 5],
      [2, 4, 2, 2],
      [2, 4, 2, 2],
    ];

    const result = equalPairs(grid);

    expect(result).toBe(3);
  });
});
