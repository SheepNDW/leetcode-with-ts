import { describe, expect, it } from 'vitest';
import { findTheWinner } from '.';

describe.skip('findTheWinner', () => {
  it('should return 3 when n = 5 and k = 2', () => {
    const n = 5;
    const k = 2;

    const result = findTheWinner(n, k);

    expect(result).toBe(3);
  });

  it('should return 1 when n = 6 and k = 5', () => {
    const n = 6;
    const k = 5;

    const result = findTheWinner(n, k);

    expect(result).toBe(1);
  });

  it('should return 1 when n = 1 and k = 1', () => {
    const n = 1;
    const k = 1;

    const result = findTheWinner(n, k);

    expect(result).toBe(1);
  });

  it('should return 3 when n = 3 and k = 2', () => {
    const n = 3;
    const k = 2;

    const result = findTheWinner(n, k);

    expect(result).toBe(3);
  });
});
