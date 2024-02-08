import { describe, expect, it } from 'vitest';
import { numSquares } from '.';

describe.skip('numSquares', () => {
  it('should returns 3 for n = 12', () => {
    const n = 12;

    const result = numSquares(n);

    expect(result).toBe(3);
  });

  it('should returns 2 for n = 13', () => {
    const n = 13;

    const result = numSquares(n);

    expect(result).toBe(2);
  });
});
