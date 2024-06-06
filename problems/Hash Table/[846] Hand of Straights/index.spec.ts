import { describe, expect, it } from 'vitest';
import { isNStraightHand } from '.';

describe.skip('isNStraightHand', () => {
  it('should return true for hand = [1,2,3,6,2,3,4,7,8], groupSize = 3', () => {
    const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
    const groupSize = 3;

    const result = isNStraightHand(hand, groupSize);

    expect(result).toBe(true);
  });

  it('should return false for hand = [1,2,3,4,5], groupSize = 4', () => {
    const hand = [1, 2, 3, 4, 5];
    const groupSize = 4;

    const result = isNStraightHand(hand, groupSize);

    expect(result).toBe(false);
  });

  it('should return false for hand = [1,2,3,4,5,6,7] and groupSize = 2', () => {
    const hand = [1, 2, 3, 4, 5, 6, 7];
    const groupSize = 2;

    const result = isNStraightHand(hand, groupSize);

    expect(result).toBe(false);
  });
});
