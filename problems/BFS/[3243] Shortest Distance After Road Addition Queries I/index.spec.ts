import { describe, expect, it } from 'vitest';
import { shortestDistanceAfterQueries } from '.';

describe.skip('shortestDistanceAfterQueries', () => {
  it('should return [3,2,1] for n = 5, queries = [[2,4],[0,2],[0,4]]', () => {
    const n = 5;
    const queries = [
      [2, 4],
      [0, 2],
      [0, 4],
    ];

    const result = shortestDistanceAfterQueries(n, queries);

    expect(result).toStrictEqual([3, 2, 1]);
  });

  it('should return [1,1] for n = 4, queries = [[0,3],[0,2]]', () => {
    const n = 4;
    const queries = [
      [0, 3],
      [0, 2],
    ];

    const result = shortestDistanceAfterQueries(n, queries);

    expect(result).toStrictEqual([1, 1]);
  });
});
