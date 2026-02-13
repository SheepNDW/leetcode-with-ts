import { describe, expect, it } from 'vitest';
import { longestBalanced } from '.';

describe('q1', () => {
  it('example 1', () => {
    const s = 'abbac';
    const result = longestBalanced(s);
    expect(result).toBe(4);
  });

  it('example 2', () => {
    const s = 'zzabccy';
    const result = longestBalanced(s);
    expect(result).toBe(4);
  });

  it('example 3', () => {
    const s = 'aba';
    const result = longestBalanced(s);
    expect(result).toBe(2);
  });
});
