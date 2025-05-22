import { describe, expect, it } from 'vitest';
import { isZeroArray } from '.';

describe.skip('isZeroArray', () => {
  it('example 1', () => {
    const nums = [1, 0, 1];
    const queries = [[0, 2]];

    const result = isZeroArray(nums, queries);

    expect(result).toBe(true);
  });

  it('example 2', () => {
    const nums = [4, 3, 2, 1];
    const queries = [
      [1, 3],
      [0, 2],
    ];

    const result = isZeroArray(nums, queries);

    expect(result).toBe(false);
  });
});
