import { describe, expect, it } from 'vitest';
import { countAndSay } from '.';

describe.skip('countAndSay', () => {
  it('should return "1211" for n = 4', () => {
    const result = countAndSay(4);
    expect(result).toBe('1211');
  });

  it('should return "1" for n = 1', () => {
    const result = countAndSay(1);
    expect(result).toBe('1');
  });
});
