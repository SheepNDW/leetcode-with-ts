import { describe, expect, it } from 'vitest';
import { minimumDeletions } from '.';

describe.skip('minimumDeletions', () => {
  it('should return 2 for s = "aababbab"', () => {
    const s = 'aababbab';

    const result = minimumDeletions(s);

    expect(result).toBe(2);
  });

  it('should return 2 for s = "bbaaaaabb"', () => {
    const s = 'bbaaaaabb';

    const result = minimumDeletions(s);

    expect(result).toBe(2);
  });
});
