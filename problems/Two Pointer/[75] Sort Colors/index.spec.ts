import { describe, expect, it } from 'vitest';
import { sortColors } from '.';

describe.skip('sortColors', () => {
  it('should return [0,0,1,1,2,2] when nums = [2,0,2,1,1,0]', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it('should return [0,1,2] when nums = [2,0,1]', () => {
    const nums = [2, 0, 1];
    sortColors(nums);
    expect(nums).toEqual([0, 1, 2]);
  });
});
