import { describe, expect, it } from 'vitest';
import { closestPrimes } from '.';

describe.skip('closestPrimes', () => {
  it('should return [11, 13] for left = 10, right = 19', () => {
    const left = 10;
    const right = 19;

    const result = closestPrimes(left, right);

    expect(result).toEqual([11, 13]);
  });

  it('should return [-1, -1] for left = 4, right = 6', () => {
    const left = 4;
    const right = 6;

    const result = closestPrimes(left, right);

    expect(result).toEqual([-1, -1]);
  });
});
