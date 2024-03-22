import { describe, expect, it } from 'vitest';
import { mergeInBetween } from '.';
import { createList, listToArray } from '../../utils/list';

describe.skip('mergeInBetween', () => {
  it('should merge list2 into list1 from node 3 to 4', () => {
    const list1 = createList([10, 1, 13, 6, 9, 5]);
    const list2 = createList([1000000, 1000001, 1000002]);
    const a = 3;
    const b = 4;

    const result = mergeInBetween(list1, a, b, list2);
    const resultArray = listToArray(result);

    expect(resultArray).toEqual([10, 1, 13, 1000000, 1000001, 1000002, 5]);
  });

  it('should merge list2 into list1 from node 2 to 5', () => {
    const list1 = createList([0, 1, 2, 3, 4, 5, 6]);
    const list2 = createList([1000000, 1000001, 1000002, 1000003, 1000004]);
    const a = 2;
    const b = 5;

    const result = mergeInBetween(list1, a, b, list2);
    const resultArray = listToArray(result);

    expect(resultArray).toEqual([0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6]);
  });
});
