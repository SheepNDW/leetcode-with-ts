import { describe, expect, it } from 'vitest';
import { xorQueries } from '.';

describe.skip('xorQueries', () => {
  it('should return [2,7,14,8]', () => {
    const arr = [1, 3, 4, 8];
    const queries = [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 3],
    ];

    const result = xorQueries(arr, queries);

    expect(result).toEqual([2, 7, 14, 8]);
  });

  it('should return [8,0,4,4]', () => {
    const arr = [4, 8, 2, 10];
    const queries = [
      [2, 3],
      [1, 3],
      [0, 0],
      [0, 3],
    ];

    const result = xorQueries(arr, queries);

    expect(result).toEqual([8, 0, 4, 4]);
  });

  it('should return [16]', () => {
    const arr = [16];
    const queries = [
      [0, 0],
      [0, 0],
      [0, 0],
    ];

    const result = xorQueries(arr, queries);

    expect(result).toEqual([16, 16, 16]);
  });
});
