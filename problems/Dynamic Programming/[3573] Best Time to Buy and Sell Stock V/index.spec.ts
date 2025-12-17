import { describe, expect, it } from 'vitest';
import { maximumProfit } from '.';

describe('maximumProfit', () => {
  it('example 1', () => {
    const prices = [1, 7, 9, 8, 2];
    const k = 2;
    const result = maximumProfit(prices, k);
    expect(result).toEqual(14);
  });

  it('example 2', () => {
    const prices = [12, 16, 19, 19, 8, 1, 19, 13, 9];
    const k = 3;
    const result = maximumProfit(prices, k);
    expect(result).toEqual(36);
  });
});
