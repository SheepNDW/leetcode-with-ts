import { describe, it, expect } from 'vitest';
import { maxIceCream } from '.';

describe('maxIceCream()', () => {
  it('should return the maximum number of ice cream bars that can be bought with the given coins', () => {
    expect(maxIceCream([1, 3, 2, 4, 1], 7)).toBe(4);
    expect(maxIceCream([10, 6, 8, 7, 7, 8], 5)).toBe(0);
    expect(maxIceCream([1, 6, 3, 1, 2, 5], 20)).toBe(6);
  });
});

/**
 * @link https://leetcode.com/problems/maximum-ice-cream-bars/
 */
