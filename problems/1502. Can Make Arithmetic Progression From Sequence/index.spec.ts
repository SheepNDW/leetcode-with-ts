import { describe, expect, it } from 'vitest';
import { canMakeArithmeticProgression } from '.';

const testCases = [
  {
    description:
      'should return true if the array can be reordered to form an arithmetic progression',
    input: [3, 5, 1],
    expected: true,
  },
  {
    description:
      'should return false if the array cannot be reordered to form an arithmetic progression',
    input: [1, 2, 4],
    expected: false,
  },
  {
    description:
      'should return true for a sequence of negative numbers that can form an arithmetic progression',
    input: [
      -509, -19, -439, -264, -404, -369, -299, -89, -229, -54, -194, 16, -544, -159, -124, -474,
      -334,
    ],
    expected: true,
  },
  {
    description:
      'should return false for a sequence of negative numbers that cannot form an arithmetic progression',
    input: [-13, -17, -8, -10, -20, 2, 3, -19, 2, -18, -5, 7, -12, 18, -17, 12, -1],
    expected: false,
  },
];

describe('canMakeArithmeticProgression', () => {
  testCases.forEach(({ description, input, expected }) => {
    it(description, () => {
      const result = canMakeArithmeticProgression(input);
      expect(result).toBe(expected);
    });
  });
});
