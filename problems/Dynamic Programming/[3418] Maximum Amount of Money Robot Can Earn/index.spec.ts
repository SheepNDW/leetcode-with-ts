import { describe, expect, it } from 'vitest';
import { maximumAmount } from '.';

describe('maximumAmount', () => {
  it('example 1', () => {
    const coins = [
      [0, 1, -1],
      [1, -2, 3],
      [2, -3, 4],
    ];
    const result = maximumAmount(coins);
    expect(result).toBe(8);
  });

  it('example 2', () => {
    const coins = [
      [10, 10, 10],
      [10, 10, 10],
    ];
    const result = maximumAmount(coins);
    expect(result).toBe(40);
  });

  it('example 3', () => {
    const coins = [[-4]];
    const result = maximumAmount(coins);
    expect(result).toBe(0);
  });
});
