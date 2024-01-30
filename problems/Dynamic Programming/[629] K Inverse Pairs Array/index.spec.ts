import { describe, expect, it } from 'vitest';
import { kInversePairs } from '.';

describe.skip('kInversePairs', () => {
  it('should return 1 for n = 3, k = 0', () => {
    const n = 3;
    const k = 0;
    const expected = 1;

    const result = kInversePairs(n, k);

    expect(result).toBe(expected);
  });

  it('should return 2 for n = 3, k = 1', () => {
    const n = 3;
    const k = 1;
    const expected = 2;

    const result = kInversePairs(n, k);

    expect(result).toBe(expected);
  });

  it('TLE', () => {
    const n = 1000;
    const k = 1000;
    const expected = 663677020;

    const result = kInversePairs(n, k);

    expect(result).toBe(expected);
  });
});
