import { describe, expect, it } from 'vitest';
import { mergeNodes } from '.';
import { createList, listToArray } from '../../utils/list';

describe.skip('mergeNodes', () => {
  it('should return [4,11] for head = [0,3,1,0,4,5,2,0]', () => {
    const head = createList([0, 3, 1, 0, 4, 5, 2, 0]);

    const result = mergeNodes(head);
    const resultArray = listToArray(result);

    expect(resultArray).toEqual([4, 11]);
  });

  it('should return [1,3,4], for head = [0,1,0,3,0,2,2,0]', () => {
    const head = createList([0, 1, 0, 3, 0, 2, 2, 0]);

    const result = mergeNodes(head);
    const resultArray = listToArray(result);

    expect(resultArray).toEqual([1, 3, 4]);
  });
});
