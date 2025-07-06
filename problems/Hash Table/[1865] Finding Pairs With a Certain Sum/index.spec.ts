import { describe, expect, it } from 'vitest';
import { FindSumPairs } from '.';

describe('FindSumPairs', () => {
  it('example 1', () => {
    const findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);

    expect(findSumPairs.count(7)).toBe(8);

    findSumPairs.add(3, 2);
    expect(findSumPairs.count(8)).toBe(2);
    expect(findSumPairs.count(4)).toBe(1);
    findSumPairs.add(0, 1);
    findSumPairs.add(1, 1);
    expect(findSumPairs.count(7)).toBe(11);
  });
});
