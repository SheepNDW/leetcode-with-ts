import { describe, expect, it } from 'vitest';
import { findMaximizedCapital } from '.';

describe.skip('findMaximizedCapital', () => {
  it('should return 4', () => {
    const k = 2;
    const w = 0;
    const profits = [1, 2, 3];
    const capital = [0, 1, 1];

    const result = findMaximizedCapital(k, w, profits, capital);

    expect(result).toBe(4);
  });

  it('should return 6', () => {
    const k = 3;
    const w = 0;
    const profits = [1, 2, 3];
    const capital = [0, 1, 2];

    const result = findMaximizedCapital(k, w, profits, capital);

    expect(result).toBe(6);
  });
});
