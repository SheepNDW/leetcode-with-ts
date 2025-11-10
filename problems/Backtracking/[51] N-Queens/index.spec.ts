import { describe, expect, it } from 'vitest';
import { solveNQueens } from '.';

describe('solveNQueens', () => {
  it('example 1', () => {
    const n = 4;

    const result = solveNQueens(n);

    expect(result).toEqual([
      ['.Q..', '...Q', 'Q...', '..Q.'],
      ['..Q.', 'Q...', '...Q', '.Q..'],
    ]);
  });

  it('example 2', () => {
    const n = 1;

    const result = solveNQueens(n);

    expect(result).toEqual([['Q']]);
  });
});
