import { describe, expect, it } from 'vitest';
import { countSubmatrices } from '.';

describe('countSubmatrices', () => {
  it('example 1', () => {
    const grid = [
      [7, 6, 3],
      [6, 6, 1],
    ];
    const k = 18;

    const result = countSubmatrices(grid, k);

    expect(result).toBe(4);
  });

  it('example 2', () => {
    const grid = [
      [7, 2, 9],
      [1, 5, 0],
      [2, 6, 6],
    ];
    const k = 20;

    const result = countSubmatrices(grid, k);

    expect(result).toBe(6);
  });
});
