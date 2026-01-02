import { describe, expect, it } from 'vitest';
import { latestDayToCross } from '.';

describe('latestDayToCross', () => {
  it('example 1', () => {
    const row = 2;
    const col = 2;
    const cells = [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2],
    ];

    const result = latestDayToCross(row, col, cells);

    expect(result).toBe(2);
  });

  it('example 2', () => {
    const row = 2;
    const col = 2;
    const cells = [
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
    ];

    const result = latestDayToCross(row, col, cells);

    expect(result).toBe(1);
  });

  it('example 3', () => {
    const row = 3;
    const col = 3;
    const cells = [
      [1, 2],
      [2, 1],
      [3, 3],
      [2, 2],
      [1, 1],
      [1, 3],
      [2, 3],
      [3, 2],
      [3, 1],
    ];

    const result = latestDayToCross(row, col, cells);

    expect(result).toBe(3);
  });
});
