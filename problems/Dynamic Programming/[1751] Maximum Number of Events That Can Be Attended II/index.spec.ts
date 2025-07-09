import { describe, expect, it } from 'vitest';
import { maxValue } from '.';

describe('maxValue', () => {
  it('example 1', () => {
    const events = [
      [1, 2, 4],
      [3, 4, 3],
      [2, 3, 1],
    ];
    const k = 2;
    const result = maxValue(events, k);
    expect(result).toBe(7);
  });

  it('example 2', () => {
    const events = [
      [1, 2, 4],
      [3, 4, 3],
      [2, 3, 10],
    ];
    const k = 2;
    const result = maxValue(events, k);
    expect(result).toBe(10);
  });

  it('example 3', () => {
    const events = [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
      [4, 4, 4],
    ];
    const k = 3;
    const result = maxValue(events, k);
    expect(result).toBe(9);
  });
});
