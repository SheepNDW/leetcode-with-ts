import { describe, expect, it } from 'vitest';
import { findRelativeRanks } from '.';

describe.skip('findRelativeRanks', () => {
  it('should return ["Gold Medal","Silver Medal","Bronze Medal","4","5"]', () => {
    const score = [5, 4, 3, 2, 1];
    const result = findRelativeRanks(score);
    expect(result).toEqual(['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5']);
  });

  it('should return ["Gold Medal","5","Bronze Medal","Silver Medal","4"]', () => {
    const score = [10, 3, 8, 9, 4];
    const result = findRelativeRanks(score);
    expect(result).toEqual(['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4']);
  });
});
