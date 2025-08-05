import { describe, expect, it } from 'vitest';
import { maxTotalFruits } from '.';

describe('maxTotalFruits', () => {
  it('example 1', () => {
    const fruits = [
      [2, 8],
      [6, 3],
      [8, 6],
    ];
    const startPos = 5;
    const k = 4;

    const result = maxTotalFruits(fruits, startPos, k);

    expect(result).toBe(9);
  });

  it('example 2', () => {
    const fruits = [
      [0, 9],
      [4, 1],
      [5, 7],
      [6, 2],
      [7, 4],
      [10, 9],
    ];
    const startPos = 5;
    const k = 4;

    const result = maxTotalFruits(fruits, startPos, k);

    expect(result).toBe(14);
  });

  it('example 3', () => {
    const fruits = [
      [0, 3],
      [6, 4],
      [8, 5],
    ];
    const startPos = 3;
    const k = 2;

    const result = maxTotalFruits(fruits, startPos, k);

    expect(result).toBe(0);
  });
});
