import { describe, expect, it } from 'vitest';
import { insertGreatestCommonDivisors } from '.';
import { createList, listToArray } from '../../utils/list';

describe.skip('insertGreatestCommonDivisors', () => {
  it('should return [18,6,6,2,10,1,3] for head = [18,6,10,3]', () => {
    const head = createList([18, 6, 10, 3]);

    const result = insertGreatestCommonDivisors(head);
    const resultArray = listToArray(result);

    expect(resultArray).toEqual([18, 6, 6, 2, 10, 1, 3]);
  });

  it('should return [7] for head = [7]', () => {
    const head = createList([7]);

    const result = insertGreatestCommonDivisors(head);
    const resultArray = listToArray(result);

    expect(resultArray).toEqual([7]);
  });
});
