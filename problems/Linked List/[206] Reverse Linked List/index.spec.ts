import { describe, expect, it } from 'vitest';
import { reverseList } from '.';
import { createList, listToArray } from '../../utils/list';

describe.skip('reverseList', () => {
  it('should return [5,4,3,2,1] for head=[1,2,3,4,5]', () => {
    const head = createList([1, 2, 3, 4, 5]);

    const result = reverseList(head);
    const resultArr = listToArray(result);

    expect(resultArr).toEqual([5, 4, 3, 2, 1]);
  });

  it('should return [2,1] for head=[1,2]', () => {
    const head = createList([1, 2]);

    const result = reverseList(head);
    const resultArr = listToArray(result);

    expect(resultArr).toEqual([2, 1]);
  });

  it('should return [] for head=[]', () => {
    const head = createList([]);

    const result = reverseList(head);
    const resultArr = listToArray(result);

    expect(resultArr).toEqual([]);
  });
});
