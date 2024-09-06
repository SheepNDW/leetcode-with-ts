import { describe, expect, it } from 'vitest';
import { modifiedList } from '.';
import { createList, listToArray } from '../../utils/list';

describe.skip('modifiedList', () => {
  it('should remove nodes from head = [1,2,3,4,5] when nums = [1,2,3]', () => {
    const head = createList([1, 2, 3, 4, 5]);
    const nums = [1, 2, 3];

    const result = modifiedList(nums, head);
    const resultArray = listToArray(result);

    expect(resultArray).toEqual([4, 5]);
  });

  it('should remove nodes from head = [1,2,1,2,1,2] when nums = [1]', () => {
    const head = createList([1, 2, 1, 2, 1, 2]);
    const nums = [1];

    const result = modifiedList(nums, head);
    const resultArray = listToArray(result);

    expect(resultArray).toEqual([2, 2, 2]);
  });

  it('should remove nodes from head = [1,2,3,4] when nums = [5]', () => {
    const head = createList([1, 2, 3, 4]);
    const nums = [5];

    const result = modifiedList(nums, head);
    const resultArray = listToArray(result);

    expect(resultArray).toEqual([1, 2, 3, 4]);
  });
});
