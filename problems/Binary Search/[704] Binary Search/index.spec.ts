import { describe, expect, it } from 'vitest';
import { search } from '.';

describe.skip('search', () => {
  it('should return 4 when nums = [-1,0,3,5,9,12], target = 9', () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 9;

    const result = search(nums, target);

    expect(result).toBe(4);
  });

  it('should return -1 when nums = [-1,0,3,5,9,12], target = 2', () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 2;

    const result = search(nums, target);

    expect(result).toBe(-1);
  });
});
