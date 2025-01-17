import { describe, expect, it } from 'vitest';
import { doesValidArrayExist } from '.';

describe.skip('doesValidArrayExist', () => {
  it('should return true for derived = [1,1,0]', () => {
    const derived = [1, 1, 0];
    const result = doesValidArrayExist(derived);
    expect(result).toBe(true);
  });

  it('should return true for derived = [1,1]', () => {
    const derived = [1, 1];
    const result = doesValidArrayExist(derived);
    expect(result).toBe(true);
  });

  it('should return false for derived = [1,0]', () => {
    const derived = [1, 0];
    const result = doesValidArrayExist(derived);
    expect(result).toBe(false);
  });
});
