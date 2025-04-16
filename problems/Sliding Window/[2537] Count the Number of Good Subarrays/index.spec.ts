import { describe, expect, it } from 'vitest';
import { countGood } from '.';

describe.skip('countGood', () => {
  it('example 1', () => {
    const nums = [1, 1, 1, 1, 1];
    const k = 10;

    const result = countGood(nums, k);

    expect(result).toEqual(1);
  });

  it('example 2', () => {
    const nums = [3, 1, 4, 3, 2, 2, 4];
    const k = 2;

    const result = countGood(nums, k);

    expect(result).toEqual(4);
  });
});
