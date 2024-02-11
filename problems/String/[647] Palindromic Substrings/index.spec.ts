import { describe, expect, it } from 'vitest';
import { countSubstrings } from '.';

describe.skip('countSubstrings', () => {
  it('should returns 3 for input "abc"', () => {
    const s = 'abc';

    const result = countSubstrings(s);

    expect(result).toBe(3);
  });

  it('should returns 6 for input "aaa"', () => {
    const s = 'aaa';

    const result = countSubstrings(s);

    expect(result).toBe(6);
  });
});
