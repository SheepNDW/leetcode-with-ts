import { describe, expect, it } from 'vitest';
import { countOrders } from '.';

describe('countOrders', () => {
  it('should return 1 when n is 1', () => {
    const n = 1;
    const expected = 1;
    const result = countOrders(n);
    expect(result).toBe(expected);
  });

  it('should return 6 when n is 2', () => {
    const n = 2;
    const expected = 6;
    const result = countOrders(n);
    expect(result).toBe(expected);
  });

  it('should return 90 when n is 3', () => {
    const n = 3;
    const expected = 90;
    const result = countOrders(n);
    expect(result).toBe(expected);
  });
});
