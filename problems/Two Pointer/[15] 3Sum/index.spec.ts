import { describe, expect, it } from 'vitest';
import { threeSum } from '.';

describe('3Sum', () => {
  it('should return all unique triplets that sum up to 00', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const expectedOutput = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];

    const result = threeSum(nums);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty array when the only possible triplet does not sum up to 0', () => {
    const nums = [0, 1, 1];
    const expectedOutput: number[][] = [];

    const result = threeSum(nums);

    expect(result).toEqual(expectedOutput);
  });

  it('should return [[0,0,0]] when the only possible triplet sums up to 0', () => {
    const nums = [0, 0, 0];
    const nums2 = [0, 0, 0, 0];
    const expectedOutput = [[0, 0, 0]];

    const result = threeSum(nums);
    const result2 = threeSum(nums2);

    expect(result).toEqual(expectedOutput);
    expect(result2).toEqual(expectedOutput);
  });
});
