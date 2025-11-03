import { describe, expect, it } from 'vitest';
import { minCost } from '.';

describe('minCost', () => {
  it('should return 3 for colors = "abaac" and neededTime = [1,2,3,4,5]', () => {
    const colors = 'abaac';
    const neededTime = [1, 2, 3, 4, 5];

    const result = minCost(colors, neededTime);

    expect(result).toBe(3);
  });

  it('should return 0 for colors = "abc" and neededTime = [1,2,3]', () => {
    const colors = 'abc';
    const neededTime = [1, 2, 3];

    const result = minCost(colors, neededTime);

    expect(result).toBe(0);
  });

  it('should return 2 for colors = "aabaa" and neededTime = [1,2,3,4,1]', () => {
    const colors = 'aabaa';
    const neededTime = [1, 2, 3, 4, 1];

    const result = minCost(colors, neededTime);

    expect(result).toBe(2);
  });

  it('should return 309 for colors = "aababbaabababbbabbbaaaabaabbbabbbbaaab" and neededTime = [18,5,12,7,36,33,38,18,40,2,32,14,12,15,35,33,5,28,29,6,40,28,24,28,32,27,20,11,7,34,15,21,13,26,28,39,13,16]', () => {
    const colors = 'aababbaabababbbabbbaaaabaabbbabbbbaaab';
    const neededTime = [
      18, 5, 12, 7, 36, 33, 38, 18, 40, 2, 32, 14, 12, 15, 35, 33, 5, 28, 29, 6, 40, 28, 24, 28, 32,
      27, 20, 11, 7, 34, 15, 21, 13, 26, 28, 39, 13, 16,
    ];

    const result = minCost(colors, neededTime);

    expect(result).toBe(309);
  });
});
