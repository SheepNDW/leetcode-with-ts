import { describe, expect, it } from 'vitest';
import { maximalNetworkRank } from '.';

describe('maximalNetworkRank', () => {
  it('should return 4 for n = 4 and roads = [[0,1],[0,3],[1,2],[1,3]]', () => {
    const n = 4;
    const roads = [
      [0, 1],
      [0, 3],
      [1, 2],
      [1, 3],
    ];
    const expected = 4;

    const result = maximalNetworkRank(n, roads);

    expect(result).toBe(expected);
  });

  it('should return 5 for n = 5 and roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]', () => {
    const n = 5;
    const roads = [
      [0, 1],
      [0, 3],
      [1, 2],
      [1, 3],
      [2, 3],
      [2, 4],
    ];
    const expected = 5;

    const result = maximalNetworkRank(n, roads);

    expect(result).toBe(expected);
  });

  it('should return 5 for n = 8 and roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]', () => {
    const n = 8;
    const roads = [
      [0, 1],
      [1, 2],
      [2, 3],
      [2, 4],
      [5, 6],
      [5, 7],
    ];
    const expected = 5;

    const result = maximalNetworkRank(n, roads);

    expect(result).toBe(expected);
  });

  it('should return 1 for minimal case with two cities and one road', () => {
    const n = 2;
    const roads = [[0, 1]];
    const expected = 1;

    const result = maximalNetworkRank(n, roads);

    expect(result).toBe(expected);
  });

  it('should return 2 for three cities in a line', () => {
    const n = 3;
    const roads = [
      [0, 1],
      [1, 2],
    ];
    const expected = 2;

    const result = maximalNetworkRank(n, roads);

    expect(result).toBe(expected);
  });

  it('should return 3 for three cities forming a triangle', () => {
    const n = 3;
    const roads = [
      [0, 1],
      [1, 2],
      [2, 0],
    ];
    const expected = 3;

    const result = maximalNetworkRank(n, roads);

    expect(result).toBe(expected);
  });
});
