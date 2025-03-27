import { describe, expect, it } from 'vitest';
import { checkValidCuts } from '.';

describe.skip('checkValidCuts', () => {
  it('example 1', () => {
    const n = 5;
    const rectangles = [
      [1, 0, 5, 2],
      [0, 2, 2, 4],
      [3, 2, 5, 3],
      [0, 4, 4, 5],
    ];

    const result = checkValidCuts(n, rectangles);

    expect(result).toBe(true);
  });

  it('example 2', () => {
    const n = 4;
    const rectangles = [
      [0, 2, 2, 4],
      [1, 0, 3, 2],
      [2, 2, 3, 4],
      [3, 0, 4, 2],
      [3, 2, 4, 4],
    ];

    const result = checkValidCuts(n, rectangles);

    expect(result).toBe(false);
  });
});
