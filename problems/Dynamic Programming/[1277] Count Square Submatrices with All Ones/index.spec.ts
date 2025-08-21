import { describe, expect, it } from 'vitest';
import { countSquares } from '.';

describe('countSquares', () => {
  it('example 1', () => {
    const matrix = [
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 1],
    ];
    const result = countSquares(matrix);
    expect(result).toBe(15);
  });

  it('example 2', () => {
    const matrix = [
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 0],
    ];
    const result = countSquares(matrix);
    expect(result).toBe(7);
  });
});
