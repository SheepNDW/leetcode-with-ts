import { describe, expect, it } from 'vitest';
import { minimumLength } from '.';

describe.skip('minimumLength', () => {
  it('should return 2 for s = "ca"', () => {
    const s = 'ca';

    const result = minimumLength(s);

    expect(result).toBe(2);
  });

  it('should return 0 for s = "cabaabac"', () => {
    const s = 'cabaabac';

    const result = minimumLength(s);

    expect(result).toBe(0);
  });

  it('should return 3 for s = "aabccabba"', () => {
    const s = 'aabccabba';

    const result = minimumLength(s);

    expect(result).toBe(3);
  });
});
