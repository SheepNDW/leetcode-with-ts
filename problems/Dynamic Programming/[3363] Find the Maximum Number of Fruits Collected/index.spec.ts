import { describe, expect, it } from 'vitest';
import { maxCollectedFruits } from '.';

describe('maxCollectedFruits', () => {
  it('example 1', () => {
    const fruits = [
      [1, 2, 3, 4],
      [5, 6, 8, 7],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const result = maxCollectedFruits(fruits);
    expect(result).toBe(100);
  });

  it('example 2', () => {
    const fruits = [
      [1, 1],
      [1, 1],
    ];
    const result = maxCollectedFruits(fruits);
    expect(result).toBe(4);
  });

  it('example 3', () => {
    const fruits = [
      [11, 15, 18, 7],
      [8, 15, 5, 19],
      [15, 20, 4, 10],
      [15, 3, 10, 5],
    ];
    const result = maxCollectedFruits(fruits);
    expect(result).toBe(116);
  });
});
