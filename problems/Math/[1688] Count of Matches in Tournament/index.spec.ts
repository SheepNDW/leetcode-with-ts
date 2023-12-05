import { describe, expect, it } from 'vitest';
import { numberOfMatches } from '.';

describe.skip('numberOfMatches', () => {
  it('should return 6 when n = 7', () => {
    const n = 7;

    const result = numberOfMatches(n);

    expect(result).toBe(6);
  });

  it('should return 13 when n = 14', () => {
    const n = 14;

    const result = numberOfMatches(n);

    expect(result).toBe(13);
  });

  it('should return 0 when n = 1', () => {
    const n = 1;

    const result = numberOfMatches(n);

    expect(result).toBe(0);
  });
});
