import { describe, expect, it } from 'vitest';
import { getHappyString } from '.';

describe.skip('getHappyString', () => {
  it('Example 1', () => {
    const n = 1;
    const k = 3;
    expect(getHappyString(n, k)).toBe('c');
  });

  it('Example 2', () => {
    const n = 1;
    const k = 4;
    expect(getHappyString(n, k)).toBe('');
  });

  it('Example 3', () => {
    const n = 3;
    const k = 9;
    expect(getHappyString(n, k)).toBe('cab');
  });

  it('Example 4', () => {
    const n = 10;
    const k = 100;
    expect(getHappyString(n, k)).toBe('abacbabacb');
  });
});
