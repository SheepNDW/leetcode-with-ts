import { describe, expect, it } from 'vitest';
import { numOfUnplacedFruits } from '.';

describe('numOfUnplacedFruits', () => {
  it('example 1', () => {
    const fruits = [4, 2, 5];
    const baskets = [3, 5, 4];

    const result = numOfUnplacedFruits(fruits, baskets);

    expect(result).toBe(1);
  });

  it('example 2', () => {
    const fruits = [3, 6, 1];
    const baskets = [6, 4, 7];

    const result = numOfUnplacedFruits(fruits, baskets);

    expect(result).toBe(0);
  });
});
