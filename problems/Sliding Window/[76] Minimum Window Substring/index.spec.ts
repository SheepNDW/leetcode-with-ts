import { describe, expect, it } from 'vitest';
import { minWindow } from '.';

describe.skip('minWindow', () => {
  it('should return the minimum window substring "BANC" for s = "ADOBECODEBANC" and t = "ABC"', () => {
    const s = 'ADOBECODEBANC';
    const t = 'ABC';

    const result = minWindow(s, t);

    expect(result).toBe('BANC');
  });

  it('should return "a" for s = "a" and t = "a"', () => {
    const s = 'a';
    const t = 'a';

    const result = minWindow(s, t);

    expect(result).toBe('a');
  });

  it('should return "a" for s = "ab" and t = "a"', () => {
    const s = 'ab';
    const t = 'a';

    const result = minWindow(s, t);

    expect(result).toBe('a');
  });

  it('should return an empty string for s = "a" and t = "aa"', () => {
    const s = 'a';
    const t = 'aa';

    const result = minWindow(s, t);

    expect(result).toBe('');
  });
});
