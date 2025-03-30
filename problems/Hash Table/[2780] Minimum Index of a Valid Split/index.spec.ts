import { describe, expect, it } from 'vitest';
import { minimumIndex } from '.';

describe.skip('minimumIndex', () => {
  it('example 1', () => {
    const nums = [1, 2, 2, 2];

    const result = minimumIndex(nums);

    expect(result).toBe(2);
  });

  it('example 2', () => {
    const nums = [2, 1, 3, 1, 1, 1, 7, 1, 2, 1];

    const result = minimumIndex(nums);

    expect(result).toBe(4);
  });

  it('example 3', () => {
    const nums = [3, 3, 3, 3, 7, 2, 2];

    const result = minimumIndex(nums);

    expect(result).toBe(-1);
  });
});
