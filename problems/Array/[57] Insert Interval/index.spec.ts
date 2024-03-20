import { describe, it, expect } from 'vitest';
import { insert } from '.';

describe.skip('insert', () => {
  it('should insert new interval in non-overlapping intervals', () => {
    const intervals = [
      [1, 2],
      [4, 5],
      [7, 8],
    ];
    const newInterval = [3, 6];
    const expected = [
      [1, 2],
      [3, 6],
      [7, 8],
    ];
    expect(insert(intervals, newInterval)).toEqual(expected);
  });

  it('should merge overlapping intervals', () => {
    const intervals = [
      [1, 3],
      [6, 9],
    ];
    const newInterval = [2, 5];
    const expected = [
      [1, 5],
      [6, 9],
    ];
    expect(insert(intervals, newInterval)).toEqual(expected);
  });

  it('should merge overlapping intervals and insert new interval', () => {
    const intervals = [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ];
    const newInterval = [4, 8];
    const expected = [
      [1, 2],
      [3, 10],
      [12, 16],
    ];
    expect(insert(intervals, newInterval)).toEqual(expected);
  });
});

/**
 * @link https://leetcode.com/problems/insert-interval/
 */
