import { describe, expect, it } from 'vitest';
import { reorderList } from '.';
import { createList, listToArray } from '../../utils/list';

describe.skip('reorderList', () => {
  it('should return [1,4,2,3] for head = [1,2,3,4]', () => {
    const head = createList([1, 2, 3, 4]);

    reorderList(head);
    const resultArray = listToArray(head);

    expect(resultArray).toEqual([1, 4, 2, 3]);
  });

  it('should return [1,5,2,4,3] for head = [1,2,3,4,5]', () => {
    const head = createList([1, 2, 3, 4, 5]);

    reorderList(head);
    const resultArray = listToArray(head);

    expect(resultArray).toEqual([1, 5, 2, 4, 3]);
  });
});
