import { describe, expect, it } from 'vitest';
import { longestDiverseString } from '.';

describe('longestDiverseString', () => {
  it('should return longest diverse string for a = 1, b = 1, c = 7', () => {
    const a = 1;
    const b = 1;
    const c = 7;

    const result = longestDiverseString(a, b, c);

    expect(result.length).toBe(8);
    expect(['ccaccbcc', 'ccbccacc']).toContain(result);
  });

  it('should return longest diverse string for a = 7, b = 1, c = 0', () => {
    const a = 7;
    const b = 1;
    const c = 0;

    const result = longestDiverseString(a, b, c);

    expect(result).toBe('aabaa');
  });
});
