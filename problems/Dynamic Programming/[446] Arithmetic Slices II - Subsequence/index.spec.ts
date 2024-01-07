import { describe, expect, it } from 'vitest';
import { numberOfArithmeticSlices } from '.';

describe.skip('numberOfArithmeticSlices', () => {
  it('should return 7 when nums = [2, 4, 6, 8, 10]', () => {
    const nums = [2, 4, 6, 8, 10];

    const result = numberOfArithmeticSlices(nums);

    expect(result).toEqual(7);
  });

  it('should return 16 when nums = [7, 7, 7, 7, 7]', () => {
    const nums = [7, 7, 7, 7, 7];

    const result = numberOfArithmeticSlices(nums);

    expect(result).toEqual(16);
  });
});
