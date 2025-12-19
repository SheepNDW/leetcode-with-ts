import { describe, expect, it } from 'vitest';
import { maxProfit } from '.';

describe('maxProfit', () => {
  it('example 1', () => {
    const prices = [4, 2, 8];
    const strategy = [-1, 0, 1];
    const k = 2;

    const result = maxProfit(prices, strategy, k);

    expect(result).toBe(10);
  });

  it('example 2', () => {
    const prices = [5, 4, 3];
    const strategy = [1, 1, 0];
    const k = 2;

    const result = maxProfit(prices, strategy, k);

    expect(result).toBe(9);
  });
});
