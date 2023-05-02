import { describe, expect, it } from 'vitest';
import { arraySign } from '.';

describe('arraySign', () => {
  it('arraySign([-1,-2,-3,-4,3,2,1]) should return 1', () => {
    expect(arraySign([-1, -2, -3, -4, 3, 2, 1])).toBe(1);
  });

  it('arraySign([1,5,0,2,-3]) should return 0', () => {
    expect(arraySign([1, 5, 0, 2, -3])).toBe(0);
  });

  it('arraySign([-1,1,-1,1,-1]) should return -1', () => {
    expect(arraySign([-1, 1, -1, 1, -1])).toBe(-1);
  });
});
