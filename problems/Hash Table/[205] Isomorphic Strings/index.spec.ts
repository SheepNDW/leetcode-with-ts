import { describe, expect, it } from 'vitest';
import { isIsomorphic } from '.';

describe.skip('isIsomorphic', () => {
  it('should return true for s="egg", t="add"', () => {
    const s = 'egg';
    const t = 'add';

    const result = isIsomorphic(s, t);

    expect(result).toBe(true);
  });

  it('should return false for s="foo", t="bar"', () => {
    const s = 'foo';
    const t = 'bar';

    const result = isIsomorphic(s, t);

    expect(result).toBe(false);
  });

  it('should return true for s="paper", t="title"', () => {
    const s = 'paper';
    const t = 'title';

    const result = isIsomorphic(s, t);

    expect(result).toBe(true);
  });

  it('should return false for s="bbbaaaba", t="aaabbbba"', () => {
    const s = 'bbbaaaba';
    const t = 'aaabbbba';

    const result = isIsomorphic(s, t);

    expect(result).toBe(false);
  });
});
