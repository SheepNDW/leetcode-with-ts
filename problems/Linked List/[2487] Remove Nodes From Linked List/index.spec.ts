import { createList, listToArray } from '../../utils/list';
import { removeNodes } from '.';
import { describe, expect, it } from 'vitest';

describe.skip('removeNodes', () => {
  it('should return [13, 8] for head = [5, 2, 13, 3, 8]', () => {
    const head = createList([5, 2, 13, 3, 8]);
    const result = removeNodes(head);
    expect(listToArray(result)).toEqual([13, 8]);
  });

  it('should return [1, 1, 1, 1] for head = [1, 1, 1, 1]', () => {
    const head = createList([1, 1, 1, 1]);
    const result = removeNodes(head);
    expect(listToArray(result)).toEqual([1, 1, 1, 1]);
  });

  it('should return [4, 3, 2, 1] for head = [4, 3, 2, 1]', () => {
    const head = createList([4, 3, 2, 1]);
    const result = removeNodes(head);
    expect(listToArray(result)).toEqual([4, 3, 2, 1]);
  });

  it('should return [30] for head = [10, 9, 20, 19, 30]', () => {
    const head = createList([10, 9, 20, 19, 30]);
    const result = removeNodes(head);
    expect(listToArray(result)).toEqual([30]);
  });
});
