import { describe, expect, it } from 'vitest';
import { largestLocal } from '.';

describe.skip('largestLocal', () => {
  it('should return [[9,9],[8,6]] for a 4x4 grid', () => {
    const grid = [
      [9, 9, 8, 1],
      [5, 6, 2, 6],
      [8, 2, 6, 4],
      [6, 2, 2, 2],
    ];
    const expected = [
      [9, 9],
      [8, 6],
    ];
    const result = largestLocal(grid);
    expect(result).toEqual(expected);
  });

  it('should return [[2,2,2],[2,2,2],[2,2,2]] for a 5x5 grid', () => {
    const grid = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 2, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    const expected = [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ];
    const result = largestLocal(grid);
    expect(result).toEqual(expected);
  });
});
