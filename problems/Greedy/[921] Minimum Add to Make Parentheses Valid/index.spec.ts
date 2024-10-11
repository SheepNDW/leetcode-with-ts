import { describe, expect, it } from 'vitest';
import { minAddToMakeValid } from '.';

describe.skip('minAddToMakeValid', () => {
  it('should return 1 for s = "())"', () => {
    const s = '())';

    const result = minAddToMakeValid(s);

    expect(result).toBe(1);
  });

  it('should return 3 for s = "((("', () => {
    const s = '(((';

    const result = minAddToMakeValid(s);

    expect(result).toBe(3);
  });
});
