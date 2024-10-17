import { describe, expect, it } from 'vitest';
import { minimumSteps } from '.';

describe.skip('minimumSteps', () => {
  it('should return 1 for s = "101"', () => {
    const s = '101';
    const result = minimumSteps(s);
    expect(result).toBe(1);
  });

  it('should return 2 for s = "100"', () => {
    const s = '100';
    const result = minimumSteps(s);
    expect(result).toBe(2);
  });

  it('should return 0 for s = "0111"', () => {
    const s = '0111';
    const result = minimumSteps(s);
    expect(result).toBe(0);
  });
});
