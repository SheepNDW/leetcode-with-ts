import { describe, expect, it } from 'vitest';
import { backspaceCompare } from '.';

describe('backspaceCompare', () => {
  it('should return true when s = "ab#c", t = "ad#c"', () => {
    const s = 'ab#c';
    const t = 'ad#c';

    const result = backspaceCompare(s, t);

    expect(result).toBe(true);
  });

  it('should return true when s = "ab##", t = "c#d#"', () => {
    const s = 'ab##';
    const t = 'c#d#';

    const result = backspaceCompare(s, t);

    expect(result).toBe(true);
  });

  it('should return false when s = "a#c", t = "b"', () => {
    const s = 'a#c';
    const t = 'b';

    const result = backspaceCompare(s, t);

    expect(result).toBe(false);
  });
});
