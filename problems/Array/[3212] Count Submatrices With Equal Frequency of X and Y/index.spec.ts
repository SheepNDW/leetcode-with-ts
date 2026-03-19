import { describe, expect, it } from 'vitest';
import { numberOfSubmatrices } from '.';

describe('numberOfSubmatrices', () => {
  it('example 1', () => {
    const grid = [
      ['X', 'Y', '.'],
      ['Y', '.', '.'],
    ];

    const result = numberOfSubmatrices(grid);

    expect(result).toBe(3);
  });

  it('example 2', () => {
    const grid = [
      ['X', 'X'],
      ['X', 'Y'],
    ];

    const result = numberOfSubmatrices(grid);

    expect(result).toBe(0);
  });

  it('example 3', () => {
    const grid = [
      ['.', '.'],
      ['.', '.'],
    ];

    const result = numberOfSubmatrices(grid);

    expect(result).toBe(0);
  });
});
