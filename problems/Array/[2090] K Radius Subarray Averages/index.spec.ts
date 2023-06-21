import { describe, expect, it } from 'vitest';
import { getAverages } from '.';

describe('getAverages', () => {
  it('calculates k-radius averages for an array with 9 elements and k=3', () => {
    const nums = [7, 4, 3, 9, 1, 8, 5, 2, 6];
    const k = 3;
    const expected = [-1, -1, -1, 5, 4, 4, -1, -1, -1];
    expect(getAverages(nums, k)).toEqual(expected);
  });

  it('returns array itself when radius is 0', () => {
    const nums = [100000];
    const k = 0;
    const expected = [100000];
    expect(getAverages(nums, k)).toEqual(expected);
  });

  it('returns -1 when there are less than k elements before or after the index', () => {
    const nums = [8];
    const k = 100000;
    const expected = [-1];
    expect(getAverages(nums, k)).toEqual(expected);
  });

  it('returns -1 for all elements when there are less than k elements before or after', () => {
    const nums = [1, 11, 17, 21, 29];
    const k = 4;
    const expected = [-1, -1, -1, -1, -1];
    expect(getAverages(nums, k)).toEqual(expected);
  });

  it('returns -1 for all elements when radius is 1 and array length is 2', () => {
    const nums = [2, 1];
    const k = 1;
    const expected = [-1, -1];
    expect(getAverages(nums, k)).toEqual(expected);
  });
});
