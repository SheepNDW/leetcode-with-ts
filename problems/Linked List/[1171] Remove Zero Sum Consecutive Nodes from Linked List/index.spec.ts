import { describe, expect, it } from 'vitest';
import { removeZeroSumSublists } from '.';
import { createList, listToArray } from '../../utils/list';

describe.skip('removeZeroSumSublists', () => {
  it('should return [3,1] or [1,2,1] for input [1,2,-3,3,1]', () => {
    const head = createList([1, 2, -3, 3, 1]);
    const result = removeZeroSumSublists(head);
    const resultArray = listToArray(result);

    const expectedResults = [
      [3, 1], // 一種可能的答案
      [1, 2, 1], // 另一種可能的答案
    ];

    const isValidResult = expectedResults.some((expected) => expect(resultArray).toEqual(expected));
    expect(isValidResult).toBe(true);
  });

  it('should return [1,2,4] for input [1,2,3,-3,4]', () => {
    const head = createList([1, 2, 3, -3, 4]);
    const result = removeZeroSumSublists(head);
    const resultArray = listToArray(result);

    expect(resultArray).toEqual([1, 2, 4]);
  });

  it('should return [1] for input [1,2,3,-3,-2]', () => {
    const head = createList([1, 2, 3, -3, -2]);
    const result = removeZeroSumSublists(head);
    const resultArray = listToArray(result);

    expect(resultArray).toEqual([1]);
  });
});
