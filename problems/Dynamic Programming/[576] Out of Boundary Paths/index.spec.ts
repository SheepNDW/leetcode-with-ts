import { describe, expect, it } from 'vitest';
import { findPaths } from '.';

describe.skip('findPaths', () => {
  it('should return 6 for m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0', () => {
    const m = 2,
      n = 2,
      maxMove = 2,
      startRow = 0,
      startColumn = 0;
    const expected = 6;

    const result = findPaths(m, n, maxMove, startRow, startColumn);

    expect(result).toBe(expected);
  });

  it('should return 12 for m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1', () => {
    const m = 1,
      n = 3,
      maxMove = 3,
      startRow = 0,
      startColumn = 1;
    const expected = 12;

    const result = findPaths(m, n, maxMove, startRow, startColumn);

    expect(result).toBe(expected);
  });
});
