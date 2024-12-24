import { describe, expect, it } from 'vitest';
import { minimumOperations } from '.';
import { Tree } from '../../utils/tree';

describe.skip('minimumOperations', () => {
  it('should return 3 for root = [1,3,2,7,6,5,4]', () => {
    const root = new Tree().build([1, 3, 2, 7, 6, 5, 4]).root;

    const result = minimumOperations(root);

    expect(result).toBe(3);
  });

  it('should return 3 for root = [1,3,2,7,6,5,4]', () => {
    const root = new Tree().build([1, 3, 2, 7, 6, 5, 4]).root;

    const result = minimumOperations(root);

    expect(result).toBe(3);
  });

  it('should return 0 for root = [1,2,3,4,5,6]', () => {
    const root = new Tree().build([1, 2, 3, 4, 5, 6]).root;

    const result = minimumOperations(root);

    expect(result).toBe(0);
  });
});
