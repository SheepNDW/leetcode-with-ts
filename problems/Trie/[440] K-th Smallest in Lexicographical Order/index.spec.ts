import { describe, expect, it } from 'vitest';
import { findKthNumber } from '.';

describe('findKthNumber', () => {
  it('example 1', () => {
    const n = 13;
    const k = 2;

    const result = findKthNumber(n, k);

    expect(result).toBe(10);
  });

  it('example 2', () => {
    const n = 1;
    const k = 1;

    const result = findKthNumber(n, k);

    expect(result).toBe(1);
  });

  it('example 3', () => {
    const n = 13;
    const k = 6;

    const result = findKthNumber(n, k);

    expect(result).toBe(2);
  });

  it('example 4', () => {
    const n = 100;
    const k = 10;

    const result = findKthNumber(n, k);

    expect(result).toBe(17);
  });
});
