import { describe, expect, it } from 'vitest';
import { sumNumbers } from '.';
import { Tree } from '../../utils/tree';

describe('sumNumbers', () => {
  it('should return 25 for root = [1,2,3]', () => {
    const root = new Tree().build([1, 2, 3]).root;
    const result = sumNumbers(root);
    expect(result).toBe(25);
  });

  it('should return 1026 for root = [4,9,0,5,1]', () => {
    const root = new Tree().build([4, 9, 0, 5, 1]).root;
    const result = sumNumbers(root);
    expect(result).toBe(1026);
  });

  it('should return 1 for root = [1]', () => {
    const root = new Tree().build([1]).root;
    const result = sumNumbers(root);
    expect(result).toBe(1);
  });

  it('should return 131 for root = [1,5,1,null,null,null,6]', () => {
    const root = new Tree().build([1, 5, 1, null, null, null, 6]).root;
    const result = sumNumbers(root);
    expect(result).toBe(131);
  });
});
