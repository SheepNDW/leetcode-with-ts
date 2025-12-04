import { describe, expect, it } from 'vitest';
import { countTrapezoids } from '.';

describe('countTrapezoids', () => {
  it('example 1', () => {
    const points = [
      [1, 0],
      [2, 0],
      [3, 0],
      [2, 2],
      [3, 2],
    ];

    const result = countTrapezoids(points);

    expect(result).toBe(3);
  });

  it('example 2', () => {
    const points = [
      [0, 0],
      [1, 0],
      [0, 1],
      [2, 1],
    ];

    const result = countTrapezoids(points);

    expect(result).toBe(1);
  });
});
