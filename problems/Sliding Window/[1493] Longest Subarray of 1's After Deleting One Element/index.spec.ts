import { describe, expect, it } from 'vitest';
import { longestSubarray } from '.';

describe('longestSubarray', () => {
  it('should return 0 when the array only has one element', () => {
    const input = [1];
    const output = longestSubarray(input);
    expect(output).toBe(0);
  });

  it('should return the correct length after deleting a 0', () => {
    const input1 = [1, 1, 0, 1];
    const output1 = longestSubarray(input1);
    expect(output1).toBe(3);

    const input2 = [0, 1, 1, 1, 0, 1, 1, 0, 1];
    const output2 = longestSubarray(input2);
    expect(output2).toBe(5);
  });

  it('should return 2 when all elements in the array are 1', () => {
    const input = [1, 1, 1];
    const output = longestSubarray(input);
    expect(output).toBe(2); // We have to delete one element
  });

  it('should correctly handle an array with consecutive zeros', () => {
    const input = [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1];
    const output = longestSubarray(input);
    expect(output).toBe(5);
  });
});
