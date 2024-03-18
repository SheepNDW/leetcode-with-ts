import { describe, expect, it } from 'vitest';
import { findMaxLength } from '.';

describe.skip('findMaxLength', () => {
  it('should return 2 for the binary array [0, 1]', () => {
    const nums = [0, 1];
    const result = findMaxLength(nums);
    expect(result).toBe(2);
  });

  it('should return 2 for the binary array [0, 1, 0]', () => {
    const nums = [0, 1, 0];
    const result = findMaxLength(nums);
    expect(result).toBe(2);
  });

  it('should return 0 for the binary array [0, 0, 0, 0]', () => {
    const nums = [0, 0, 0, 0];
    const result = findMaxLength(nums);
    expect(result).toBe(0);
  });
});
