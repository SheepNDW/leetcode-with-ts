import { describe, expect, it } from 'vitest';
import { takeCharacters } from '.';

describe.skip('takeCharacters', () => {
  it('should return 8 for s = "aabaaaacaabc", k = 2', () => {
    const s = 'aabaaaacaabc';
    const k = 2;

    const result = takeCharacters(s, k);

    expect(result).toBe(8);
  });

  it('should return -1 for s = "a", k = 1', () => {
    const s = 'a';
    const k = 1;

    const result = takeCharacters(s, k);

    expect(result).toBe(-1);
  });

  it('should return 3 for s = "caab", k = 1', () => {
    const s = 'caab';
    const k = 1;

    const result = takeCharacters(s, k);

    expect(result).toBe(3);
  });
});
