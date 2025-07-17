import { describe, expect, it } from 'vitest';
import { maximumLength } from '.';

describe('maximumLength', () => {
  it('example 1', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = 2;

    const result = maximumLength(nums, k);

    expect(result).toBe(5);
  });

  it('example 2', () => {
    const nums = [1, 4, 2, 3, 1, 4];
    const k = 3;

    const result = maximumLength(nums, k);

    expect(result).toBe(4);
  });
});
