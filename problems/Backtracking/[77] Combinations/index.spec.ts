import { describe, expect, it } from 'vitest';
import { combine } from '.';

describe('combine', () => {
  it('should handle n = 4 and k = 2', () => {
    const expected = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ];
    const result = combine(4, 2);
    expect(result).toEqual(expected);
  });

  it('should handle n = 1 and k = 1', () => {
    const expected = [[1]];
    const result = combine(1, 1);
    expect(result).toEqual(expected);
  });

  it('should handle edge case of k = 0', () => {
    const expected = [[]];
    const result = combine(5, 0);
    expect(result).toEqual(expected);
  });

  it('should handle n = k', () => {
    const expected = [[1, 2, 3]];
    const result = combine(3, 3);
    expect(result).toEqual(expected);
  });
});
