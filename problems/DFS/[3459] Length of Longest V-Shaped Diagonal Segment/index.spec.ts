import { describe, expect, it } from 'vitest';
import { lenOfVDiagonal } from '.';

describe('lenOfVDiagonal', () => {
  it('example 1', () => {
    const grid = [
      [2, 2, 1, 2, 2],
      [2, 0, 2, 2, 0],
      [2, 0, 1, 1, 0],
      [1, 0, 2, 2, 2],
      [2, 0, 0, 2, 2],
    ];
    const result = lenOfVDiagonal(grid);
    expect(result).toBe(5);
  });

  it('example 2', () => {
    const grid = [
      [2, 2, 2, 2, 2],
      [2, 0, 2, 2, 0],
      [2, 0, 1, 1, 0],
      [1, 0, 2, 2, 2],
      [2, 0, 0, 2, 2],
    ];
    const result = lenOfVDiagonal(grid);
    expect(result).toBe(4);
  });

  it('example 3', () => {
    const grid = [
      [1, 2, 2, 2, 2],
      [2, 2, 2, 2, 0],
      [2, 0, 0, 0, 0],
      [0, 0, 2, 2, 2],
      [2, 0, 0, 2, 0],
    ];
    const result = lenOfVDiagonal(grid);
    expect(result).toBe(5);
  });

  it('example 4', () => {
    const grid = [[1]];
    const result = lenOfVDiagonal(grid);
    expect(result).toBe(1);
  });
});
