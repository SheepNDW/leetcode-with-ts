import { describe, expect, it } from 'vitest';
import { mostPoints } from '.';

describe.skip('mostPoints', () => {
  it('should return 5 for [[3,2],[4,3],[4,4],[2,5]]', () => {
    const questions = [
      [3, 2],
      [4, 3],
      [4, 4],
      [2, 5],
    ];
    const result = mostPoints(questions);
    expect(result).toBe(5);
  });

  it('should return 7 for [[1,1],[2,2],[3,3],[4,4],[5,5]]', () => {
    const questions = [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
    ];
    const result = mostPoints(questions);
    expect(result).toBe(7);
  });
});
