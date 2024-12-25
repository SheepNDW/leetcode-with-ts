import { describe, expect, it } from 'vitest';
import { minimumDiameterAfterMerge } from '.';

describe.skip('minimumDiameterAfterMerge', () => {
  it('should return 3', () => {
    const edges1 = [
      [0, 1],
      [0, 2],
      [0, 3],
    ];
    const edges2 = [[0, 1]];

    const result = minimumDiameterAfterMerge(edges1, edges2);

    expect(result).toBe(3);
  });

  it('should return 5', () => {
    const edges1 = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [2, 7],
    ];
    const edges2 = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [2, 7],
    ];

    const result = minimumDiameterAfterMerge(edges1, edges2);

    expect(result).toBe(5);
  });
});
