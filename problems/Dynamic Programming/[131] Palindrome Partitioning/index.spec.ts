import { describe, expect, it } from 'vitest';
import { partition } from '.';

describe.skip('partition', () => {
  it('should return [["a","a","b"],["aa","b"]] for s = "aab"', () => {
    const s = 'aab';

    const result = partition(s);

    expect(result).toHaveLength(2);
    expect(result).toContainEqual(['a', 'a', 'b']);
    expect(result).toContainEqual(['aa', 'b']);
  });

  it('should return [["a"]] for s = "a"', () => {
    const s = 'a';

    const result = partition(s);

    expect(result).toHaveLength(1);
    expect(result).toContainEqual(['a']);
  });
});
