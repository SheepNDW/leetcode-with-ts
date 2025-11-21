import { describe, expect, it } from 'vitest';
import { intersectionSizeTwo } from '.';

describe('intersectionSizeTwo', () => {
  it('example 1', () => {
    const intervals = [
      [1, 3],
      [3, 7],
      [8, 9],
    ];

    const result = intersectionSizeTwo(intervals);

    expect(result).toEqual(5);
  });

  it('example 2', () => {
    const intervals = [
      [1, 3],
      [1, 4],
      [2, 5],
      [3, 5],
    ];

    const result = intersectionSizeTwo(intervals);

    expect(result).toEqual(3);
  });

  it('example 3', () => {
    const intervals = [
      [1, 2],
      [2, 3],
      [2, 4],
      [4, 5],
    ];

    const result = intersectionSizeTwo(intervals);

    expect(result).toEqual(5);
  });

  it('example 4', () => {
    const intervals = [
      [1, 3],
      [3, 7],
      [5, 7],
      [7, 8],
    ];

    const result = intersectionSizeTwo(intervals);

    expect(result).toEqual(5);
  });
});
