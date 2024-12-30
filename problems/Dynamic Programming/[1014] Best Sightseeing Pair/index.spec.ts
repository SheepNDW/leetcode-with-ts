import { describe, expect, it } from 'vitest';
import { maxScoreSightseeingPair } from '.';

describe.skip('maxScoreSightseeingPair', () => {
  it('should return 11 when values = [8,1,5,2,6]', () => {
    const values = [8, 1, 5, 2, 6];

    const result = maxScoreSightseeingPair(values);

    expect(result).toBe(11);
  });

  it('should return 2 when values = [1,2]', () => {
    const values = [1, 2];

    const result = maxScoreSightseeingPair(values);

    expect(result).toBe(2);
  });
});
