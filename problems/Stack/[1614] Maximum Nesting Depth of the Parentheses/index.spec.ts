import { describe, expect, it } from 'vitest';
import { maxDepth } from '.';

describe.skip('maxDepth', () => {
  it('should return 3 for s = "(1+(2*3)+((8)/4))+1"', () => {
    const s = '(1+(2*3)+((8)/4))+1';
    expect(maxDepth(s)).toBe(3);
  });

  it('should return 3 for s = "(1)+((2))+(((3)))"', () => {
    const s = '(1)+((2))+(((3)))';
    expect(maxDepth(s)).toBe(3);
  });
});
