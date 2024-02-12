import { describe, expect, it } from 'vitest';
import { cherryPickup } from '.';

describe.skip('cherryPickup', () => {
  it('should returns 24 for a grid where both robots can collect a total of 24 cherries', () => {
    const grid = [
      [3, 1, 1],
      [2, 5, 1],
      [1, 5, 5],
      [2, 1, 1],
    ];

    const result = cherryPickup(grid);

    expect(result).toBe(24);
  });

  it('should returns 28 for a grid where both robots can collect a total of 28 cherries', () => {
    const grid = [
      [1, 0, 0, 0, 0, 0, 1],
      [2, 0, 0, 0, 0, 3, 0],
      [2, 0, 9, 0, 0, 0, 0],
      [0, 3, 0, 5, 4, 0, 0],
      [1, 0, 2, 3, 0, 0, 6],
    ];

    const result = cherryPickup(grid);

    expect(result).toBe(28);
  });
});
