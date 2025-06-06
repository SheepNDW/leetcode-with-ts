import { describe, expect, it } from 'vitest';
import { maxCandies } from '.';

describe('maxCandies', () => {
  it('example 1', () => {
    const status = [1, 0, 1, 0];
    const candies = [7, 5, 4, 100];
    const keys = [[], [], [1], []];
    const containedBoxes = [[1, 2], [3], [], []];
    const initialBoxes = [0];

    const result = maxCandies(status, candies, keys, containedBoxes, initialBoxes);

    expect(result).toBe(16);
  });

  it('example 2', () => {
    const status = [1, 0, 0, 0, 0, 0];
    const candies = [1, 1, 1, 1, 1, 1];
    const keys = [[1, 2, 3, 4, 5], [], [], [], [], []];
    const containedBoxes = [[1, 2, 3, 4, 5], [], [], [], [], []];
    const initialBoxes = [0];

    const result = maxCandies(status, candies, keys, containedBoxes, initialBoxes);

    expect(result).toBe(6);
  });
});
