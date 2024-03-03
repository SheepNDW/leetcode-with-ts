import { describe, expect, it } from 'vitest';
import { removeNthFromEnd } from '.';
import { createList, listToArray } from '../../utils/list';

describe.skip('removeNthFromEnd', () => {
  it('should remove the nth node from the end of the list and return its head [1,2,3,4,5], n = 2', () => {
    const head = createList([1, 2, 3, 4, 5]);
    const n = 2;
    const expectedList = createList([1, 2, 3, 5]);

    const result = removeNthFromEnd(head, n);
    const resultArray = listToArray(result);
    const expectedArray = listToArray(expectedList);

    expect(resultArray).toEqual(expectedArray);
  });

  it('should handle a list with a single element [1], n = 1', () => {
    const head = createList([1]);
    const n = 1;
    const expectedList = createList([]);

    const result = removeNthFromEnd(head, n);
    const resultArray = listToArray(result);
    const expectedArray = listToArray(expectedList);

    expect(resultArray).toEqual(expectedArray);
  });

  it('should handle removing the last element from a two-element list [1,2], n = 1', () => {
    const head = createList([1, 2]);
    const n = 1;
    const expectedList = createList([1]);

    const result = removeNthFromEnd(head, n);
    const resultArray = listToArray(result);
    const expectedArray = listToArray(expectedList);

    expect(resultArray).toEqual(expectedArray);
  });
});
