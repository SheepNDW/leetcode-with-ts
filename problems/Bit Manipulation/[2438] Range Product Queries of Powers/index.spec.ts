import { describe, expect, it } from 'vitest';
import { productQueries } from '.';

describe('productQueries', () => {
  it('example 1', () => {
    const n = 15;
    const queries = [
      [0, 1],
      [2, 2],
      [0, 3],
    ];

    const result = productQueries(n, queries);

    expect(result).toEqual([2, 4, 64]);
  });

  it('example 2', () => {
    const n = 2;
    const queries = [[0, 0]];

    const result = productQueries(n, queries);

    expect(result).toEqual([2]);
  });
});
