import { describe, expect, it } from 'vitest';
import { minBitFlips } from '.';

describe.skip('minBitFlips', () => {
  it('should return 3 for start = 10, goal = 7', () => {
    const start = 10;
    const goal = 7;

    const result = minBitFlips(start, goal);

    expect(result).toBe(3);
  });

  it('should return 3 for start = 3, goal = 4', () => {
    const start = 3;
    const goal = 4;

    const result = minBitFlips(start, goal);

    expect(result).toBe(3);
  });
});
