import { describe, expect, it } from 'vitest';
import { canCross } from '.';

describe('canCross', () => {
  it('should return true when the frog can cross to the last stone', () => {
    const stones = [0, 1, 3, 5, 6, 8, 12, 17];

    const result = canCross(stones);

    expect(result).toBe(true);
  });

  it('should return false when the frog cannot cross to the last stone', () => {
    const stones = [0, 1, 2, 3, 4, 8, 9, 11];

    const result = canCross(stones);

    expect(result).toBe(false);
  });
});
