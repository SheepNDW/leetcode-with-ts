import { describe, expect, it } from 'vitest';
import { numberOfPairs } from '.';

describe('numberOfPairs', () => {
  it('example 1', () => {
    const result = numberOfPairs([
      [1, 1],
      [2, 2],
      [3, 3],
    ]);
    expect(result).toBe(0);
  });

  it('example 2', () => {
    const result = numberOfPairs([
      [6, 2],
      [4, 4],
      [2, 6],
    ]);
    expect(result).toBe(2);
  });

  it('example 3', () => {
    const result = numberOfPairs([
      [3, 1],
      [1, 3],
      [1, 1],
    ]);
    expect(result).toBe(2);
  });

  it('example 4', () => {
    const result = numberOfPairs([
      [1, 5],
      [2, 0],
      [5, 5],
    ]);
    expect(result).toBe(2);
  });

  it('example 5', () => {
    const result = numberOfPairs([
      [5, 1],
      [2, 4],
    ]);
    expect(result).toBe(1);
  });
});
