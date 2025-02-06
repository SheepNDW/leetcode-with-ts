import { describe, expect, it } from 'vitest';
import { tupleSameProduct } from '.';

describe.skip('tupleSameProduct', () => {
  it('should return 8', () => {
    const nums = [2, 3, 4, 6];

    const result = tupleSameProduct(nums);

    expect(result).toBe(8);
  });

  it('should return 16', () => {
    const nums = [1, 2, 4, 5, 10];

    const result = tupleSameProduct(nums);

    expect(result).toBe(16);
  });

  it('should return 1288', () => {
    const nums = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192];

    const result = tupleSameProduct(nums);

    expect(result).toBe(1288);
  });
});
