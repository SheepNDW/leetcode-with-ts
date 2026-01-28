import { describe, expect, it } from 'vitest';
import { networkDelayTime } from '.';

describe('networkDelayTime', () => {
  it('example 1', () => {
    const items = [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ];
    const n = 4;
    const k = 2;

    const result = networkDelayTime(items, n, k);

    expect(result).toBe(2);
  });

  it('example 2', () => {
    const items = [[1, 2, 1]];
    const n = 2;
    const k = 1;

    const result = networkDelayTime(items, n, k);

    expect(result).toBe(1);
  });

  it('example 3', () => {
    const items = [[1, 2, 1]];
    const n = 2;
    const k = 2;

    const result = networkDelayTime(items, n, k);

    expect(result).toBe(-1);
  });
});
