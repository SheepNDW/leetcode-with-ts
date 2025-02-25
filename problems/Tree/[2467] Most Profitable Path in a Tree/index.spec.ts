import { describe, expect, it } from 'vitest';
import { mostProfitablePath } from '.';

describe.skip('mostProfitablePath', () => {
  it('example 1', () => {
    const edges = [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 4],
    ];
    const bob = 3;
    const amount = [-2, 4, 2, -4, 6];

    const result = mostProfitablePath(edges, bob, amount);

    expect(result).toBe(6);
  });

  it('example 2', () => {
    const edges = [[0, 1]];
    const bob = 1;
    const amount = [-7280, 2350];

    const result = mostProfitablePath(edges, bob, amount);

    expect(result).toBe(-7280);
  });
});
