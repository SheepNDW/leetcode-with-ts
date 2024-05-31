import { describe, expect, it } from 'vitest';
import { singleNumber } from '.';

describe.skip('singleNumber', () => {
  it('should return two numbers that appear only once for [1,2,1,3,2,5]', () => {
    const nums = [1, 2, 1, 3, 2, 5];

    const result = singleNumber(nums);

    expect(result.length).toBe(2);
    expect(result).toContain(3);
    expect(result).toContain(5);
  });

  it('should return two numbers that appear only once for [-1,0]', () => {
    const nums = [-1, 0];

    const result = singleNumber(nums);

    expect(result.length).toBe(2);
    expect(result).toContain(-1);
    expect(result).toContain(0);
  });

  it('should return two numbers that appear only once for [0,1]', () => {
    const nums = [0, 1];

    const result = singleNumber(nums);

    expect(result.length).toBe(2);
    expect(result).toContain(0);
    expect(result).toContain(1);
  });
});
