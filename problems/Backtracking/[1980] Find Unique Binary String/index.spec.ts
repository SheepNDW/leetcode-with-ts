import { describe, expect, it } from 'vitest';
import { findDifferentBinaryString } from '.';

describe.skip('findDifferentBinaryString', () => {
  it('should return a string not present in ["01", "10"]', () => {
    const nums = ['01', '10'];

    const result = findDifferentBinaryString(nums);

    expect(nums).not.toContain(result);
    expect(result.length).toBe(nums.length);
  });

  it('should return a string not present in ["00", "01"]', () => {
    const nums = ['00', '01'];

    const result = findDifferentBinaryString(nums);

    expect(nums).not.toContain(result);
    expect(result.length).toBe(nums.length);
  });

  it('should return a string not present in ["111", "011", "001"]', () => {
    const nums = ['111', '011', '001'];

    const result = findDifferentBinaryString(nums);

    expect(nums).not.toContain(result);
    expect(result.length).toBe(nums.length);
  });
});
