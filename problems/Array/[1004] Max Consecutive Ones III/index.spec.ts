import { describe, expect, it } from 'vitest';
import { longestOnes } from '.';

describe('longestOnes', () => {
  it('when nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2, should return 6', () => {
    const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
    const k = 2;
    const expected = 6;

    const result = longestOnes(nums, k);

    expect(result).toEqual(expected);
  });

  it('when nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3, should return 10', () => {
    const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
    const k = 3;
    const expected = 10;

    const result = longestOnes(nums, k);

    expect(result).toEqual(expected);
  });

  it('when nums = [1,1,1,0,0,0,1,1,1,1,0], k = 0, should return 4', () => {
    const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
    const k = 0;
    const expected = 4;

    const result = longestOnes(nums, k);

    expect(result).toEqual(expected);
  });
});
