import { describe, expect, it } from 'vitest';
import { findContentChildren } from '.';

describe.skip('findContentChildren', () => {
  it('should return 1 when g = [1,2,3], s = [1,1]', () => {
    const g = [1, 2, 3];
    const s = [1, 1];

    const result = findContentChildren(g, s);

    expect(result).toEqual(1);
  });

  it('should return 2 when g = [1,2], s = [1,2,3]', () => {
    const g = [1, 2];
    const s = [1, 2, 3];

    const result = findContentChildren(g, s);

    expect(result).toEqual(2);
  });
});
