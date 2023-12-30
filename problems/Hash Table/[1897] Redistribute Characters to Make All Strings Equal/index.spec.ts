import { describe, expect, it } from 'vitest';
import { makeEqual } from '.';

describe.skip('makeEqual', () => {
  it('should return true when words = ["abc","aabc","bc"]', () => {
    const words = ['abc', 'aabc', 'bc'];

    expect(makeEqual(words)).toBe(true);
  });

  it('should return false when words = ["ab","a"]', () => {
    const words = ['ab', 'a'];

    expect(makeEqual(words)).toBe(false);
  });

  it('should return true when words = ["abbab"]', () => {
    const words = ['abbab'];

    expect(makeEqual(words)).toBe(true);
  });
});
