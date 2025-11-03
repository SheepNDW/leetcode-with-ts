import { describe, expect, it } from 'vitest';
import { longestDiverseString } from '.';

describe('longestDiverseString', () => {
  it('example 1', () => {
    const a = 1;
    const b = 1;
    const c = 7;

    const result = longestDiverseString(a, b, c);

    expect(result.length).toBe(8);
    expect(['ccaccbcc', 'ccbccacc']).toContain(result);
  });

  it('example 2', () => {
    const a = 7;
    const b = 1;
    const c = 0;

    const result = longestDiverseString(a, b, c);

    expect(result).toBe('aabaa');
  });

  it('example 3', () => {
    const a = 1;
    const b = 4;
    const c = 5;

    const result = longestDiverseString(a, b, c);

    expect(['ccbbccbbac', 'cbcbcbcbca']).toContain(result);
  });
});
