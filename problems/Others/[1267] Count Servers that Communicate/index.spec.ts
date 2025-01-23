import { describe, expect, it } from 'vitest';
import { countServers } from '.';

describe.skip('countServers', () => {
  it('Example 1', () => {
    const grid = [
      [1, 0],
      [0, 1],
    ];

    const result = countServers(grid);

    expect(result).toBe(0);
  });

  it('Example 2', () => {
    const grid = [
      [1, 0],
      [1, 1],
    ];

    const result = countServers(grid);

    expect(result).toBe(3);
  });

  it('Example 3', () => {
    const grid = [
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ];

    const result = countServers(grid);

    expect(result).toBe(4);
  });
});
