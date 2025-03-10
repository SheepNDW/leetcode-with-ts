import { describe, expect, it } from 'vitest';
import { countPrimes } from '.';

describe.skip('countPrimes', () => {
  it('should return 4 for n = 10', () => {
    const n = 10;

    const result = countPrimes(n);

    expect(result).toEqual(4);
  });

  it('should return 0 for n = 0', () => {
    const n = 0;

    const result = countPrimes(n);

    expect(result).toEqual(0);
  });

  it('should return 0 for n = 1', () => {
    const n = 1;

    const result = countPrimes(n);

    expect(result).toEqual(0);
  });

  it('should return 0 for n = 2', () => {
    const n = 2;

    const result = countPrimes(n);

    expect(result).toEqual(0);
  });
});
