import { describe, expect, it } from 'vitest';
import { countGoodStrings } from '.';

describe.skip('countGoodStrings', () => {
  it('example 1', () => {
    const low = 3;
    const high = 3;
    const zero = 1;
    const one = 1;

    const result = countGoodStrings(low, high, zero, one);

    expect(result).toBe(8);
  });

  it('example 2', () => {
    const low = 2;
    const high = 3;
    const zero = 1;
    const one = 2;

    const result = countGoodStrings(low, high, zero, one);

    expect(result).toBe(5);
  });
});
