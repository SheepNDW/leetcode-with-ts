import { describe, expect, it } from 'vitest';
import { lastStoneWeight } from '.';

describe('lastStoneWeight', () => {
  it('should return 1 when given [2,7,4,1,8,1]', () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });
  it('should return 0 when given [1]', () => {
    expect(lastStoneWeight([1])).toBe(1);
  });
  it('should return 0 when given [1,1]', () => {
    expect(lastStoneWeight([1, 1])).toBe(0);
  });
});
