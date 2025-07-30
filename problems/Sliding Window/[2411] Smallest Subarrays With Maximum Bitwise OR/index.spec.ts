import { describe, expect, it } from 'vitest';
import { smallestSubarrays } from '.';

describe('smallestSubarrays', () => {
  it('example 1', () => {
    const nums = [1, 0, 2, 1, 3];
    const result = smallestSubarrays(nums);
    expect(result).toEqual([3, 3, 2, 2, 1]);
  });

  it('example 2', () => {
    const nums = [1, 2];
    const result = smallestSubarrays(nums);
    expect(result).toEqual([2, 1]);
  });
});
