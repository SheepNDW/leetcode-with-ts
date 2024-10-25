import { describe, expect, it } from 'vitest';
import { flipEquiv } from '.';
import { Tree } from '../../utils/tree';

describe.skip('flipEquiv', () => {
  it('should return true', () => {
    const root1 = new Tree().build([1, 2, 3, 4, 5, 6, null, null, null, 7, 8]).root;
    const root2 = new Tree().build([1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7]).root;

    const result = flipEquiv(root1, root2);

    expect(result).toBe(true);
  });

  it('should return true', () => {
    const root1 = new Tree().build([]).root;
    const root2 = new Tree().build([]).root;

    const result = flipEquiv(root1, root2);

    expect(result).toBe(true);
  });

  it('should return false', () => {
    const root1 = new Tree().build([]).root;
    const root2 = new Tree().build([1]).root;

    const result = flipEquiv(root1, root2);

    expect(result).toBe(false);
  });
});
