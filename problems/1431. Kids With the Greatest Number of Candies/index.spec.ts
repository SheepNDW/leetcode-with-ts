import { describe, expect, it } from 'vitest';
import { kidsWithCandies } from '.';

describe('kidsWithCandies', () => {
  it('example 1', () => {
    const candies = [2, 3, 5, 1, 3];
    const extraCandies = 3;
    const expected = [true, true, true, false, true];
    expect(kidsWithCandies(candies, extraCandies)).toEqual(expected);
  });

  it('example 2', () => {
    const candies = [4, 2, 1, 1, 2];
    const extraCandies = 1;
    const expected = [true, false, false, false, false];
    expect(kidsWithCandies(candies, extraCandies)).toEqual(expected);
  });

  it('example 3', () => {
    const candies = [12, 1, 12];
    const extraCandies = 10;
    const expected = [true, false, true];
    expect(kidsWithCandies(candies, extraCandies)).toEqual(expected);
  });
});
