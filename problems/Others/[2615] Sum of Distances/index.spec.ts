import { describe, expect, it } from 'vitest';
import { distance } from '.';

describe('distance', () => {
  it('example 1', () => {
    const nums = [1, 3, 1, 1, 2];
    const result = distance(nums);
    expect(result).toEqual([5, 0, 3, 4, 0]);
  });

  it('example 2', () => {
    const nums = [0, 5, 3];
    const result = distance(nums);
    expect(result).toEqual([0, 0, 0]);
  });
});
