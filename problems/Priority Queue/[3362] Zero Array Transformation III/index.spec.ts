import { describe, expect, it } from 'vitest';
import { maxRemoval } from '.';

describe.skip('maxRemoval', () => {
  it('example 1', () => {
    const nums = [2, 0, 2];
    const queries = [
      [0, 2],
      [0, 2],
      [1, 1],
    ];

    const result = maxRemoval(nums, queries);

    expect(result).toEqual(1);
  });

  it('example 2', () => {
    const nums = [1, 1, 1, 1];
    const queries = [
      [1, 3],
      [0, 2],
      [1, 3],
      [1, 2],
    ];

    const result = maxRemoval(nums, queries);

    expect(result).toEqual(2);
  });

  it('example 3', () => {
    const nums = [1, 2, 3, 4];
    const queries = [[0, 3]];

    const result = maxRemoval(nums, queries);

    expect(result).toEqual(-1);
  });
});
