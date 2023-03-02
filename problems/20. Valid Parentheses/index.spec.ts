import { describe, it, expect } from 'vitest';
import { isValid } from '.';

describe('isValid()', () => {
  it('should return true for valid parentheses', () => {
    expect(isValid('()')).toEqual(true);
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('{[]}')).toEqual(true);
  });

  it('should return false for invalid parentheses', () => {
    expect(isValid('[')).toEqual(false);
    expect(isValid('}')).toEqual(false);
    expect(isValid('((')).toEqual(false);
    expect(isValid('(]')).toEqual(false);
    expect(isValid('([)]')).toEqual(false);
    expect(isValid('{[}]')).toEqual(false);
  });
});

/**
 * @link https://leetcode.com/problems/valid-parentheses/
 */
