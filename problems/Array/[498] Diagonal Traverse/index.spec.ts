import { describe, expect, it } from 'vitest';
import { findDiagonalOrder } from '.';

describe('findDiagonalOrder', () => {
  it('example 1', () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = findDiagonalOrder(mat);
    expect(result).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
  });

  it('example 2', () => {
    const mat = [
      [1, 2],
      [3, 4],
    ];
    const result = findDiagonalOrder(mat);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
