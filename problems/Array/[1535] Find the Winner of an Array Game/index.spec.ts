import { describe, expect, it } from 'vitest';
import { getWinner } from '.';

describe.skip('getWinner', () => {
  it('should return 5 as the winner for the input [2, 1, 3, 5, 4, 6, 7] with k = 2', () => {
    const arr = [2, 1, 3, 5, 4, 6, 7];
    const k = 2;
    const expected = 5;

    const result = getWinner(arr, k);

    expect(result).toBe(expected);
  });

  it('should return 3 as the winner for the input [3, 2, 1] with k = 10', () => {
    const arr = [3, 2, 1];
    const k = 10;
    const expected = 3;

    const result = getWinner(arr, k);

    expect(result).toBe(expected);
  });
});
