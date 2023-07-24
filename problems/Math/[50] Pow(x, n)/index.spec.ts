import { describe, expect, it } from 'vitest';
import { myPow } from '.';

describe('myPow', () => {
  it('should return 1024 when x=2 and n=10', () => {
    const x = 2.0;
    const n = 10;

    const result = myPow(x, n);

    expect(result).toBeCloseTo(1024.0, 5);
  });

  it('should return 9.261 when x=2.1 and n=3', () => {
    const x = 2.1;
    const n = 3;

    const result = myPow(x, n);

    expect(result).toBeCloseTo(9.261, 5);
  });

  it('should return 0.25 when x=2 and n=-2', () => {
    const x = 2.0;
    const n = -2;

    const result = myPow(x, n);

    expect(result).toBeCloseTo(0.25, 5);
  });

  it('should return 0.00000 when x=2.00000 and n=-2147483648', () => {
    const x = 2.0;
    const n = -2147483648;

    const result = myPow(x, n);

    expect(result).toBeCloseTo(0.0, 5);
  });
});
