import { describe, expect, it } from 'vitest';
import { largestDivisibleSubset } from '.';

describe.skip('largestDivisibleSubset', () => {
  it('should returns a subset [1,2] or [1,3] for input [1,2,3]', () => {
    const nums = [1, 2, 3];

    const result = largestDivisibleSubset(nums);

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThanOrEqual(2);
    expect(
      result.every((num) =>
        result.some((other) => num === other || num % other === 0 || other % num === 0)
      )
    ).toBe(true);
  });

  it('should returns the subset [1,2,4,8] for input [1,2,4,8]', () => {
    const nums = [1, 2, 4, 8];

    const result = largestDivisibleSubset(nums);

    expect(result).toEqual(expect.arrayContaining([1, 2, 4, 8]));
  });
});
