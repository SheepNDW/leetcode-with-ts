import { describe, it, expect } from 'vitest';
import { maxProfit } from '.';
import prices from './tle-case';

describe.skip('maxProfit', () => {
  it('should return the maximum profit from buying and selling stocks', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it('TLE test case', () => {
    expect(maxProfit(prices)).toBe(999);
  });
});

/**
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
