import { describe, expect, it } from 'vitest';
import { findComplement } from '.';

describe.skip('findComplement', () => {
  it('should return 2 for num = 5', () => {
    const num = 5;
    const result = findComplement(num);
    expect(result).toBe(2);
  });

  it('should return 0 for num = 1', () => {
    const num = 1;
    const result = findComplement(num);
    expect(result).toBe(0);
  });
});
