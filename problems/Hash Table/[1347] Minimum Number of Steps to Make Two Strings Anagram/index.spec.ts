import { describe, expect, it } from 'vitest';
import { minSteps } from '.';

describe.skip('minSteps', () => {
  it('should return 1 when s = "bab" and t = "aba"', () => {
    const s = 'bab';
    const t = 'aba';

    const result = minSteps(s, t);

    expect(result).toBe(1);
  });

  it('should return 5 when s = "leetcode" and t = "practice"', () => {
    const s = 'leetcode';
    const t = 'practice';

    const result = minSteps(s, t);

    expect(result).toBe(5);
  });

  it('should return 0 when s = "anagram" and t = "mangaar"', () => {
    const s = 'anagram';
    const t = 'mangaar';

    const result = minSteps(s, t);

    expect(result).toBe(0);
  });
});
