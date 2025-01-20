import { describe, expect, it } from 'vitest';
import { firstCompleteIndex } from '.';

describe('firstCompleteIndex()', () => {
  it('Example 1', () => {
    const arr = [1, 3, 4, 2];
    const mat = [
      [1, 4],
      [2, 3],
    ];

    const result = firstCompleteIndex(arr, mat);

    expect(result).toBe(2);
  });

  it('Example 2', () => {
    const arr = [2, 8, 7, 4, 1, 3, 5, 6, 9];
    const mat = [
      [3, 2, 5],
      [1, 4, 6],
      [8, 7, 9],
    ];

    const result = firstCompleteIndex(arr, mat);

    expect(result).toBe(3);
  });
});
