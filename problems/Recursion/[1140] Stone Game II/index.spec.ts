import { describe, expect, it } from 'vitest';
import { stoneGameII } from '.';

describe.skip('stoneGameII', () => {
  it('should return 10 for piles = [2,7,9,4,4]', () => {
    const piles = [2, 7, 9, 4, 4];

    const result = stoneGameII(piles);

    expect(result).toBe(10);
  });

  it('should return 104 for piles = [1,2,3,4,5,100]', () => {
    const piles = [1, 2, 3, 4, 5, 100];

    const result = stoneGameII(piles);

    expect(result).toBe(104);
  });
});
