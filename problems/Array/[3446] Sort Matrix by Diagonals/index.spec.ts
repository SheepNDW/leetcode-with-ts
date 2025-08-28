import { describe, expect, it } from 'vitest';
import { sortMatrix } from '.';

describe('sortMatrix', () => {
  it('example 1', () => {
    const grid = [
      [1, 7, 3],
      [9, 8, 2],
      [4, 5, 6],
    ];
    const result = sortMatrix(grid);
    expect(result).toEqual([
      [8, 2, 3],
      [9, 6, 7],
      [4, 5, 1],
    ]);
  });

  it('example 2', () => {
    const grid = [
      [0, 1],
      [1, 2],
    ];
    const result = sortMatrix(grid);
    expect(result).toEqual([
      [2, 1],
      [1, 0],
    ]);
  });

  it('example 3', () => {
    const grid = [[1]];
    const result = sortMatrix(grid);
    expect(result).toEqual([[1]]);
  });
});
