import { describe, expect, it } from 'vitest';
import { minimumOneBitOperations } from '.';

describe.skip('minimumOneBitOperations', () => {
  it('should return 2 for n = 3', () => {
    const n = 3;
    const result = minimumOneBitOperations(n);
    expect(result).toBe(2);
  });

  it('should return 4 for n = 6', () => {
    const n = 6;
    const result = minimumOneBitOperations(n);
    expect(result).toBe(4);
  });

  it('should return 0 for n = 0', () => {
    const n = 0;
    const result = minimumOneBitOperations(n);
    expect(result).toBe(0);
  });
});
