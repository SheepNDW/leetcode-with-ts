import { describe, expect, it } from 'vitest';
import { maxCoins } from '.';

describe.skip('maxCoins', () => {
  it('should return 9 when piles = [2,4,1,2,7,8]', () => {
    const piles = [2, 4, 1, 2, 7, 8];
    const expected = 9;

    const result = maxCoins(piles);

    expect(result).toBe(expected);
  });

  it('should return 4 when piles = [2,4,5]', () => {
    const piles = [2, 4, 5];
    const expected = 4;

    const result = maxCoins(piles);

    expect(result).toBe(expected);
  });

  it('should return 18 when piles = [9,8,7,6,5,1,2,3,4]', () => {
    const piles = [9, 8, 7, 6, 5, 1, 2, 3, 4];
    const expected = 18;

    const result = maxCoins(piles);

    expect(result).toBe(expected);
  });
});
