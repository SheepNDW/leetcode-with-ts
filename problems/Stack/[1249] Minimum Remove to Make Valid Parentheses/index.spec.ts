import { describe, expect, it } from 'vitest';
import { minRemoveToMakeValid } from '.';

describe.skip('minRemoveToMakeValid', () => {
  it('should return a valid parentheses string for s = "lee(t(c)o)de)"', () => {
    const s = 'lee(t(c)o)de)';
    const result = minRemoveToMakeValid(s);
    expect(isValidParenthesesString(result)).toBe(true);
  });

  it('should return "ab(c)d" for s = "a)b(c)d"', () => {
    const s = 'a)b(c)d';
    const result = minRemoveToMakeValid(s);
    expect(result).toBe('ab(c)d');
  });

  it('should return "" for s = "))(("', () => {
    const s = '))((';
    const result = minRemoveToMakeValid(s);
    expect(result).toBe('');
  });
});

function isValidParenthesesString(s: string): boolean {
  let balance = 0;
  for (let char of s) {
    if (char === '(') {
      balance++;
    } else if (char === ')') {
      if (balance === 0) {
        return false;
      }
      balance--;
    }
  }
  return balance === 0;
}
