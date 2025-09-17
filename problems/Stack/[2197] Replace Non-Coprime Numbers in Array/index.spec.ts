import { describe, expect, it } from 'vitest';
import { replaceNonCoprimes } from '.';

describe('replaceNonCoprimes', () => {
  it('example 1', () => {
    const nums = [6, 4, 3, 2, 7, 6, 2];
    const result = replaceNonCoprimes(nums);
    expect(result).toEqual([12, 7, 6]);
  });

  it('example 2', () => {
    const nums = [2, 2, 1, 1, 3, 3, 3];
    const result = replaceNonCoprimes(nums);
    expect(result).toEqual([2, 1, 1, 3]);
  });
});
