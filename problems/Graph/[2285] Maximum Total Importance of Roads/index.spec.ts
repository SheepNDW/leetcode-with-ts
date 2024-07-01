import { describe, expect, it } from 'vitest';
import { maximumImportance } from '.';

describe.skip('maximumImportance', () => {
  it('should return 43 for n = 5, roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]', () => {
    const n = 5;
    const roads = [
      [0, 1],
      [1, 2],
      [2, 3],
      [0, 2],
      [1, 3],
      [2, 4],
    ];

    const result = maximumImportance(n, roads);

    expect(result).toBe(43);
  });

  it('should return 20 for n = 5, roads = [[0,3],[2,4],[1,3]]', () => {
    const n = 5;
    const roads = [
      [0, 3],
      [2, 4],
      [1, 3],
    ];

    const result = maximumImportance(n, roads);

    expect(result).toBe(20);
  });
});
