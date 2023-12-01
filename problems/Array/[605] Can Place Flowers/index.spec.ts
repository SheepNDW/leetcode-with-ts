import { describe, it, expect } from 'vitest';
import { canPlaceFlowers } from '.';

// https://leetcode.com/problems/can-place-flowers/description/

describe.skip('canPlaceFlowers', () => {
  it('should return true when there are enough empty plots', () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBe(true);
  });

  it('should return false when there are not enough empty plots', () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 2;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBe(false);
  });

  it('should return true when flowerbed is empty and n is 0', () => {
    const flowerbed: number[] = [];
    const n = 0;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBe(true);
  });

  it('should return false when flowerbed is empty and n is 1', () => {
    const flowerbed: number[] = [];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBe(false);
  });

  it('should return true when there is only one plot and it is empty', () => {
    const flowerbed = [0];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBe(true);
  });
});
