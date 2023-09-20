import { describe, expect, it } from 'vitest';
import { kWeakestRows } from '.';

describe('kWeakestRows', () => {
  it('should return the indices of the k weakest rows in the matrix ordered from weakest to strongest', () => {
    const mat1 = [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ];
    const k1 = 3;

    const mat2 = [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ];
    const k2 = 2;

    const result1 = kWeakestRows(mat1, k1);
    const result2 = kWeakestRows(mat2, k2);

    expect(result1).toEqual([2, 0, 3]);
    expect(result2).toEqual([0, 2]);
  });
});
