import { describe, expect, it } from 'vitest';
import { isArraySpecial } from '.';

describe.skip('isArraySpecial', () => {
  it('Example 1', () => {
    const nums = [3, 4, 1, 2, 6];
    const queries = [[0, 4]];

    const result = isArraySpecial(nums, queries);

    expect(result).toEqual([false]);
  });

  it('Example 2', () => {
    const nums = [4, 3, 1, 6];
    const queries = [
      [0, 2],
      [2, 3],
    ];

    const result = isArraySpecial(nums, queries);

    expect(result).toEqual([false, true]);
  });
});
