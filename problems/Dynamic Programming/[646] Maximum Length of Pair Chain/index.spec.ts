import { describe, expect, it } from 'vitest';
import { findLongestChain } from '.';

describe('findLongestChain', () => {
  // prettier-ignore
  const testCases = [
    { input: [[1, 2], [2, 3], [3, 4]], expected: 2 },
    { input: [[1, 2], [7, 8], [4, 5]], expected: 3 },
    { input: [[1, 5], [2, 3], [3, 4]], expected: 1 }, // 鏈條不能是 [1,5] -> [2,3]
    { input: [[1, 2]], expected: 1 }, // 只有一個 pair
    { input: [[-1000, 1000], [1001, 2000], [2001, 3000]], expected: 3 }, // 邊界值測試
  ];

  for (const { input, expected } of testCases) {
    it(`should return ${expected} for input ${JSON.stringify(input)}`, () => {
      const result = findLongestChain(input);

      expect(result).toBe(expected);
    });
  }
});
