import { describe, expect, it } from 'vitest';
import { numSubmat } from '.';

describe('numSubmat', () => {
  it('example 1', () => {
    const mat = [
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 0],
    ];
    const result = numSubmat(mat);
    expect(result).toBe(13);
  });

  it('example 2', () => {
    const mat = [
      [0, 1, 1, 0],
      [0, 1, 1, 1],
      [1, 1, 1, 0],
    ];
    const result = numSubmat(mat);
    expect(result).toBe(24);
  });
});
