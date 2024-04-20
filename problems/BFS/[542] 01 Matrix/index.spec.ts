import { describe, expect, it } from 'vitest';
import { updateMatrix } from '.';

describe.skip('updateMatrix', () => {
  it('should return the same matrix if all elements are 0', () => {
    const mat = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    const result = updateMatrix(mat);

    expect(result).toEqual(mat);
  });

  it('should return correct distances for the given matrix', () => {
    const mat = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ];
    const expected = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ];

    const result = updateMatrix(mat);

    expect(result).toEqual(expected);
  });

  it('should return correct distances for the matrix with only one 0', () => {
    const mat = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const expected = [
      [2, 1, 2],
      [1, 0, 1],
      [2, 1, 2],
    ];

    const result = updateMatrix(mat);

    expect(result).toEqual(expected);
  });

  it('should handle the smallest possible matrix', () => {
    const mat = [[0]];
    const expected = [[0]];

    const result = updateMatrix(mat);

    expect(result).toEqual(expected);
  });
});
