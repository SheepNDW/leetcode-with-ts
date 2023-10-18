import { describe, expect, it } from 'vitest';
import { longestStrChain } from '.';

describe('longestStrChain', () => {
  it('should return the length of the longest possible word chain', () => {
    const words1 = ['a', 'b', 'ba', 'bca', 'bda', 'bdca'];
    const words2 = ['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'];
    const words3 = ['abcd', 'dbqca'];

    const result1 = longestStrChain(words1);
    const result2 = longestStrChain(words2);
    const result3 = longestStrChain(words3);

    expect(result1).toBe(4);
    expect(result2).toBe(5);
    expect(result3).toBe(1);
  });
});
