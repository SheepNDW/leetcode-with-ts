import { describe, expect, it } from 'vitest';
import { rangeBitwiseAnd } from '.';

describe.skip('rangeBitwiseAnd', () => {
  it('should return 4 for range 5 to 7', () => {
    const left = 5;
    const right = 7;

    const result = rangeBitwiseAnd(left, right);

    expect(result).toBe(4);
  });

  it('should return 0 for range 0 to 0', () => {
    const left = 0;
    const right = 0;

    const result = rangeBitwiseAnd(left, right);

    expect(result).toBe(0);
  });

  it('should return 0 for range 1 to 2147483647', () => {
    const left = 1;
    const right = 2147483647;

    const result = rangeBitwiseAnd(left, right);

    expect(result).toBe(0);
  });
});
