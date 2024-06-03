import { describe, expect, it } from 'vitest';
import { appendCharacters } from '.';

describe.skip('appendCharacters', () => {
  it('should return 4 for s = "coaching", t = "coding"', () => {
    const s = 'coaching';
    const t = 'coding';

    const result = appendCharacters(s, t);

    expect(result).toBe(4);
  });

  it('should return 0 for s = "abcde", t = "a"', () => {
    const s = 'abcde';
    const t = 'a';

    const result = appendCharacters(s, t);

    expect(result).toBe(0);
  });

  it('should return 5 for s = "z", t = "abcde"', () => {
    const s = 'z';
    const t = 'abcde';

    const result = appendCharacters(s, t);

    expect(result).toBe(5);
  });

  it('should return 0 for s = "abcde" and t = "ace"', () => {
    const s = 'abcde';
    const t = 'ace';

    const result = appendCharacters(s, t);

    expect(result).toBe(0);
  });

  it('should return 1 for s = "abc" and t = "abcd"', () => {
    const s = 'abc';
    const t = 'abcd';

    const result = appendCharacters(s, t);

    expect(result).toBe(1);
  });
});
