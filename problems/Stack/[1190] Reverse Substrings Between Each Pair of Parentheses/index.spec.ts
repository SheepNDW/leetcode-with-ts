import { describe, expect, it } from 'vitest';
import { reverseParentheses } from '.';

describe.skip('reverseParentheses', () => {
  it('should return "dcba" for s = "(abcd)"', () => {
    const s = '(abcd)';

    const result = reverseParentheses(s);

    expect(result).toBe('dcba');
  });

  it('should return "iloveu" for s = "(u(love)i)"', () => {
    const s = '(u(love)i)';

    const result = reverseParentheses(s);

    expect(result).toBe('iloveu');
  });

  it('should return "leetcode" for s = "(ed(et(oc))el)"', () => {
    const s = '(ed(et(oc))el)';

    const result = reverseParentheses(s);

    expect(result).toBe('leetcode');
  });
});
