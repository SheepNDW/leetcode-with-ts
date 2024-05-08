import { describe, expect, it } from 'vitest';
import { doubleIt } from '.';
import { createList, listToArray } from '../../utils/list';

describe.skip('doubleIt', () => {
  it('should return [3,7,8] for head = [1,8,9]', () => {
    const head = createList([1, 8, 9]);

    const result = doubleIt(head);

    expect(listToArray(result)).toEqual([3, 7, 8]);
  });

  it('should return [1,9,9,8] for head = [9,9,9]', () => {
    const head = createList([9, 9, 9]);

    const result = doubleIt(head);

    expect(listToArray(result)).toEqual([1, 9, 9, 8]);
  });

  it('should return correct answer', () => {
    const head = createList([
      9, 1, 9, 5, 0, 5, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    ]);

    const result = doubleIt(head);

    expect(listToArray(result)).toEqual([
      1, 8, 3, 9, 0, 1, 0, 3, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8,
    ]);
  });
});
