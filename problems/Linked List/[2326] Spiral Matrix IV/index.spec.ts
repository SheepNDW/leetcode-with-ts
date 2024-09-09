import { describe, expect, it } from 'vitest';
import { spiralMatrix } from '.';
import { createList } from '../../utils/list';

describe.skip('spiralMatrix', () => {
  it('should return the spiral matrix', () => {
    const m = 3;
    const n = 5;
    const head = createList([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]);

    const result = spiralMatrix(m, n, head);
    const expected = [
      [3, 0, 2, 6, 8],
      [5, 0, -1, -1, 1],
      [5, 2, 4, 9, 7],
    ];

    result.forEach((row, i) => {
      expect(row).toEqual(expected[i]);
    });
  });

  it('should return the spiral matrix', () => {
    const m = 1;
    const n = 4;
    const head = createList([0, 1, 2]);

    const result = spiralMatrix(m, n, head);
    const expected = [[0, 1, 2, -1]];

    result.forEach((row, i) => {
      expect(row).toEqual(expected[i]);
    });
  });
});
