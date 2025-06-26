import { describe, expect, it } from 'vitest';
import { partitionArray } from '.';

describe('partitionArray', () => {
  it('example 1', () => {
    const nums = [3, 6, 1, 2, 5];
    const k = 2;

    const result = partitionArray(nums, k);

    expect(result).toBe(2);
  });

  it('example 2', () => {
    const nums = [1, 2, 3];
    const k = 1;

    const result = partitionArray(nums, k);

    expect(result).toBe(2);
  });

  it('example 3', () => {
    const nums = [2, 2, 4, 5];
    const k = 0;

    const result = partitionArray(nums, k);

    expect(result).toBe(3);
  });
});
