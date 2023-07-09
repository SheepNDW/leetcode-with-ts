import { describe, expect, it } from 'vitest';
import { twoSumLessThanK } from '.';

describe('twoSumLessThanK', () => {
  it('returns the maximum sum less than K', () => {
    const A1 = [34, 23, 1, 24, 75, 33, 54, 8];
    const K1 = 60;
    const A2 = [10, 20, 30];
    const K2 = 15;

    const result1 = twoSumLessThanK(A1, K1);
    const result2 = twoSumLessThanK(A2, K2);

    expect(result1).toEqual(58);
    expect(result2).toEqual(-1);
  });

  it('returns -1 when there is only one element in the array', () => {
    const A = [1];
    const K = 2;

    const result = twoSumLessThanK(A, K);

    expect(result).toEqual(-1);
  });
});
