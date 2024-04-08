import { describe, expect, it } from 'vitest';
import { checkValidString } from '.';

describe.skip('checkValidString', () => {
  it('should return true for s = "()"', () => {
    const s = '()';
    const result = checkValidString(s);
    expect(result).toBe(true);
  });

  it('should return true for s = "(*)"', () => {
    const s = '(*)';
    const result = checkValidString(s);
    expect(result).toBe(true);
  });

  it('should return true for s = "(*))"', () => {
    const s = '(*))';
    const result = checkValidString(s);
    expect(result).toBe(true);
  });
});
