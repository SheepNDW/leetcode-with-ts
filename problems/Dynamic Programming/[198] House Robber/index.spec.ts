import { describe, expect, it } from 'vitest';
import { rob } from '.';

describe.skip('rob', () => {
  it('should return 4 when nums = [1,2,3,1]', () => {
    const nums = [1, 2, 3, 1];
    const result = rob(nums);
    expect(result).toBe(4);
  });

  it('should return 12 when nums = [2,7,9,3,1]', () => {
    const nums = [2, 7, 9, 3, 1];
    const result = rob(nums);
    expect(result).toBe(12);
  });
});
