import { describe, expect, it } from 'vitest';
import { nodesBetweenCriticalPoints } from '.';
import { createList } from '../../utils/list';

describe.skip('nodesBetweenCriticalPoints', () => {
  it('should return [-1,-1] for head = [3,1]', () => {
    const head = createList([3, 1]);

    const result = nodesBetweenCriticalPoints(head);

    expect(result).toEqual([-1, -1]);
  });

  it('should return [1,3] for head = [5,3,1,2,5,1,2]', () => {
    const head = createList([5, 3, 1, 2, 5, 1, 2]);

    const result = nodesBetweenCriticalPoints(head);

    expect(result).toEqual([1, 3]);
  });

  it('should return [3,3] for head = [1,3,2,2,3,2,2,2,7]', () => {
    const head = createList([1, 3, 2, 2, 3, 2, 2, 2, 7]);

    const result = nodesBetweenCriticalPoints(head);

    expect(result).toEqual([3, 3]);
  });
});
