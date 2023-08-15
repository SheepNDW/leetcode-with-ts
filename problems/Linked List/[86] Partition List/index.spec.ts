import { describe, expect, it } from 'vitest';
import { partition } from '.';
import { createList, listToArray } from '../../utils/list';

describe('partition', () => {
  it('should reorder nodes based on x value preserving original order', () => {
    const inputList = createList([1, 4, 3, 2, 5, 2]);
    const x = 3;

    const resultList = partition(inputList, x);
    const resultArray = listToArray(resultList);

    expect(resultArray).toEqual([1, 2, 2, 4, 3, 5]);
  });

  it('should handle case where all values are less than x', () => {
    const inputList = createList([1, 2]);
    const x = 3;

    const resultList = partition(inputList, x);
    const resultArray = listToArray(resultList);

    expect(resultArray).toEqual([1, 2]);
  });

  it('should handle case where all values are greater than or equal to x', () => {
    const inputList = createList([3, 4]);
    const x = 3;

    const resultList = partition(inputList, x);
    const resultArray = listToArray(resultList);

    expect(resultArray).toEqual([3, 4]);
  });

  it('should handle an empty list', () => {
    const inputList = createList([]);
    const x = 0;

    const resultList = partition(inputList, x);
    const resultArray = listToArray(resultList);

    expect(resultArray).toEqual([]);
  });

  it('should handle case where x is negative and nodes contain negative values', () => {
    const inputList = createList([-3, -4, 2, 5]);
    const x = -2;

    const resultList = partition(inputList, x);
    const resultArray = listToArray(resultList);

    expect(resultArray).toEqual([-3, -4, 2, 5]);
  });
});
