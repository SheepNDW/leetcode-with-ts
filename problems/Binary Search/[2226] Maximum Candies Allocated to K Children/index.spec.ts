import { describe, expect, it } from 'vitest';
import { maximumCandies } from '.';

describe.skip('maximumCandies', () => {
  it('should return 5 for candies = [5,8,6], k = 3', () => {
    const candies = [5, 8, 6];
    const k = 3;

    const result = maximumCandies(candies, k);

    expect(result).toBe(5);
  });

  it('should return 0 for candies = [2,5], k = 11', () => {
    const candies = [2, 5];
    const k = 11;

    const result = maximumCandies(candies, k);

    expect(result).toBe(0);
  });
});
