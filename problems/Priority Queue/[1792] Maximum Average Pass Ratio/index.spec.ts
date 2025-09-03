import { describe, expect, it } from 'vitest';
import { maxAverageRatio } from '.';

describe('maxAverageRatio', () => {
  it('example 1', () => {
    const classes = [
      [1, 2],
      [3, 5],
      [2, 2],
    ];
    const result = maxAverageRatio(classes, 2);
    expect(result).toBeCloseTo(0.78333, 5);
  });

  it('example 2', () => {
    const classes = [
      [2, 4],
      [3, 9],
      [4, 5],
      [2, 10],
    ];
    const result = maxAverageRatio(classes, 4);
    expect(result).toBeCloseTo(0.53485, 5);
  });
});
