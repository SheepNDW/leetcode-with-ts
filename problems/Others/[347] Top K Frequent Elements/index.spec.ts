import { describe, expect, it } from 'vitest';
import { topKFrequent } from '.';

describe('topKFrequent', () => {
  it('example 1', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 2;

    const result = topKFrequent(nums, k);
    expect([...result].sort((a, b) => a - b)).toEqual([1, 2]);
  });

  it('example 2', () => {
    const nums = [1];
    const k = 1;

    const result = topKFrequent(nums, k);
    expect([...result].sort((a, b) => a - b)).toEqual([1]);
  });

  it('example 3', () => {
    const nums = [1, 2];
    const k = 2;

    const result = topKFrequent(nums, k);
    expect([...result].sort((a, b) => a - b)).toEqual([1, 2]);
  });
});
