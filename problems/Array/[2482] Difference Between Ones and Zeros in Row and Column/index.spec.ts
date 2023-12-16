import { describe, expect, it } from 'vitest';
import { onesMinusZeros } from '.';

describe.skip('onesMinusZeros', () => {
  it('should correctly calculate the difference matrix for grid = [[0,1,1],[1,0,1],[0,0,1]]', () => {
    const grid = [
      [0, 1, 1],
      [1, 0, 1],
      [0, 0, 1],
    ];
    const expected = [
      [0, 0, 4],
      [0, 0, 4],
      [-2, -2, 2],
    ];

    const result = onesMinusZeros(grid);

    expect(result).toEqual(expected);
  });

  it('should correctly calculate the difference matrix for grid = [[1,1,1],[1,1,1]]', () => {
    const grid = [
      [1, 1, 1],
      [1, 1, 1],
    ];
    const expected = [
      [5, 5, 5],
      [5, 5, 5],
    ];

    const result = onesMinusZeros(grid);

    expect(result).toEqual(expected);
  });
});
