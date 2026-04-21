import { describe, expect, it } from 'vitest';
import { minimumHammingDistance } from '.';

describe('minimumHammingDistance', () => {
  it('example 1', () => {
    const source = [1, 2, 3, 4];
    const target = [2, 1, 4, 5];
    const allowedSwaps = [
      [0, 1],
      [2, 3],
    ];

    const result = minimumHammingDistance(source, target, allowedSwaps);

    expect(result).toBe(1);
  });

  it('example 2', () => {
    const source = [1, 2, 3, 4];
    const target = [1, 3, 2, 4];
    const allowedSwaps: number[][] = [];

    const result = minimumHammingDistance(source, target, allowedSwaps);

    expect(result).toBe(2);
  });

  it('example 3', () => {
    const source = [5, 1, 2, 4, 3];
    const target = [1, 5, 4, 2, 3];
    const allowedSwaps = [
      [0, 4],
      [4, 2],
      [1, 3],
      [1, 4],
    ];

    const result = minimumHammingDistance(source, target, allowedSwaps);

    expect(result).toBe(0);
  });
});
