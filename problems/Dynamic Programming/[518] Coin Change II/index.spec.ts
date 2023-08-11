import { describe, expect, it } from 'vitest';
import { change } from '.';

describe('coin change ii', () => {
  it('should return the correct combinations', () => {
    const amount = 5;
    const coins = [1, 2, 5];
    const expected = 4;

    const result = change(amount, coins);

    expect(result).toBe(expected);
  });

  it('should return 0 for amount that cannot be made up with given coins', () => {
    const amount = 3;
    const coins = [2];
    const expected = 0;

    const result = change(amount, coins);

    expect(result).toBe(expected);
  });

  it('should return 1 when amount is 0', () => {
    const amount = 0;
    const coins = [1, 2, 5];
    const expected = 1;

    const result = change(amount, coins);

    expect(result).toBe(expected);
  });

  it('should return the correct result when there is only one coin', () => {
    const amount = 10;
    const coins = [10];
    const expected = 1;

    const result = change(amount, coins);

    expect(result).toBe(expected);
  });
});
