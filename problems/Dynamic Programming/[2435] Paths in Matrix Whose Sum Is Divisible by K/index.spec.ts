import { describe, expect, it } from 'vitest';
import { numberOfPaths } from '.';

describe('numberOfPaths', () => {
  it('example 1', () => {
    const grid = [
      [5, 2, 4],
      [3, 0, 5],
      [0, 7, 2],
    ];
    const k = 3;

    const result = numberOfPaths(grid, k);

    expect(result).toBe(2);
  });

  it('example 2', () => {
    const grid = [[0, 0]];
    const k = 5;

    const result = numberOfPaths(grid, k);

    expect(result).toBe(1);
  });

  it('example 3', () => {
    const grid = [
      [7, 3, 4, 9],
      [2, 3, 6, 2],
      [2, 3, 7, 0],
    ];
    const k = 1;

    const result = numberOfPaths(grid, k);

    expect(result).toBe(10);
  });
});
