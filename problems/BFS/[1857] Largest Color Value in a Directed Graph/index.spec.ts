import { describe, expect, it } from 'vitest';
import { largestPathValue } from '.';

describe.skip('largestPathValue', () => {
  it('example 1', () => {
    const colors = 'abaca';
    const edges = [
      [0, 1],
      [0, 2],
      [2, 3],
      [3, 4],
    ];

    const result = largestPathValue(colors, edges);

    expect(result).toEqual(3);
  });

  it('example 2', () => {
    const colors = 'a';
    const edges = [[0, 0]];

    const result = largestPathValue(colors, edges);

    expect(result).toEqual(-1);
  });
});
