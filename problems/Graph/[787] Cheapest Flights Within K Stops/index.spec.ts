import { describe, expect, it } from 'vitest';
import { findCheapestPrice } from '.';

describe('findCheapestPrice', () => {
  it('example 1', () => {
    const n = 4;
    const flights = [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ];
    const src = 0;
    const dst = 3;
    const k = 1;

    const result = findCheapestPrice(n, flights, src, dst, k);

    expect(result).toBe(700);
  });

  it('example 2', () => {
    const n = 3;
    const flights = [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ];
    const src = 0;
    const dst = 2;
    const k = 1;

    const result = findCheapestPrice(n, flights, src, dst, k);

    expect(result).toBe(200);
  });
});
