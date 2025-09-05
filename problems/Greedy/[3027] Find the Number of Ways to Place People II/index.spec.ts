import { describe, expect, it } from 'vitest';
import { numberOfPairs } from '.';

describe('numberOfPairs', () => {
  it('example 1', () => {
    const points = [
      [1, 1],
      [2, 2],
      [3, 3],
    ];

    const result = numberOfPairs(points);

    expect(result).toBe(0);
  });

  it('example 2', () => {
    const points = [
      [6, 2],
      [4, 4],
      [2, 6],
    ];

    const result = numberOfPairs(points);

    expect(result).toBe(2);
  });

  it('example 3', () => {
    const points = [
      [3, 1],
      [1, 3],
      [1, 1],
    ];

    const result = numberOfPairs(points);

    expect(result).toBe(2);
  });
});
