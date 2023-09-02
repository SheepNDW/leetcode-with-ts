import { describe, expect, it } from 'vitest';
import { countBits } from '.';

describe('countBits', () => {
  it('should return [0, 1, 1] when n = 2', () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  it('should return [0, 1, 1, 2, 1, 2] when n = 5', () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });

  it('should return [0] when n = 0', () => {
    expect(countBits(0)).toEqual([0]);
  });

  it('should return [0, 1] when n = 1', () => {
    expect(countBits(1)).toEqual([0, 1]);
  });
});
