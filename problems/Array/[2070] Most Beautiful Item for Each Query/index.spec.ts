import { describe, expect, it } from 'vitest';
import { maximumBeauty } from '.';

describe.skip('maximumBeauty', () => {
  it('should return [2,4,5,5,6,6] for items = [[1,2],[3,2],[2,4],[5,6],[3,5]] and queries = [1,2,3,4,5,6]', () => {
    const items = [
      [1, 2],
      [3, 2],
      [2, 4],
      [5, 6],
      [3, 5],
    ];
    const queries = [1, 2, 3, 4, 5, 6];

    const result = maximumBeauty(items, queries);

    expect(result).toEqual([2, 4, 5, 5, 6, 6]);
  });

  it('should return [4] for items = [[1,2],[1,2],[1,3],[1,4]] and queries = [1]', () => {
    const items = [
      [1, 2],
      [1, 2],
      [1, 3],
      [1, 4],
    ];
    const queries = [1];

    const result = maximumBeauty(items, queries);

    expect(result).toEqual([4]);
  });

  it('should return [0] for items = [[10,1000]] and queries = [5]', () => {
    const items = [[10, 1000]];
    const queries = [5];

    const result = maximumBeauty(items, queries);

    expect(result).toEqual([0]);
  });
});
