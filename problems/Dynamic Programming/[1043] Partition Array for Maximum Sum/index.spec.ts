import { describe, expect, it } from 'vitest';
import { maxSumAfterPartitioning } from '.';

describe.skip('maxSumAfterPartitioning', () => {
  it('should return 84 for arr = [1,15,7,9,2,5,10], k = 3', () => {
    const arr = [1, 15, 7, 9, 2, 5, 10];
    const k = 3;
    const expected = 84;

    const result = maxSumAfterPartitioning(arr, k);

    expect(result).toBe(expected);
  });

  it('should return 83 for arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4', () => {
    const arr = [1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3];
    const k = 4;
    const expected = 83;

    const result = maxSumAfterPartitioning(arr, k);

    expect(result).toBe(expected);
  });

  it('should return 1 for arr = [1], k = 1', () => {
    const arr = [1];
    const k = 1;
    const expected = 1;

    const result = maxSumAfterPartitioning(arr, k);

    expect(result).toBe(expected);
  });
});
