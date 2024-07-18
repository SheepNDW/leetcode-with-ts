import { describe, expect, it } from 'vitest';
import { getDirections } from '.';
import { Tree } from '../../utils/tree';

describe.skip('getDirections', () => {
  it('should return "UURL" when root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6', () => {
    const root = new Tree().build([5, 1, 2, 3, null, 6, 4]).root;
    const startValue = 3;
    const destValue = 6;

    const result = getDirections(root, startValue, destValue);

    expect(result).toBe('UURL');
  });

  it('should return "L" when root = [2,1], startValue = 2, destValue = 1', () => {
    const root = new Tree().build([2, 1]).root;
    const startValue = 2;
    const destValue = 1;

    const result = getDirections(root, startValue, destValue);

    expect(result).toBe('L');
  });
});
