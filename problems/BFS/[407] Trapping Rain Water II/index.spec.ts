import { describe, expect, it } from 'vitest';
import { trapRainWater } from '.';

describe('trapRainWater', () => {
  it('example 1', () => {
    const heightMap = [
      [1, 4, 3, 1, 3, 2],
      [3, 2, 1, 3, 2, 4],
      [2, 3, 3, 2, 3, 1],
    ];

    const result = trapRainWater(heightMap);

    expect(result).toBe(4);
  });

  it('example 2', () => {
    const heightMap = [
      [3, 3, 3, 3, 3],
      [3, 2, 2, 2, 3],
      [3, 2, 1, 2, 3],
      [3, 2, 2, 2, 3],
      [3, 3, 3, 3, 3],
    ];

    const result = trapRainWater(heightMap);

    expect(result).toBe(10);
  });
});
