import { describe, expect, it } from 'vitest';
import { minCost } from '.';

describe('minCost', () => {
  it('example 1', () => {
    const basket1 = [4, 2, 2, 2];
    const basket2 = [1, 4, 1, 2];

    const result = minCost(basket1, basket2);

    expect(result).toBe(1);
  });

  it('example 2', () => {
    const basket1 = [2, 3, 4, 1];
    const basket2 = [3, 2, 5, 1];

    const result = minCost(basket1, basket2);

    expect(result).toBe(-1);
  });
});
