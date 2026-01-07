import { describe, expect, it } from 'vitest';
import { maxProduct } from '.';
import { Tree } from '../../utils/tree';

describe('maxProduct', () => {
  it('example 1', () => {
    const root = new Tree().build([1, 2, 3, 4, 5, 6]).root;
    const result = maxProduct(root);
    expect(result).toBe(110);
  });

  it('example 2', () => {
    const root = new Tree().build([1, null, 2, 3, 4, null, null, 5, 6]).root;
    const result = maxProduct(root);
    expect(result).toBe(90);
  });
});
