import { describe, expect, it } from 'vitest';
import { largestCombination } from '.';

describe.skip('largestCombination', () => {
  it('should return 4 for candidates = [16,17,71,62,12,24,14]', () => {
    const candidates = [16, 17, 71, 62, 12, 24, 14];

    const result = largestCombination(candidates);

    expect(result).toBe(4);
  });

  it('should return 2 for candidates = [8,8]', () => {
    const candidates = [8, 8];

    const result = largestCombination(candidates);

    expect(result).toBe(2);
  });
});
